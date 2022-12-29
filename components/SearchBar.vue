<script setup>
const searchInputRef = ref(null);
const search = useState('search', () => 'all uc davis recipes');
const searchFocused = useState('search-focus', () => false);
const searchOpened = useState('search-opened',() =>false);
const searched = useState('searched', () => false);
const recipes = useState('recipes', () => []);
const media = useState('media-query',() => '');

async function handleSearch(e) {
    e.preventDefault()
    searchInputRef.value.blur();
    if (!search.value) {
        search.value = 'all uc davis recipes'
    }
    try {
        const resp = await $fetch(`/api/recipes/${search.value}`, {
            method: 'POST',
        })
        if (Array.isArray(resp)) {
            recipes.value = [ ...resp.data];
        } else {
            recipes.value = resp.data;
        }
        recipes.value.forEach(recipe => {
            recipe.showMore = false;
        })
    } catch (error) {
        throw new Error(error);
    } finally {
        searched.value = true;
    }
}

function handleInput(e) {
    search.value = e.target.value
}

function focusSelect (e) {
    e.preventDefault();
    searchFocused.value = true;
    if (media.value) return;
    searchInputRef.value.select();
}

function closeSearch () {
    searchFocused.value = false;
}

function handleCloseResults() {
    searchOpened.value = false;
    searchInputRef.value.blur();
}

watch(searchFocused, () => {
    if (searchFocused.value) {
        searchOpened.value = true;
        window.scroll({
            behavior: 'smooth',
            top: 0,
        })
    }
})

onMounted(() => {
    media.value = window.matchMedia('(max-width: 670px)').matches;
    searchInputRef.value.addEventListener('focusin', focusSelect)
    searchInputRef.value.addEventListener('focusout', closeSearch)
});
onBeforeUnmount(() => {
    searchInputRef.value.removeEventListener('focusin', focusSelect);
    searchInputRef.value.removeEventListener('focusout', closeSearch);
})
</script>

<template>
    <div class="search-bar" :class="{
        'search-bar-focused': searchFocused
    }">
        <input
            ref="searchInputRef"
            type="text"
            :placeholder="media ? '🔍' : 'search'"
            @keyup.enter="handleSearch"
            @keyup.esc="handleCloseResults"
            @change="handleInput"
        >
        <div class="nav-section" v-if="!searchFocused">
            <nav>
                <ul>
                    <li>
                        <NuxtLink href="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink href="/recipes">Recipes</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink href="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div v-if="media && searchOpened && !searchFocused" class="right-side" >
            <span @click="handleCloseResults">❌</span>
        </div>
    </div>
</template>

<style scoped>
.right-side {
    display: grid;
    justify-content: end;
    align-items: center;
    height: 100%;
    width: 100%;
}
.right-side span {
    padding-right: 1rem;
    cursor: pointer;
}
li * {
    text-decoration: none;
    color: gray;
}
li *:active {
    color: blue;
}
.nav-section > nav > ul {
    padding-inline-start: 0;
    display: flex;
    justify-content: center;
    list-style: none;
}
.nav-section > nav > ul > li {
    padding: .2rem .5rem;
    font-size: 1rem;
    font-weight: bold;
}
.search-bar {
    top: 0;
    position: sticky;
    z-index: 20;
    display: grid;
    align-items: center;
    grid-template-columns: 80px 2fr 80px;
    gap:0;
    transition: 
        ease-out .11s height,
        ease-out .11s background-color
        ;
    height: 60px;
    background-color: #fff;
}

.search-bar-focused {
    background-color: rgb(203, 203, 203);
    height: 90px;
    display: flex;
    justify-content: center;
}

input {
    padding: .5rem;
    border: none;
    border-radius: 5rem;
    margin: 1rem;
    width: 15px;
    max-width: 500px;
    background-color: darkgray;
    color: #fff;
    transition: 
        ease .11s transform, 
        ease .21s width,
        ease .21s font-size,
        ease .51s background-color,
        ease .51s color
        ;
}

input::placeholder {
    color: #fff;
}

input:active::placeholder,
input:focus::placeholder {
    color: gray;
}

input:active,
input:focus {
    color: gray;
    background-color: #fff;
    font-size: 2rem;
    border: none;
    outline: none;
    width: 100%;
    max-width: 500px;
    border-radius: .5rem;
}

@media (min-width: 670px) {
    input {
        width: 40px;
        padding: .5rem 1rem;
    }
    .nav-section > nav > ul > li {
        padding: .2rem 1rem;
        font-size: 1rem;
        font-weight: bold;
    }
}
</style>