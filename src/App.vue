<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import DeviceInfo from './components/DeviceInfo.vue'
</script>

<template>
  <div class="pt-29 min-h-screen w-full">
    <Header/>
    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped>
</style>
