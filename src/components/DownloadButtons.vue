<template>
  <div class="mt-6 w-full text-center">
    <div v-if="loading" class="text-gray-500">Loading…</div>

    <div v-else class="flex flex-col gap-2 items-center">
      <a
        v-if="stableUrl"
        :href="stableUrl"
        class="bg-[#1da1f2] hover:bg-[#1b8dd4] dark:text-white text-black py-2 px-4 rounded shadow w-full max-w-xs"
        download
      >
        Download Stable
      </a>

      <a
        v-if="preReleaseUrl"
        :href="preReleaseUrl"
        class="bg-[#1da1f2] hover:bg-[#1b8dd4] dark:text-white text-black py-2 px-4 rounded shadow w-full max-w-xs"
        download
      >
        Download Pre-Release
      </a>

      <a
        v-if="bootImageUrl"
        :href="bootImageUrl"
        class="bg-[#1da1f2] hover:bg-[#1b8dd4] dark:text-white text-black py-2 px-4 rounded shadow w-full max-w-xs"
        download
      >
        Download Boot Image
      </a>

      <a
        v-if="vendorBootImageUrl"
        :href="vendorBootImageUrl"
        class="bg-[#1da1f2] hover:bg-[#1b8dd4] dark:text-white text-black py-2 px-4 rounded shadow w-full max-w-xs"
        download
      >
        Download Vendor Boot Image
      </a>

      <a
        v-if="recoveryImageUrl"
        :href="recoveryImageUrl"
        class="bg-[#1da1f2] hover:bg-[#1b8dd4] dark:text-white text-black py-2 px-4 rounded shadow w-full max-w-xs"
        download
      >
        Download Recovery Image
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Octokit } from "@octokit/rest";

interface Device {
  isBootImageNeeded?: boolean;
  isVendorBootImageNeeded?: boolean;
  isRecoveryImageNeeded?: boolean;
}

const props = defineProps<{
  deviceName: string;
  device: Device;
}>();

const loading = ref(true);

const stableUrl = ref<string | null>(null);
const preReleaseUrl = ref<string | null>(null);
const bootImageUrl = ref<string | null>(null);
const vendorBootImageUrl = ref<string | null>(null);
const recoveryImageUrl = ref<string | null>(null);

onMounted(async () => {
  const octokit = new Octokit({ userAgent: "xos-website/1.0.0" });

  const { data: releases } = await octokit.rest.repos.listReleases({
    owner: "halogenOS",
    repo: "builds",
  });

  const deviceReleases = releases.filter(
    (r) => r.name?.endsWith(props.deviceName)
  );

  const latestStable = deviceReleases.find((r) => !r.prerelease);
  const latestPre = deviceReleases.find((r) => r.prerelease);

  if (latestStable) {
    const zip = latestStable.assets.find((a) => a.name.endsWith(".zip"));
    if (zip) stableUrl.value = zip.browser_download_url;
  }

  if (latestPre) {
    const zip = latestPre.assets.find((a) => a.name.endsWith(".zip"));
    if (zip) preReleaseUrl.value = zip.browser_download_url;
  }

  const baseRelease = latestStable ?? latestPre;

  if (baseRelease) {
    const boot = baseRelease.assets.find((a) => a.name.endsWith("boot.img"));
    const vendorBoot = baseRelease.assets.find((a) => a.name.endsWith("vendor_boot.img"));
    const recovery = baseRelease.assets.find((a) => a.name.endsWith("recovery.img"));

    if (props.device.isBootImageNeeded && boot) {
      bootImageUrl.value = boot.browser_download_url;
    }

    if (props.device.isVendorBootImageNeeded && vendorBoot) {
      vendorBootImageUrl.value = vendorBoot.browser_download_url;
    }

    if (props.device.isRecoveryImageNeeded && recovery) {
      recoveryImageUrl.value = recovery.browser_download_url;
    }
  }

  loading.value = false;
});
</script>
