<template>
    <div class="mx-auto">
        <div class="mx-auto max-w-[500px] mb-4 text-center">
            Here is a preview of how your invoice will look like
        </div>

        <div ref="invoiceRef" id="invoice-container"
            class="invoice w-full max-w-[210mm] aspect-[1/1.414] bg-white shadow-lg border p-[5%] min-[210mm]:p-[50px] mx-auto text-black invoice-font flex flex-col gap-5 justify-between">

            <!-- top -->
            <div class="">
                <!-- company info and logo -->
                <div class="flex justify-between ">
                    <!-- company info -->
                    <div class="w-[45%]">
                        <p class="font-semibold mb-2 invoice-font-large">
                            {{ formStore.form.sellerDetails.businessName }}
                        </p>
                        <p class="">
                            {{ formStore.form.sellerDetails.businessAddress.street }}
                        </p>
                        <p class="">
                            {{ formStore.form.sellerDetails.businessAddress.city }}, {{
                                formStore.form.sellerDetails.businessAddress.country }}.
                        </p>
                    </div>

                    <!-- logo -->
                    <div class="w-[30%] ">

                        <img v-if="formStore.form.sellerDetails.logo"
                            class="w-auto h-[50px] md:h-[100px] block ml-auto object-cover"
                            :src="formStore.form.sellerDetails.logo" alt="logo">

                    </div>
                </div>

                <!-- Invoice title -->
                <div class="flex justify-end my-3 min-[210mm]:my-5">
                    <p
                        class="uppercase font-bold  text-[clamp(16px,4vw,80px)] min-[210mm]:text-[35px] text-info-800 tracking-widest">
                        Invoice
                    </p>
                </div>

                <!-- customer info and invoice details -->
                <div class="justify-between gap-4 flex my-3 min-[210mm]:my-6">
                    <!-- customer info -->
                    <div class="w-[45%]">
                        <p class="  text-info-800 font-bold">
                            Bill To
                        </p>
                        <!-- client name -->
                        <p class="font-semibold my-1 min-[210mm]:my-2 invoice-font-large">
                            {{ formStore.form.clientDetails.clientName }}
                        </p>
                        <!-- business name -->
                        <p v-if="formStore.form.clientDetails.businessName" class="">
                            {{ formStore.form.clientDetails.businessName }}
                        </p>
                        <!-- email -->
                        <p v-if="formStore.form.clientDetails.email" class="">
                            {{ formStore.form.clientDetails.email }}
                        </p>
                        <!-- address street -->
                        <p class="">
                            {{ formStore.form.clientDetails.businessAddress.street }}
                        </p>
                        <!-- address country and city -->
                        <p class="">
                            {{ formStore.form.clientDetails.businessAddress.street }}, {{
                                formStore.form.clientDetails.businessAddress.street }}.
                        </p>
                    </div>

                    <!-- customer info -->
                    <div class="w-[45%]">
                        <table class="my-1 min-[210mm]:my-2 invoice-font w-fit  ml-auto">
                            <tbody>
                                <!-- invoice number -->
                                <tr class="">
                                    <td class="pb-1 min-[210mm]:pb-2 text-right"><span
                                            class="font-bold text-info-800">Invoice
                                            #</span>
                                    </td>
                                    <td class="pb-1 min-[210mm]:pb-2  pl-4 min-[210mm]:pl-5 text-right"><span
                                            class="">{{
                                                formStore.form.invoiceDetails.invoiceNo }}</span></td>
                                </tr>
                                <!-- invoice date -->
                                <tr>
                                    <td class="pb-1 min-[210mm]:pb-2  text-right"><span
                                            class="font-bold text-info-800">Invoice
                                            Date</span></td>
                                    <td class="pb-1 min-[210mm]:pb-2  text-right pl-4 min-[210mm]:pl-5"><span
                                            class="">{{
                                                dayjs(formStore.form.invoiceDetails.invoiceDate).format("DD MMM, YY")
                                            }}</span>
                                    </td>
                                </tr>
                                <!-- Due date -->
                                <tr>
                                    <td class="pb-1 min-[210mm]:pb-2  text-right"><span
                                            class="font-bold text-info-800">Due
                                            Date</span></td>
                                    <td class="pb-1 min-[210mm]:pb-2  text-right pl-4 min-[210mm]:pl-5"><span
                                            class="">{{
                                                dayjs(formStore.form.invoiceDetails.dueDate).format("DD MMM, YY") }}</span>
                                    </td>
                                </tr>
                                <!-- tax number -->
                                <tr v-if="formStore.form.sellerDetails.taxId">
                                    <td class="pb-1 min-[210mm]:pb-2  text-right"><span
                                            class="font-bold text-info-800">Tax
                                            Number</span></td>
                                    <td class="pb-1 min-[210mm]:pb-2  text-right pl-2 min-[210mm]:pl-5"><span
                                            class="">{{
                                                formStore.form.sellerDetails.taxId }}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <!-- Table Data -->
                <table class="w-full invoice-font-small">
                    <thead>
                        <tr class="font-bold bg-info-900 text-white border-b border-info-900">
                            <th class="text-center p-1 min-[210mm]:p-2">QTY</th>
                            <th class="text-left p-1 min-[210mm]:p-2">Description</th>
                            <th class="text-right p-1 min-[210mm]:p-2 text-nowrap">Unit Price</th>
                            <th class="text-right p-1 min-[210mm]:p-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in formStore.form.itemDetails.items" :key="item.id"
                            class="odd:bg-gray-100 even:bg-white">
                            <td class="text-center p-1 min-[210mm]:p-2">{{ item.quantity }}</td>
                            <td class="text-left p-1 min-[210mm]:p-2 font-medium">{{ item.description }}</td>
                            <td class="text-right p-1 min-[210mm]:p-2">{{ item.unitPrice }}</td>
                            <td class="text-right p-1 min-[210mm]:p-2">
                                <span>{{ currency }}</span>{{ item.unitPrice! *
                                    item.quantity! }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- totals -->
                <div class="flex justify-end border-t border-info-900 invoice-font-small">
                    <div class="w-[40%]">
                        <p class="flex justify-between p-0.5 min-[210mm]:p-1 border-b border-info-900">
                            <span class="font-medium">Subtotal</span>
                            <span>{{ currency }}{{ formStore.form.itemDetails.totals.subTotal }}</span>
                        </p>
                        <p v-if="formStore.form.itemDetails.totals.discount"
                            class="flex justify-between p-0.5 min-[210mm]:p-1 border-b border-info-900">
                            <span class="font-medium">Discount</span>
                            <span>{{ currency }}{{ formStore.form.itemDetails.totals.discount }}</span>
                        </p>
                        <template v-if="formStore.form.itemDetails.totals.charges">
                            <p v-for="charge in formStore.form.itemDetails.charges" :key="charge.id"
                                class="flex justify-between p-0.5 min-[210mm]:p-1 border-b border-info-900">
                                <template v-if="charge.chargeValue">
                                    <span class="font-medium">{{ charge.name }} <span v-if="charge.type === 'rate'">({{
                                        charge.chargeValue
                                            }}%)</span></span>
                                    <span>{{ currency }}
                                        <span v-if="charge.type === 'rate'">{{ (charge.chargeValue! *
                                            formStore.form.itemDetails.totals.subTotal!) / 100 }}</span>
                                        <span v-if="charge.type === 'value'" class="">{{ charge.chargeValue }}</span>
                                    </span>
                                </template>
                            </p>
                        </template>
                        <p
                            class="bg-info-50 flex justify-between p-0.5 min-[210mm]:p-1 border-b border-info-900 text-info-900">
                            <span class="font-bold">Total</span>
                            <span>{{ currency }}{{ formStore.form.itemDetails.totals.grandTotal }}</span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- buttom information -->
            <div v-if="formStore.form.invoiceDetails.paymentTerms || formStore.form.invoiceDetails.notes"
                class="flex justify-start pb-20">
                <div class="w-[40%]">
                    <p class="text-info-900 font-bold invoice-font mb-0.5 min-[210mm]:mb-1">Terms and Notes</p>
                    <div class="invoice-font-small">
                        <p v-if="formStore.form.invoiceDetails.paymentTerms" class="mb-0.5 min-[210mm]:mb-1">
                            {{ formStore.form.invoiceDetails.paymentTerms }}</p>
                        <p v-if="formStore.form.invoiceDetails.notes" class="">{{ formStore.form.invoiceDetails.notes }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center my-5">
            <UButton size="xl" leading-icon="material-symbols:download-rounded" @click="printInvoice" color="neutral">
                Download
                Your
                Invoice
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

// import html2pdf from "html2pdf"

const formStore = useFormStore()
const currency = formStore.form.invoiceDetails.currency

// Reference to the invoice section
const invoiceRef = ref<HTMLElement | null>(null);

const printInvoice = () => {
    if (!invoiceRef.value) return;

    const printContent = invoiceRef.value.cloneNode(true) as HTMLElement;
    const printContainer = document.createElement("div");

    printContainer.appendChild(printContent);
    printContainer.style.position = "fixed";
    printContainer.style.top = "0";
    printContainer.style.left = "0";
    printContainer.style.width = "100%";
    printContainer.style.backgroundColor = "white";
    printContainer.style.zIndex = "9999"; // Ensure it's on top
    document.body.appendChild(printContainer);

    window.print();

    // Remove the temporary container after printing
    document.body.removeChild(printContainer);
};
</script>

<style scoped>
@media print {
    body {
        background-color: black;
        visibility: visible;
    }

    body * {
        visibility: hidden;
    }

    #invoice-container,
    #invoice-container * {
        visibility: visible;
    }

    #invoice-container {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
    }

    #invoice-container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }
}
</style>