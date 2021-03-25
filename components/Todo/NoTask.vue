<template>
  <div
    class="text-center d-flex align-center justify-center flex-column"
    style="height: 400px; opacity: 0.6"
    v-if="!$store.state.todos.tasks.length"
  >
    <v-icon class="primary--text text-center" size="80px"> mdi-check </v-icon>
    <div class="text-h4 primary--text lighten-5">No Task</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>