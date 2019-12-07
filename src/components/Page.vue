<template lang="pug">
    div.page
        slot
</template>

<script>
export default {
    name: 'Page'
}
</script>

<style lang="sass" scoped>
div.page
    display: flex
    flex-direction: column
    margin: 48px
    box-sizing: border-box
</style>
