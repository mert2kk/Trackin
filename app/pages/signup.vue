<template>
  <div
    class="flex flex-col items-center justify-center bg-slate-50 bg-opacity-20 p-8 rounded-3xl"
  >
    <div class="mx-auto">
      <RouterLink to="/">
        <img
          src="/images/logo.png"
          alt="logo"
          class="w-[120px] h-[120px] customSm:w-[100px] customSm:h-[1000px]"
        />
      </RouterLink>
    </div>
    <!-- <h3 class="font-bold mb-4">Sign Up</h3> -->
    <div>
      <v-text-field
        label=" Email"
        required
        type="email"
        variant="solo"
        rounded="lg"
        min-width="300px"
      ></v-text-field>
      <v-text-field
        label=" Password"
        required
        type="password"
        variant="solo"
        rounded="lg"
        min-width="300px"
      ></v-text-field>
      <v-text-field
        label="Confirm Password"
        required
        type="password"
        variant="solo"
        rounded="lg"
        min-width="300px"
      ></v-text-field>
    </div>
    <button
      class="bg-[#000000] rounded-xl text-[#EBEBEB] px-6 py-2 font-semibold mt-6"
    >
      Create Account
    </button>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
