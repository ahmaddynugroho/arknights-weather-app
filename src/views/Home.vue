<template>
  <div class="home">
    <p class="text-center text-h2">This is Home page</p>
    <p>country: {{ response.country }}</p>
    <p>region: {{ response.region }}</p>
    <p>weather: {{ response.weather }}</p>
    <p>lat & lon: {{ response.lat }}, {{ response.lon }}</p>
    <input
      v-model="query"
      @keypress.enter="positionStack"
      type="text"
      placeholder="Region/Country"
    />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data: () => {
    return {
      query: '',
      response: {
        country: '',
        region: '',
        lat: '',
        lon: '',
        weather: '',
      },
    }
  },
  methods: {
    positionStack() {
      const key = 'f76b631401f2b8769d48a367a69be5f7'
      const query = `&query=${this.query}`
      const url = `http://api.positionstack.com/v1/forward?access_key=${key}${query}`

      this.response.country = '...loading...'
      this.response.region = '...loading...'
      this.response.lat = '...loading...'
      this.response.lon = '...loading...'
      this.response.weather = '...loading...'

      axios
        .get(url)
        .then((res) => {
          // console.log(res.data.data[0])
          // console.log('res', res)
          const attribute = res.data.data[0]
          if (attribute) {
            this.response.country = attribute.country
            this.response.region = attribute.region
            this.response.lat = attribute.latitude
            this.response.lon = attribute.longitude
          } else {
            this.response.country = 'Unknown Place'
            this.response.region = ''
            this.response.lat = ''
            this.response.lon = ''
          }
          this.climaCell()
        })
        .catch((err) => console.log('err', err))
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
          console.log(
            response.data[response.data.length - 1].weather_code.value
          )
          this.response.weather =
            response.data[response.data.length - 1].weather_code.value
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
