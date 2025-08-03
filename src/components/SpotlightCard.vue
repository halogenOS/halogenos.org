<template>
  <div
    class="relative h-full bg-white dark:bg-slate-800 rounded-3xl p-px
    before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full
    before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500
    before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)]
    before:group-hover:opacity-100 before:z-10 before:blur-[100px]
    after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full
    after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500
    after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)]
    after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
  >
    <div class="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
      <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
        <div class="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
      </div>
      <div class="flex flex-col h-full items-center text-center">
        <div class="relative inline-flex">
          <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
          <img class="inline-flex" :src="img" width="200" height="200" :alt="title" />
        </div>
        <div class="grow mb-5">
          <h2 class="text-xl text-slate-200 font-bold mb-1">{{ title }}</h2>
          <p class="text-sm text-slate-500">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  img: string
}>()
</script>
