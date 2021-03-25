<template>
  <div id="todo" class="pa-2">
    <add-task />
    <task-list />
    <button-toggle-sorting />
    <no-task />
    <snackbar />
  </div>
</template>

<script>
import Snackbar from "../components/Shared/Snackbar.vue";
import AddTask from "../components/Todo/AddTask.vue";
import NoTask from "../components/Todo/NoTask.vue";
import TaskList from "../components/Todo/TaskList.vue";
import ButtonToggleSorting from "../components/Todo/ButtonToggleSorting.vue";
// @ is an alias to /src

export default {
  name: "IndexPage",
  components: {
    AddTask,
    TaskList,
    NoTask,
    Snackbar,
    ButtonToggleSorting,
  },
  head() {
    return {
      title: "Todo Manager - Home",
      meta: [
        {
          hid: "todo app",
          name: "todo manager",
          content: "Best online todo manager",
        },
      ],
    };
  },
};
</script>



