<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        @click="handleClick(i)"
        class="mx-0 px-0"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon class="px-1 mx-1">
          <v-icon class="mr-3" v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  data: () => ({
    items: [
      {
        title: "Edit",
        icon: "mdi-clipboard-edit",
        click() {
          this.$emit("open-dialog", "edit");
        },
      },
      {
        title: "Due Date",
        icon: "mdi-clock-end",
        click() {
          this.$emit("open-dialog", "dueDate");
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.$emit("open-dialog", "delete");
        },
      },
      {
        title: "Sort",
        icon: "mdi-drag-horizontal-variant",
        click() {
          this.$store.dispatch("todos/toggleSorting");
        },
      },
    ],
  }),
};
</script>

<style>
</style>