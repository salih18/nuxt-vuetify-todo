<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline"> Delete Todo? </v-card-title>
      <v-card-text>Click 'yes' to delete the todo.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary darken-1"
          text
          @click="$emit('close-dialog', 'delete')"
        >
          No
        </v-btn>
        <v-btn color="red darken-1" text @click="$emit('delete-task')">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>


<style>
</style>