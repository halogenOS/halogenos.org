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
    margin: 5vh 5vw
    box-sizing: border-box

    &[scrollable]
        overflow-y: auto
</style>
