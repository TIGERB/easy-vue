<template>
  <div>
    <bar></bar>
    <card></card>
  </div> 
</template>

<script>
  var bar  = require('../components/bar.vue');
  var card = require('../components/card.vue');

  module.exports = {
    components:{
      'bar':bar,
      'card':card
    }
  }
</script>

<style>
  
</style>
