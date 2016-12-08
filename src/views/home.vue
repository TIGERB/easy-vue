<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="true"></bar-top>
    <card></card>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue');
  var card = require('../components/card.vue');
  var barBottom  = require('../components/barBottom.vue');
  var alert  = require('../components/alert.vue');

  module.exports = {
    components:{
      'bar-top':barTop,
      'card':card,
      'alert':alert,
      'bar-bottom':barBottom,
    },
    methods:{

    }
  }
</script>

<style>

</style>
