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
  import barTop from '../components/barTop.vue';
  import text from '../components/text.vue';

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
