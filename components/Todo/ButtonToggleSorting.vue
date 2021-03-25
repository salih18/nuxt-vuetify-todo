<template>
  <v-btn
    color="primary"
    class="mx-auto toggle-button-sorting"
    @click="$store.dispatch('todos/toggleSorting')"
  >
    Save Sorting
  </v-btn>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.toggle-button-sorting {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>