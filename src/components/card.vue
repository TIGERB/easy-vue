<template>
  <div class="content" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <p v-for="result in results">{{result}}</p>
  </div>
</template>

<script>
  require('vue-infinite-scroll');

  module.exports = {
    data:function () {
      return {
        results : [],
        busy:false
      }
    },
    ready: function () {
      var self = this;
      fetch('/server.php')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        self.results = json;
      }).catch(function(ex) {
        console.log(ex);
      });
    },
    methods:{
      loadMore: function () {
        this.busy = true;
        var self = this;
        fetch('/server.php')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          self.results = self.results.concat(json);
        }).catch(function(ex) {
          console.log(ex);
        });
        this.busy = false;
      }
    }
}
</script>

<style>
  p{
    display: inline-block;
    margin: 0 5%;
    padding: 5% 0;
    border-bottom: 1px solid #eee; 
  }
</style>
