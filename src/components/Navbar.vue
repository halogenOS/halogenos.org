<template lang="pug">
    nav
        NavbarElement(
            v-for="item in navigationItems"
            :key="item.title"
            :title="item.title"
            :route="item.route"
        )
</template>

<script>
import NavbarElement from '@/components/NavbarElement'

export default {
    components: {
        NavbarElement
    },
    data: () => ({
        navigationItems: [
            {
                title: "Download",
                route: "/download"
            },
            {
                title: "Sources",
                route: "/sources"
            },
            {
                title: "Team",
                route: "/team"
            }
        ]
    })
}
</script>

<style lang="sass" scoped>
    nav
        display: flex
        flex-direction: row
        justify-content: flex-end
</style>
