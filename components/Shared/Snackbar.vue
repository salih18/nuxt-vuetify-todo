<template>
  <v-snackbar v-model="snackbarStatus">
    {{ $store.state.todos.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="$store.commit('todos/setSnackbar', { status: false, text: '' })"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbarStatus: false,
    };
  },
  watch: {
    "$store.state.todos.snackbar": function () {
      this.snackbarStatus = this.$store.state.todos.snackbar.status;
    },
  },
};
</script>

