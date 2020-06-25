<template>
  <div class="home bg-grey-lightest min-h-full">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-text-field @keypress.enter="positionStack" v-model="query" label="Type place to get weather info..." solo class="mt-3"></v-text-field>
          <p class="grey--text text-center text-h5 font-weight-light">{{ this.$store.state.quote }}</p>
          <v-card class="pb-1" v-if="this.$store.state.weather_code">
            <OperatorResponses />
            <p class="text-h3 text-center grey--text text--darken-3 pt-3">
              {{ this.$store.state.weather_code }}
            </p>
            <p class="text-caption text-center grey--text text--darken-3">
              {{address}}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import OperatorResponses from '@/components/OperatorResponses'

export default {
  name: 'Home',
  components: {
    OperatorResponses
  },
  data: () => {
    return {
      query: '',
      address: '',
      qt: '',
      response: {
        lat: '',
        lon: '',
      }
    }
  },
  methods: {
    positionStack() {
      const key = 'f76b631401f2b8769d48a367a69be5f7'
      const query = `&query=${this.query}`
      const url = `http://api.positionstack.com/v1/forward?access_key=${key}${query}`

      this.$store.state.weather_code = '..loading..'
      this.address = '..loading..'

      axios
        .get(url)
        .then((res) => {
          // console.log(res.data.data[0])
          // console.log('res', res)
          const attribute = res.data.data[0]
          if (attribute) {
            this.response.lat = attribute.latitude
            this.response.lon = attribute.longitude
            this.address = `${attribute.locality}, ${attribute.region}, ${attribute.country}`
          } else {
            this.response.lat = ''
            this.response.lon = ''
          }
          this.climaCell()
        })
        .catch((err) => console.log('err', err))

      this.query = ''
    },
    climaCell() {
      axios
        .get(
          `https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?fields=weather_code&unit_system=si&lat=${this.response.lat}&lon=${this.response.lon}`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com',
              'x-rapidapi-key':
                '6686d33c31msh4354df52c252e95p11fec8jsn9ccb18899918',
            },
          }
        )
        .then((response) => {
          // console.log(
          //   response.data[response.data.length - 1].weather_code.value
          // )
          const value =
            response.data[response.data.length - 1].weather_code.value
          this.$store.state.weather_code = value
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  computed: {
  },
  watch: {
  }
}
</script>
