<template lang="pug">
    v-app-bar(
        absolute
        dark
    )
        v-app-bar-nav-icon(
            @click="$emit('hamburger-clicked')"
        )
        v-toolbar-title Title
        v-spacer
</template>
