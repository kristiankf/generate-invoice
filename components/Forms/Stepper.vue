<template>
    <div class="">
        <UStepper ref="stepper" :items="items" color="neutral" size="sm">
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
const items = [
    {
        slot: 'invoice',
        description: 'Invoice Details',
        icon: 'mdi:invoice-text-edit-outline'
    }, {
        slot: 'seller',
        description: 'Seller Details',
        icon: 'mdi:card-account-details-outline'
    }, {
        slot: 'client',
        description: 'Client Details',
        icon: 'bx:bxs-user-detail'
    }
    , {
        slot: 'items',
        description: 'Items',
        icon: 'material-symbols:shopping-cart-outline'
    }
    // , {
    //     slot: 'payment',
    //     description: 'Payment Details',
    //     icon: 'material-symbols:payments-outline'
    // }
    , {
        slot: 'preview',
        description: 'Preview',
        icon: 'icon-park-outline:preview-open'
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