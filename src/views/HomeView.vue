<template>
  <div class="home">
    <div class="home__content">
      <CatalogFilters />
      <CatalogFeed />
    </div>
    <div class="home__paging">
      <button class="paging__prev button">{{ "<<" }}</button>
      <p class="paging__page">1 2 3 4 5 6 7 8 9 ... 40</p>
      <button class="paging__next button">{{ ">>" }}</button>
    </div>
  </div>
</template>

<script>
import CatalogFeed from '@/components/CatalogFeed.vue';
import CatalogFilters from '@/components/CatalogFilters.vue';

export default {
  name: 'HomeView',
  components: {
    CatalogFilters,
    CatalogFeed
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  margin: 0 auto;
}

.home__content {
  display: flex;
}

.home__paging {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
}

.home__paging .button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 43px;
  border: 1px solid #000;
  border-radius: 30px;
  background-color: #FFF;
}

.paging__page {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
}

@font-face {
  font-family: Inter;
  src: url(/public/fonts/Inter-VariableFont_opsz,wght.ttf);
}
</style>
