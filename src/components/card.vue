<template>
  <h1>card</h1>
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
