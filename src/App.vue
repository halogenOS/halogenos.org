<template lang="pug">
    div.app
        header
            Logo
            Navbar
        router-view
        Footer
</template>

<script>
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    components: {
        Logo,
        Navbar,
        Footer
    },
    methods: {

    }
}
</script>

<style lang="sass" scoped>
    div.app
        height: 100%
        display: flex
        flex-direction: column

        > div:nth-child(2)
            flex: 1

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
