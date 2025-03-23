<template>
    <div class="mx-auto max-w-[500px]">
        <form action="" class="space-y-4">
            <p class="text-xl font-semibold">Products or Services</p>

            <div class="space-y-2">
                <!-- description -->
                <div class="">
                    <UFormField label="Description" required>
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="eg. Web Development Service" />
                    </UFormField>
                </div>

                <!-- quantity and unit price -->
                <div class="flex gap-2">
                    <!-- quantity -->
                    <div class="w-1/2">
                        <UFormField label="Quantity" required>
                            <UInput variant="subtle" size="lg" class="w-full" placeholder="Enter quantity"
                                type="number" />
                        </UFormField>
                    </div>
                    <!-- unit price -->
                    <div class="w-1/2">
                        <UFormField label="Unit Price" required>
                            <UInput variant="subtle" size="lg" class="w-full" placeholder="0.00" type="number" :ui="{
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
                </div>
                <!-- add Item button -->
                <div class="!mt-4">
                    <UButton class="w-full justify-center" leading-icon="hugeicons:plus-sign">Add Another Item</UButton>
                </div>
            </div>

            <hr>

            <p class="text-xl font-semibold">Additional Charges and Discounts</p>

            <!-- Discount -->
            <div class="">
                <UFormField label="Discount">
                    <div class="flex gap-2">
                        <USelect v-model="discountType" :items="['Rate', 'Value']" class="w-[100px] shrink-0" />
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="0.00" type="number" :ui="{
                            base: 'pl-[60px]',
                            leading: 'pointer-events-none'
                        }">
                            <template #leading>
                                <p class="text-sm">
                                    {{discountType === 'Value' ? currency.find(item => item.code === 'GHS')?.symbol :
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
                    <UButton size="xs" variant="outline" leading-icon="hugeicons:plus-sign">Add another</UButton>
                </div>

                <UFormField required help="(Taxes, shipping costs, etc...)">
                    <div class="flex gap-2">
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="Name of charge" />
                        <USelect v-model="chargeType" :items="['Rate', 'Value']" class="w-[100px] shrink-0" />
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="0.00" type="number" :ui="{
                            base: 'pl-[60px]',
                            leading: 'pointer-events-none'
                        }">
                            <template #leading>
                                <p class="text-sm">
                                    {{chargeType === 'Value' ? currency.find(item => item.code === 'GHS')?.symbol :
                                        '%'}}
                                </p>
                            </template>
                        </UInput>
                    </div>
                </UFormField>
            </div>

            <hr>

            <p class="text-xl font-semibold">Totals</p>

            <!-- sub total -->
            <div class="">
                <UFormField label="Sub Total" help="(Total sum of all items)">
                    <UInput variant="subtle" size="lg" :aria-readonly="true" :disabled="true" class="w-full"
                        placeholder="0.00" type="number" :ui="{
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
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="0.00" type="number" :ui="{
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
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="0.00" type="number" :ui="{
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
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="0.00" type="number" :ui="{
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
        </form>
    </div>
</template>

<script setup lang="ts">
const discountType = ref('Rate')
const chargeType = ref('Rate')
</script>

<style scoped></style>