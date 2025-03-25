<template>
    <div class="mx-auto max-w-[500px]">
        <form class="space-y-4" @submit.prevent="validateForm">
            <!-- Logo -->
            <div class="">
                <UFormField label="Logo" help="(Any
                        image with dimensions 4 x 4)">
                    <UInput v-model="formData.logo" variant="subtle" size="lg" class="w-full"
                        placeholder="eg. INV-2039283" type="file" accept="image/*" />
                </UFormField>
            </div>

            <!-- Business name -->
            <div class="">
                <UFormField label="Business Name" required>
                    <UInput v-model="formData.businessName" variant="subtle" size="lg" class="w-full"
                        placeholder="eg. Amoakohene Inc." required />
                </UFormField>
            </div>

            <!-- Business Address -->
            <div class="">
                <UFormField label="Business Address" required>
                    <div class="flex gap-1">
                        <UInput v-model="formData.businessAddress.street" variant="subtle" size="lg" class="w-full"
                            placeholder="Street... " required />
                        <UInput v-model="formData.businessAddress.city" variant="subtle" size="lg" class="w-full"
                            placeholder="City or Town" required />
                        <UInput v-model="formData.businessAddress.country" variant="subtle" size="lg" class="w-full"
                            placeholder="Country" required />
                    </div>
                </UFormField>
            </div>

            <!-- Email -->
            <div class="">
                <UFormField label="Email" required>
                    <UInput v-model="formData.email" variant="subtle" size="lg" class="w-full" type="email" required
                        placeholder="eg. youremail@something.com" />
                </UFormField>
            </div>

            <!-- Phone number -->
            <div class="">
                <UFormField label="Phone Number" required>
                    <UInput v-model="formData.phoneNumber" variant="subtle" size="lg" class="w-full"
                        placeholder="Enter your number" required />
                </UFormField>
            </div>

            <!-- Tax Id -->
            <div class="">
                <UFormField label="Tax ID" help="(Optional)">
                    <UInput v-model="formData.taxId" variant="subtle" size="lg" class="w-full"
                        placeholder="Tax number" />
                </UFormField>
            </div>

            <!-- buttons -->
            <div class="flex gap-2 justify-between mt-4 max-w-[500px] mx-auto">
                <UButton leading-icon="i-lucide-arrow-left" :disabled="!stepper?.hasPrev" @click="stepper?.prev()">
                    Prev
                </UButton>

                <UButton trailing-icon="i-lucide-arrow-right" :disabled="!stepper?.hasNext" type="submit">
                    Next
                </UButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import type { ShallowUnwrapRef } from 'vue';
import type { Stepper } from './Stepper.vue';

interface Props {
    stepper: ShallowUnwrapRef<Stepper> | null;
}

const { stepper } = defineProps<Props>()

const formData = ref({
    logo: '',
    businessName: '',
    businessAddress: { street: '', city: '', country: '' },
    email: '',
    phoneNumber: '',
    taxId: '',
})

function validateForm() {
    console.log(formData)
    stepper?.next()
}
</script>

<style scoped></style>