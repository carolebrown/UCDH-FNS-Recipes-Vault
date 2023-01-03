<template>
    <div class="logo">
        <img src="~/assets/images/UCDavisHealth.svg" alt="test" width="140">
        <div class="text">
            Food and
            <br>
            Nutrition Services
        </div>
    </div>
</template>

<style scoped>
.logo {
    padding: 3rem;
    color: #022851;
    font-size: 1.75em;
    display: flex;
}
.text {
    border-left: #022851 solid 1px;
    margin-left: 1rem;
    padding-left: 1rem;
}
@media (max-width: 670px) {
    .logo {
        padding: 1rem .3rem;
        margin-left: 1.3rem;
        align-items: center;
        padding-bottom: 2rem;
    }
    .text {
        font-size: 1.2rem;
    }
}
</style>