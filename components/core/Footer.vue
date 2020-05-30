<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      color="primary"
      class="lighten-1 text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        爱时汇收录大量 app store 应用信息，为您提供最新、最全面的降价及促销信息。
        <br>
        每天有大量用户使用我们的网站，找到他们感兴趣的 app。
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>爱时汇</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style scoped>

</style>
