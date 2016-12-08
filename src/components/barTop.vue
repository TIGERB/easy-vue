<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-refresh pull-left" v-if="showRefeshIcon" @click="refresh"></a>
    <a class="icon icon-left-nav pull-left" v-if="showReturnIcon" href="javascript:history.go(-1)"></a>
    <a class="icon icon-compose pull-right" v-if="showWriteIcon" @click="writeSome"></a>
    <h1 class="title">hello vue</h1>
  </header>
</template>

<script>
  module.exports={
    props: {
      showRefeshIcon: {
        default: true
      },
      showReturnIcon: {
        default: false
      },
      showWriteIcon: {
        default: true
      },
    },
    methods:{
      writeSome:function () {
        this.$store.commit('isShowAlert', true);
      },
      refresh: function () {
        this.$store.dispatch('getData', {
          progress: this,
          refresh: true
        });
      },
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
