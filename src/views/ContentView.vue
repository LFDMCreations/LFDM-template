<template>
  
  <section>

  <div>
    <router-link :to="{name:'content', params:{ month: prevmonth, year: prevyear } }" class="text-sky-600">previous month</router-link> |
    <span class="text-lg font-sourcesans underline text-indigo-500 decoration-indigo-500 decoration-double " > {{ months[route.params.month] }} {{ route.params.year }} </span> |
    <router-link :to="{name:'content', params:{ month: nextmonth, year: nextyear } }" class="text-sky-600">next month</router-link> |
  </div>

  <div>  
    <h1>This is a page full of content</h1>
    <p class="w-96 mt-2"><span><FontAwesome icon="coffee" /> </span> <span class="ml-2 italic" > &lt;= That's a FontAwesome icon.</span></p>
    <p class="w-96 mt-2"><span class="italic">"FontAwesome"</span> is a component designed by the fontawesome team. Check the code of this text to see how to use it.</p>
    <p class="w-96 mt-2"><span class="italic">"Route params"</span> are available throughout the code and can be used for example in the api url.</p>
  </div>

  <div v-if="oneStore.user">
    <p class="w-96 mt-2">This is displayed because the user is set to true in Pinia. See <span class="italic">"Stores/oneStore.js"</span></p>
  </div>

  </section>

</template>

<script setup>

import { ref, computed , onMounted } from 'vue';
import { getData } from '@/composables/useApi.js'
import { useRoute } from 'vue-router'
import { useOneStore } from '../stores/oneStore';
const oneStore = useOneStore()
const route = useRoute()

const users = ref ({})

const getContent = () => {
  getData.get('/content')
  .then((response) => {
    users.value = response.data.users
  })
  .catch((error) => { 
    console.log(error)
  })
}

onMounted(() => {
  getContent()
})

const months = {
  1 : 'janvier',
  2 : 'février',
  3 : 'mars',
  4 : 'avril',
  5 : 'mai',
  6 : 'juin',
  7 : 'juillet',
  8 : 'août',
  9 : 'septembre',
  10 : 'octobre',
  11 : 'novembre',
  12 : 'décembre'
}


const prevyear =  computed(() => {
  if ( parseInt(route.params.month ) === 1 ) {
    return parseInt( route.params.year ) - 1
  } else {
    return parseInt( route.params.year )
  }
})

const nextyear = computed(() => {
  if ( parseInt(route.params.month) === 12  ) {  
    return parseInt( route.params.year ) + 1
  } else {
    return parseInt( route.params.year )
  }
})

const nextmonth = computed(() => {
  switch ( parseInt(route.params.month) ) {
    case 12 :
      return 1
    default :
      return parseInt(route.params.month) + 1
  }
})

const prevmonth = computed(() => {
  switch ( parseInt(route.params.month) ) {
    case 1 :
      return 12
    default :
      return parseInt(route.params.month) - 1
  }
})

</script>
