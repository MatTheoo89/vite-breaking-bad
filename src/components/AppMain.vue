<script>

import { store } from '../data/store';
import CharacterCard from './CharacterCard.vue'

export default {
    name: 'AppMain',
    components: { CharacterCard, },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row"></div>
            <div class="col my-set">
                <h4>Found XX characters</h4>
            </div>
            <div class="container-fluid d-flex flex-wrap justify-content-evenly">
                <CharacterCard class="col-3 my-3"
                v-for="character in store.characterListData"
                :key="character.id"
                :character="character"/>
            </div>
            
        </div>
    </main>
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;

    .container{
        padding: 30px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, .35);
        min-height: 700px;
        .col.my-set{
            margin-bottom: 30px;
            padding: 15px 0;
            border-radius: 5px;
            background-color: #333;
            h4{
                color: #fff;
                font-weight: 500;
                margin-left: 20px;
                margin-bottom: 0;
            }
        }
    }

</style>