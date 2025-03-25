<template>
    <div class="mx-auto max-w-[500px]">
        <form class="space-y-4" @submit.prevent="validateForm">
            <p class="text-xl font-semibold">Products or Services</p>

            <div v-for="item in formData.items" :key="item.id" class="space-y-2">
                <!-- description -->
                <div class="">
                    <UFormField label="Description" required>
                        <UInput v-model="item.description" variant="subtle" size="lg" class="w-full"
                            placeholder="eg. Web Development Service" required />
                    </UFormField>
                </div>

                <!-- quantity and unit price -->
                <div class="flex gap-2">
                    <!-- quantity -->
                    <div class="w-1/2">
                        <UFormField label="Quantity" required>
                            <UInput v-model="item.quantity" variant="subtle" size="lg" class="w-full"
                                placeholder="Enter quantity" type="number" required />
                        </UFormField>
                    </div>
                    <!-- unit price -->
                    <div class="w-1/2">
                        <UFormField label="Unit Price" required>
                            <UInput v-model="item.unitPrice" variant="subtle" size="lg" class="w-full"
                                placeholder="0.00" type="number" :ui="{
                                    base: 'pl-[70px]',
                                    leading: 'pointer-events-none'
                                }" required>
                                <template #leading>
                                    <p class="text-sm">
                                        {{currency.find(item => item.code === 'GHS')?.symbol}}
                                    </p>
                                </template>
                            </UInput>
                        </UFormField>
                    </div>
                </div>
                <!-- remove Item button -->
                <div v-show="formData.items.length > 1" class="!mt-4">
                    <UButton class="w-full justify-center" color="error" leading-icon="hugeicons:delete-02"
                        @click="removeItem(item.id)">Remove Item
                    </UButton>
                </div>

            </div>
            <!-- add Item button -->
            <div class="!mt-4">
                <UButton class="w-full justify-center" leading-icon="hugeicons:plus-sign" @click="addItem">Add Another
                    Item
                </UButton>
            </div>
            <hr>

            <p class="text-xl font-semibold">Additional Charges and Discounts</p>

            <!-- Discount -->
            <div class="">
                <UFormField label="Discount">
                    <div class="flex gap-2">
                        <USelect v-model="formData.discount.type" :items="['rate', 'value']"
                            class="w-[100px] shrink-0" />
                        <UInput v-model="formData.discount.discountValue" variant="subtle" size="lg" class="w-full"
                            placeholder="0.00" type="number" :ui="{
                                base: 'pl-[60px]',
                                leading: 'pointer-events-none'
                            }">
                            <template #leading>
                                <p class="text-sm">
                                    {{formData.discount.type === 'value' ? currency.find(item => item.code ===
                                        'GHS')?.symbol :
                                        '%'}}
                                </p>
                            </template>
                        </UInput>
                    </div>
                </UFormField>
            </div>

            <!-- tax and others -->
            <div class="">
                <div class="flex justify-between items-center mb-1.5">
                    <label for="" class="font-medium text-sm">Charges</label>
                    <UButton size="xs" variant="outline" leading-icon="hugeicons:plus-sign" @click="addCharge">Add
                        another</UButton>
                </div>

                <template v-for="charge in formData.charges" :key="charge.id">
                    <UFormField required help="(Taxes, shipping costs, etc...)">
                        <div class="flex gap-2 items-center mt-3">
                            <UInput v-model="charge.name" variant="subtle" size="lg" class="w-full"
                                placeholder="Name of charge" />
                            <USelect v-model="charge.type" :items="['rate', 'value']" class="w-[100px] shrink-0" />
                            <UInput v-model="charge.chargeValue" variant="subtle" size="lg" class="w-full"
                                placeholder="0.00" type="number" :ui="{
                                    base: 'pl-[60px]',
                                    leading: 'pointer-events-none'
                                }">
                                <template #leading>
                                    <p class="text-sm">
                                        {{charge.type === 'value' ? currency.find(item => item.code === 'GHS')?.symbol :
                                            '%'}}
                                    </p>
                                </template>
                            </UInput>
                            <div v-show="formData.charges.length > 1" class="shrink-0 h-full">
                                <UButton leading-icon="hugeicons:delete-02" color="error" class="px-4 py-2.5"
                                    @click="removeCharge(charge.id)" />
                            </div>
                        </div>
                    </UFormField>
                </template>
            </div>

            <hr>

            <p class="text-xl font-semibold">Totals</p>

            <!-- sub total -->
            <div class="">
                <UFormField label="Sub Total" help="(Total sum of all items)">
                    <UInput v-model="formData.totals.subTotal" variant="subtle" size="lg" :aria-readonly="true"
                        :disabled="true" class="w-full" placeholder="0.00" type="number" :ui="{
                            base: 'pl-[70px]',
                            leading: 'pointer-events-none'
                        }">
                        <template #leading>
                            <p class="text-sm">
                                {{currency.find(item => item.code === 'GHS')?.symbol}}
                            </p>
                        </template>
                    </UInput>
                </UFormField>
            </div>

            <div class="flex gap-2">
                <!-- discounts -->
                <div class="w-1/2">
                    <UFormField label="Discount">
                        <UInput v-model="formData.totals.discount" variant="subtle" size="lg" class="w-full"
                            placeholder="0.00" type="number" :ui="{
                                base: 'pl-[70px]',
                                leading: 'pointer-events-none'
                            }" :aria-readonly="true" :disabled="true">
                            <template #leading>
                                <p class="text-sm">
                                    {{currency.find(item => item.code === 'GHS')?.symbol}}
                                </p>
                            </template>
                        </UInput>
                    </UFormField>
                </div>

                <!-- charges -->
                <div class="w-1/2">
                    <UFormField label="Charges">
                        <UInput v-model="formData.totals.charges" variant="subtle" size="lg" class="w-full"
                            placeholder="0.00" type="number" :ui="{
                                base: 'pl-[70px]',
                                leading: 'pointer-events-none'
                            }" :aria-readonly="true" :disabled="true">
                            <template #leading>
                                <p class="text-sm">
                                    {{currency.find(item => item.code === 'GHS')?.symbol}}
                                </p>
                            </template>
                        </UInput>
                    </UFormField>
                </div>
            </div>

            <div class="">
                <UFormField label="Grand Total" help="(Putting it all together)">
                    <UInput v-model="formData.totals.grandTotal" variant="subtle" size="lg" class="w-full"
                        placeholder="0.00" type="number" :ui="{
                            base: 'pl-[70px]',
                            leading: 'pointer-events-none'
                        }" :aria-readonly="true" :disabled="true">
                        <template #leading>
                            <p class="text-sm">
                                {{currency.find(item => item.code === 'GHS')?.symbol}}
                            </p>
                        </template>
                    </UInput>
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

