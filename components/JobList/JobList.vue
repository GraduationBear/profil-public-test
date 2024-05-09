<template>
  <div v-if="pending">
    <span class="loader"></span>
  </div>
  <div v-else class="flex flex-row justify-center flex-wrap pt-10" v-if="jobsList">
    <div class="cursor-pointer w-[27rem] m-2 flex flex-col justify-around">
      <a class="cursor-pointer w-full mb-4 p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100
        dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h2 class="mb-2 text-4xl font-bold tracking-tight flex justify-between text-gray-900 dark:text-white">Offres
          d'emploi<span>🎓</span>
        </h2>
      </a>

      <a class="cursor-pointer p-5 h-full flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100
        dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h2 class="mb-2 w-[90%] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">This website
          was design
          by <span class="text-lg-">Maxime Miquel</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore quo nemo vitae labore aperiam impedit
          alias velit totam veritatis animi, atque laboriosam!</p>
      </a>
    </div>
    <a v-for="job in jobsList.data"
      class="cursor-pointer block w-[27rem] pt-4 p-5 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <JobCard :job="job" />
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
