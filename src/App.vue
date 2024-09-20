<script setup>
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
</script>

<template>
  <div>
    <Header
      v-if="
        route.name !== 'signin' &&
        route.name !== 'signup' &&
        route.name !== 'error'
      "
    />

    <router-view />

    <Footer
      v-if="
        route.name !== 'signin' &&
        route.name !== 'signup' &&
        route.name !== 'error'
      "
    />
  </div>
</template>
