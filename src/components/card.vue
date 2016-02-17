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
        results : [
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        'testing testing testin gtesting testing testin gtesting testing testing testing testing testing testing testing testing testing testingtestingtestingtesting end',
        ],
        busy:false
      }
    },
  methods:{
    loadMore: function () {
      this.busy = false;
      alert('loading...');
    }
  }
}
</script>
