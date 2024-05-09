<template>
    <div class="flex flex-col justify-between align-baseline h-[23em]">
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
        <p v-if="job.crushes" class="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line">{{ job.crushes }}
        </p>
        <p v-else-if="!job.crushes && job.answer2"
            class="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line">
            {{ job.answer2 }}
        </p>
        <p v-else-if="!job.crushes && job.answer3"
            class="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line">
            {{ job.answer3 }}
        </p>
        <div class="flex flex-row align-middle justify-between">
            <div>
                <UTooltip class="flex flex-row gap-1" v-if="job.applicationEmail">
                    <template #text>
                        Vues
                    </template>
                    <UIcon class="size-6" name="ic:outline-remove-red-eye" dynamic />
                    <span>
                        {{ job.viewCount }}
                    </span>
                </UTooltip>
            </div>
            <div class="flex align-middle justify-end gap-1">
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
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    job: Object
})
const { job } = props;
</script>