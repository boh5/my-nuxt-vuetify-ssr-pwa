<template>
  <v-bottom-navigation
    app
    hide-on-scroll
    color="primary"
    class="hidden-md-and-up"
  >
    <v-btn
      v-for="link in links"
      :key="link.text"
      nuxt
      :to="link.to"
      class="title"
    >
      {{ link.text }}
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'ToolBar',
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
        to: '/about',
        text: '关于我们'
      }
    ]
  })

}
</script>

<style scoped>

</style>
