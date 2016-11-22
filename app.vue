<template>
  <div>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  var FastClick = require('./bower_components/fastclick/lib/fastclick');
  FastClick.attach(document.body);// init fastclick
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
