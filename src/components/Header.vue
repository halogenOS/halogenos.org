<template>
  <header class="w-full fixed left-0 right-0 top-0 z-50 bg-white dark:bg-[#1C2024] shadow backdrop-blur-sm">
    <nav class="flex w-full h-full items-center justify-between p-6 lg:px-32">
      <div class="flex lg:flex-1">
        <router-link to="/about" class="text-sm font-semibold">
          <span class="sr-only">halogenOS</span>
          <img class="h-18 w-auto" src="../assets/logo.png" alt="logo" />
        </router-link>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 text-gray-900 dark:text-white">
        <router-link to="/about" class="text-lg font-semibold">About</router-link>
        <router-link to="/team" class="text-lg font-semibold">Team</router-link>
        <router-link to="/devices" class="text-lg font-semibold">Devices</router-link>
      </PopoverGroup>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { PopoverGroup } from '@headlessui/vue'
</script>