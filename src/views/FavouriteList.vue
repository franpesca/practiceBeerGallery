<template>
  <div class="wrapper">
    <h1> Your fav beers</h1>
    <div id="nav">
      <!-- <router-link to="/">Home  |  </router-link> 
          <router-link to="/favouritelist">Your favourite beers</router-link> -->
    </div>
    <Slider></Slider>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';
  import BootstrapVue from 'bootstrap-vue'
  import Slider from './../components/Slider.vue'
  
  
  
  export default {
    components: {
      Slider,
    }, 
  }
  
  
  // ascoltaPadre() {
  //   this.$emit('isToggled', this.isToggleActive)
  //   this.isToggleActive = !this.isToggleActive;
  // }
  
  // created() {
  //   this.axios.get('http://localhost:3000/api/beers')
  //     .then(res => res.data)
  //     .then((res) => {
  //       console.log(res, 'YOU R A BOMBER')
  //       let randomBeers = res.sort(() => .5 - Math.random()).slice(0, 9)
  //       console.log('random', randomBeers)
  
  //       this.$store.state.favBeers = randomBeers
  //     })
  // }
</script>

<style lang="scss" scoped>
  .wrapper {
    #nav {
      a {
        color: black;
        &.router-link-exact-active {
          // color: #f1a669;
          color: blue;
          text-decoration: underline;
        }
      }
    }
    margin: 0 auto;
    padding-top: 1%;
    padding-bottom: 6%;
    display: flex;
    flex-direction: column;
    h1 {
      font-family: 'Charmonman', cursive;
      font-size: 50px;
      white-space: pre-wrap;
      color: rgb(193, 3, 3);
      margin-bottom: -1%;
      font-weight: bold;
      background-color: rgb(132, 129, 116);
    }
    .miao {
      background-color: rgb(132, 129, 116);
      .your-fav-list {
        margin-top: 3%;
        display: flex;
        height: 100vh;
        li {
          flex-basis: 30%;
          margin-top: 10%;
          display: flex;
          flex-direction: column;
          .beer {
            height: 180px;
            object-fit: contain;
          }
        }
      }
    }
  }
</style>



