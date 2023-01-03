<script setup>
useHead({
    title: 'UC Davis Health | Recipes Overview'
})
</script>

<template>
    <div class="content">
        <h1>Recipes</h1>
    </div>
</template>

<style scoped>
.spacer {
    height: 100%;
}

.overlay {
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: -2000px;
    opacity: 0;
    transition: ease 0.4s top, ease 1s opacity;
}

.recipes-container {
    z-index: 2;
    padding-top: 0.3rem;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    top: -2000px;
    transition: ease 0.4s top;
}

.show {
    top: 0;
    opacity: 1;
    transition: ease 0.4s top;
}

.recipe-block {
    display: flex;
}

.recipe {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0.5rem 0;
    margin-bottom: 0.51rem;
    border-bottom: solid 1px gray;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.13);
    min-height: 90px;
    max-width: 800px;
}

.title {
    padding: 0.3rem;
    margin-right: 1rem;
    margin-left: 0.51rem;
    min-width: 110px;
    background-color: rgba(133, 133, 133, 0.527);
}

.description {
    max-width: 300px;
    padding: 0.3rem;
}

.description span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.recipe-button-container {
    display: flex;
    align-items: center;
    padding-left: 2rem;
}

.see-recipe-button {
    font-size: 0.71rem;
    color: #fff;
    --button-size: 2rem;
    height: var(--button-size);
    width: var(--button-size);
    display: grid;
    place-items: center;
    background-color: rgba(65, 215, 183, 0.594);
    border-radius: 50%;
    margin-right: 0.5rem;
    cursor: pointer;
}

.show-more-less {
    display: flex;
    justify-content: end;
    padding-bottom: 1rem;
}

.show-more-less>span {
    font-weight: 800;
    cursor: pointer;
}

@media (min-width: 500px) {
    .description {
        max-width: 100%;
    }

    .recipe {}
}
</style>
