<template>
  <div class="wrapper bg-center-image">
    <div class="bg-gradient">
      <div class="text-wrapper">
        <h1> {{msg}} </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';
  import BootstrapVue from 'bootstrap-vue';
  
  export default {
    data: () => ({
      msg: 'Your Beerrificio'
    })
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100% !important;
    display: flex;
    align-items: baseline;
    padding-top: 3%;
    .text-wrapper {
      margin-top: 10%;
      h1 {
        font-family: 'Charmonman', cursive;
        font-size: 50px;
        white-space: pre-wrap;
        color: white(14, 14, 14);
        font-weight: bold;
        color: rgb(0, 45, 157);
      }
    }
    &.bg-center-image {
      background-repeat: no-repeat;
      background-position: center;
      height: 90vh;
      background-size: cover;
      background-image: url('./../assets/alcohol.jpg');
      position: relative;
      .bg-gradient {
        background-image: linear-gradient(90deg, rgba(231, 249, 247, 0.425) 0%, rgba(12, 6, 7, 0.678) 100%), url("/../../asset/beer.jpg");
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>



