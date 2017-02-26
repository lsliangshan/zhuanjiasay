<template>
  <div class="header-container">
    <md-whiteframe md-tag="md-toolbar" md-elevation="2" class="md-large md-primary" :class="'md-theme-' + theme">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click.native="$refs.sidenav.toggle()">
          <md-icon>menu</md-icon>
        </md-button>

        <span style="flex: 1"></span>

        <div @mouseover="showSearch" @mouseout="hideSearch">
          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>

          <input class="header-search transition-all" placeholder="搜点啥" v-model="searchText" :class="{'shown': showSearchBox}"/>
        </div>

        <md-button class="md-icon-button">
          <md-icon>view_module</md-icon>
        </md-button>
      </div>

      <div class="md-toolbar-container">
        <h2 class="md-title" v-text="appName"></h2>

        <div class="btn-main transition-all" @click="test">
          <md-button class="md-fab md-mini md-primary" :md-theme="theme">
            <md-icon>add</md-icon>
          </md-button>
        </div>
      </div>

      <transition @enter="testEnter" @leave="testLeave" :css="false">
        <div id="testTarget" :class="'bg-' + theme" v-show="testTargetShown"></div>
      </transition>
    </md-whiteframe>

    <md-sidenav :md-theme="theme" class="md-left" ref="sidenav">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img src="https://placeimg.com/64/64/people/8" alt="People">
            </md-avatar>

            <span style="flex: 1"></span>

            <md-avatar>
              <img src="https://placeimg.com/40/40/people/3" alt="People">
            </md-avatar>

            <md-avatar>
              <img src="https://placeimg.com/40/40/people/4" alt="People">
            </md-avatar>
          </md-list-item>

          <md-list-item>
            <div class="md-list-text-container">
              <span>John Doe</span>
              <span>johndoe@email.com</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item @click.native="$refs.sidenav.toggle()" class="md-primary">
          <md-icon>insert_drive_file</md-icon> <span>My files</span>
        </md-list-item>

        <md-list-item @click.native="$refs.sidenav.toggle()">
          <md-icon>people</md-icon> <span>Shared with me</span>
        </md-list-item>

        <md-list-item @click.native="$refs.sidenav.toggle()">
          <md-icon>access_time</md-icon> <span>Recent</span>
        </md-list-item>

        <md-list-item @click.native="$refs.sidenav.toggle()">
          <md-icon>start</md-icon> <span>Starred</span>
        </md-list-item>

        <md-list-item @click.native="$refs.sidenav.toggle()">
          <md-icon>delete</md-icon> <span>Trash</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>
<style scoped lang="scss">
  .header-container {
    width: 100%;
    height: 128px;
    /*background-color: rgba(255, 0, 0, .2);*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    .header-search {
      width: 0;
      height: 30px;
      background-color: transparent;
      color: #ffffff;
      border: none;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
      &.shown {
        width: 180px;
      }
    }
    .btn-main {
      position: absolute;
      margin: 0;
      bottom: -28px;
      left: 16px;
      width: 58px;
      height: 58px;
      button {
        left: 0!important;
        bottom: 0!important;
        width: 100%;
        height: 100%;
      }
    }
  }
  #testTarget {
    position: absolute;
    left: 50px;
    top: 200px;
    width: 80px;
    height: 80px;
    background-color: #ecb0ff;
  }
  .complete-example {
    height: 540px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
  }

  .md-title {
    color: #fff;
  }

  .md-list {
    overflow: auto;
  }
</style>
<script>
  const Velocity = require('../../../static/css/velocity.min.js')
  export default {
    name: 'pageHeader',
    data () {
      return {
        appName: this.$root.appName,
        logoUrl: this.$root.logoUrl,
        theme: this.$root.theme,
        showSearchBox: false,
        searchText: '',
        testTargetShown: false
      }
    },
    methods: {
      toggleSearch: function () {
        this.showSearchBox = !this.showSearchBox
      },
      showSearch: function () {
        this.showSearchBox = true
      },
      hideSearch: function () {
        if (this.searchText === '') {
          this.showSearchBox = false
        }
      },
      testEnter: function (el, done) {
        Velocity(el, {
          left: 0,
          position: 'absolute',
          top: 0
        }, { duration: 400, delay: 100 })
        Velocity(el, {
          backgroundColor: 'red',
          width: '375px',
          height: '667px'
        }, { complete: done })
      },
      testLeave: function (el, done) {

      },
      test: function () {
        this.testTargetShown = !this.testTargetShown
      }
    }
  }
</script>
