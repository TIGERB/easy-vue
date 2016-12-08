<template>
  <div class="easy-content">
      <p>
        Learn Vue Easy
      </p>
      <p>
        a easy example using the vue to implement easy web
      </p>
  </div>
</template>

<script>
  	module.exports = {
  		data: function () {
  			return {

  			}
  		},
	    mounted: function () {
				this.$nextTick(function () {

				})
	    },
	    methods: {

	    }
  	}
</script>

<style>
  .easy-content{
    text-align: center;
    padding-top: 200px;
  }
  .easy-content p:first-child{
    color: #1abc9c;
    font-size: 25px;
  }
  .easy-content p:last-child{
    padding-top: 20px;
    color: #bbb;
  }
</style>
