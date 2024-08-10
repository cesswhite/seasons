<template>
    <div class="w-full h-dvh">
        <UCarousel arrows :items="my_work" :ui="{ item: 'basis-full md:basis-1/3 2xl:basis-1/4 overflow-hidden' }">
            <template #default="{ index, item }">
                <div class="w-full h-full">
                    <NuxtImg @click="previewPhoto(item)" :src="item.img"
                        class="w-full h-dvh object-center object-cover cursor-pointer transform-gpu transition-transform will-change-transform brightness-[0.75] hover:scale-105 hover:brightness-100 hover:saturate-150" />
                </div>
            </template>
            <template #prev="{ onClick, disabled }">
                <div class="absolute top-1/2 left-4">
                    <UButton aria-label="prev" :ui="{ rounded: 'rounded-full' }" :disabled="disabled" @click="onClick"
                        icon="i-heroicons-arrow-long-left" size="xl" color="primary"
                        :class="{ '!opacity-40': disabled }" class="w-auto" variant="soft" />
                </div>
            </template>
            <template #next="{ onClick, disabled }">
                <div class="absolute top-1/2 right-4">
                    <UButton aria-label="next" :ui="{ rounded: 'rounded-full' }" :disabled="disabled" @click="onClick"
                        icon="i-heroicons-arrow-long-right" size="xl" color="primary"
                        :class="{ '!opacity-40': disabled }" class="w-auto flex items-center justify-end"
                        variant="soft" />
                </div>
            </template>
        </UCarousel>
        <UModal v-model="isOpenModalToPreviewPhoto" fullscreen>
            <div class="h-full w-full relative">
                <div class="absolute top-8 right-8 z-10">
                    <UButton @click="isOpenModalToPreviewPhoto = false" variant="soft" size="lg" color="black"
                        icon="i-heroicons-x-mark">
                    </UButton>
                </div>
                <div class="absolute p-1 w-full h-full top-0 left-0 rounded-md overflow-hidden">
                    <NuxtImg :src="current_image?.img" class="w-full h-full
                 object-center object-cover saturate-150" />
                </div>
                <div
                    class="absolute bottom-0 left-0 p-12 z-10 bg-gradient-to-t from-primary-950 to-transparent w-full h-1/2 flex items-start justify-end flex-col">
                    <h1 class="text-2xl text-primary-50 font-semibold">{{ current_image?.name }}</h1>
                    <p class="text-base text-primary-50 font-normal">{{ current_image?.description }}</p>
                </div>
            </div>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import type { WorkInfo } from '~/types/index'

const app = useAppConfig()
const my_work = reactive<WorkInfo[]>(app.work)
const isOpenModalToPreviewPhoto = ref(false)
const current_image = ref<WorkInfo>()

function previewPhoto(data: WorkInfo) {
    isOpenModalToPreviewPhoto.value = true
    current_image.value = data
}
</script>