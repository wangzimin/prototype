<template>
  	<div class="indexBox">
		<div>
			<live></live>
		</div>
  	</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import live from './Live/live.vue'
  export default {
    name: 'index',
    data () {
      return {

      }
    },
    components: {
      live
    },
    computed: {

    },
    mounted () {

    },
    methods:{

    }
  }
</script>

<style>
  .indexBox {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .indexBox .indexContent {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .whiteBox{
  	width: 100%;
  	height: 100%;
  	position: absolute;
  	top: 0;
  	left: 0;
  	background: white;
  	z-index: 5;
  }
</style>
