<template>
    <div class="flex gap-2 min-h-0 h-auto flex-wrap items-start justify-center">
        <UButton v-if="props.x" :to="props.x" target="_blank" size="lg" icon="i-ph-x-logo" variant="link" />
        <UButton v-if="props.facebook" :to="props.facebook" target="_blank" size="lg" icon="i-ph-facebook-logo"
            variant="link" />
        <UButton v-if="props.tiktok" :to="props.tiktok" target="_blank" size="lg" icon="i-ph-tiktok-logo"
            variant="link" />
        <UButton v-if="props.threads" :to="props.threads" target="_blank" size="lg" icon="i-ph-threads-logo"
            variant="link" />
        <UButton v-if="props.youtube" :to="props.youtube" target="_blank" size="lg" icon="i-ph-youtube-logo"
            variant="link" />
        <UButton v-if="props.github" :to="props.github" target="_blank" size="lg" icon="i-ph-github-logo"
            variant="link" />
        <UButton v-if="props.dribble" :to="props.dribble" target="_blank" size="lg" icon="i-ph-dribbble-logo"
            variant="link" />
        <UButton v-if="props.spotify" :to="props.spotify" target="_blank" size="lg" icon="i-ph-spotify-logo"
            variant="link" />
        <UButton v-if="props.tiktok" :to="props.tiktok" target="_blank" size="lg" icon="i-ph-tiktok-logo"
            variant="link" />
        <UButton v-if="props.phone" :to="props.phone" target="_blank" size="lg" icon="i-ph-phone" variant="link" />
        <UButton v-if="props.website" :to="props.website" target="_blank" size="lg" icon="i-ph-globe" variant="link" />
        <UButton v-if="props.email" :to="props.email" target="_blank" size="lg" icon="i-ph-envelope-simple"
            variant="link" />

    </div>
</template>

<script setup lang="ts">
import type { SocialNetwork } from '~/types/index'
const props = defineProps<SocialNetwork>()
</script>
