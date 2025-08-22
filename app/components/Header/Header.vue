<template>
  <div
    class="w-[55%] flex flex-row items-center p-6 bg-[#131b16] bg-opacity-80 rounded-b-full"
  >
    <div class="mx-auto">
      <img
        src="/images/logo.png"
        alt="logo"
        class="w-[100px] h-[100px] my-auto absolute top-2 bottom-2"
      />
    </div>
    <ul class="flex space-x-4 justify-start w-[40%] mx-auto items-center">
      <li class="text-[#EBEBEB] font-bold text-sm">Timer</li>
      <li class="text-[#EBEBEB] font-bold text-sm">Report</li>
      <li class="text-[#EBEBEB] font-bold text-sm">Tasks</li>
      <li class="text-[#EBEBEB] font-bold text-sm">My Chain</li>
    </ul>
    <v-divider vertical class="mx-4" />
    <button
      class="text-[#EBEBEB] flex justify-center font-bold text-xs px-2 py-1 rounded-xl hover:bg-[#3d3d3d]"
    >
      <GlobeAsiaAustraliaIcon class="w-4 h-4" />
    </button>
    <v-divider vertical class="mx-4" />

    <div class="mr-auto">
      <button
        class="text-[#EBEBEB] flex justify-center font-semibold text-xs bg-[#0a120d] px-6 py-2 rounded-xl hover:bg-[#5e6863]"
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
