export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    ssr: false,

    runtimeConfig: {
        public: {
            apiBase: '',
        }
    },

    pages: true,

    css: [
        '~/assets/css/style.css',
        '~/assets/css/tailwind.css'
    ],

    plugins: [
        '~/plugins/vue-toastification.ts',
        '~/plugins/firebase.ts'
    ],

    modules: ['@pinia/nuxt', "@nuxt/ui", 'nuxt-permissions'],

    eslint: {
        config: {
            stylistic: true
        }
    },

    pinia: {
        storesDir: './store/**',
    },

    ui: {
        primary: 'blue',
        gray: 'stone',

        safelistColors: ['dodger-blue']
    },
});
