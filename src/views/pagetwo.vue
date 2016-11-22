<template>
  <div>
    <bar-top>
    </bar-top>
    <card></card>
    <bar-bottom></bar-bottom>
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue');
  var card = require('../components/card.vue');
  var barBottom  = require('../components/barBottom.vue');

  module.exports = {
    components:{
      'bar-top':barTop,
      'card':card,
      'bar-bottom':barBottom,
    },
    methods:{
  
    }
  }
</script>

<style>

</style>
