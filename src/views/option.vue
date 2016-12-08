<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="false"></bar-top>
    <div class="pagethree-button">
        <option-button></option-button>
    </div>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue');
  var button = require('../components/button.vue');
  var barBottom  = require('../components/barBottom.vue');
  var alert  = require('../components/alert.vue');

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
