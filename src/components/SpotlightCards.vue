<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SpotlightCard from './SpotlightCard.vue'

const containerRef = ref<HTMLElement | null>(null)
let spotlightInstance: Spotlight | null = null

const cards = [
  {
    id: 1,
    title: 'Performance',
    description: 'We are constantly improving the overall performance of the operating system as well as applying specific optimizations.',
    img: new URL('../assets/performance.png', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Battery Life',
    description: "While we try to keep performance at the best, we don't sacrifice battery life for it. Every update improves battery life.",
    img: new URL('../assets/battery_life.png', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Stability',
    description: "We are keen on fixing bugs and crashes as fast as possible. Many of our changes go through a testing process which makes sure you don't get any problems with our system.",
    img: new URL('../assets/stability.png', import.meta.url).href,
  },
]
</script>

<template>
  <main class="relative flex flex-col justify-center bg-white dark:bg-gray-900 overflow-hidden">
    <div
      ref="containerRef"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-14 px-4"
      data-spotlight
    >
      <SpotlightCard
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :img="card.img"
        class="group"
      />
    </div>
  </main>
</template>
