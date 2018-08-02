<template>
    <div class="my-tabs">
        <div class="tabs-content">
            <slot></slot>
        </div>
        <div class="tabs-bar">
            <div class="tabs-bar-nav">
                <div class="tabs-tab" v-for="tab in tabList"
                     :class="[tabIndex == tab.index ? 'tabs-active' : '']"
                     @click="changeTab(tab)">
                    {{tab.name}}
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  export default {
    name: 'MyTabs',
    props:
      {
        tabList: Array,
        tabIndex: Number
      },
    data() {
      return {}
    },
    methods: {
      changeTab: function (tab) {
        this.$emit('changeTab', tab)
      }
    }
  }
</script>
<style scoped>
    .my-tabs {
        font-size: 14px;
        color: #444;
        display: block;
        position: absolute;
        width: 240px;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .tabs-bar {
        /*display: flex;*/
        height: 50px;
        width: 240px;
        position: absolute;
        bottom: -1px;
    }

    .tabs-bar .tabs-bar-nav {
        width: 240px;
        height: 50px;
        background-color: #eef1f6;
    }

    .tabs-bar .tabs-bar-nav .tabs-tab {
        width: 118px;
        height: 50px;
        line-height: 50px;
        /*border-left: 1px solid #d1dbe5;*/
        border: 1px solid #d1dbe5;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    .tabs-active {
        background-color: #fff;
    }

    .tabs-content {
        font-size: 14px;
        color: #444;
        display: block;
        position: absolute;
        width: 240px;
        left: 0;
        top: 0;
        bottom: 0;
        /*padding-bottom: 30px;*/

    }
</style>
