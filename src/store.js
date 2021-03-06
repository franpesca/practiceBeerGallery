import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    beers: [],
    favouriteBeerImage_url: '',
    favouriteBeers: [],
    beersLoading: false,
    // url: n,
  },

  getters: {
    getBeers: state => state.beers,
    getFavouriteBeers: state => state.favouriteBeers,
    getBeersLoading: state => state.beersLoading,
  },

  mutations: {
    // toggle: state => {
    //   return state.isShown = !state.isShown
    //per chiamare le mutations: this.$store.commit('toggle, payload= qualcosa che passo io)
    // },
    SET_URL(state, payload){
      state.url=payload
    },
    SET_BEERS(state, payload) {
      state.beers = payload
    },
    POST_BEERS(state, payload) {
      state.favouriteBeers = payload
    },
    SET_LOADING(state, payload) {
      state.beersLoading = payload;
    },
  },
  actions: {
    getBeerData({ commit }, pag) {
      commit('SET_LOADING', true);
      console.log(pag, 'page in store')
      axios.get(`https://api.punkapi.com/v2/beers?page=${pag}&per_page=80`)
        .then(res => res.data)
        .then(res => {
          console.log(res, 'res')
          commit('SET_BEERS', res)
          commit('SET_LOADING', false);
          //quando committo devo sempte mettere lo tato- l azione che committo e il payload. senza
          //payload non ci sarebbe la ciccia da committare, c sarebbe solo un azione vuota
        })
    },
    postBeers({ commit }) {
      commit('SET_LOADING', true);
      axios.get('http://localhost:3000/api/beers')
        .then(res => res.data)
        .then((res) => {
          let randomBeers = res.sort(() => .5 - Math.random()).slice(0, 9)
          commit('POST_BEERS', randomBeers)
          commit('SET_LOADING', false);
        })
    },
    filterBeers({ commit }, filterObj) {
      const url = filterObj 
        ? `https://api.punkapi.com/v2/beers?${filterObj.filterType}=${filterObj.inputValue}` 
        : `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
      commit('SET_LOADING', true);
      axios
        .get(`https://api.punkapi.com/v2/beers?${filterObj.filterType}=${filterObj.inputValue}`)
        .then(res => res.data)
        .then(res => {
          commit('SET_BEERS', res);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        });
    },
  }
})

export default store