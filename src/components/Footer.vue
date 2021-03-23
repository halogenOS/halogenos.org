<template lang="pug">
    footer
        div
            span The halogenOS Project
        div
        div
            a(
                href="/privacy"
            ) Privacy Policy
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="sass" scoped>
    @import @/css/include/design

    footer
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-template-rows: 1fr
        justify-items: center
        font-family: $text-font-family
        font-size: 0.8em
        color: var(--theme-foreground-60)
        min-height: 5vh
        margin: 16px 5vw

        > div
            display: flex
            flex-direction: column

            &:first-child
                justify-self: flex-start

            &:last-child
                justify-self: flex-end

        a
            all: unset
            color: inherit
            cursor: pointer

</style>
