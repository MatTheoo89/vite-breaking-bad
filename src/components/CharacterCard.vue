<script>
export default {
    name:'CharacterCard',
    props: {
        character: Object,
    },
}
</script>

<template>
    <div class="card my-set" style="width: 18rem;">
        <div class="avatar">
            <img :src="character.img" class="card-img-top" :alt="character.name">
        </div>
        <div class="card-body">
            <h4 class="card-title text-center">{{character.name}}</h4>
            <p class="card-text text-center">{{character.category}}</p>
            <p class="card-text text-center">{{character.status}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;

    .card-body, .card{
        border: none;
        color: #fff;
        background-color: $primary-color;
        background-image: linear-gradient(0deg, $primary-color 0%, #85FFBD 90%);
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2);
    }
    .card{
        filter: brightness(.8);
        transition: all 400ms;
        &:hover{
            filter: brightness(1);
            transform: scale(1.05);
        }
    }
    .avatar{
        height: 250px;
        img{
            aspect-ratio: 1 / 1;
        }
    }
    .card-title{
        font-weight: 600;
        color: $primary-color;
        margin-bottom: 20px;
    }
    .card-text{
        font-size: .8rem;
        margin-bottom: 5px;
    }

</style>