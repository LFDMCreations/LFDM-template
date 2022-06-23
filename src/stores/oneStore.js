import { defineStore } from "pinia";

// Possibly import and deconstruct functions from @/api.js and use
// those functions in the "actions" section of the store, 
// updating the state according to the answer of the api call.

export const useOneStore = defineStore("oneStore", {
  state: () => {
    return {
      user: true
    }
  }
  // actions
  // getters
})