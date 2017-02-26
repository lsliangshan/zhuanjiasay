<template>
  <div class="footer-container">
    <md-whiteframe md-tag="md-toolbar" md-elevation="2" class="md-primary" :class="'md-theme-' + theme">
      <p>还没有备案</p>
      <pre v-text="appName"></pre>
    </md-whiteframe>
  </div>
</template>
<style scoped lang="scss">
  .footer-container {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    .md-whiteframe {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        appName: this.$root.appName,
        theme: this.$root.theme
      }
    }
  }
</script>
