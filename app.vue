<template>
  <h1>{{msg}}</h1>
  <Bar></Bar>
</template>

<script>
  var Bar = require('./src/components/bar.vue');

  module.exports = {
    data : function () {
      return {'msg' : '1111'}
    },
    components:{
      Bar
    }
  } 
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>

