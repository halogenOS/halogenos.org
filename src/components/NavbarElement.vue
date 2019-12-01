<template lang="pug">
    div.title-text {{ title }}
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="sass" scoped>
@import @/css/include/design

.title-text
    font-family: $primary-font-family
    color: rgba(255, 255, 255, 0.8)
    font-weight: bold
    margin-left: 16px

    &:first-child
        margin-left: 0
</style>
