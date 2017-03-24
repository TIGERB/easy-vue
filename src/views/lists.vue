<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="false"></bar-top>
    <list></list>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
  import barTop  from '../components/barTop.vue';
  import list from '../components/list.vue';
  import barBottom  from '../components/barBottom.vue';
  import alert  from '../components/alert.vue';

  module.exports = {
    components:{
      'bar-top':barTop,
      'list':list,
      'alert':alert,
      'bar-bottom':barBottom,
    },
    methods:{

    }
  }
</script>

<style>

</style>
