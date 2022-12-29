<script setup>
useHead({
    title: 'UC Davis | Recipes Home'
})
</script>

<template>
    <div class="home-page">
        <div class="home-container">
            <div class="header">
                <div class="logo">
                    <img src="~/assets/images/UCDavisHealth.svg" alt="test" width="140">
                    <div class="text">
                        Food and
                        <br>
                        Nutrition Services
                    </div>
                </div>

            </div>
        <div class="hero">
                <div class="hero-title">
                    <h1>Farm Fresh Recipes</h1>
                    <span>this month's recipes</span>
                </div>
        </div>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum quidem quibusdam aliquam. Dolores illo quod, quidem illum recusandae adipisci ducimus et corrupti? Odio nihil culpa temporibus nisi quaerat quis, quidem qui consectetur, eligendi harum quas libero iure excepturi consequatur iusto atque nesciunt reprehenderit rem error quos incidunt. Eaque consectetur explicabo laboriosam, assumenda numquam suscipit? Animi aspernatur ut cumque quia maiores quas dolore vel enim nisi consequatur laudantium repellat, quibusdam eaque labore accusamus neque non doloribus ratione autem corrupti sed repellendus maxime velit quam. Numquam voluptatum natus dignissimos, hic suscipit sint nemo, quidem ipsam, labore modi asperiores laboriosam culpa fugit.
        </div>
        </div>
    </div>
</template>

<style scoped>
.logo {
    padding: 3rem;
    color: #002855;
    font-size: 1.75em;
    display: flex;
}
.text {
    border-left: #002855 solid 1px;
    margin-left: 1rem;
    padding-left: 1rem;
}
.home-page {
    display: flex;
    justify-content: center;
}
.home-container {
    max-width: 1200px;
}
.hero {
    height: 400px;
    margin: auto;
    background-color: rgba(128, 128, 128, 0.251);
    background-image: url('https://health.ucdavis.edu/food-nutrition/farm-to-fork/images/farm-to-fork-blog-main.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: color-burn;
    display: flex;
    margin: 1rem 0;
    padding: 2rem;
}
h1 {
    font-size: 4rem;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
}
.hero-title {
    padding: 1rem;
    color: #fff;
    /* background: rgba(0, 0, 0, 0.49); */
    background: linear-gradient(rgba(0, 0, 0, 0.49), rgba(128, 128, 128, 0));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.hero-title > span {
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(128, 128, 128, 0));
    padding: .3rem 1rem;
    width: 300px;
}
.content {
    padding: 2rem;
}
</style>