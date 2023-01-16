<template>
  <home-page />
</template>

<script lang="ts">
import Vue from "vue";
import Home from "../components/home.vue";
export default Vue.extend({
  name: "IndexPage",
  components: {
    homePage: Home,
  },
});
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
