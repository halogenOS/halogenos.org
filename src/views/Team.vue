<template>
  <div class="bg-white dark:bg-gray-900 py-24 sm:py-32 rounded-t-lg">
    <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-xl">
        <h2 class="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">Meet the Team</h2>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img
              class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
              :src="person.imageUrl || accountIcon"
              :alt="`Avatar of ${person.name}`"
            />
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
import { ref, onMounted } from "vue";
import { Octokit } from "@octokit/rest";
import accountIcon from '../assets/account_circle.svg';

interface Person {
  name: string;
  tag: string;
  role: string;
  githubName: string;
  imageUrl: string | null;
}

const people = ref<Person[]>([
  {
    name: 'Simao Gomes Viana',
    tag: 'superboringdev',
    role: 'Founder',
    githubName: 'xdevs23',
    imageUrl: null,
  },
  {
    name: 'Noah Anleitner',
    tag: 'N0m4n904',
    role: 'Developer',
    githubName: 'N0m4n904',
    imageUrl: null,
  },
]);

const octokit = new Octokit();

async function fetchAvatarUrl(githubName: string): Promise<string | null> {
  try {
    const { data: user } = await octokit.rest.users.getByUsername({ username: githubName });
    return user.avatar_url;
  } catch (error) {
    console.error(`Failed to fetch avatar for ${githubName}:`, error);
    return null;
  }
}

onMounted(async () => {
  for (const person of people.value) {
    const avatarUrl = await fetchAvatarUrl(person.githubName);
    person.imageUrl = avatarUrl;
  }
});
</script>
