<template>
  <div>
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>
<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
export default {
  name: "layout",
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>
