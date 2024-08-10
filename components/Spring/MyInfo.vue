<template>
    <div class="w-full h-auto relative flex items-center justify-center">
        <div class="flex flex-col gap-1 ">
            <div class="rounded-xl overflow-hidden size-32 border border-primary-500/50 dark:border-primary-500/20">
                <NuxtImg :src="props.img" class="w-full h-full object-cover object-center" />
            </div>
            <h1 class="font-serif text-2xl font-medium text-primary-700 dark:text-primary-500">
                {{ props.name }}
            </h1>
            <h2 class="font-serif text-lg font-medium text-primary-700/60 dark:text-primary-500/60">
                {{ props.jobTitle }}
            </h2>
            <p v-if="bio" class="mt-8 font-serif text-lg font-medium text-primary-700/80 dark:text-primary-500/80">
                {{ props.bio }}
            </p>
            <AppSocialNetwork v-bind="social" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MyInfo, SocialNetwork } from '~/types/index'
const app = useAppConfig()
const props = defineProps<MyInfo>()
const social = reactive<SocialNetwork>(app.social)
</script>
