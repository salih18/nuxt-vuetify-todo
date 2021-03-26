<template>
  <div>
    <delete-dialog
      v-if="dialogs.delete"
      @delete-task="deleteTask"
      @close-dialog="handleDialogClose"
    />

    <edit-dialog
      v-if="dialogs.edit"
      @edit-task="editTask"
      @close-dialog="handleDialogClose"
      :task="task"
    />
    <due-date-dialog
      v-if="dialogs.dueDate"
      @close-dialog="handleDialogClose"
      :task="task"
      @pick-date="pickDate"
    />
    <v-list-item
      :class="{ 'grey lighten-5': task.status }"
      @click="completeTask(task.id)"
      class="px-0"
      :ripple="false"
    >
      <template v-slot:default>
        <v-list-item-action class="px-0 mr-1">
          <v-checkbox dense :input-value="task.status"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{
              'text-decoration-line-through grey--text lighten-5': task.status,
            }"
            class="text-body-2"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | formatDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="task" @open-dialog="handleDialogOpen" />
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.todos.sorting">
          <v-btn color="primary" icon class="handle">
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import DeleteDialog from "./DeleteDialog.vue";
import EditDialog from "./EditDialog.vue";
import TaskMenu from "./TaskMenu.vue";
import DueDateDialog from "./DueDateDialog.vue";

export default {
  components: {
    DeleteDialog,
    TaskMenu,
    EditDialog,
    DueDateDialog,
  },
  props: ["task"],
  data() {
    return {
      dialogs: {
        delete: false,
        edit: false,
        dueDate: false,
      },
    };
  },

  filters: {
    formatDate(value) {
      const dt = DateTime.fromISO(value);
      return dt.toFormat("LLL dd");
    },
  },

  methods: {
    completeTask() {
      this.$store.dispatch("todos/completeTask", this.task);
    },
    deleteTask() {
      this.$store.dispatch("todos/deleteTask", this.task.id);
    },
    editTask(task) {
      console.log("🚀 ~ file: Task.vue ~ line 100 ~ editTask ~ task", task);
      this.$store.dispatch("todos/editTask", { id: this.task.id, title: task });
      this.dialogs.edit = false;
    },
    pickDate(value) {
      this.$store.dispatch("todos/pickDate", {
        id: this.task.id,
        dueDate: value,
      });
      this.dialogs.dueDate = false;
    },
    handleDialogClose(actionType) {
      this.dialogs[actionType] = false;
    },
    handleDialogOpen(actionType) {
      this.dialogs[actionType] = true;
    },
  },
};
</script>

<style lang="scss" >
.sortable-ghost {
  opacity: 0;
}
.sortable-chosen {
  background-color: #e3f2fd !important;
}
.sortable-drag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>