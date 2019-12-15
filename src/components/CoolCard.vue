<template lang="pug">
    div.cool-card
        div.title {{ title }}
        div.subtitle {{ subtitle }}
        slot
</template>

<script>
export default {
    name: 'CoolCard',
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style lang="sass" scoped>
    @import @/css/include/design

    div.cool-card
        background-color: var(--material-blue)
        box-sizing: border-box
        border-radius: 16px
        padding: 16px
        min-height: 120px
        user-select: none
        cursor: default

        > div.title
            font-family: $primary-font-family
            font-size: 1.6em
            color: $theme-foreground-dark

        > div.subtitle
            font-family: $text-font-family
            font-weight: 300
            font-size: 1.18em
            -webkit-text-stroke: 0.28px
            color: $theme-foreground-dark

</style>
