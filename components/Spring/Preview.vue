<template>
    <div class="relative w-full h-full">
        <div class="rounded-md overflow-hidden relative w-full h-full xl:absolute top-0 left-0">
            <Transition>
                <NuxtImg :src="props.img" class="w-full h-full object-cover object-center" loading="lazy" />
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { WorkInfo } from '~/types';
const props = defineProps<WorkInfo>()
</script>