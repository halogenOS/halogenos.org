<template>
  <header class="w-full fixed left-0 right-0 top-0 z-50 bg-white dark:bg-[#1C2024] shadow backdrop-blur-sm">
    <nav class="flex items-center justify-between p-4 lg:px-32">
      <!-- Logo -->
      <div class="flex items-center flex-1">
        <router-link to="/about" class="text-sm font-semibold">
          <span class="sr-only">halogenOS</span>
          <img class="h-10 w-auto" src="../assets/logo.png" alt="logo" />
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 text-gray-900 dark:text-white">
        <router-link to="/about" class="text-lg font-semibold">About</router-link>
        <router-link to="/team" class="text-lg font-semibold">Team</router-link>
        <router-link to="/devices" class="text-lg font-semibold">Devices</router-link>
      </PopoverGroup>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
        >
          <span class="sr-only">Open main menu</span>
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="lg:hidden px-6 pb-6">
      <div class="space-y-4 text-gray-900 dark:text-white">
        <router-link to="/about" class="block text-base font-semibold">About</router-link>
        <router-link to="/team" class="block text-base font-semibold">Team</router-link>
        <router-link to="/devices" class="block text-base font-semibold">Devices</router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PopoverGroup } from '@headlessui/vue'

const mobileMenuOpen = ref(false)
</script>
