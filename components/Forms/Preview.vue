<template>
    <div>
        <InvoicePreview />

        <!-- buttons -->
        <div class="flex gap-2 justify-between mt-4 max-w-[500px] mx-auto">
            <UButton leading-icon="i-lucide-arrow-left" :disabled="!stepper?.hasPrev" @click="stepper?.prev()">
                Prev
            </UButton>

            <UButton trailing-icon="hugeicons:download-02" :disabled="!stepper?.hasNext" @click="stepper?.next()">
                Finish & Download
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ShallowUnwrapRef } from 'vue';
import type { Stepper } from './Stepper.vue';

interface Props {
    stepper: ShallowUnwrapRef<Stepper> | null;
}

const { stepper } = defineProps<Props>()
</script>

<style scoped></style>