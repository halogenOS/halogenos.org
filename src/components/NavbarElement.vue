<template lang="pug">
    div.title-text(
        @click="$router.push(route)"
    ) {{ title }}
</template>

<script>
export default {
    props: {
        title: String,
        route: String
    }
}
</script>

<style lang="sass" scoped>
@import @/css/include/design
@import @/css/include/transitions

.title-text
    font-family: $primary-font-family
    color: var(--theme-foreground-80)
    margin-left: 24px
    cursor: pointer

    &:hover
        color: var(--theme-foreground)
        transition: color 120ms #{$default-transition-curve}

    &:first-child
        margin-left: 0
</style>
