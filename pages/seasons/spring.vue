<template>
    <NuxtLayout name="preview">
        <SpringContainer />
    </NuxtLayout>
</template>

<script setup lang="ts">
defineOgImageComponent("Season", {
    title: 'Spring',
    img: '/spring.png',
});

useSeoMeta({
    title: "Te invitamos a nuestro evento",
    ogTitle: "Te invitamos a nuestro evento",
    description: "Discover our wedding into this invitation",
    ogDescription: "Discover our wedding into this invitation",
    twitterCard: "summary_large_image",
    twitterTitle: "Te invitamos a nuestro evento",
    twitterDescription: "Discover our wedding into this invitation",
    ogImageWidth: 1280,
    ogImageHeight: 720,
});
</script>