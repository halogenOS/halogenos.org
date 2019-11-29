import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: colors.blue.darken1,
                secondary: colors.blue.lighten4,
                accent: colors.grey.lighten4
            },
            dark: {
                primary: colors.blue.lighten1,
                secondary: colors.blue.darken4,
                accent: colors.grey.darken4
            }
        }
    }
});
