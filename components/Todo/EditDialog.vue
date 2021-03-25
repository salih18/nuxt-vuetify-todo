<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline"> Editing Todo </v-card-title>
      <v-text-field
        v-model="taskTitle"
        @keyup.enter="shouldUpdated && $emit('edit-task', taskTitle)"
        clearable
        class="px-2 pt-0 mt-0"
        hide-details
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary darken-1"
          text
          @click="$emit('close-dialog', 'edit')"
        >
          Cancel
        </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="$emit('edit-task', taskTitle)"
          :disabled="!shouldUpdated"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    shouldUpdated() {
      return !this.taskTitle || this.taskTitle === this.task.title
        ? false
        : true;
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>


