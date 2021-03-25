<template>
  <v-list flat class="pt-0">
    <draggable v-model="tasks" handle=".handle">
      <div v-for="(task, index) in tasks" :key="task.id">
        <task :task="task" />
        <v-divider
          v-show="index !== $store.state.todos.tasks.length - 1"
        ></v-divider>
      </div>
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import Task from "./Task.vue";
export default {
  components: { Task, draggable },
  computed: {
    tasks: {
      get() {
        return this.$store.getters["todos/searchTodos"];
      },
      set(value) {
        this.$store.dispatch("todos/setTasks", value);
      },
    },
  },
};
</script>

<style>
</style>

