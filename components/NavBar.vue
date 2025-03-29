<template>
    <nav class="">
        <div class="flex justify-between max-width py-3">
            <!-- logo -->
            <NuxtLink to="/">
                <h2
                    class="text-5xl bg-gradient-to-r from-purple-500 via-blue-400 to-purple-700 text-transparent bg-clip-text animate-gradient font-bold">
                    IG</h2>
            </NuxtLink>

            <div class="flex gap-3 items-center justify-center">
                <ThemeComponent />
                <a href="https://github.com/kristiankf/generate-invoice" target="_blank" rel="noopener noreferrer"
                    class="flex items-center">
                    <UIcon name="mdi:github" class="text-2xl hover:scale-120 transition" />
                </a>
            </div>

            <div class="" v-if="route.path === '/'">
                <NuxtLink to="/generate">
                    <UButton color="neutral" size="md" trailing-icon="i-lucide-arrow-right"
                        class="hover:cursor-pointer">
                        <span class="">Start now</span>
                    </UButton>
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
// const colorMode = useColorMode()
const route = useRoute()
</script>

<style scoped></style>