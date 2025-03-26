<template>
    <div class="mx-auto max-w-[500px]">
        <form class="space-y-4" @submit.prevent="validateForm">
            <!-- Client name -->
            <div class="">
                <UFormField label="Client Name" required>
                    <UInput v-model="formData.clientName" variant="subtle" size="lg" class="w-full"
                        placeholder="eg. John Doe" required />
                </UFormField>
            </div>

            <!-- Client business address -->
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

            <!-- email -->
            <div class="">
                <UFormField label="Email" help="(Either email or phone number)">
                    <UInput v-model="formData.email" variant="subtle" size="lg" class="w-full" type="email"
                        placeholder="eg. client@something.com" />
                </UFormField>
            </div>

            <!-- phone nubmer -->
            <div class="">
                <UFormField label="Phone Number" help="(Either email or phone number)">
                    <UInput v-model="formData.phoneNumber" variant="subtle" size="lg" class="w-full"
                        placeholder="Enter your number" />
                </UFormField>
            </div>

            <!-- Business name -->
            <div class="">
                <UFormField label="Business Name" help="(Optional)">
                    <UInput v-model="formData.businessName" variant="subtle" size="lg" class="w-full"
                        placeholder="eg. Amoakohene Inc." />
                </UFormField>
            </div>

            <!-- buttons -->
            <div class="flex gap-2 justify-between mt-4 max-w-[500px] mx-auto">
                <UButton leading-icon="i-lucide-arrow-left" :disabled="!stepper?.hasPrev" @click="stepper?.prev()">
                    Prev
                </UButton>

                <UButton trailing-icon="i-lucide-arrow-right" :disabled="!stepper?.hasNext" type="submit">
                    Save and Continue
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

export interface ClientDetails {
    businessName: string;
    businessAddress: { street: string, city: string, country: string };
    email: string;
    phoneNumber: string;
    clientName: string;
}

const formStore = useFormStore()
const formData = ref<ClientDetails>(formStore.form.clientDetails)

const toast = useToast()

function validateForm() {
    // check if either of business email exist
    if (!formData.value.email && !formData.value.phoneNumber) {
        toast.add({ title: "Validation Error", description: "Either email or phone number should be provided!", color: 'error' })
        return
    }
    console.log(formData)
    stepper?.next()
}
</script>

<style scoped></style>