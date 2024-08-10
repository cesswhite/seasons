<template>
    <div id="spring-container" class="grid grid-cols-2 h-auto min-h-dvh bg-primary-50/50 dark:bg-primary-950/60">
        <div class="col-span-full md:col-span-1 px-8 pt-24 pb-4 md:py-24 2xl:px-36 2xl:py-20">
            <div class="flex flex-col w-full h-full items-start justify-between">
                <SpringMyInfo v-bind="info" />
                <SpringWorkList @hover="(value) => setDataToPreviewHover(value)"
                    @set="(value) => setDataToPreviewClick(value)" />
            </div>
        </div>
        <div class="hidden xl:inline-block col-span-full md:col-span-1">
            <Transition name="fade">
                <SpringPreview v-if="data_preview.name" v-bind="data_preview" />
                <USkeleton v-else />
            </Transition>
        </div>
        <UModal v-model="isModalPreviewOpen" fullscreen>
            <div class="p-1 relative h-full">
                <div class="absolute top-1 right-10 z-10">
                    <UButton @click="isModalPreviewOpen = false" icon="i-heroicons-x-mark" size="lg" color="white"
                        variant="link" />
                </div>
                <SpringPreview v-bind="data_preview" />
            </div>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import type { MyInfo, WorkInfo } from '~/types/index';

const isModalPreviewOpen = ref(false)
const app = useAppConfig()
const info = reactive<MyInfo>({
    img: app.data.img,
    name: app.data.name,
    jobTitle: app.data.jobTitle,
    bio: app.data.bio,
    ...app.social
})

const data_preview = ref<WorkInfo>({} as WorkInfo)

function setDataToPreviewHover(value: WorkInfo) {
    data_preview.value = value
}

function setDataToPreviewClick(value: WorkInfo) {
    data_preview.value = value
    isModalPreviewOpen.value = true
}
</script>
