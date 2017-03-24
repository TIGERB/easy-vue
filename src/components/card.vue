<template>
  <div class="content easy-vue-card"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="busy"
  infinite-scroll-distance="10">
    <p v-for="result in results">
      <img :src="result.img">
      <span>{{result.content}}</span>
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
  import {mapState} from 'vuex';

  module.exports = {
    data:function () {
      return {}
    },
    components:{
      'nsr-loading':require('../components/loading.vue'),
    },
    mounted: function () {
      this.$nextTick(function () {
        this.fetchData(this);
      })
    },
    methods:{
      fetchData: function (progress) {
        this.$store.dispatch('getData', {
          progress: progress,
          refresh: false
        });
      },
      loadMore: function () {
        this.fetchData(this);
      }
    },
    computed: mapState({
      results: function (state) {
        return state.cardData;
      },
      isloadingComplete: function (state) {
        return state.isloadingComplete;
      },
      busy: function (state) {
        return state.busy;
      }
    })
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
