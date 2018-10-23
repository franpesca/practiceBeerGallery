<template>
    <div>
        <div class="sync-wrapper" v-if="loading">
            <sync-loader class="loader" :loading="loading"></sync-loader>
        </div>
        <div v-else>
            <div class="text-container">
                <h3>Our flavoured beer gallery!</h3>
                <p>Wanna narrow down your selection? No probs..Filter it down!</p>
                <div>
                    <b-form-select v-validate="{required: true}" name="myinput" v-model="selected" :options="options" class="mb-3" />
                    <p class="form-validation" v-if="errors.first('myinput')">Please, select an option from the above list</p>
                    <!-- {{errors.has('myinput')}} {{isSubmitted}} -->
                </div>
                <br>
                <b-input-group size="sm">
                    <b-form-input v-validate="{required: true, alpha_num: true}" name="required_field" @keydown.enter.native="filterArray(selected,InputValue)" placeholder="type here a value" v-model="inputValue"></b-form-input>
                    <div>
                        <b-button class="btn btn-primary button" size="sm" variant="outline-success" @click.prevent="filterArray(selected,inputValue)"> enter </b-button>
                    </div>
                    <br>
                </b-input-group>
                <p class="form-validation" v-if="errors.first('required_field')"> Please, type a valid number</p>
            </div>
            <div class="pagination">
                <b-button class="btn btn-primary button" variant="outline-success" @click="prev" :disabled="currentPage === 1">Prev</b-button>
                <p>Current Page: {{currentPage}}</p>
                <b-button class="btn btn-primary button" variant="outline-success" @click="next" :disabled="beers.length < 80">Next</b-button>
    
                <!-- <p>{{url}}</p> -->
    
                <!-- <p> PageNum : {{pageNum}} </p> -->
            </div>
            <div class="container-input-selectedbeers">
    
                <div class="container-beers">
                    <div class="card" v-for="(beer, index) in beers" :key="index" :id="beer.id">
                        <div @click="setSelected(beer)">
                            <b-button class="b-button" @click="showModal">
                                <div class="img-container">
                                    <img class="beer" :src="beer.image_url" alt="beer_image">
                                </div>
                            </b-button>
                        </div>
                    </div>
                    <b-modal class="modale-" header-text-variant="dark" ref="myModalRef" hide-footer title="Beer Details">
                        <div class="d-block text-center">
                            <div class="beer-wrapper">
                                <div class="img-container">
                                    <img class="beer" :src="selectedBeera.image_url" alt="beer_image">
                                </div>
                                <div class="info-container">
                                    <h4> {{ selectedBeera.name }} </h4>
    
                                    <p> {{ selectedBeera.description }} </p>
                                </div>
                            </div>
                        </div>
                        <b-btn class="mt-3" id="browse" block @click="hideModal">Let me browse some more</b-btn>
                        <div @click="addToFav">
                            <b-btn button-size="small" class="mt-3" id="addTo" block @click="hideModal">Add to my favourite</b-btn>
                        </div>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Vue
    } from "vue-property-decorator";
    import BootstrapVue from "bootstrap-vue";
    import SyncLoader from 'vue-spinner/src/SyncLoader.vue';
    import {
        Validator
    } from 'vee-validate';
    import {
        mapMutations,
        mapState,
        mapGetters,
        mapActions
    } from 'vuex';
    
    export default {
        components: {
            SyncLoader
        },
        computed: {
            pageLink() {
                return this.linkGen(this.currentPage)
            }
        },
        data: () => ({
            currentPage: 1,
            // url: `api.punkapi.com/v2/beers?page=${currentPage}&per_page=80`,
            inputValue: '',
            selected: null,
            options: [{
                    value: null,
                    text: 'Please select an option',
                    disabled: true
                },
                {
                    value: 'abv_lt',
                    text: 'Returns all beers with ABV less than the supplied number'
                },
                {
                    value: 'ibu_lt',
                    text: 'Returns all beers with IBU less than the supplied number'
                },
                {
                    value: 'ebc:lt',
                    text: 'Returns all beers with EBC less than the supplied number'
                },
                {
                    value: 'beer_name',
                    text: 'Returns all beers matching the supplied name'
                }
            ],
            galleryBeers: [],
            selectedBeera: {},
        }),
    
        computed: {
            ...mapGetters({
                beers: 'getBeers',
                loading: 'getBeersLoading',
            })
        },
        methods: {
            ...mapActions({
                getBeerData: 'getBeerData'
            }),
            setSelected(beer) {
                this.selectedBeera = beer;
            },
            showModal() {
                this.$refs.myModalRef.show();
            },
            hideModal() {
                this.$refs.myModalRef.hide();
            },
    
            filterArray(filterType, inputValue) {
                this.$validator.validate().then(valid => {
    
                    if (valid) {
                        if (filterType && inputValue) {
                            const obj = {
                                filterType,
                                inputValue
                            }
                        }
                        this.$store.dispatch('filterBeers', obj)
                        // this.axios
                        //     .get(`https://api.punkapi.com/v2/beers?${filterType}=${inputValue}`)
                        //     .then(res => res.data)
                        //     .then(res => {
                        //         console.log(filterType, "filtrato");
                        //         console.log(res, "chiamata get filtrata");
                        //         // this.beers = res;
                        //         this.$store.commit('SET_BEERS', res);
                        //     })
                        //     .finally(() => {
                        //         this.loading = false
                        //     });
                        this.inputValue = '';
                        console.log('inputValue', inputValue)
                        this.selected = null;
                    }
                })
            },
            changeInpagination() {
                this.$store.dispatch('getBeerData', this.currentPage)
            },
            addToFav() {},
    
            next() {
                this.currentPage += 1;
                this.getBeerData(this.currentPage);
            },
    
            prev() {
                this.currentPage -= 1;
                this.getBeerData(this.currentPage);
            },
        },
        mounted() {
            console.log(this.currentPage, 'curr page')
            this.getBeerData(this.currentPage)
        }
    
    }
