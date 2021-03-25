<template>
  <v-text-field
    :value="$store.state.todos.searchTerm"
    @input="$store.dispatch('todos/setSearchTerm', $event)"
    @focus="isExpanded = true"
    @blur="isExpanded = false"
    dense
    placeholder="Search"
    clearable
    filled
    prepend-inner-icon="mdi-magnify"
    class="expanded-input"
    :class="{ closed: !isExpanded && !$store.state.todos.searchTerm }"
    :expanded="false"
    size="small"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>

<style lang='scss'>
.expanded-input {
  transition: max-width 0.45s;
  .v-input__slot {
    cursor: pointer !important;
    &::after,
    &::before {
      border-color: transparent !important;
    }
  }
  &.closed {
    max-width: 36px;
    .v-input__slot {
      background: transparent !important;
    }
  }
}
</style>