<template>
  <div>
    <bar-top
    :show-refesh-icon="false"
    :show-return-icon="false"
    :show-write-icon="false">
    </bar-top>
    <div class="pagethree-button">
        <option-button></option-button>
    </div>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
  import barTop   from '../components/barTop.vue';
  import button  from '../components/button.vue';
  import barBottom   from '../components/barBottom.vue';
  import alert   from '../components/alert.vue';

  module.exports = {
    components:{
      'bar-top':barTop,
      'option-button':button,
      'alert':alert,
      'bar-bottom':barBottom,
    },
    methods:{

    }
  }
</script>

<style>
.pagethree-button{
  margin-top: 80px;
}
</style>
