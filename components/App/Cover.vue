<template>
    <div class="cursor-pointer w-full h-full relative flex items-center justify-center">
        <div class="absolute top-0 left-0 w-full h-full z-10 bg-black/5 group">
            <NuxtImg :src="props.bgImgUrl" alt="image for every season"
                class="w-full h-full object-cover object-center saturate-0 group-hover:saturate-100" />
        </div>
        <div class="relative w-auto mx-auto font-semibold text-4xl z-30 text-white">
            <h1> {{ props.name }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    bgImgUrl: string;
    name: string
}>()
</script>
