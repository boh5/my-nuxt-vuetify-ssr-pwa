<template>
  <v-app-bar
    app
    flat
  >
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          src="/icon.png"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          nuxt
          :to="link.to"
          class="hidden-sm-and-down"
          text
        >
          {{ link.text }}
        </v-btn>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      links: [
        {
          to: '/',
          text: '主页'
        },
        {
          to: '/free',
          text: '最新限免'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
