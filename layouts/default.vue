<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        src="mountains.png"
        height="160"
      ></v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="mountains.png"
      prominent
      height="160"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="px-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-3 text-h4 pr-4"
            >Todo Manager</v-app-bar-title
          >
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 text-subtitle-2">{{
            date
          }}</v-app-bar-title>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { DateTime } from "luxon";
import Search from "./../components/Shared/Search.vue";
export default {
  name: "NuxtDefault",
  components: {
    Search,
  },
  data: () => ({
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-information-outline", to: "/about" },
    ],
    drawer: null,
    date: "",
  }),
  methods: {
    currentDate() {
      this.date = DateTime.now().toFormat("DDD, H:mm:ss");
      setTimeout(this.currentDate, 1000);
    },
  },
  mounted() {
    this.currentDate();
  },
};
</script>
