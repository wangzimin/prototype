<template>
    <div class="header">
        <!--<div>-->
            <!--<span v-for="o in levelNum"> </span>-->
            <!--<i v-if="item.list" :class="open ? openClass : closeClass" @click="showSub" style="color: #00d6b2"></i>-->
            <!--<span v-else>   </span>-->
            <!--<span>-->
        <!--<a @click="changeState">-->
          <!--<img src="../../assets/logo.png" v-if="selectedState === 'all'" width="15px" height="15px"/>-->
          <!--<img src="../../assets/logo.png" v-if="selectedState === 'sub'" width="15px" height="15px"/>-->
          <!--<img src="../../assets/logo.png" v-if="selectedState === 'null'" width="15px" height="15px"/>-->
        <!--</a>-->
      <!--</span>-->
            <!--<span>{{item.name}}</span>-->
        <!--</div>-->
        <!--<component v-show="open" :is="node" :item="o" :state="stateSub" v-for="o of item.list" :key="o.key"-->
                   <!--:level="levelNum" v-on:changeToPar="changeBySub">-->
        <!--</component>-->
    </div>
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       open: true,
  //       node: 'wTree', // 控制菜单开关的
  //       selected: false, // 选中的情况下
  //       selectedState: 'null', // 子组件被选中的情况下向上传递all/sub/null
  //       originInfo: 'create', // 组件信息源，create/parent/children/this
  //       openClass: 'el-icon-caret-bottom',
  //       closeClass: 'el-icon-caret-right',
  //       selectClass: 'el-icon-check',
  //       selectBg: '#1c8de0',
  //       list: [],
  //       createSwitch: true
  //     }
  //   },
  //   computed: {
  //     levelNum() {
  //       return (this.level + 1)
  //     },
  //     stateSub() {
  //       return {
  //         selected: this.selected,
  //         originInfo: this.originInfo
  //       }
  //     }
  //   },
  //   methods: {
  //     showSub() {
  //       this.open = !this.open
  //     },
  //     changeState() {
  //       if (this.selected) {
  //         this.selected = false
  //         this.selectedState = 'null'
  //         this.originInfo = 'this'
  //         for (let o of this.list) {
  //           o.selectedState = 'null'
  //         }
  //       } else {
  //         this.selected = true
  //         this.selectedState = 'all'
  //         this.originInfo = 'this'
  //         for (let o of this.list) {
  //           o.selectedState = 'all'
  //         }
  //       }
  //       let data = {
  //         id: this.item.menuId,
  //         selectedState: this.selectedState,
  //         originInfo: 'parent'
  //       }
  //       this.$emit('changeToPar', data)
  //     },
  //     changeBySub(data) {
  //       // 如果是父组件true,判断状态，未被选中，添加id到list，selectSub=true,通知父组件，添加store的数组中，选中通知父组件，this.list.length=this.length状态改为selected
  //       // 修改自身状态，添加list
  //       let temp = data
  //       if (data.originInfo === 'create') {
  //         this.list.push(data)
  //       } else {
  //         this.originInfo = 'parent'
  //         let stateNull = 'null'
  //         let stateAll = 'all'
  //         let stateSub = 'sub'
  //         for (let o of this.list) {
  //           if (o.id === temp.id) {
  //             o.selectedState = temp.selectedState
  //           }
  //
  //           if (o.selectedState !== 'all') {
  //             stateAll = null
  //           }
  //           if (o.selectedState !== 'null') {
  //             stateNull = null
  //           }
  //         }
  //         if (stateNull) {
  //           this.selectedState = stateNull
  //           this.selected = false
  //         } else if (stateAll) {
  //           this.selectedState = stateAll
  //           this.selected = true
  //         } else {
  //           this.selectedState = stateSub
  //           this.selected = true
  //         }
  //         let data = {
  //           id: this.item.menuId,
  //           selectedState: this.selectedState,
  //           originInfo: 'parent'
  //         }
  //         this.$emit('changeToPar', data)
  //       }
  //     }
  //   },
  //   watch: {
  //     selected() {
  //       // 初始化
  //       if (this.originInfo === 'create') {
  //         // 不改变值
  //       } else {
  //         // 改变值********
  //         if (this.selected) {
  //           // 添加值
  //           this.$store.commit('PUSH_CHECK_LIST', this.item.menuId)
  //         } else {
  //           // 删除值
  //           this.$store.commit('SPLICE_CHECK_LIST', this.item.menuId)
  //         }
  //       }
  //     },
  //     state() {
  //       // 子组件得到通知，如果状态一直，不去改变，如果状态不一致改变
  //       if (this.state.originInfo === 'this') {
  //         this.originInfo = 'this'
  //       }
  //       if (this.originInfo === 'create') {
  //         this.originInfo = 'children'
  //       } else {
  //         if (this.state.originInfo !== 'parent') {
  //           if (this.state.selected) {
  //             this.selected = true
  //             this.selectedState = 'all'
  //             if (this.list !== []) {
  //               for (let o of this.list) {
  //                 o.selectedState = 'all'
  //               }
  //             }
  //           } else {
  //             this.selected = false
  //             this.selectedState = 'null'
  //             if (this.list !== []) {
  //               for (let o of this.list) {
  //                 o.selectedState = 'null'
  //               }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     list() {
  //       // 初始化数组
  //       if (this.list.length === this.item.list.length) {
  //         let stateNull = 'null'
  //         let stateAll = 'all'
  //         let stateSub = 'sub'
  //         for (let o of this.list) {
  //           if (o.selectedState !== 'all') {
  //             stateAll = null
  //           }
  //           if (o.selectedState !== 'null') {
  //             stateNull = null
  //           }
  //         }
  //         if (stateNull) {
  //           this.selectedState = stateNull
  //           this.selected = false
  //         } else if (stateAll) {
  //           this.selectedState = stateAll
  //           this.selected = true
  //         } else {
  //           this.selectedState = stateSub
  //           this.selected = true
  //         }
  //         let data = {
  //           id: this.item.menuId,
  //           selectedState: this.selectedState,
  //           originInfo: 'create'
  //         }
  //         this.$emit('changeToPar', data)
  //       }
  //     }
  //   },
  //   created() {
  //     // 初始化，把每个组件，从最底层添加到节点列表中，这样每个子组件都在list中了，就是originInfo=create的情况下添加数组，就不用判断数组长度，直接改变状态
  //     if (this.createSwitch) {
  //       let i = this.$store.state.checkList.indexOf(this.item.menuId)
  //       console.log(!this.item.list)
  //       console.log('-----------------------初始化')
  //       if (!this.item.list) {
  //         if (i > -1) {
  //           this.selectedState = 'all'
  //           this.selected = true
  //         } else {
  //           this.selectedState = 'null'
  //           this.selected = false
  //         }
  //
  //         let data = {
  //           id: this.item.menuId,
  //           selectedState: this.selectedState,
  //           originInfo: 'create'
  //         }
  //         this.$emit('changeToPar', data)
  //         this.originInfo = 'this'
  //       }
  //       this.createSwitch = false
  //     }
  //     console.log(this.state)
  //     console.log('----------------created')
  //   },
  //   updated() {
  //     console.log('-------updated=======')
  //     let i = this.$store.state.checkList.indexOf(this.item.menuId)
  //     console.log(!this.item.list)
  //     console.log('-----------------------初始化')
  //     if (!this.item.list) {
  //       if (i > -1) {
  //         this.selectedState = 'all'
  //         this.selected = true
  //       } else {
  //         this.selectedState = 'null'
  //         this.selected = false
  //       }
  //
  //       let data = {
  //         id: this.item.menuId,
  //         selectedState: this.selectedState,
  //         originInfo: 'parent'
  //       }
  //       this.$emit('changeToPar', data)
  //       this.originInfo = 'this'
  //     }
  //   },
  //   mounted() {
  //     console.log('=========mounted-----')
  //   }
  // }
</script>

<style scoped>
    .header{
        font-size: 14px;
        color: #444;
        background-color: aquamarine;
    }
</style>
