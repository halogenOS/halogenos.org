<template lang="pug">
  div.app
    Topbar
    Navbar
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
  methods: {

  }
}
</script>

<style lang="sass">
  div.app
    height: 100%
</style>
