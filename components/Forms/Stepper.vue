<template>
    <div class="">
        <UStepper ref="stepper" :items="items" color="neutral" size="sm">
            <template #content="{ item }">
                <div class="my-5">
                    <FormsInvoiceDetails v-if="item.slot === 'invoice'" />
                    <FormsSellerDetails v-if="item.slot === 'seller'" />
                    <FormsClientDetails v-if="item.slot === 'client'" />
                    <FormsItemDetails v-if="item.slot === 'items'" />
                    <!-- <FormsPaymentDetails v-if="item.slot === 'payment'" /> -->
                    <FormsPreview v-if="item.slot === 'preview'" />
                </div>
            </template>
        </UStepper>

        <div class="flex gap-2 justify-between mt-4 max-w-[500px] mx-auto">
            <UButton leading-icon="i-lucide-arrow-left" :disabled="!stepper?.hasPrev" @click="stepper?.prev()">
                Prev
            </UButton>

            <UButton trailing-icon="i-lucide-arrow-right" :disabled="!stepper?.hasNext" @click="stepper?.next()">
                Next
            </UButton>
        </div>
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

const stepper = useTemplateRef('stepper')
</script>

<style scoped></style>