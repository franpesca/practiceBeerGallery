<template>
  <div>
    <b-carousel class="bomber-slider-wrapper" img-height="480px" id="carousel1" style="box-shadow: 1px 1px 2px #333; background-color: rgb(158, 184, 193);" controls indicators :interval="4000" img-width="1024" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <b-carousel-slide v-for="(favouriteBeer, index) in favouriteBeers" :key="index" class="lallala" :img-src="favouriteBeer.image_url">
      </b-carousel-slide>
    </b-carousel>
    <!-- <b-carousel>
       <b-carousel-slide>
         <img   slot="img" 
                v-for="(favouriteBeer, index) in favouriteBeers"
                :key="index"
                class="d-block img-fluid w-100" 
                width="1024" 
                height="480"
                :src="favouriteBeer.image_url"
            
                alt="image slot">
         </b-carousel-slide>
    </b-carousel> -->
  </div>
</template>

<script>
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';
  import BootstrapVue from 'bootstrap-vue'
  import {
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  
  export default {
    data: () => ({
      slide: 0,
      sliding: false,
    }),
    computed: {
      ...mapGetters({
        favouriteBeers: 'getFavouriteBeers'
      })
    },
    // methods: {
    //   ...mapActions({
    //     postBeers: 'postBeers'
    //   }),
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      mounted() {
        this.$store.dispatch('postBeers')
      },
    }
  // }
</script>

<style lang="scss" scoped>

</style>

  