interface FormData {
    items: { id: number, description: string, quantity: number | null, unitPrice: number | null }[],
    discount: { type: "rate" | "value", discountValue: number | null },
    charges: { id: number, type: "rate" | "value", chargeValue: number | null, name: string }[],
    totals: { subTotal: number | null, discount: number | null, charges: number | null, grandTotal: number | null }
}

const formData = ref<FormData>({
    items: [{ description: '', quantity: null, unitPrice: null, id: 1 }],
    discount: { type: "rate", discountValue: null },
    charges: [{ type: "rate", name: '', chargeValue: null, id: 1 }],
    totals: { subTotal: null, discount: null, charges: null, grandTotal: null }
})

const trackItemId = ref(1)
const trackChargeId = ref(1)

function addItem() {
    trackItemId.value = trackItemId.value + 1
    formData.value.items.push({ description: '', quantity: null, unitPrice: null, id: trackItemId.value })
}

function removeItem(id: number) {
    formData.value.items = formData.value.items.filter(item => item.id !== id)
}

function addCharge() {
    trackChargeId.value = trackChargeId.value + 1
    formData.value.charges.push({ type: "rate", name: '', chargeValue: null, id: trackChargeId.value })
}

function removeCharge(id: number) {
    formData.value.charges = formData.value.charges.filter(charge => charge.id !== id)
}

function calculateSubTotal(items: FormData["items"]): number {
    return items.reduce((sum, item) => {
        if (!item.quantity || !item.unitPrice) return sum;
        return sum + item.quantity * item.unitPrice;
    }, 0);
}

function calculateTotalDiscount(subTotal: number, discount: FormData["discount"]): number {
    if (!discount.discountValue) return 0;
    return discount.type === "rate"
        ? (discount.discountValue / 100) * subTotal
        : discount.discountValue;
}

function calculateTotalCharges(subTotal: number, charges: FormData["charges"]): number {
    return charges.reduce((sum, charge) => {
        if (!charge.chargeValue) return sum;
        return sum + (charge.type === "rate" ? (charge.chargeValue / 100) * subTotal : charge.chargeValue);
    }, 0);
}

function calculateGrandTotal(formData: FormData): number {
    const subTotal = calculateSubTotal(formData.items);
    const discount = calculateTotalDiscount(subTotal, formData.discount);
    const charges = calculateTotalCharges(subTotal, formData.charges);
    return subTotal - discount + charges;
}


// Watch for changes and update totals
watch([formData], () => {
    formData.value.totals.subTotal = calculateSubTotal(formData.value.items);
    formData.value.totals.discount = calculateTotalDiscount(formData.value.totals.subTotal, formData.value.discount);
    formData.value.totals.charges = calculateTotalCharges(formData.value.totals.subTotal, formData.value.charges);
    formData.value.totals.grandTotal = calculateGrandTotal(formData.value);
}, { deep: true, immediate: true });



function validateForm() {
    console.log(formData)
    stepper?.next()
}
</script>

<style scoped></style>