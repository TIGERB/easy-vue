<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-compose pull-right" v-on:click="writeSome"></a>
    <h1 class="title">hello vue</h1>
  </header>
</template>

<script>
  module.exports={
    methods:{
      writeSome:function () {
        alert('write something');
      }
    }
  }
</script>

<style>

</style>
