<template>
    <header class="w-full h-auto z-50 fixed top-0 left-0 py-4 ">
        <UContainer>
            <nav
                class="flex items-center justify-between py-2 px-4 border border-zinc-100 rounded-xl bg-zinc-50/5 backdrop-blur dark:bg-zinc-950/5 dark:border-zinc-200/10">
                <UButton @click="router.back()" label="Go Back" icon="i-heroicons-arrow-left" variant="soft" />
                <AppSwitchMode />
            </nav>
        </UContainer>
    </header>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
