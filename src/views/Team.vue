<template lang="pug">
    Page
        div.team-members
            TeamMember(
                v-for="member in members"
                :key="member.name"
                :name="member.name"
            )
</template>

<script>
import Page from '@/components/Page'
import TeamMember from '@/components/TeamMember'

export default {
    name: 'team',
    components: {
        Page,
        TeamMember
    },
    data: () => ({
        members: [
            {
                name: "Simao Gomes Viana"
            },
            {
                name: "Neil"
            },
            {
                name: "Daniel"
            },
            {
                name: "Kees"
            },
            {
                name: "Razz"
            }
        ]
    })
}
</script>

<style lang="sass">
    .team-members
        display: flex
        flex-direction: row
        justify-content: space-around
        flex-wrap: wrap
</style>
