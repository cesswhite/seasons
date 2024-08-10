<template>
    <header class="w-full h-auto z-10 fixed bottom-0 left-0 py-4 ">
        <UContainer>
            <nav
                class="flex items-center justify-center py-2 px-4 border border-zinc-400 rounded-xl bg-primary-950/20 backdrop-blur dark:bg-primary-950/60 dark:border-zinc-200/10">
                <AppSocialNetwork v-bind="social" />
            </nav>
        </UContainer>
    </header>
</template>

<script setup lang="ts">
import type { SocialNetwork } from '~/types/index'

const app = useAppConfig()
const social = reactive<SocialNetwork>(app.social)
</script>
