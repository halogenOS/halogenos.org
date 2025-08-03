<template>
  <div class="grid md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-900 rounded-t-lg">
    <div class="flex flex-col items-center">
      <img :src="device.image" alt="Device Image" class="rounded-xl max-w-md w-full" />
      <DownloadButtons :deviceName="props.codename" :device="device" />
    </div>

    <div>
      <h1 class="text-3xl font-bold mb-4">{{ device.name }}</h1>
      <table class="table-auto w-full text-sm text-left">
        <tbody>
          <tr><th class="pr-4">Maintainer:</th><td>{{ device.maintainer }}</td></tr>
          <tr><th>Launch:</th><td>{{ device.launch }}</td></tr>

          <tr><th>Display:</th><td>
            <div>Type: {{ device.display.type }}</div>
            <div>Size: {{ device.display.size }}</div>
            <div>Resolution: {{ device.display.resolution }}</div>
          </td></tr>

          <tr><th>Platform:</th><td>
            <div>Chipset: {{ device.platform.chipset }}</div>
            <div>CPU: {{ device.platform.cpu }}</div>
            <div>GPU: {{ device.platform.gpu }}</div>
          </td></tr>

          <tr><th>Memory:</th><td>
            <div>Card Slot: {{ device.memory.cardSlot }}</div>
            <div>Internal: {{ device.memory.internal }}</div>
          </td></tr>

          <tr><th>Main Camera ({{ device.cameraType }}):</th><td>
          <div v-if="dualCamera">
          <div>{{ dualCamera.dual[1] }}</div>
          <div>{{ dualCamera.dual[2] }}</div>
        </div>
        <div v-else-if="tripleCamera">
          <div>{{ tripleCamera.triple[1] }}</div>
          <div>{{ tripleCamera.triple[2] }}</div>
          <div>{{ tripleCamera.triple[3] }}</div>
        </div>
        <div v-else-if="quadCamera">
          <div>{{ quadCamera.quad[1] }}</div>
          <div>{{ quadCamera.quad[2] }}</div>
          <div>{{ quadCamera.quad[3] }}</div>
          <div>{{ quadCamera.quad[4] }}</div>
        </div>
          <div>Features: {{ mainCamera.features }}</div>
          <div>Video: {{ mainCamera.video }}</div>
        </td></tr>

          <tr><th>Selfie Camera:</th><td>
            <div>Single: {{ device.selfieCamera.single }}</div>
            <div>Features: {{ device.selfieCamera.features }}</div>
            <div>Video: {{ device.selfieCamera.video }}</div>
          </td></tr>

          <tr><th>Sound:</th><td>
            <div>Loudspeaker: {{ device.sound.loudspeaker }}</div>
            <div>Headphone Jack: {{ device.sound.headphoneJack }}</div>
          </td></tr>

          <tr><th>Comms:</th><td>
            <div>WLAN: {{ device.comms.wlan }}</div>
            <div>Bluetooth: {{ device.comms.bluetooth }}</div>
            <div>Positioning: {{ device.comms.positioning }}</div>
            <div>NFC: {{ device.comms.nfc }}</div>
            <div>Radio: {{ device.comms.radio }}</div>
            <div>USB: {{ device.comms.usb }}</div>
          </td></tr>

          <tr><th>Features:</th><td>
            Sensors: {{ device.features.sensors }}
          </td></tr>

          <tr><th>Battery:</th><td>
            <div>Type: {{ device.battery.type }}</div>
            <div>Charging: {{ device.battery.charging }}</div>
          </td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { devices } from '../data/devices'
import DownloadButtons from '../components/DownloadButtons.vue'

type DeviceCodename = keyof typeof devices

type DualCamera = {
  dual: { 1: string; 2: string }
  features: string
  video: string
}

type TripleCamera = {
  triple: { 1: string; 2: string; 3: string }
  features: string
  video: string
}

type QuadCamera = {
  quad: { 1: string; 2: string; 3: string; 4: string }
  features: string
  video: string
}

type Camera = DualCamera | TripleCamera | QuadCamera

const props = defineProps<{ codename: DeviceCodename }>()
const device = devices[props.codename]

// mainCamera and type guards (as before)...

const mainCamera = computed<Camera>(() => {
  switch (device.cameraType) {
    case 'dual': return device.mainCamera as DualCamera
    case 'triple': return device.mainCamera as TripleCamera
    case 'quad': return device.mainCamera as QuadCamera
    default: return {} as Camera
  }
})

function isDualCamera(camera: Camera): camera is DualCamera {
  return (camera as DualCamera).dual !== undefined
}
function isTripleCamera(camera: Camera): camera is TripleCamera {
  return (camera as TripleCamera).triple !== undefined
}
function isQuadCamera(camera: Camera): camera is QuadCamera {
  return (camera as QuadCamera).quad !== undefined
}

const dualCamera = computed(() => (isDualCamera(mainCamera.value) ? mainCamera.value : null))
const tripleCamera = computed(() => (isTripleCamera(mainCamera.value) ? mainCamera.value : null))
const quadCamera = computed(() => (isQuadCamera(mainCamera.value) ? mainCamera.value : null))

</script>
