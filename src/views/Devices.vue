<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 pb-10 rounded-t-lg">
    <header class="text-center py-12 bg-white dark:bg-gray-900 text-white rounded-t-lg">
      <h1 class="text-4xl font-bold text-black dark:text-white">Devices</h1>
      <div class="mt-4 flex flex-wrap justify-center gap-4">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="'#' + section.id"
          class="px-4 py-2 bg-gray-500 dark:bg-gray100 text-black dark:text-white rounded hover:bg-gray-600"
        >
          {{ section.label }}
        </a>
      </div>
    </header>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <section
      v-for="section in sections"
      :key="section.id"
      :id="section.id"
      class="bg-white dark:bg-gray-900 scroll-mt-28 py-10 px-6"
    >
      <h2 class="text-2xl font-bold mb-6">{{ section.label }}</h2>
      <div
        class="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto"
      >
        <div
          v-for="device in section.devices"
          :key="device.codename"
          class="cursor-pointer"
          @click="goToDeviceInfo(device.codename)"
          role="button"
          tabindex="0"
          @keyup.enter="goToDeviceInfo(device.codename)"
          @keyup.space.prevent="goToDeviceInfo(device.codename)"
          aria-label="View details for {{ device.model }}"
        >
          <DeviceCard
            :codename="device.codename"
            :model="device.model"
            :image="device.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import DeviceCard from '../components/DeviceCard.vue'

import a52q from '../assets/devices/a52q.png'
import cheeseburger from '../assets/devices/cheeseburger.png'
import guacamole from '../assets/devices/guacamole.png'
import Pong from '../assets/devices/Pong.png'
import rosemary from '../assets/devices/rosemary.png'
import Spacewar from '../assets/devices/Spacewar.png'

const router = useRouter()

const sections = [
  {
    id: 'nothing',
    label: 'Nothing',
    devices: [
      { codename: 'Spacewar', model: 'Nothing Phone (1)', image: Spacewar },
      { codename: 'Pong', model: 'Nothing Phone (2)', image: Pong },
    ],
  },
  {
    id: 'oneplus',
    label: 'OnePlus',
    devices: [
      { codename: 'guacamole', model: 'OnePlus 7 Pro', image: guacamole },
      { codename: 'cheeseburger', model: 'OnePlus 5', image: cheeseburger },
    ],
  },
  {
    id: 'xiaomi',
    label: 'Xiaomi',
    devices: [
      { codename: 'rosemary', model: 'Redmi Note 10S', image: rosemary },
    ],
  },
  {
    id: 'samsung',
    label: 'Samsung',
    devices: [
      { codename: 'a52q', model: 'Galaxy A52 4G', image: a52q },
    ],
  },
]

function goToDeviceInfo(codename: string) {
  router.push({ path: `/deviceinfo/${codename}` })
}
</script>
