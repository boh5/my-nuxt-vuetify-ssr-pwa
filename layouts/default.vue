<template>
  <v-app>
    <app-bar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
    <ToolBar />
  </v-app>
</template>

<script>
import AppBar from '../components/core/AppBar'
import Footer from '../components/core/Footer'
import ToolBar from '../components/core/ToolBar'
export default {
  components: { ToolBar, Footer, AppBar },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
