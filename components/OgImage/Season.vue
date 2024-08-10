<script setup lang="ts">
withDefaults(defineProps<{
    title?: string;
    img?: string;
}>(), {
    title: 'Season',
})
</script>

<template>
    <div class="h-full w-full relative">
        <NuxtImg :src="img" class="w-full h-full absolute top-0 left-0 z-10 object-cover object-center" />
        <div class="absolute bottom-0 left-0 w-full h-auto z-20  px-24 py-16 flex flex-row items-end justify-between"
            :style="{ background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0) 100%)' }">
            <div class="w-1/2 text-4xl text-white font-medium font-sentient">
                {{ title }}
            </div>
        </div>
    </div>
</template>