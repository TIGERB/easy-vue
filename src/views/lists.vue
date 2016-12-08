<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="false"></bar-top>
    <list></list>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue');
  var list = require('../components/list.vue');
  var barBottom  = require('../components/barBottom.vue');
  var alert  = require('../components/alert.vue');

  module.exports = {
    components:{
      'bar-top':barTop,
      'list':list,
      'alert':alert,
      'bar-bottom':barBottom,
    },
    methods:{

    }
  }
</script>

<style>

</style>
