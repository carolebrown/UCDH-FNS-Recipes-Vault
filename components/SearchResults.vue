<script setup>
const media = useState('media-query');
const recipes = useState('recipes');
const searchOpened = useState('search-opened');
const router = useRouter();

function handleClose() {
    searchOpened.value = false;
}

function truncate(text) {
    if (!text) return;
    let guard;
    if (media.value) {
        guard = text.length < 80;
    } else {
        guard = text.length < 200;
    }
    if (guard) {
        return text;
    };
    return (media.value ? text.slice(0,80).trim() : text.slice(0,200).trim()) + '...';
}

function handleShowMore(e) {
    const showMore = recipes.value[e.target.dataset.recipe].showMore;
    if (!showMore) {  
        recipes.value.forEach((r) => r.showMore = false);
        recipes.value[e.target.dataset.recipe].showMore = true;
    }
    else {
        recipes.value.forEach((r) => r.showMore = false);
    };
}

function handleShowRecipe(e) {
    // recipe
    router.push({
        path: `/recipe/${e.target.dataset.id}`
    })
    setTimeout(() => {
        handleClose();
    }, 100);
}

onMounted(async () => {
    // const data = await $fetch(`/api/recipes/${search}`, {
    //     method: 'POST',
    //     body: {
    //         search: 'Fries'
    //     }
    // })
    // if (Array.isArray(data)) {
    //     recipes.value = [ ...data]
    // } else {
    //     recipes.value = data
    // }
    // console.log("data", data);

})
</script>

<template>
    <div 
        class="overlay"
        :style="{
            opacity: searchOpened ? 1 : 0
        }"
        :class="{
            'show': searchOpened
        }"
        @click="handleClose"
    ></div>
    <section class="recipes-container" :class="{
        'show': searchOpened
    }">
        <div
            v-for="(recipe, index) in recipes" :key="index"
            class="recipe"
        >
            <div class="recipe-block">
                <div class="title" :style="{
                    'background-image': `url(${recipe.image})`,
                }">
                    <h4>
                        {{recipe.name}}
                    </h4>
                </div>
                <div class="description">
                    <span v-if="!recipe.showMore">
                        {{ truncate(recipe.description) }}
                        <br>
                        <div class="show-more-less">
                            <span
                                v-if="recipe.description?.length > 200"
                                :data-recipe="index"
                                @click="handleShowMore" 
                            >
                                ... show more
                            </span>
                        </div>
                    </span>
                    <span v-else >
                        {{ recipe.description }}
                        <div class="show-more-less">
                            <span
                                :data-recipe="index"
                                @click="handleShowMore"
                            >
                                ... show less
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div class="recipe-button-container">
                <div 
                    class="see-recipe-button"
                    :data-id="recipe.id"
                    @click="handleShowRecipe"
                >
                    🔍
                </div>
            </div>
        </div>
        <div
            class="spacer"
            @click="handleClose"
        ></div>
    </section>
</template>

<style scoped>
.spacer {
    height: 100%;
}
.overlay {
    background: linear-gradient(rgba(0, 0, 0, 0.554), rgba(128, 128, 128, 0));
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: -2000px;
    opacity: 0;
    transition: 
        ease .4s top,
        ease 1s opacity;
        ;
}
.recipes-container {
    z-index: 2;
    padding-top: .3rem;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    top: -2000px;
    transition: 
        ease .4s top
        ;
}
.show {
    top: 0;
    opacity: 1;
    transition: 
        ease .4s top
        ;
}
.recipe-block {
    display: flex;
}
.recipe {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: .5rem 0;
    margin-bottom: .51rem;
    border-bottom: solid 1px gray;
    box-shadow: 0 .3rem .5rem rgba(0, 0, 0, .13);
    min-height: 90px;
    max-width: 800px;
}
.title  {
    color: #fff;
    padding: .3rem;
    margin-right: 1rem;
    margin-left: .51rem;
    min-width: 110px;
    background-color: rgba(133, 133, 133, 0.527);
    background-size: cover;
}
.description {
    max-width: 300px;
    padding: .3rem;
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
    font-size: .71rem;
    color:#fff;
    --button-size: 2rem;
    height: var(--button-size);
    width: var(--button-size);
    display: grid;
    place-items: center;
    background-color: rgba(65, 215, 183, 0.594);
    border-radius: 50%;
    margin-right: .5rem;
    cursor: pointer;
}
.show-more-less {
    display: flex;
    justify-content: end;
    /* padding-bottom: 1rem; */
}
.show-more-less > span {
    font-weight: 800;
    cursor: pointer;
}
@media (min-width: 500px) {
    .description {
        max-width: 100%;
    }
    .recipe {
        min-height: auto
    }
}
</style>