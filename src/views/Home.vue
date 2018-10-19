<template>
  <div class="div">
    <div class="home">
      <LandingPage></LandingPage>
      <BeerGallery></BeerGallery>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import LandingPage from '@/components/LandingPage.vue'
  import BeerGallery from '@/components/BeerGallery.vue'
  
  export default {
    components: {
      BeerGallery,
      LandingPage,
    },
  }
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
}
</style>




