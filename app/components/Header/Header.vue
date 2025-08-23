<template>
  <div
    class="w-[900px] flex flex-row items-center bg-[#131b16] bg-opacity-80 rounded-b-full xSmall:flex-col"
  >
    <div class="mx-auto">
      <img src="/images/logo.png" alt="logo" class="w-[90px] h-[90px]" />
    </div>
    <ul class="flex space-x-4 justify-center w-[40%] items-center">
      <li class="text-[#EBEBEB] font-bold text-sm">Timer</li>
      <li class="text-[#EBEBEB] font-bold text-sm">Report</li>
      <li class="text-[#EBEBEB] font-bold text-sm">Tasks</li>
      <li class="text-[#EBEBEB] font-bold text-sm">My Chain</li>
    </ul>
    <button
      class="text-[#EBEBEB] flex mr-3 justify-center font-bold text-xs px-2 py-1 rounded-lg hover:bg-[#EBEBEB] hover:text-[#131b16]"
    >
      <GlobeAsiaAustraliaIcon class="w-4 h-4" />
    </button>

    <div class="mr-auto">
      <button
        class="text-[#EBEBEB] flex justify-center font-semibold text-xs bg-[#0a120d] px-6 py-2 rounded-xl hover:bg-[#5e6863] hover:scale-105 transition-all"
      >
        <UserIcon class="w-4 h-4 inline mr-2" />
        Sign In
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserIcon, GlobeAsiaAustraliaIcon } from "@heroicons/vue/24/solid";
</script>

<style></style>
