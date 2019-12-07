<template lang="pug">
    div
        div.content(
            @click="$router.push('/')"
            )
            span.halogen halogen
            span.os OS
</template>

<style lang="sass" scoped>
    @import @/css/include/design
    @import @/css/include/transitions

    div
        display: flex

    div.content
        display: flex
        flex-direction: row
        cursor: pointer
        transition: letter-spacing 200ms #{$default-transition-curve}

        &:hover
            letter-spacing: 0.08em

    span
        font-family: 'Open Sans', sans-serif
        font-size: 1.48em
        font-weight: 300
        color: var(--theme-foreground)

        &.os
            color: $xos-color
</style>
