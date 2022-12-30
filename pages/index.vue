<script setup>
const router = useRouter();

useHead({
  title: "UC Davis | Recipes Home",
});

function handleReroute() {
  window.open("https://jmarchinifarms.com/", "_blank");
  return;
}

function handleRoute() {
  router.push({
    path: "/recipe/3",
  });
}
</script>

<template>
  <div class="home-page">
    <div class="home-container">
      <div class="header">
        <UCDHLogo />
      </div>
      <div class="hero">
        <div class="hero-title">
          <div class="hero-main-text">
            <span>January</span>
            <h1>Warm Winter Salad with Pickled Red Beets and Blood Orange</h1>
          </div>
          <span @click="handleRoute" class="hero-cta">This month's recipes &nbsp; &#62;&#62;</span>
        </div>
      </div>
      <div class="main-content">
        <div class="info-card">
          <div class="csa-monthly-contents">
            <h2>January CSA Contents</h2>
            <i
              >January is a time when seasonal crops may be more limited, even in
              California. This month's CSA bag makes good use of year-round vegetables as
              well as limited seasonal varieties.</i
            >

            <h3>Year-Round</h3>
            <ul>
              <li>Treviso (J. Marchini Farms)</li>
              <li>Castelfranco (J. Marchini Farms)</li>
              <li>Rainbow Chard (Ratto Bros)</li>
              <li>Organic Butterball Potatoes (Riverdog Farm)</li>
              <li>Organic Red Beets (Terra Firma Farm)</li>
            </ul>
            <h3>Seasonal</h3>
            <ul>
              <li>Delicata Squash (Yeung Farm)</li>
              <li>Organic Blood Oranges (Twin Peaks Orchards)</li>
              <li>Brussels Sprouts (Half Moon Bay, CA)</li>
            </ul>
          </div>
          <div class="spotlight">
            <h2>Spotlight on</h2>
            <div class="spotlight-image" @click="handleReroute"></div>
            <p>
              J. Marchini specializes in Italian specialty produce, including a line of
              year-round and seasonal varieties of radicchio. For more information, visit
              _____
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-cta {
  cursor: pointer;
}
.spotlight-image {
  height: 80px;
  width: 300px;
  background-image: url("https://images.squarespace-cdn.com/content/v1/5ed5348d9f128313d67e1993/1598661190059-6ASUZHE5GVLN4LNFUV8Q/JMarchini-logo_200_blk.png?format=1500w");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}
.spotlight {
  border-top: 1px solid gray;
  margin-top: 2rem;
}
.info-card {
}
.unstyled-list {
  list-style: none;
  padding: 0;
}
.hero-main-text {
  margin-top: 5rem;
  margin-left: 1rem;
}
.hero-main-text > h1 {
  margin-top: 1.5rem;
  font-size: 3rem;
}
/* .logo {
    padding: 3rem;
    color: #002855;
    font-size: 1.75em;
    display: flex;
} */
/* .text {
    border-left: #002855 solid 1px;
    margin-left: 1rem;
    padding-left: 1rem;
} */
.home-page {
  display: flex;
  justify-content: center;
}
.home-container {
  max-width: 1000px;
}
.hero {
  height: 500px;
  margin: auto;
  background-color: rgba(128, 128, 128, 0.251);
  background-image: url("https://images.squarespace-cdn.com/content/v1/5ed5348d9f128313d67e1993/1592875305432-2W6PFJ18OE9Y3NF0SGML/banner-7117.jpg?format=1500w");
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: color-burn;
  display: flex;
  margin: 1rem 0;
  background-position: center;
}
h1 {
  font-size: 4rem;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
}
.hero-title {
  padding: 1rem;
  color: #fff;
  /* background: rgba(0, 0, 0, 0.49); */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.49), rgba(128, 128, 128, 0));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero-cta {
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(128, 128, 128, 0));
  padding: 0.3rem 1rem;
  width: 300px;
}
.main-content {
  padding: 2rem;
}
@media (min-width: 700px) {
  .hero {
    padding: 2rem;
  }
  .info-card {
    display: flex;
  }
  .spotlight {
    width: 400px;
    border-left: solid 1px gray;
    padding-left: 5rem;
    border-top: unset;
    margin-top: unset;
  }
  .csa-monthly-contents {
    padding-right: 6rem;
  }
  .hero-main-text {
    width: 500px;
  }
}
</style>
