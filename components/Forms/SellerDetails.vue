<template>
    <div class="mx-auto max-w-[500px]">
        <form action="" class="space-y-4">
            <!-- Logo -->
            <div class="">
                <UFormField label="Logo" help="(Any
                        image with dimensions 4 x 4)">
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="eg. INV-2039283" type="file" />
                </UFormField>
            </div>

            <!-- Business name -->
            <div class="">
                <UFormField label="Business Name" required>
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="eg. Amoakohene Inc." />
                </UFormField>
            </div>

            <!-- Business Address -->
            <div class="">
                <UFormField label="Business Address" required>
                    <div class="flex gap-1">
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="Street... " />
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="City or Town" />
                        <UInput variant="subtle" size="lg" class="w-full" placeholder="Country" />
                    </div>
                </UFormField>
            </div>

            <!-- Email -->
            <div class="">
                <UFormField label="Email" required>
                    <UInput variant="subtle" size="lg" class="w-full" type="email"
                        placeholder="eg. youremail@something.com" />
                </UFormField>
            </div>

            <!-- Phone number -->
            <div class="">
                <UFormField label="Phone Number" required>
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="Enter your number" />
                </UFormField>
            </div>

            <!-- Tax Id -->
            <div class="">
                <UFormField label="Tax ID" required help="(Optional)">
                    <UInput variant="subtle" size="lg" class="w-full" placeholder="Tax number" />
                </UFormField>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>