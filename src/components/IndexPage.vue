<template>
  <div class="container"></div>
</template>

<script>
export default {
  data: function() {
    return {
      //
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    site() {
      return this.$store.state.site;
    },
    control() {
      return this.$store.state.control;
    }
  },
  mounted() {
    this.control.header = true;
  }
};
</script>

<style scoped>
</style>