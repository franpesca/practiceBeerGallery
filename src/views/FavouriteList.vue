<template>
  <div class="wrapper">
    <h1> Your fav beers</h1>
    <div id="nav">
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
      background-color: whitesmoke;
    }
    .miao {
      background-color:whitesmoke;
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



