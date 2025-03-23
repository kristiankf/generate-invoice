<template>
    <ClientOnly v-if="!colorMode?.forced">

        <UIcon :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            class="text-2xl transition cursor-pointer hover:-rotate-[30deg]" @click="isDark = !isDark" />

        <template #fallback>
            <div class="size-8"></div>
        </template>
    </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<style scoped></style>