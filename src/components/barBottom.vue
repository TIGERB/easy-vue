<template>
	<nav class="bar bar-tab easy-bottom-bar">
	  <router-link class="tab-item" to="/">
	    <span class="icon fa fa-weixin" :class="{'easy-fa-color': isOnePage}"></span>
	    <span class="tab-label" :class="{'easy-fa-color': isOnePage}">pageone</span>
	  </router-link>
	  <router-link class="tab-item" to="/two">
	    <span class="icon icon-pages" :class="{'easy-fa-color': isTwoPage}"></span>
	    <span class="tab-label" :class="{'easy-fa-color': isTwoPage}">pagetwo</span>
	  </router-link>
	  <router-link class="tab-item" to="/three">
	    <span class="icon icon-person" :class="{'easy-fa-color': isThreePage}"></span>
	    <span class="tab-label" :class="{'easy-fa-color': isThreePage}">pagethree</span>
	  </router-link>
	</nav>
</template>

<script>
  	module.exports = {
  		data: function () {
  			return {
  				isOnePage: true,
  				isTwoPage: false,
  				isThreePage: false
  			}
  		},
	    mounted: function () {
				this.$nextTick(function () {
					var uri = window.location.hash;
		    	if (uri === '#/') {
					this.isOnePage   = true;
					this.isTwoPage   = false;
					this.isThreePage = false;
		    	}
		    	if (uri === '#/two') {
					this.isOnePage   = false;
					this.isTwoPage   = true;
					this.isThreePage = false;
		    	}
		    	if (uri === '#/three') {
					this.isOnePage   = false;
					this.isTwoPage   = false;
					this.isThreePage = true;
		    	}
				})
	    },
	    methods: {

	    }
  	}
</script>
<style>
.easy-bottom-bar{
	background-color: #1abc9c;
	color: #fff;
	border:none;
}
.easy-bottom-bar a{
	color: #cdd !important;
}
.easy-fa-color{
	color: #fff !important;
}
</style>
