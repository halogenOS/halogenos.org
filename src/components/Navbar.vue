<template lang="pug">
    v-navigation-drawer(
        v-model="isExpanded"
        app
        fixed
        @input="stateChanged"
    )
        v-list
            v-list-item(
                v-for="item in items"
                :key="item.title"
                link
            )
                v-list-item-content
                    v-list-item-title {{ item.title }}
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                title: "test"
            },
            {
                title: "test2"
            }
        ]
    }),
    computed: {
        isExpanded: {
            get() {
                return this.expanded
            },
            set() {}
        }
    },
    methods: {
        stateChanged(value) {
            this.$emit('state-changed', value)
        }
    },
    props: {
        expanded: Boolean
    }
}
</script>