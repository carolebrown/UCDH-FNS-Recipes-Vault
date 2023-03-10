<script setup>
const media = useState('media-query');
const recipes = useState('recipes');
const searchOpened = useState('search-opened');
const searched = useState('searched', () => false);

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
    router.push({
        path: `/recipe/${e.target.dataset.id}`
    })
    setTimeout(() => {
        handleClose();
    }, 100);
}

function truncated(textLength) {
    return !!(media.value && textLength > 80 || !media.value && textLength > 200)
}

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
    <!-- <div 
        v-if="recipes.length === 0 && searchOpened && !searchFocused" 
        class="no-results"
        @click="handleClose"
    >
        No Results
    </div> -->
    <section class="recipes-container" :class="{
        'show': searchOpened
    }">
        <div v-if="!recipes.length && searched" class="no-results">
            No results
        </div>
        <div
            v-for="(recipe, index) in recipes" :key="index"
            class="recipe"
        >
            <div class="recipe-block">
                <div 
                    class="recipe-image" 
                    :style="{
                        'background-image': `url(${recipe.image})`,
                    }"
                    :data-id="recipe.id"
                    @click="handleShowRecipe" 
                >
                    
                </div>
                <div class="description">
                    <span v-if="!recipe.showMore">
                        <h4
                            :data-id="recipe.id"
                            @click="handleShowRecipe" 
                        >
                            {{recipe.name}}
                        </h4>
                        {{ truncate(recipe.description) }}
                        <br>
                        <div class="show-more-less">
                            <span
                                v-if="truncated(recipe.description?.length)"
                                :data-recipe="index"
                                @click="handleShowMore" 
                            >
                                ... show more
                            </span>
                        </div>
                    </span>
                    <span v-else >
                        <h4
                            :data-id="recipe.id"
                            @click="handleShowRecipe" 
                        >
                            {{recipe.name}}
                        </h4>
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
                    ????
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
.no-results {
    color: #fff;;
    /* position: absolute; */
    text-align: center;
    font-weight: bold;
    font-size: xx-large;
    padding: 3rem 5rem;
    z-index: 23;
    background-color: rgba(0, 0, 0, 0.623);
}
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
    max-width: 800px;
    /* height: 190px; */
}
.recipe-image  {
    color: #fff;
    padding: .3rem;
    margin-right: 1rem;
    margin-left: .51rem;
    min-width: 110px;
    max-width: 150px;
    height: 70px;
    background-color: rgba(133, 133, 133, 0.527);
    background-size: cover;
    cursor: pointer;
}
h4 {
    margin: 0;
    margin-bottom: .3rem;
    cursor: pointer;
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