<template lang="pug">
    Page
        p
            | We provide halogenOS downloads on our
            | GitHub release page
        div.flex
            a(href="https://github.com/halogenOS/builds/releases")
                Btn(rounded) Download from GitHub
</template>

<script>
import Page from '@/components/Page'
import Btn from '@/components/Btn'

export default {
    name: 'download',
    components: {
        Page,
        Btn
    }
}
</script>

<style lang="sass">

    a
        text-decoration: none
</style>