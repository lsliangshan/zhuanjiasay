<template>
  <div class="home-container">
    <page-header></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from './parts/PageHeader.vue'
  import PageFooter from './parts/PageFooter.vue'
  import PageMain from './parts/PageMain.vue'

  export default {
    name: 'home',
    data () {
      return {
        theme: this.$root.theme
      }
    },
    computed: {
      userInfo: function () {
        return (JSON.parse(localStorage.getItem(location.href + 'loginuserInfo')) || {})
      }
    },
    components: {
      PageHeader,
      PageFooter,
      PageMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home-container {
    width: 100%;
    height: 100%;
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    /*flex-direction: column;*/
    a {
      color: #555 !important;
      line-height: 2;
      font-weight: bold;
    }
    p {
      font-size: 20px;
      line-height: 2;
      font-weight: bold;
      span {
        color: #ee3333;
      }
    }
  }
</style>
