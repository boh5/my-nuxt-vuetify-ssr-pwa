<template>
  <v-app-bar
    app
    height="64"
    dense
  >
    <v-container class="py-0" style="height: 100%">
      <v-tabs
        height="64"
      >
        <nuxt-link to="/">
          <v-img
            src="/icon.png"
            class="mr-5"
            contain
            height="64"
            width="64"
          />
        </nuxt-link>
        <v-tab
          v-for="(link, i) in links"
          :key="i"
          nuxt
          :to="link.to"
          class="title hidden-sm-and-down"
        >
          {{ link.text }}
        </v-tab>

        <v-text-field
          class="mx-4 align-center"
          flat
          hide-details
          label="搜索APP"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
          style="max-width: 300px"
        />
        <v-icon class="mx-5 float-right" large @click="1">
          mdi-account
        </v-icon>
      </v-tabs>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    links: [
      {
        to: '/',
        text: '主页'
      },
      {
        to: '/app/free',
        text: '最新限免'
      },
      {
        to: '/wishlist',
        text: '愿望单'
      },
      {
        to: '/about',
        text: '关于我们'
      }
    ]
  })
}
</script>

<style scoped>

</style>
