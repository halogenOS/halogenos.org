<template lang="pug">
    div.app
        Logo
        Navbar
        router-view
</template>

<script>
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'

export default {
    components: {
        Logo,
        Navbar
    },
    methods: {

    }
}
</script>

<style lang="sass">
    div.app
        height: 100%
</style>
