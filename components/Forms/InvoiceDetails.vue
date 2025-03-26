<template>
    <div class="mx-auto max-w-[500px]">
        <form class="space-y-4" @submit.prevent="validateForm">
            <!-- invoice number -->
            <div class="">
                <UFormField label="Invoice Number" required>
                    <UInput v-model="formData.invoiceNo" variant="subtle" size="lg" class="w-full"
                        placeholder="eg. INV-2039283" required />
                </UFormField>
            </div>

            <!-- Invoice date -->
            <div class="">
                <UFormField label="Invoice Date" required>
                    <UInput v-model="formData.invoiceDate" variant="subtle" size="lg" class="w-full" type="date"
                        required />
                </UFormField>
            </div>

            <!-- Due Date -->
            <div class="">
                <UFormField label="Due Date" required>
                    <UInput v-model="formData.dueDate" variant="subtle" size="lg" class="w-full" type="date" required />
                </UFormField>
            </div>

            <!-- Currency -->
            <div class="">
                <UFormField label="Currency" help="(To be used throughout your invoice)">
                    <UInputMenu v-model="formData.currency" value-key="value" :items="items" variant="subtle" size="lg"
                        class="w-full" placeholder="Select currency (Default $)" />
                </UFormField>
            </div>

            <!-- payment terms -->
            <div class="">
                <UFormField label="Payment Terms">
                    <UInput v-model="formData.paymentTerms" variant="subtle" size="lg" class="w-full"
                        placeholder="Payment terms here" />
                </UFormField>
            </div>

            <!-- notes -->
            <div class="">
                <UFormField label="Notes" help="(Any extra notes for your client)">
                    <UInput v-model="formData.notes" variant="subtle" size="lg" class="w-full"
                        placeholder="Put your notes here" />
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
import dayjs from 'dayjs';

interface Props {
    stepper: ShallowUnwrapRef<Stepper> | null;
}

const { stepper } = defineProps<Props>()

export interface InvoiceDetails {
    invoiceNo: string,
    invoiceDate: string,
    dueDate: string,
    currency: string,
    notes: string,
    paymentTerms: string,

}
const formStore = useFormStore()
const formData = ref<InvoiceDetails>(formStore.form.invoiceDetails)

const items = currency.map(item => {
    return {
        label: `${item.name} (${item.symbol})`,
        value: item.code,
    }
})

const toast = useToast()

function validateForm() {
    // assign currency to dollar if none exists
    if (!formData.value.currency) formData.value.currency = currency.find(item => item.code === 'USD')!.symbol
    // check if due date is before invoice date and render action
    const invoiceDate = dayjs(formData.value.invoiceDate); // Example invoice date
    const dueDate = dayjs(formData.value.dueDate); // Example due date

    if (dueDate.isBefore(invoiceDate)) {
        toast.add({ title: "Validation Error", description: "Due date should not be before invoice date!", color: 'error' })
        return
    }

    console.log(formData.value)

    stepper?.next()
}
</script>

<style scoped></style>