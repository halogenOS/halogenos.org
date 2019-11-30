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
</style>