<template>
    <div class="mx-auto max-w-[500px]">
        <form action="" class="space-y-4">
            <!-- Client name -->
            <div class="">
                <UFormField label="Client Name" required>
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="eg. John Doe" />
                </UFormField>
            </div>

            <!-- Client business address -->
            <div class="">
                <UFormField label="Business Address" required>
                    <div class="flex gap-1">
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="Street... " />
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="City or Town" />
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="Country" />
                    </div>
                </UFormField>
            </div>

            <!-- email -->
            <div class="">
                <UFormField label="Email" help="(Either email or phone number)">
                    <UInput variant="subtle" size="lg" class="w-full" type="email"
                        placeholder="eg. client@something.com" />
                </UFormField>
            </div>

            <!-- phone nubmer -->
            <div class="">
                <UFormField label="Phone Number" help="(Either email or phone number)">
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="Enter your number" />
                </UFormField>
            </div>

            <!-- Business name -->
            <div class="">
                <UFormField label="Business Name" help="(Optional)">
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="eg. Amoakohene Inc." />
                </UFormField>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>