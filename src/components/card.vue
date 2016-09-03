<template>
  <div class="content easy-vue-card" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <p v-for="result in results">
      <img src="../images/easy-vue.jpg">
      <span>{{result}}</span>
    </p>
    <div class="nsr-card-loading">
      <nsr-loading
      :hide-loading="isloadingComplete"
      :is-end-text="endText">
      </nsr-loading>
    </div>
  </div>
</template>

<script>
  require('vue-infinite-scroll');

  module.exports = {
    data:function () {
      return {
        results : [],
        busy:false,
        isloadingComplete: false
      }
    },
    components:{
      'nsr-loading':require('../components/loading.vue'),
    },
    ready: function () {
      this.fetchData(this, true);
    },
    methods:{
      fetchData: function (Vue, refresh) {
        var self = Vue;
        self.$progress.set(0);
        self.$progress.start();
        self.isloadingComplete = false;
        self.busy = true;
        fetch('/server.php')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          self.$progress.finish();
          self.isloadingComplete = true;
          self.busy = false;
          //fake data
        json = [
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
          'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +  + Math.random()*100000000000,
        ];
          if (refresh === true) {
            self.results = json;
          }else {
            self.results = self.results.concat(json);
          }
        }).catch(function(ex) {
          console.log(ex);
          self.$progress.failed();
          self.busy = false;
        });
      },
      loadMore: function () {
        this.fetchData(this, false);
      }
    },
    events:{
      //catch refresh event boardcast by parent component
      'refresh': function(){
        this.fetchData(this, true);
      }
    }
}
</script>

<style>
  .easy-vue-card{
      background-color: #f3f3f3 !important;
  }

  .easy-vue-card p{
    display: inline-block;
    margin: 6% 0 0 0;
    padding: 0;
    border-bottom: 1px solid #eee;
    background-color: #fff;
  }

  .easy-vue-card p img{
    width: 100%;
    vertical-align: middle;
  }

  .easy-vue-card span{
    display: inline-block;
    margin: 0 5%;
    padding: 10px 0;
  }

  .nsr-card-loading{
    margin: 30px auto 80px auto;
  }

  .bar-easy-vue{
    border: none;
  }
</style>
