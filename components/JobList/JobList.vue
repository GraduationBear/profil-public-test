<template >  
  
  <h1 class="mb-2 text-3xl font-extrabold text-white m-5">Available jobs</h1>

  <div v-if="pending" >
    <span class="loader"></span>
  </div>
  <div v-else class="flex flex-row justify-center flex-wrap">
    <div v-for="job in jobsList.data" class="block w-80 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.title }}</h2>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ job.crushes }}</p>
    </div>
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

<style>

</style>