<template>
    <div class="default-layout">
        <nav>
            <ul>
                <li>home</li>
                <li>recipes</li>
                <li>about</li>
            </ul>
            <ul>
                <li>login</li>
                <li>logout</li>
            </ul>
        </nav>
        <slot />
        <HomeFooter />
    </div>
</template>

<style scoped>
.default-layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
}

ul {
    padding-inline-start: .1rem;
}

nav {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: rgb(60, 187, 144);
    padding-left: 1rem;
}

nav > ul {
    display: flex;
    list-style-type: none;
}

nav > ul > li {
    padding: 0 .5rem;
}

footer {
    color: white;
    background-color: rgb(71, 18, 137);
}
</style>