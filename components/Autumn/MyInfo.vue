<template>
    <div class="w-full h-auto relative flex items-center justify-center py-12">
        <div class="flex flex-col items-center justify-center gap-1 ">
            <div class="rounded-xl overflow-hidden size-32 border border-primary-500/50 dark:border-primary-500/20">
                <NuxtImg :src="info.img" class="w-full h-full object-cover object-center" />
            </div>
            <h1 class="font-serif text-2xl font-medium text-primary-700 dark:text-primary-500">
                {{ info.name }}
            </h1>
            <h2 class="font-serif text-lg font-medium text-primary-700/60 dark:text-primary-500/60">
                {{ info.jobTitle }}
            </h2>
            <p v-if="info.bio"
                class="mb-4 w-5/6 lg:w-1/2 mx-auto text-center mt-8 font-serif text-lg font-medium text-primary-700/80 dark:text-primary-500/80">
                {{ info.bio }}
            </p>
            <AppSocialNetwork v-bind="social" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MyInfo, SocialNetwork } from '~/types/index'

const app = useAppConfig()

const social = reactive<SocialNetwork>(app.social)

const info = reactive<MyInfo>({
    img: app.data.img,
    name: app.data.name,
    jobTitle: app.data.jobTitle,
    bio: app.data.bio,
    ...app.social
})

</script>
