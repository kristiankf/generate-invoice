<template>
    <div class="mx-auto max-w-[500px]">
        <form action="" class="space-y-4">
            <!-- invoice number -->
            <div class="">
                <UFormField label="Invoice Number" required>
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="eg. INV-2039283" />
                </UFormField>
            </div>

            <!-- Invoice date -->
            <div class="">
                <UFormField label="Invoice Date" required>
                    <UInput variant="subtle" size="lg" class="w-full" type="date" />
                </UFormField>
            </div>

            <!-- Due Date -->
            <div class="">
                <UFormField label="Due Date" required>
                    <UInput variant="subtle" size="lg" class="w-full" type="date" />
                </UFormField>
            </div>

            <!-- Currency -->
            <div class="">
                <UFormField label="Currency" help="(To be used throughout your invoice)" required>
                    <UInputMenu :items="items" variant="subtle" size="lg" class="w-full"
                        placeholder="Select currency (Default $)" />
                </UFormField>

            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const items = currency.map(item => {
    return {
        label: `${item.name} (${item.symbol})`,
        value: item.symbol,
    }
})
</script>

<style scoped></style>