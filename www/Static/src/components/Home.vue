<template>
  <div class="home-container">
    <page-header></page-header>
    <!--<h1>这是首页</h1>-->
    <!--<router-link to="/login" v-if="!userInfo.username">去登录</router-link>-->
    <!--<p v-else>登录为: <span v-text="userInfo.username"></span></p>-->
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from './parts/PageHeader.vue'
  import PageFooter from './parts/PageFooter.vue'

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
      PageFooter
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
