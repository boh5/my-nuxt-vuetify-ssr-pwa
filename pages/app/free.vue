<template>
  <div>
    <v-btn @click="turn">
      {{ label }}
    </v-btn>
    <v-text-field
      append-icon="mdi-mic"
      class="mx-4"
      flat
      hide-details
      label="Search"
      prepend-inner-icon="mdi-search"
      solo-inverted
    />
  </div>
</template>

<script>
export default {
  name: 'Free',
  data: () => ({
    lightOn: true,
    label: '关灯'
  }),
  methods: {
    turn () {
      this.$vuetify.theme.dark = this.lightOn
      this.lightOn = !this.lightOn
      this.label = this.lightOn ? '关灯' : '开灯'
    }
  }
}
</script>

<style scoped>

</style>
