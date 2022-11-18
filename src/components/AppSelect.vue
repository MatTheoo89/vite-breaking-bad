<script>

    import { store } from '../data/store'

export default {
    name: 'AppSelect',
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-3">
                <select
                    @change="$emit('startSearch')"
                    v-model="store.SelectedToFilter" class="form-select" aria-label="Default select example">
        <option 
            value="" selected>All</option>
        <option
            v-for="(cat, i) in store.categoryList" :key="i"
            :value="cat">{{cat}}</option>
    </select>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;

</style>