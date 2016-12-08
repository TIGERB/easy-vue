<template>
  <div>
    <bar-top
    :show-refesh-icon="false"
    :show-return-icon="true"
    :show-write-icon="false"></bar-top>
    <text-content></text-content>
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue');
  var text = require('../components/text.vue');

  module.exports = {
    components:{
      'bar-top':barTop,
      'text-content':text,
    },
    methods:{

    }
  }
</script>

<style>

</style>
