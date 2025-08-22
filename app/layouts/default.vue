<template>
  <VApp>
    <VMain>
      <div class="relative w-screen h-screen overflow-hidden">
        <!-- Video background -->
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>

        <!-- Content on top of the video -->
        <div class="relative z-10 w-full flex justify-center">
          <Header />
        </div>

        <div
          class="relative z-10 flex items-center justify-center w-full h-full"
        >
          <NuxtPage />
        </div>
      </div>
    </VMain>
  </VApp>
</template>

<script setup>
import { VApp, VMain } from "vuetify/components";
import Header from "../components/Header/Header.vue";
</script>
