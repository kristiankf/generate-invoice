<template>
    <div class="mx-auto max-w-[500px]">
        <form action="" class="space-y-4">
            <div class="">
                <label for="" class="block text-sm font-semibold mb-2">Invoice Number</label>
                <UInput variant="subtle" size="lg" class="w-full" placeholder="eg. INV-2039283" />
            </div>
            <div class="">
                <label for="">Invoice Date</label>
                <UInput variant="subtle" size="lg" class="w-full" type="date" />
            </div>
            <div class="">
                <label for="">Due Date</label>
                <UInput variant="subtle" size="lg" class="w-full" type="date" />
            </div>
            <div class="">
                <label for="">Currency</label>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>