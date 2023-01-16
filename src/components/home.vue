<template>
  <app-layout>
    <app-table />
  </app-layout>
</template>
<script>
import Layout from "./layout.vue";
import Table from "./table.vue";
export default {
  name: "home",
  components: {
    appLayout: Layout,
    appTable: Table,
  },
};
</script>
