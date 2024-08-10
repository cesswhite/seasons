<template>
    <ul class="h-auto mt-24 md:mt-0">
        <template v-for="(link, index) in my_work" :key="index">
            <li @mouseover="setDataToPreviewByHover(link)" @click="setDataToPreviewByClick(link)"
                class="cursor-pointer py-1 text-sm text-primary-800/70 hover:text-primary-800 dark:text-primary-500/60 dark:hover:text-primary-500">
                {{ index }}. {{ link.name }}
            </li>
        </template>
    </ul>
</template>

<script setup lang="ts">
import type { WorkInfo } from '~/types/index'

const emit = defineEmits(['hover', 'set'])
const app = useAppConfig()
const my_work = reactive<WorkInfo[]>(app.work)

function setDataToPreviewByHover(link: WorkInfo) {
    emit('hover', link)
}

function setDataToPreviewByClick(link: WorkInfo) {
    emit('set', link)
}
</script>
