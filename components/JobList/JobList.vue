<template>
  <h1 class="mb-2 text-3xl font-extrabold text-white m-5">Available jobs</h1>
  <div v-if="pending">
    <span class="loader"></span>
  </div>
  <div v-else class="flex flex-row justify-center flex-wrap" v-if="jobsList">
    <a v-for="job in jobsList.data"
      class="cursor-pointer block w-[22rem] pt-4 p-5 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

      <div class="flex flex-col justify-between align-baseline h-[15rem]">
        <div class="flex gap-2 items-baseline justify-start ">
          <UTooltip :popper="{ resize: false }">
            <template #text>
              <span>{{ job.status }}</span>
            </template>
            <div v-if="job.status == 'active'" class="bg-green-500 h-4 w-4 rounded-full text-center"></div>
            <div v-else class="bg-red-500 h-4 w-4 rounded-full text-center"></div>
          </UTooltip>
          <h2 class="mb-2 w-[90%] text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.title }}</h2>
        </div>
        <p class="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line">{{ job.crushes }}</p>
        <div class="flex flex-row gap-1">
          <UTooltip v-if="job.applicationEmail">
            <template #text>
              <span>Application: {{ job.applicationEmail }}</span>
            </template>
            <UIcon class="size-6" name="ic:baseline-email" dynamic />

          </UTooltip>
          <UTooltip v-if="job.contactEmail">
            <template #text>
              <span>Contact: {{ job.contactEmail }}</span>
            </template>
            <UIcon class="size-6" name="ic:baseline-mark-email-read" dynamic />
          </UTooltip>
        </div>
        {{ job.validatedAt }}
      </div>
    </a>
  </div>
</template>


<script setup lang="ts">
const { $api } = useNuxtApp();

const {
  data: jobsList,
  pending,
  error
} = await $api.jobs.getJobs();

</script>

<style></style>