<template>
  <div class="bg-white dark:bg-gray-900 py-24 sm:py-32 rounded-t-lg">
    <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-xl">
        <h2 class="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">Meet the Team</h2>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base/7 font-semibold tracking-tight">{{ person.name }} ({{ person.tag }})</h3>
              <p class="text-sm/6 font-semibold text-[#1da1f2]">{{ person.role }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import accountIcon from '../assets/account_circle.svg'

const people = [
  {
    name: 'Simao Gomes Viana',
    tag: 'superboringdev',
    role: 'Founder',
    imageUrl: accountIcon,
  },
  {
    name: 'Noah Anleitner',
    tag: 'N0m4n904',
    role: 'Developer',
    imageUrl: accountIcon,
  },
]
</script>