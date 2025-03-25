<template>
    <UApp :toaster="toasterProps">
        <div class="">
            <slot />
        </div>
    </UApp>
</template>

<script setup lang="ts">
import type { ToasterProps } from '@nuxt/ui';

const toasterProps: ToasterProps = {
    position: "top-center",
    duration: 6000,
    expand: false,
}
</script>

<style scoped></style>