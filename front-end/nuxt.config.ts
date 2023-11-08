// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/global.css', // Include your global CSS file here
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-feathers-pinia',
  ],
  imports: {
    // Not required, but useful: list folder names here to enable additional "composables" folders.
    dirs: [],
  },
  // Enable Nuxt Takeover Mode
  typescript: {
    shim: false,
  },
  // optional, Vue Reactivity Transform
  experimental: {
    reactivityTransform: true,
  },
});

