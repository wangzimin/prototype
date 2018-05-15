<template>
  <div id="app">
      <!--<loading v-if="!loaded"></loading>-->
      <router-view></router-view>
      <!--<router-view></router-view>-->
      <errmsg></errmsg>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex'
    import store from './store'
    import errmsg from './components/common/errmsg.vue'


  export default {
    name: 'App',
    components: {
      errmsg
    },
    created () {
//      wx.hideOptionMenu()
//      document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
//        wx.hideOptionMenu()
//      })
    },
    computed: {
      ...mapGetters(['errorMessage'])
    },
    mounted(){


    },
    methods:{
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
