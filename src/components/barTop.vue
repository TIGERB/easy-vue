<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-refresh pull-left" @click="refresh"></a>
    <a class="icon icon-compose pull-right" @click="writeSome"></a>
    <h1 class="title">hello vue</h1>
  </header>
</template>

<script>
  module.exports={
    methods:{
      writeSome:function () {
        alert('write something');
      },
      refresh: function () {
        // dispatch bar-top-refresh event to parent component
        this.$dispatch('bar-top-refresh');
      }
    }
  }
</script>

<style>
  .bar-easy-vue{
    background-color: #1abc9c;
  }
  .bar-easy-vue a, h1{
    color: #fff !important;
  }
</style>
