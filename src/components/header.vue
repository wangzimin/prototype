<template>
    <div @display="changePage">
        <el-tabs type="border-card" style="height: 120px;border:0" >
            <el-tab-pane label="视图显示">
                <ul>
                    <li><img src="../../assets/images/ZoomIn.png" alt=""><span>放大</span></li>
                    <li><img src="../../assets/images/ZoomOut.png" alt=""><span>缩小</span></li>
                    <li><img src="../../assets/images/Pan.png" alt=""><span>漫游</span></li>
                    <li><img src="../../assets/images/SwitchZTSystem.png" alt=""><span>全显地图</span></li>
                    <li><img src="../../assets/images/ViewInit.png" alt=""><span>初始视图</span></li>
                    <li><img src="../../assets/images/ReFresh.png" alt=""><span>刷新地图</span></li>
                    <li><img src="../../assets/images/PreviousView.png" alt=""><span>前一视图</span></li>
                    <li><img src="../../assets/images/RetrusiveView.png" alt=""><span>后一视图</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="定位">
                <ul>
                    <li @click="bounced()"><img src="../../assets/images/Coordinate.png" alt=""><span>坐标定位</span></li>
                    <li><img src="../../assets/images/LocateTF.png" alt=""><span>图幅定位</span></li>
                    <li><img src="../../assets/images/LoacteUnit.png" alt=""><span>单位定位</span></li>
                    <li><img src="../../assets/images/LocateRoad.png" alt=""><span>道路定位</span></li>
                    <li><img src="../../assets/images/LocateCross.png" alt=""><span>交叉口定位</span></li>
                    <li><img src="../../assets/images/BookMarkLocate.png" alt=""><span>书签定位</span></li>
                    <li><img src="../../assets/images/SaveBookMark.png" alt=""><span>保存书签</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="查询">
                <ul>
                    <li><img src="../../assets/images/QuickQuery.png" alt=""><span>快速查询</span></li>
                    <li><img src="../../assets/images/PointQuery.png" alt=""><span>点击查询</span></li>
                    <li><img src="../../assets/images/DragLineQuery.png" alt=""><span>拉线查询</span></li>
                    <li><img src="../../assets/images/CircleQuery.png" alt=""><span>图形查询</span></li>
                    <li><img src="../../assets/images/PointQuery.png" alt=""><span>多边形查询</span></li>
                    <li><img src="../../assets/images/RectangleQuery.png" alt=""><span>矩形查询</span></li>
                    <li><img src="../../assets/images/ComplexQuery.png" alt=""><span>综合条件查询</span></li>
                    <li><img src="../../assets/images/RegionQuery.png" alt=""><span>区域条件查询</span></li>
                    <li><img src="../../assets/images/ClearSelect.png" alt=""><span>清除选择</span></li>
                    <li><img src="../../assets/images/QueryResMang.png" alt=""><span>查询记录管理</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="统计">
                <ul>
                    <ul>
                        <li><img src="../../assets/logo.png" alt=""><span>放大</span></li>
                        <li><img src="../../assets/logo.png" alt=""><span>缩小</span></li>
                    </ul>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="分析">
                <ul>
                    <li><img src="../../assets/logo.png" alt=""><span>放大</span></li>
                    <li><img src="../../assets/logo.png" alt=""><span>缩小</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="辅助工具">
                <ul>
                    <li><img src="../../assets/logo.png" alt=""><span>放大</span></li>
                    <li><img src="../../assets/logo.png" alt=""><span>缩小</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="图形输出">
                <ul>
                    <li><img src="../../assets/logo.png" alt=""><span>放大</span></li>
                    <li><img src="../../assets/logo.png" alt=""><span>缩小</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="管线编辑">
                <ul>
                    <li><img src="../../assets/logo.png" alt=""><span>放大</span></li>
                    <li><img src="../../assets/logo.png" alt=""><span>缩小</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="数据管理">
                <ul>
                    <li><img src="../../assets/logo.png" alt=""><span>放大</span></li>
                    <li><img src="../../assets/logo.png" alt=""><span>缩小</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="系统设置">
                <ul>
                    <li><img src="../../assets/logo.png" alt=""><span>放大</span></li>
                    <li><img src="../../assets/logo.png" alt=""><span>缩小</span></li>
                </ul>
            </el-tab-pane>
        </el-tabs>

        <bounced v-show="jumpView"></bounced>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import store from '../../store'
  import Util from '../../util'
  import Bounced from '../page/bounced.vue'

  export default {
    components: {
      Bounced  //引用组件
    },
    data() {
      return {
        activeName: 'second',
        jumpView: false,
      }
    },
    mounted:{

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      bounced() {
        this.$emit('display');
        this.jumpView = true
      },
      changePage(){
        /*其他代码省略*/
        this.$refs.rightbar.$emit('tiggle');
      }

      // hiddenShow() {
      //   let that = this;
      //   that.jumpView = false
      // },

    }
  }
</script>

<style scoped>
    ul {
        margin: 0;
        height: 78px;
        width: 100%;
        display: flex;
        flex-direction: row;
        font-size: 16px;
    }

    ul li {
        width: 70px;
        height: 70px;
        /*margin: 5px 5px;*/
        padding: 5px 5px;
        line-height: 30px;
        text-align: center;
    }

    ul li:visited {
        background-color: aquamarine;
    }

    ul li img {
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    ul li span {
        font-size: 16px;
    }

</style>
