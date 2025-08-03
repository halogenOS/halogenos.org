<script lang="ts" setup>
</script>

<template>
  <div class="overflow-hidden rounded-t-lg bg-white dark:bg-gray-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 gap-x-8"
      >
        <!-- Text Section -->
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <p class="text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-pretty text-black dark:text-white">
              halogenOS
            </p>
            <p class="mt-6 text-base sm:text-xl text-gray-700 dark:text-gray-300">
              A new generation cutting-edge Android ROM which is simple, smooth and sexy.
            </p>
            <p class="pt-6">
              <router-link
                to="/devices"
                class="inline-flex items-center text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3"
              >
                <img class="pr-2 h-6 sm:h-8" src="../assets/download.svg" alt="Download icon" />
                Download for your device
              </router-link>
            </p>
          </div>
        </div>

        <!-- Image Section -->
        <div>
          <img
            src="../assets/homescreen.png"
            alt="Product screenshot"
            class="w-full max-w-md mx-auto rounded-xl shadow-lg sm:max-w-lg lg:max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