</script>

<style lang="scss">
    .text-container {
        width: 40%;
        margin: 0 auto 3% ;
        .form-validation {
            color: red;
        }
        h3,
        p {
            color: black;
        }
        & h3 {
            text-transform: uppercase;
            margin-top: 10%;
            margin-bottom: 5%;
        }
    }
    
    .pagination {
        p {
            color: black;
            margin: 0 auto;
            width: 30%;
        }
    }
    
    strong {
        color: black;
    }
    
    .sync-wrapper {
        min-height: 200px;
        .loader {
            margin-top: 40px;
            margin-bottom: 40px;
        }
    }
    
    .container-beers {
        margin-top: 3%;
        width: 100% !important;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-between;
        align-items: flex-start;
        background-color: whitesmoke;
        .b-button {
            background-color: transparent !important;
            border: none;
            &:focus {
                border: none;
            }
            &:active {
                border: none;
            }
            &:hover {
                background-color: green;
            }
        }
        .card {
            width: 20%;
            padding: 2.5%;
            line-height: 1.6;
            background-color: transparent;
            border: none;
            &:hover {
                background-color: rgba(0, 128, 0, 0.646);
                opacity: 0.8;
                border-radius: 50%;
            }
            &:focus {
                border: none;
            }
            &.active {
                border: none;
            }
            img {
                height: 200px;
                object-fit: contain;
                align-self: center;
            }
            p {
                text-align: center;
                &:hover {
                    opacity: 0.5;
                }
            }
            .description-container {
                height: 130px;
                overflow-y: scroll;
            }
        }
    }
    
    .beer-wrapper {
        display: flex;
        align-items: center;
        color: black;
        .img-container {
            flex: 1;
            .beer {
                height: 200px;
                object-fit: contain;
                align-self: center;
            }
        }
        .info-container {
            flex: 2;
        }
    }
    
    .modeale- {
        background-color: #faf0d8 !important;
        .mt-3 {
            #browse {
                background-color: cadetblue !important;
            }
            #addTo {
                background-color: rgb(22, 181, 22) !important;
            }
        }
    }
</style>



