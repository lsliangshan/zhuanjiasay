<template>
  <div class="main-container">
    <div class="container">
      <h1 v-text="appName"></h1>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .main-container {
    position: absolute;
    left: 0;
    top: 128px;
    width: 100%;
    height: calc(100% - 128px - 64px);
    overflow-y: auto;
    .container {
      height: 1000px;
    }
  }
</style>
<script>
  export default {
    name: 'pageMain',
    data () {
      return {
        appName: this.$root.appName,
        theme: this.$root.theme
      }
    }
  }
</script>
