<template lang="pug">
    nav
        NavbarElement(
            v-for="item in navigationItems"
            :key="item.title"
            :title="item.title"
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
                title: "test"
            },
            {
                title: "test2"
            }
        ]
    })
}
</script>

<style lang="sass" scoped>
    nav
        display: flex
        flex-direction: row
</style>