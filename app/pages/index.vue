<template>
  <div class="p-4 bg-gray-100">
    <h1 class="text-3xl font-bold underline text-blue-600">
      Hello Tailwind 4 + Nuxt!
    </h1>
  </div>
    <VBtn color="secondary" @click="handleClick">
      Another Vuetify Button
    </VBtn>
   
</template>

<script setup lang="ts">
import { VBtn } from 'vuetify/components';

function handleClick() {
  alert("Vuetify button clicked!");
}
</script>
