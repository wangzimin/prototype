<template>
    <div class="navCenterContent" :tab="currentIdx">
        <div class="topTab">
            <ul>
                <li v-for="(text,index) in menus" :class="[currentIdx == index ? 'activedColor' : '']"
                    @click="changeTab(text.type, index)">
                    {{text.name}}
                </li>
            </ul>
            <!--<div class="active-line"></div>-->
        </div>
        <div class="content">
            <component :is="currentView"></component>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import introduce from './introduce.vue' // 介绍
  import {getParameterValue} from '../../services/commonFunction'
  import {setStorage,getStorage,removeItem,clearAll} from '../../services/localStorage.js'

  export default {
    name: 'navCenterContent',
    data () {
      return {
        currentView: 'introduce',
        menus: [
          {name: '介绍', type: 'introduce'},
        ],
        currentIdx: 0
      }
    },
    computed: {

    },
    mounted () {
      this.currentTab(0);
    },
    components: {
      introduce
    },
    methods: {
      currentTab: function (val) {
        this.currentIdx = val;
        let index=parseInt(val);
        switch (index) {
          case 0:
            this.currentView = 'introduce'
            break
          default:
            break
        }
      },
      changeTab(name, index) {
        if (this.currentIdx === index) return
        this.currentIdx = index;
        switch (name) {
          case 'introduce':
            this.currentView = 'introduce'
            break;
          default:
            break;
        }
      }
    }
  }
</script>
<style scoped>
    .navCenterContent {
        height: 100%;
        display: flex;
        flex: 4;
        flex-direction: column;
    }

    .navCenterContent .topTab {
        display: block;
        height: 0.75rem;
    }
    .navCenterContent .topTab ul {
        display: flex;
        flex: 3;
        flex-direction: row;
        height: 100%;
    }
    .navCenterContent .topTab ul li {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 0.32rem;
        height: 100%;
        color: #54575b;
        border-bottom: solid 0.01rem #087ae5;
    }
    .navCenterContent .topTab ul li.activedColor{
        color: #087ae5;
    }
    .activedColor {
        color: #087ae5;
    }
    .active-line {
        width: 100%;
        height: 0.01rem;
        background-color: #087ae5;
        position: relative;
        left: 0;
        top: -0.01rem;
        -webkit-transition: all .5s ease;
    }
    [tab='0'] .active-line {
        transform: translate3d(0%, 0, 0);
    }

    [tab='1'] .active-line {
        transform: translate3d(100%, 0, 0);
    }
    .navCenterContent .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #ebebeb;
    }
</style>

