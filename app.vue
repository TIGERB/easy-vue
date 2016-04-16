<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  var FastClick = require('./bower_components/fastclick/lib/fastclick.js');
  FastClick.attach(document.body);// init fastclick
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>

