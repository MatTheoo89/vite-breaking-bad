<script>

import { store } from '../data/store';
import CharacterCard from './CharacterCard.vue';
import AppLoader from './AppLoader.vue';
import AppSelect from './AppSelect.vue';

export default {
    name: 'AppMain',
    components: { CharacterCard, AppLoader,AppSelect },
    data(){
        return{
            store
        }
    }
}
</script>

<template>


    <main v-if="store.isLoading">
        <div class="container">

            <div class="row">
                <div class="col">
                    <h4 class="my-set">Found {{store.characterListData.length}} characters</h4>
                </div>
                <div class="container-fluid d-flex flex-wrap justify-content-evenly">
                    <CharacterCard class="col-3 my-4"
                    v-for="character in store.characterListData"
                    :key="character.id"
                    :character="character"/>
                </div>
            </div>
        </div>
    </main>

    <main v-else>
        <div class="loader d-flex flex-column justify-content-center align-items-center">
            <h1>Caricamento in corso...</h1>
            <AppLoader />
        </div>
    </main>
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;

    .container{
        padding: 10px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, .35);
        min-height: 700px;
        .col{
            margin-bottom: 30px;
            padding: 15px 0;
            border-radius: 5px;
            
            h4{
                margin-bottom: 30px;
                padding: 15px 0;
                padding-left: 20px;
                border-radius: 5px;
                background-color: #333;
                color: #fff;
                font-weight: 500;
                margin-bottom: 0;
            }
        }
    }
    .loader{
        width: 100%;
        height: 100vh;
        h1{
            color: #fff;
            margin-bottom: 50px;
        }
    }

</style>