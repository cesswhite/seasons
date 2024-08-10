<template>
    <div class="w-full h-auto px-4">
        <div class="w-full grid grid-cols-12 gap-4">
            <template v-for="(work, index) in my_work" :key="index">
                <div @click="previewPhoto(work)"
                    class="cursor-pointer col-span-full md:col-span-6 lg:col-span-4 2xl:col-span-3 group">
                    <NuxtImg :src="work.img"
                        class="w-full h-full object-cover object-center saturate-50 group-hover:saturate-150" />
                </div>
            </template>
        </div>
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
                    <h1 class="text-2xl text-primary-50  font-semibold">{{ current_image?.name }}</h1>
                    <p class="text-base text-primary-50  font-normal">{{ current_image?.description }}</p>

                </div>
            </div>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import type { WorkInfo } from '~/types/index'
const isOpenModalToPreviewPhoto = ref(false)
const current_image = ref<WorkInfo>()

function previewPhoto(data: WorkInfo) {
    isOpenModalToPreviewPhoto.value = true
    current_image.value = data
}
const app = useAppConfig()
const my_work = reactive<WorkInfo[]>(app.work)
</script>