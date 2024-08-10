<template>
    <div class="w-full h-auto">
        <UCarousel ref="carouselRef" :items="my_work" :ui="{
            item: 'basis-full', indicators: {
                wrapper: 'absolute ? bottom-0 mt-4 z-[100]'
            }
        }" arrows>
            <template #default="{ index, item }">
                <div class="w-full h-full relative">
                    <NuxtImg @click="previewPhoto(item)" :src="item.img"
                        class="w-full h-dvh object-center object-cover transform-gpu transition-transform will-change-transform saturate-150" />
                    <div class="absolute bottom-0 right-0 z-50">
                        test
                    </div>
                </div>
            </template>
            <template #prev="{ onClick, disabled }">
                <div class="hidden md:inline-block absolute top-1/2 left-4 z-[100]">
                    <UButton aria-label="prev" :ui="{ rounded: 'rounded-full' }" :disabled="disabled" @click="onClick"
                        icon="i-heroicons-arrow-long-left" size="xl" color="primary"
                        :class="{ '!opacity-40': disabled }" class="w-auto" variant="soft" />
                </div>
            </template>
            <template #next="{ onClick, disabled }">
                <div class="hidden md:inline-block absolute top-1/2 right-4 z-[100]">
                    <UButton aria-label="next" :ui="{ rounded: 'rounded-full' }" :disabled="disabled" @click="onClick"
                        icon="i-heroicons-arrow-long-right" size="xl" color="primary"
                        :class="{ '!opacity-40': disabled }" class="w-auto flex items-center justify-end"
                        variant="soft" />
                </div>
            </template>
        </UCarousel>
    </div>
</template>

<script setup lang="ts">
import type { WorkInfo } from '~/types/index'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smallerOrEqual('sm')
const isOpenModalToPreviewPhoto = ref(false)
const current_image = ref<WorkInfo>()

function previewPhoto(data: WorkInfo) {
    isOpenModalToPreviewPhoto.value = true
    current_image.value = data
}
const app = useAppConfig()
const my_work = reactive<WorkInfo[]>(app.work)

const carouselRef = ref()

onMounted(() => {
    if (smAndSmaller.value) {
        setInterval(() => {
            if (!carouselRef.value) return

            if (carouselRef.value.page === carouselRef.value.pages) {
                return carouselRef.value.select(0)
            }

            carouselRef.value.next()
        }, 3000)
    }

})
</script>