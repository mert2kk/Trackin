<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="680">
      <template v-slot:activator="{ props: activatorProps }">
        <div
          class="flex w-8 h-8 hover:bg-[#EBEBEB] rounded-xl justify-center items-center"
          v-bind="activatorProps"
        >
          <CogIcon v-bind="activatorProps" />
        </div>
      </template>

      <v-card title=" Timer Settings" class="text-center" rounded="lg">
        <v-card-text class="flex">
          <v-row class="pt-8">
            <v-col cols="12" sm="3">
              <v-text-field
                label=" Work Duration"
                required
                type="number"
                suffix="min"
                variant="solo"
                rounded="xl"
                min-width="140px"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="3">
              <v-text-field
                label="Short Break"
                type="number"
                suffix="min"
                variant="solo"
                rounded="xl"
                min-width="140px"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="3">
              <v-text-field
                label="Long Break"
                type="number"
                suffix="min"
                variant="solo"
                rounded="xl"
                min-width="140px"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="3">
              <v-text-field
                label="Work Sets"
                type="number"
                variant="solo"
                rounded="xl"
                min-width="140px"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
          <v-btn
            color="#1E3327"
            text="Set"
            variant="tonal"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { CogIcon } from "@heroicons/vue/24/solid";
import { shallowRef } from "vue";

const dialog = shallowRef(false);
</script>

<style></style>
