<template>
  <div
    class="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden w-full max-w-xs cursor-pointer transition hover:scale-105"
    @click="goToDeviceInfo"
  >
    <div class="w-full h-72 overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-800">
      <img :src="image" :alt="model" class="object-contain max-h-full" />
    </div>
    <div class="p-4 text-center">
      <h3 class="text-xl font-semibold">{{ model }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  codename: string
  model: string
  image: string
}>()

const router = useRouter()
const goToDeviceInfo = () => {
  router.push({ name: 'deviceInfo', query: { name: props.codename } })
}
</script>
