<template lang="pug">
    div.team-member
        | {{ name }}
</template>

<script>
export default {
    name: 'TeamMember',
    props: {
        name: String
    }
}
</script>

<style lang="sass">
.team-member
	margin: 16px
</style>
