<template>
  <div>
    <div id="nav">
      
      <router-link to="/">Home</router-link><br>
      <br>
      <router-link to="/favouritelist">Your favourite beers</router-link><br><br>
      <button class="btn btn-link" @click="activateClick"> Beer List</button>
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
      isClicked: false,
    }),
    computed: {
      ...mapGetters({
        beers: 'getBeers'
      }),
      //ora che ho mappato i getters posso chiamarli con il this (i.e this.beers)
    },
    methods: {
      activateClick() {
        this.isClicked = !this.isClicked
        console.log(this.beers)
      },
    },
      
  }
</script>

<style scoped lang="scss">
  @mixin ul-details {
    list-style-type: none;
    padding: 0;
    text-align: left;
    font-size: 13px;
    max-width: 200px;
    background-color:whitesmoke;
    &.active {
      display: block;
    }
  }
  
  button {
    color: black;
     :active {
      color: blue;
      margin-bottom : 20px;
    }
    font-weight: bold;
    text-decoration: none;
  }
  
  router-link {
    color: black;
    margin-bottom: 20px;
  }
  
  ul {
    @include ul-details();
    color: blue !important;
    li {
      padding: 4px 0 4px 0;
    }
  }
  
  .hello {
    height: 65vh;
    overflow-y: scroll;
  }
</style>
