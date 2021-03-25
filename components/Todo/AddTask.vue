<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    clearable
    label="Add Todo"
    class="pa-3"
    append-icon="mdi-playlist-plus"
    hide-details
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("todos/addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style>
</style>