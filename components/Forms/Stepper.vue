<template>
    <div class="">
        <UStepper ref="stepper" :disabled="!formStore.formComplete" :items="items" color="neutral" size="sm">
            <template #content="{ item }">
                <div class="my-5">
                    <FormsInvoiceDetails v-if="item.slot === 'invoice'" :stepper="stepper" />
                    <FormsSellerDetails v-if="item.slot === 'seller'" :stepper="stepper" />
                    <FormsClientDetails v-if="item.slot === 'client'" :stepper="stepper" />
                    <FormsItemDetails v-if="item.slot === 'items'" :stepper="stepper" />
                    <!-- <FormsPaymentDetails v-if="item.slot === 'payment'" /> -->
                    <FormsPreview v-if="item.slot === 'preview'" :stepper="stepper" />
                </div>
            </template>
        </UStepper>
    </div>
</template>

<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui';

const formStore = useFormStore()
const items: StepperItem[] = [
    {
        slot: 'invoice',
        description: 'Invoice Details',
        icon: 'mdi:invoice-text-edit-outline',
        value: 'invoice',
    }, {
        slot: 'seller',
        description: 'Seller Details',
        icon: 'mdi:card-account-details-outline',
        value: 'seller',
    }, {
        slot: 'client',
        description: 'Client Details',
        icon: 'bx:bxs-user-detail',
        value: 'client',
    }
    , {
        slot: 'items',
        description: 'Items',
        icon: 'material-symbols:shopping-cart-outline',
        value: 'items',
    }
    // , {
    //     slot: 'payment',
    //     description: 'Payment Details',
    //     icon: 'material-symbols:payments-outline',
    //   value: '',  
    // }
    , {
        slot: 'preview',
        description: 'Preview',
        icon: 'icon-park-outline:preview-open',
        value: 'preview',
    }
]

export interface Stepper {
    next: () => void;
    prev: () => void;
    hasNext: ComputedRef<boolean>;
    hasPrev: ComputedRef<boolean>;
}

const stepper = useTemplateRef('stepper')
</script>

<style scoped></style>