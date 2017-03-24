<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="true"></bar-top>
    <card></card>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
  import barTop  from '../components/barTop.vue';
  import card from '../components/card.vue';
  import barBottom  from '../components/barBottom.vue';
  import alert  from '../components/alert.vue';

  module.exports = {
    components:{
      'bar-top':barTop,
      'card':card,
      'alert':alert,
      'bar-bottom':barBottom,
    },
    methods:{

    }
  }
</script>

<style>

</style>
