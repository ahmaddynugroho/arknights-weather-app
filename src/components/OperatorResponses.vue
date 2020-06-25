<template>
  <div class="operator-responses">
    <v-img :src="require('@/assets/img/' + source)"></v-img>
  </div>
</template>

<script>
export default {
  name: 'OperatorResponses',
  data() {
    return {}
  },
  computed: {
    source() {
      if(this.$store.state.weather_code.includes('cloudy') || this.$store.state.weather_code.includes('clear')) {
        return 'cloudy-clear.png'
      } else if(this.$store.state.weather_code.includes('drizzle')){
        return 'drizzle.png'
      } else if(this.$store.state.weather_code.includes('flurries')){
        return 'flurries.png'
      } else if(this.$store.state.weather_code.includes('ice_pellets')){
        return 'ice_pellets.png'
      } else if(this.$store.state.weather_code.includes('rain')){
        return 'rain.png'
      } else if(this.$store.state.weather_code.includes('snow')){
        return 'snow.png'
      } else {
        return 'tstorm-fog.png'
      }
    }
  },
  watch: {
    source(newVal) {
      // this.sc = newVal
      
      if(newVal.includes('cloudy') || newVal.includes('clear')) {
        this.$store.state.quote = `"What a good time to camp! Let's go!"`
        return 'cloudy-clear.png'
      } else if(newVal.includes('drizzle')){
        this.$store.state.quote = `"Wear your coat, and let's buy some chicken"`
        return 'drizzle.png'
      } else if(newVal.includes('flurries')){
        this.$store.state.quote = `"Weather? I don't care"`
        return 'flurries.png'
      } else if(newVal.includes('ice_pellets')){
        this.$store.state.quote = `"Whoaa, these ice pellets hurt me"`
        return 'ice_pellets.png'
      } else if(newVal.includes('rain')){
        this.$store.state.quote = `"It's raining, So take your umbrella okay?"`
        return 'rain.png'
      } else if(newVal.includes('snow')){
        this.$store.state.quote = `"Hey, let's play outside!"`
        return 'snow.png'
      } else {
        this.$store.state.quote = `"The weather is not friendly, let's chill out here"`
        return 'tstorm-fog.png'
      }
    }
  }
}
</script>

<style></style>
