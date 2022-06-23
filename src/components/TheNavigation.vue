<template>
  
  <nav>

    <router-link :to="{name: 'home'}" class="text-sky-600" >home</router-link> |
    <router-link :to="{name: 'about'}" class="text-sky-600">about</router-link> |
    <router-link :to="{name: 'content', params:{month: month, year: year} }" class="text-sky-600">content</router-link>

  </nav>

</template>

<script setup>

let date = new Date()
let month = date.getMonth() + 1
let year = date.getFullYear()

</script>