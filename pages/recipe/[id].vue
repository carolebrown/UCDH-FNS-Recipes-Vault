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
            <h1>{{ recipe.name }}</h1>
        <div class="description">
            {{ recipe.description }}
        </div>
            <div v-if="recipe.image" class="image-box">
                <img :src="recipe.image" alt="picture of the food for the recipe"/>
            </div>
        <div class="instructions">
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
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.recipe-page {

    display: flex;
    justify-content: center;

}
.recipe-container {
    max-width: 1200px;
}
</style>
