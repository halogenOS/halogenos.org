import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Team from '../views/Team.vue'
import Devices from '../views/Devices.vue'
import DeviceInfo from '../views/DeviceInfo.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/team', component: Team },
  { path: '/devices', component: Devices },
  { path: '/deviceinfo/:codename', component: DeviceInfo, props: true },
  { path: '/privacy', component: PrivacyPolicy}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
