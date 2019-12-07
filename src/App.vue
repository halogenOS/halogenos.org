<template lang="pug">
    div.app
        header
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

<style lang="sass" scoped>
    div.app
        height: 100%

    header
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr
        align-items: center
        height: 86px
        margin: 0 48px
        user-select: none
        cursor: default

</style>
