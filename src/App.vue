<template lang="pug">
  div.app
    div.actionbar
      Topbar(
        @hamburger-clicked="toggleNavbar"
      )
    div.navbar
      Navbar(
        :expanded="navbarExpanded"
        @state-changed="setNavbarState"
      )
    router-view
</template>

<script>
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
    Topbar
  },
  data: () => ({
    navbarExpanded: false
  }),
  methods: {
    toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded
    },
    setNavbarState(state) {
      this.navbarExpanded = state
    }
  }
}
</script>

<style lang="sass">
  div.app
    height: 100%

  div.navbar
    height: 100%
</style>
