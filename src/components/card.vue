<template>
  <div class="content easy-card-bg"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="busy"
  infinite-scroll-distance="10">
    <div class="easy-card" v-for="res in results">
    <img v-bind:src="res.img" alt="">
    <p>{{res.content}}</p>
    <div class="easy-card-user-info">
      <p>
        <img v-bind:src="res.avatar" alt="">
        <span>from</span>{{res.nickname}}
      </p>
      <p @click="favourite">
      <span class="fa"
      :class="{
      'fa-heart': isFavourited,
      'nsr-favourited': isFavourited,
      'fa-heart-o': isNotFavourited
      }">
      </span>
      {{res.date}}
      </p>
    </div>
  </div>
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

export default {
  data: () => ({}),
  components: {
    'nsr-loading': require('../components/loading.vue'),
  },
  mounted: function() {
    this.$nextTick(function () {
      this.fetchData(this);
    });
  },
  methods: {
    fetchData: function(progress) {
      this.$store.dispatch('getData', {
        progress: progress,
        refresh: false
      });
    },
    loadMore: function() {
      this.fetchData(this);
    }
  },
  computed: mapState({
    results: state => state.cardData,
    isloadingComplete: state => state.isloadingComplete,
    busy: state => state.busy,
  })
}
</script>

<style>
.easy-card-bg {
  background-color:#fafafa !important;
}

.easy-card{
  margin: 20px 0px 50px 0px;
  border-top: 1px solid #eeefef;
  border-bottom: 1px solid #eeefef;
  border-radius: 0px;
  background-color: #fff;
}

.easy-card img{
  width: 100%;
  vertical-align: middle;
}

.easy-card > p{
  margin: 10px 10px;
}

.easy-card-loading{
  margin-bottom: 90px;
}

.easy-card-user-info{
  margin: 8px 10px;
  overflow: hidden;
}


.easy-card-user-info p{
  font-size: 14px;
  margin: 10px 0;
  color: #777;
}

.easy-card-user-info p:first-child{
  float: left;
}

.easy-card-user-info p:last-child{
  float: right;
  font-size: 14px;
  padding-top: 5px;
}

.easy-card-user-info p:first-child span{
  color: #1abc9c;
  font-size: 12px;
  padding-right: 2px;
}

.easy-card-user-info p:last-child span{
  color: #777;
  font-size: 14px;
  padding-right: 3px;
}

.easy-card-user-info .easy-favourited{
  color: #1abc9c !important;
}

.easy-card-user-info img{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
</style>
