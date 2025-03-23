<template>
    <nav class="">
        <div class="flex justify-between max-width py-3">
            <div class="">Logo</div>
            <div class="flex gap-3 items-center">
                <ThemeComponent />
                <UIcon name="mdi:github" class="text-2xl" />
            </div>
            <div class="">
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
</script>

<style scoped></style>