<template>
  <div class="columns mx-auto max-width mt-5">
    <div
      class="column button pt-2"
      v-for="number in buttonsNumber"
      :key="number"
      @click="setPageNumberHandler(number)"
    >
      {{ number }}
    </div>
  </div>
</template>
<script>
export default {
  name: "paginate",
  props: ["dataSize"],
  data() {
    return {
      buttonsNumber: Math.ceil(this.dataSize / 5),
    };
  },
  methods: {
    setPageNumberHandler: function (number) {
      this.$emit("setPageNumberHandler", number);
    },
  },
};
</script>
<style scoped>
.max-width {
  max-width: 40%;
}
</style>
