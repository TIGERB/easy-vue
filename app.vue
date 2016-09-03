<template>
  <div>
    <!-- set progressbar -->
    <progress :percent.sync="myProgress.percent" :options="myProgress.options"> </progress>
    <router-view></router-view>
  </div>
</template>

<script>
  var FastClick = require('./bower_components/fastclick/lib/fastclick');
  FastClick.attach(document.body);// init fastclick

  import progress from 'vue-progressbar/vue-progressbar.vue'
  export default {
    data() {
        return {
          myProgress: {
            percent: 0,
            options: {
              show: true,
              canSuccess: true,
              color: '#fff',
              failedColor: 'red',
              height: '2px'
            }
          }
        }
      },
      components: {
        progress
      },
      ready() {
        this.$progress.setHolder(this.myProgress)
      }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
