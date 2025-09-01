<template>
  <div
    class="w-[900px] flex items-center bg-[#131b16] bg-opacity-80 rounded-b-full customSm:flex-col"
  >
    <div class="mx-auto">
      <RouterLink to="/">
        <img
          src="/images/logo.png"
          alt="logo"
          class="w-[90px] h-[90px] customSm:w-[50px] customSm:h-[50px]"
        />
      </RouterLink>
    </div>
    <ul class="flex space-x-4 justify-center w-[40%] items-center">
      <li class="text-[#EBEBEB] font-bold text-sm customSm:text-xs">
        <RouterLink to="/">Timer</RouterLink>
      </li>
      <li class="text-[#EBEBEB] font-bold text-sm customSm:text-xs">
        <RouterLink to="/report">Report</RouterLink>
      </li>
      <li class="text-[#EBEBEB] font-bold text-sm customSm:text-xs">
        <RouterLink to="/tasks">Tasks</RouterLink>
      </li>
      <li class="text-[#EBEBEB] font-bold text-sm customSm:text-xs">
        <RouterLink to="/mychain">MyChain</RouterLink>
      </li>
    </ul>

    <div class="mx-auto flex items-center customSm:mt-2">
      <RouterLink
        class="text-[#EBEBEB] flex justify-center font-semibold text-xs bg-[#0a120d] px-6 py-2 rounded-xl hover:bg-[#5e6863] hover:scale-105 transition-all"
        to="/signin"
      >
        <UserIcon class="w-4 h-4 inline mr-2" />
        Sign In
      </RouterLink>
      <button
        class="text-[#EBEBEB] flex ml-3 justify-center font-bold text-xs px-2 py-1 rounded-lg hover:bg-[#EBEBEB] hover:text-[#131b16]"
      >
        <GlobeAsiaAustraliaIcon class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserIcon, GlobeAsiaAustraliaIcon } from "@heroicons/vue/24/solid";
</script>

<style></style>
