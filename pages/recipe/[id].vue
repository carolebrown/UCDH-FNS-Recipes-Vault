<script setup>
const route = useRoute()
const recipe = ref([]);

onMounted(async () => {
    let resp = await $fetch(`/api/recipe/${route.params.id}`)
    recipe.value = resp.data;
})
</script>
<template>
    <div class="recipe-page">
        <div class="recipe-container">
            <UCDHLogo />
            <h1>{{ recipe.name }}</h1>
            <div class="description">
                {{ recipe.description }}
            </div>
                <div v-if="recipe.image" class="image-box">
                    <img :src="recipe.image" alt="picture of the food for the recipe"/>
                </div>
            <div class="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    <li v-for="([quantity, ingredient], index) in recipe.ingredients" :key="index">
                        <strong>{{ quantity }}</strong> {{ ingredient }}
                    </li>
                </ul>
            </div>
            <div class="instructions">
                <h2>Instructions</h2>
                <ul>
                    <li v-for="(instruction, index) in recipe.instructions" :key="index">
                        {{ instruction }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-box {
    width: 100%;
    background-image: none;
}
ul > li {
    list-style: none;
    padding: .3rem;
}
img {
    width: 100%;
    height: 300px;
    aspect-ratio: 16 / 5;
    object-fit: cover;
    padding-bottom: 1rem;
}
.recipe-page {
    padding: .6rem;
    display: flex;
    justify-content: center;

}
.recipe-container {
    padding-top: 2rem;
    max-width: 1000px;
}
.description {
    padding: 2rem 0;
}
h1 {
    margin: 0;
}
</style>
