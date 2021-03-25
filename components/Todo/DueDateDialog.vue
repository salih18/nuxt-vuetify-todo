<template>
  <v-dialog ref="dialog" :value="true" :return-value.sync="date" persistent>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close-dialog', 'dueDate')">
        Cancel
      </v-btn>
      <v-btn text color="primary" @click="$emit('pick-date', date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
import { DateTime } from "luxon";
export default {
  props: ["task"],
  data: () => ({
    date: null,
  }),

  mounted() {
    if (this.task.dueDate) {
      this.date = this.task.dueDate;
    }
  },
};
</script>

<style lang='scss'>
.v-date-picker-table {
  table {
    text-align: center;
    padding-right: 12px;
  }
}
</style>