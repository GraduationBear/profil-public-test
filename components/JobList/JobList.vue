<template>
  <h1>Products list</h1>
  <div 
    v-if="pending"
    class="spinner-wrapper"
  >
    <span class="loader"></span>
  </div>
  <div 
    v-else
    class="product-wrapper"
  >
  <p>list</p>
    <div v-for="job in jobsList.data" :key="job.id" class="card">
      <div class="title">{{ job.title }}</div>
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
