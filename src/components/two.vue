<template>
    <div class="sidebar">

    </div>
</template>

<script>
  export default {
    data() {
      return {};

    },
    methods: {

    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>
<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 240px;
        left: 0;
        top: 0;
        bottom: 0;
        /*background: #324157;*/
    }

</style>
