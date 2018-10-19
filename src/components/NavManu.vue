<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link><br>
      <router-link to="/favouritelist">Your favourite beers</router-link><br>
      <button class="btn btn-link" @click="activateClick"> Beer Menu</button>
      <div class="hello">
        <ul v-show="isClicked">
          <li v-for="(beer, index) in beers" :key="index"><a :href="'#' + beer.id">{{beer.name}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Component,
    Prop,
    Vue,
  } from 'vue-property-decorator';
  import {
    mapGetters, mapMutations, mapActions
  } from 'vuex'
  
  export default {
    name: 'NavManu',
    data: () => ({
      // beers: [],
      isClicked: false,
    }),
    computed: {
      ...mapGetters({
        beers: 'getBeers'
      }),
      //ora che ho mappato i getters posso chiamarli con il this (i.e this.beers)
    },
    methods: {
      ...mapActions({
        getBeerData: 'getBeerData'
      }),
      activateClick() {
        this.isClicked = !this.isClicked
        console.log(this.beers)
      },
    },
      created() {
        console.log(this)
        this.$store.dispatch('getBeerData')
      
      
      },
  }
</script>

<style scoped lang="scss">
  @mixin ul-details {
    list-style-type: none;
    padding: 0;
    // padding-left: 10px;
    text-align: left;
    font-size: 13px;
    // margin-left: 2%;
    max-width: 200px;
    background-color: #faf0d8;
    color: blue !important;
    font-weight: 100 !important;
    &.active {
      display: block;
    }
  }
  
  button {
    color: black;
     :active {
      color: blue;
    }
    font-weight: bold;
    text-decoration: none;
  }
  
  router-link {
    color: black;
  }
  
  ul {
    @include ul-details();
    color: blue !important;
    li {
      padding: 4px 0 4px 0;
    }
  }
  
  .hello {
    height: 70vh;
    overflow-y: scroll;
  }
</style>
