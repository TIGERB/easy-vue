<template>
  <div class="nsr-loading-center">
    <i class="fa fa-spinner fa-spin"
    :class="{'nsr-loading-hiden': hideLoading}">
    </i>
  </div>
</template>

<script>
  module.exports = {
    props:{
      hideLoading:{
        default: true
      },
      isEndText:{
        default: ''
      }
    },
  }
</script>
<style type="text/css">
  .nsr-loading-center{
    text-align:center;
    margin: 10px auto 10px auto;
    color: #929292;
  }
  .nsr-loading-hiden{
    display: none;
  }
</style>
