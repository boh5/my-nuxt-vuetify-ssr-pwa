import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: '#fe696a',
        secondary: '#f3f5f9',
        accent: '#4e54c8',
        error: '#f34770',
        warning: '#fea569',
        info: '#69b3fe',
        success: '#42d697'
      }
    }
  }

}
