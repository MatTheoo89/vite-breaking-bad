<script>

import axios from 'axios';
import { store } from './data/store'


import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: { AppHeader, AppMain, AppFooter },
  methods:{
    getCharacters(){
      axios.get(store.apiUrl)
      .then( result => {
        store.characterListData = result.data
      })
      .catch( error => {
        console.log(error);
      })
    }
  },
  mounted(){
    this.getCharacters();
  }
  }
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">

  @use './styles/general';

</style>