<template>
 <section id="about" class="bg-white dark:bg-gray-900 pt-33 rounded-b-lg">
    <header class="text-2xl text-gray-700 dark:text-[#999999]">
        <h2>Great performance. Great battery life. Great stability.<br>
                All crafted into an amazing package.</h2>
    </header>
    <div class="flex justify-center mt-4">
        <a href="https://git.halogenos.org/halogenOS">
            <img class="h-12" src="../assets/git-logo.png" alt="git" />
        </a>
    </div>
    <SpotlightCards/>
    <header class="style py-8 text-gray-700 dark:text-[#999999]">
        <span class="sm:text-5xl">Ready to rock!</span><br>
        <span class="sm:text-2xl">What are you waiting for? We believe that you'll love it</span>
    </header>
    <router-link
        to="/devices"
        class="inline-flex items-center h-18 text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 text-center me-2 mb-2"
        >
        <img class="pr-2 h-8" src="../assets/download.svg" alt="Download icon" />
        Download for your device
    </router-link>
 </section>
</template>

<script setup lang="ts">
import SpotlightCards from "./SpotlightCards.vue"
</script>