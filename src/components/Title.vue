<script lang="ts">
</script>

<template>
  <div class="overflow-hidden rounded-t-lg bg-white dark:bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center"
      >
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <p class="mt-2 text-8xl font-semibold tracking-tight text-pretty text-black dark:text-white sm:text-6xl">
              halogenOS
            </p>
            <p class="mt-6 text-lg/8 sm:text-2xl text-gray-700 dark:text-gray-300">
              A new generation cutting-edge Android ROM which is simple, smooth and sexy.
            </p>
            <p class="pt-6">
                <router-link
                    to="/devices"
                    class="inline-flex items-center h-18 text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 text-center me-2 mb-2"
                    >
                    <img class="pr-2 h-8" src="../assets/download.svg" alt="Download icon" />
                    Download for your device
                </router-link>
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-indigo-400" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img
          src="../assets/homescreen.png"
          alt="Product screenshot"
          class="h-170 rounded-xl"
        />
      </div>
    </div>
  </div>
</template>
