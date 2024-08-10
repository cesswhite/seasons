<template>
    <div class="grid grid-cols-2 grid-rows-2 w-full h-full">
        <div class="col-span-full md:col-span-1 col-start-1 row-span-1 row-start-1">
            <AppCover name="Spring" bg-img-url="/spring.png" @click="goToAndChangePrimaryColor('spring', 'green')" />
        </div>
        <div class="col-span-full md:col-span-1 col-start-2 row-span-1 row-start-1">
            <AppCover name="Summer" bg-img-url="/summer.png" @click="goToAndChangePrimaryColor('summer', 'yellow')" />
        </div>
        <div class="col-span-full md:col-span-1 col-start-1 row-span-1 row-start-2">
            <AppCover name="Autumn" bg-img-url="/autumn.png" @click="goToAndChangePrimaryColor('autumn', 'orange')" />
        </div>
        <div class="col-span-full md:col-span-1 col-start-2 row-span-1 row-start-2">
            <AppCover name="Winter" bg-img-url="/winter.png" @click="goToAndChangePrimaryColor('winter', 'sky')" />
        </div>
    </div>
</template>

<script setup lang="ts">
const app = useAppConfig()
function goToAndChangePrimaryColor(route: string, color: string) {
    navigateTo(`/seasons/${route}`)
    app.ui.primary = color
}
</script>