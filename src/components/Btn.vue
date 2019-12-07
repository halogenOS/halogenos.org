<template lang="pug">
    div
        slot
</template>

<style lang="sass" scoped>
    @import @/css/include/design
    @import @/css/include/transitions

    div
        display: flex
        flex-direction: column
        background-color: $theme-background-light
        $height: 32px
        height: $height
        color: $theme-accent-light
        justify-content: center
        padding: 0 $height / 2
        cursor: pointer
        box-sizing: border-box
        transition: background-color 120ms $default-transition-curve

        &[rounded]
            border-radius: $height / 2

        &:hover
            background-color: adjust-color($theme-background-light, $alpha: -0.16)
</style>
