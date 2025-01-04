<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <router-view/>
  <AppFooter />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
