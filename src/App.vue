<template>
  <TheNavigation />

  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";
</script>
