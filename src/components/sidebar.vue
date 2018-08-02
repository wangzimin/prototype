<template>
    <div class="sidebar">
        <!--<el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>-->
        <!--<el-submenu index="0">-->
        <!--<template slot="title">-->
        <!--<span class="sb-icon"><i class="material-icons"></i></span>-->
        <!--<span class="sb-cn">全部图层</span>-->
        <!--</template>-->
        <!--<el-menu-item index="projects">项目</el-menu-item>-->
        <!--</el-submenu>-->

        <!--<el-submenu index="1">-->
        <!--<template slot="title">-->
        <!--<span class="sb-icon"><i class="material-icons"></i></span>-->
        <!--<span class="sb-cn">图层列表</span>-->
        <!--</template>-->
        <!--<el-menu-item index="deviceInfo">终端信息</el-menu-item>-->
        <!--<el-menu-item index="interfaceMonitor">接口调用信息</el-menu-item>-->
        <!--<el-menu-item index="resourceMonitor">资源加载信息</el-menu-item>-->
        <!--</el-submenu>-->

        <!--<el-submenu index="2">-->
        <!--<template slot="title">-->
        <!--<span class="sb-icon"><i class="material-icons"></i></span>-->
        <!--<span class="sb-cn">查询结果</span>-->
        <!--</template>-->
        <!--<el-submenu index="2-1">-->
        <!--<template slot="title">监控统计图表</template>-->
        <!--<el-menu-item index="statisticalDiagram">迁徙图Demo</el-menu-item>-->
        <!--<el-menu-item index="userLocation">用户位置</el-menu-item>-->
        <!--<el-menu-item index="pieChar">终端信息</el-menu-item>-->
        <!--<el-menu-item index="userVisits"> 月访问量</el-menu-item>-->
        <!--</el-submenu>-->
        <!--</el-submenu>-->
        <!--</el-menu>-->
        <div class="tab">
            <my-tabs :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
                <keep-alive>
                    <component :is="currentContent">
                    </component>
                </keep-alive>
            </my-tabs>
        </div>
    </div>

</template>

<script>
  import MyTabs from '../common/tab.vue'
  import One from './one.vue'
  import Two from './two.vue'

  export default {
    name: 'Home',
    components: {
      MyTabs,
      'one': One,
      'two': Two
    },
    data() {
      return {
        tabIndex: 0,
        currentContent: 'one',
        tabList: [
          {
            index: 0,
            name: '图层列表',
            component: 'one'
          },
          {
            index: 1,
            name: '查询结果',
            component: 'two'
          }
        ]
      }
    },
    methods: {
      // 切换选项卡
      changeTab: function (tab) {
        this.tabIndex = tab.index
        this.currentContent = tab.component
      }
    }
  }
  // export default {
  //     computed: {
  //         onRoutes(){
  //             return this.$route.path.replace('/', '');
  //         }
  //     }
  // }
</script>
<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 240px;
        left: 0;
        top: 120px;
        bottom: 0;
        border-right: 1px solid #d1dbe5;

        /*background: #324157;*/
    }

    /*.sidebar > ul {*/
    /*height: 100%;*/
    /*}*/

    /*.material-icons {*/
    /*font-size: 12px;*/
    /*}*/
    .tab {
        /*display: block;*/
        position: absolute;
        width: 240px;
        left: 0;
        top: 0;
        bottom: 0;
    }
</style>
