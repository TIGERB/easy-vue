<template>
    <ul class="content table-view easy-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <li class="table-view-cell media" v-for="result in results">
            <router-link class="navigate-right" to="/detail">
                <img class="media-object pull-left" :src="result.img">
                <div class="media-body">
                    hello vue
                    <p>a easy example using the vue to implement easy web</p>
                </div>
            </router-link>
        </li>
        <div class="nsr-card-loading">
            <nsr-loading :hide-loading="isloadingComplete" :is-end-text="endText">
            </nsr-loading>
        </div>
    </ul>
</template>

<script>
import {
    mapState
} from 'vuex';

module.exports = {
    data: function() {
        return {}
    },
    components: {
        'nsr-loading': require('../components/loading.vue'),
    },
    mounted: function() {
        this.$nextTick(function() {
            this.fetchData(this);
        })
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
        results: function(state) {
            return state.cardData;
        },
        isloadingComplete: function(state) {
            return state.isloadingComplete;
        },
        busy: function(state) {
            return state.busy;
        }
    })
}
</script>

<style>
  .easy-list img{
    width: 42px;
  }
</style>
