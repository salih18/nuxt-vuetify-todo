import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "",
    title: "nuxt-vuetify-todo",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {} // blah blah
  },
  // server: {
  //   host: "0.0.0.0"
  // },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    taskAPI: "https://nuxt-vuetify-todo-default-rtdb.firebaseio.com"
  },
  pwa: {
    manifest: {
      name: "Todo Manager - Manage your tasks",
      short_name: "TodoM",
      description: " A Simple Todo Management - Made with Vue",
      display: "standalone",
      orientation: "portrait",
      lang: "en",
      useWebmanifestExtension: false,
      background_color: "#ffffff"
    },
    meta: {
      /* meta options */
    },
    icon: {
      /* meta options */
    },
    workbox: {
      /* workbox options */
      // enabled: true,
      importScripts: ["custom-sw.js"]
    }
  }
};
