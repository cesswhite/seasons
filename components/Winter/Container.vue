<template>
    <div id="summer-container" class="relative w-full h-dvh bg-primary-50/50 dark:bg-primary-950/80">
        <div class="flex flex-col gap-2 items-start justify-center relative  w-full h-full">
            <div class="absolute z-10 w-full h-full">
                <WinterGallery />
            </div>
            <div
                class="absolute w-full h-5/6 md:h-1/3 bg-gradient-to-t from-primary-950 to-transparent z-10 bottom-0" />
            <div class="absolute z-20 bottom-0 w-full lg:w-1/2 py-2 px-4">
                <WinterMyInfo />
            </div>
        </div>
    </div>
</template>
