<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="flex flex-row" >
      <button @click="getdata" class="border-2 border-sky-500 border-solid p-3 rounded-lg w-64"> Get </button>
      <button @click="postdata" class="border-2 border-sky-500 border-solid p-3 rounded-lg w-64 ml-6"> Post </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { getData, postData } from "@/composables/useApi";

const data = reactive({
  returnGet: '',
  returnPost: ''
})

const getdata = async () => {
  try {
    const response = await getData.get('/bonjour')
    data.returnGet = response.data.response;
  } catch (error) {
    console.log(error)
  }
}

const postdata = async () => {
  try {
    const response = await postData.post("/post/aurevoir", {
      nom: "LFDM Créations"
    })
    data.returnPost = response.data.nom
  } catch (error) {
    console.log (error)
  }
};
</script>
