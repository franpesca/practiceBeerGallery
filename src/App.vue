<template>
  <div id="app">
    <div class="class1">
      <transition name="fade">
        <NavManu v-show="isShown"></NavManu>
      </transition>
      <transition name="fade">
        <button class="button" @click="toggle">
                  <div class="animated infinite pulse delay-4s">
                      <img v-bind:class="{ iconClosed : !isShown, iconOpened : isShown }" class="arrow" src="./assets/right-arrow.svg">
                  </div>
              </button>
      </transition>
    </div>
    <div class="class2">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import NavManu from '@/components/NavManu.vue'; // @ is an alias to /src
  import Home from '@/views/Home.vue'; // @ is an alias to /src
  import {
    mapGetters
  } from 'vuex';
  
  export default {
    components: {
      NavManu,
    },
    data: function() {
      return {
        isShown: false
      }
    },
    methods: {
      toggle() {
        return this.isShown = !this.isShown
      }
    },
  }
</script>


<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: whitesmoke;
    background-color: #faf0d8;
  }
  
  #nav {
    padding-top: 30px;
    a {
      font-weight: bold;
      white-space: pre;
      padding-bottom: 30px;
      color: rgb(12, 2, 2);
      &.router-link-exact-active {
        // color: #f1a669;
        color: blue;
        text-decoration: underline;
      }
    }
  }

  .bomber-slider-wrapper {
    width: 70%;
    height: 480px;
    margin: 0 auto;
    .carousel-inner {
      height: 460px;
      width: 80%;
      margin: 0 auto;
      .lallala {
        height: 400px;
        margin: 3% auto;
        padding: 0 43%;
        .img-fluid {
          height: 400px;
        }
      }
    }
  }
  
  .class1 {
    .button {
      position: absolute;
      top: 20px;
      left: 175px;
      height: 60px;
      background-color: transparent;
      border: none;
      z-index: 300;
      &:focus {
        border: none;
        outline: none;
      }
      .arrow {
        width: 35px;
        transform: rotate(180deg);
        stroke: black;
        fill: black;
        &.iconOpened {
          transform: rotate(0deg);
          width: 50px;
        }
      }
    }
    width: 190px;
    float: left;
    .fade-enter-active {
      animation: showMan 1s ease forwards;
    }
    .fade-leave-active {
      animation: hideMan .3s ease forwards;
    }
    @keyframes showMan {
      0% {
        opacity: 0;
        visibility: hidden;
      }
      100% {
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes hideMan {
      0% {
        opacity: 1;
        visibility: visible;
      }
      100% {
        opacity: 0;
        visibility: hidden;
      }
    }
    .class2 {
      &.midWidth {
        float: left;
        width: calc(100% - 190px);
      }
      &.fullWidth {
        width: 100%;
      }
    }
  }
</style>
