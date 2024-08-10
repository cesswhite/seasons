<template>
    <div id="summer-container" class="relative w-full h-auto py-12 bg-primary-50/50 dark:bg-primary-950/80">
        <div class="fixed top-0 left-0 mix-blend-overlay dark:mix-blend-soft-light opacity-40 w-full h-full">
            <Transition name="fade">
                <NuxtImg src="/shadow-autumn.png" class="w-full h-full object-cover object-center" />
            </Transition>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center relative z-10">
            <UContainer>
                <AutumnMyInfo />
            </UContainer>
            <AutumnGallery />
        </div>
    </div>
</template>
