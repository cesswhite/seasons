<template>
    <UButton aria-label="button to switch theme dark to light and vicevers" @click="toggleDark" variant="link"
        color="primary" size="xl"
        :icon="color.preference === 'dark' ? 'i-heroicons-sun-solid' : 'i-heroicons-moon-solid'" />
</template>

<script setup>
const color = useColorMode();
function toggleDark() {
    color.preference = color.value === "dark" ? "light" : "dark";
}
</script>