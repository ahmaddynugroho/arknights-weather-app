<template>
  <div class="operator-responses">
    This is operator responses
    <p v-if="this.$store.state.loading">...loading weather condition...</p>
    <p v-if="this.$store.state.weather_code">
      Today's weather is
      <span v-if="this.$store.state.weather_code == 'cloudy'">cloudy</span>
      <span v-else>not cloudy</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OperatorResponses',
  data() {
    return {
      // weather: this.$store.state.weather_code,
      loading: this.$store.state.loading,
    }
  },
  // watch: {
  //   weather: () => {
  //     // this.loading = true
  //     this.weather = this.$store.state.weather_code
  //   }
  // },
}
</script>

<style></style>
