<template>
    <footer>
        <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Add</li>
            <li>Comments</li>
            <li>Settings</li>
        </ul>
    </footer>
</template>

<style scoped>
ul {
    padding-inline-start: .1rem;
}

footer {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgb(60, 187, 144);
}

footer > ul {
    display: flex;
    list-style-type: none;
}

footer > ul > li {
    padding: 0 .5rem;
}
</style>