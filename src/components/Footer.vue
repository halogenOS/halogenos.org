<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
<footer class="bg-white dark:bg-gray-900 rounded-b-lg">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a class="flex items-center">
                  <img src="../assets/logo.png" class="h-8 me-3" alt="logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">halogenOS</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://git.halogenos.org/halogenOS" target="_blank" class="hover:underline ">Gitlab</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://discord.gg/u6BcnpFP9J" target="_blank" class="hover:underline">Discord</a>
                      </li>
                      <li>
                          <a href="https://telegram.me/halogenOS" target="_blank" class="hover:underline">Telegram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <router-link to="/privacy" class="hover:underline">Privacy Policy</router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2016-{{ currentYear }} The halogenOS Project.
          </span>
      </div>
    </div>
</footer>
</template>
