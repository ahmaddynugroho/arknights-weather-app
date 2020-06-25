<template>
  <v-app>
    <div class="text-h2 text-center pt-6 pb-3 bg-grey-lightest">
      <router-link class="grey--text text--darken-3 text-decoration-none" to="/">
        Arknights Weather
      </router-link>
    </div>
    <div class="text-caption text-center pt-6 bg-grey-lightest font-weight-light">
      <router-link class="text-decoration-none" to="/about">About</router-link> |
      <a target="_blank" rel="noopener noreferrer" class="text-decoration-none" href="https://github.com/ahmaddynugroho/arknights-weather-app">GitHub</a>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    //
  },

  data: () => ({
    //
  }),
}
</script>
