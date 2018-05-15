<template>
    <div class="mask" v-show="getLoad" >
        <div class="loading"></div>
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
      ...mapGetters(['getLoad'])
    },
    components: {},

    mounted () {

    }
  }
</script>
