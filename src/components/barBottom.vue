<template>
  <nav class="bar bar-tab easy-bottom-bar">
    <router-link class="tab-item" to="/">
      <span class="icon fa fa-weixin" :class="{'easy-fa-color': isHome}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isHome}">home</span>
    </router-link>
    <router-link class="tab-item" to="/lists">
      <span class="icon icon-pages" :class="{'easy-fa-color': isList}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isList}">lists</span>
    </router-link>
    <router-link class="tab-item" to="/option">
      <span class="icon icon-person" :class="{'easy-fa-color': isOption}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isOption}">option</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isHome: true,
    isList: false,
    isOption: false,
  }),
  mounted: function() {
    this.$nextTick(function() {
      const uri = this.$route.path;
      if (uri === '/') {
        this.isHome = true;
        this.isList = false;
        this.isOption = false;
      }
      if (uri === '/lists') {
        this.isHome = false;
        this.isList = true;
        this.isOption = false;
      }
      if (uri === '/option') {
        this.isHome = false;
        this.isList = false;
        this.isOption = true;
      }
    });
  },
  methods: {

  }
}
</script>

<style>
.easy-bottom-bar {
  background-color: #1abc9c;
  color: #fff;
  border: none;
}
.easy-bottom-bar a {
  color: #cdd !important;
}
.easy-fa-color {
  color: #fff !important;
}
</style>
