<template>
    <div>
       <img  class='imgDesc' src="../../assets/imgs/interactive/fail.png"/>
    </div>
</template>
<script>
  import {mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {},

    mounted () {

    }
  }
</script>
<style>
    .imgDesc{
        width:100%
    }
</style>