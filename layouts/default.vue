<script setup>
const media = useState('media-query');
</script>

<template>
    <div class="app-layout">
        <SearchBar />
        <SearchResults />
        <section>
            <slot />
        </section>
        <AppFooter v-if="media" />
        <HomeFooter v-else />
    </div>
</template>

<style scoped>
.app-layout {
    display: grid;
    grid-template-rows: auto 0 1fr auto;
    height: 100vh;
    position: relative;
}
</style>