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
                route: "https://git.halogenos.org/halogenOS"
            },
            {
                title: "Team",
                route: "/team"
            },
            {
                title: "Right to Repair",
                route: "https://www.gofundme.com/f/lets-get-right-to-repair-passed"
            },
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
