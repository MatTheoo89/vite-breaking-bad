<script>

import axios from 'axios';
import { store } from './data/store'


import AppHeader from './components/AppHeader.vue'
import AppSelect from './components/AppSelect.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: { AppHeader, AppMain, AppFooter, AppSelect },
  methods:{
    getCharacters(){
      store.isLoading = false;
      axios.get(store.apiUrl, {params:{category: store.SelectedToFilter}})
      .then( result => {
        store.characterListData = result.data
        store.isLoading = true;
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
  <AppSelect @startSearch="getCharacters()" class="mb-4"/>
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">

  @use './styles/general';

</style>