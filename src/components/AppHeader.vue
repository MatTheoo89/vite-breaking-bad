<script>

export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="container d-flex align-items-center">
        <div class="logo">
            <img src="/Breaking_Bad_logo.svg" alt="">
        </div>
        <h1>Breaking Bad API</h1>
    </header>
    
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;

    
    header{
        padding: 20px 0;
        padding-top: 30px;
        margin-bottom: 50px;
    }
    .logo{
        width: 130px;
        margin-right: 70px;
    }

    h1{
        color: $primary-color;
        font-weight: 900;
        letter-spacing: 1.4px;
    }

</style>