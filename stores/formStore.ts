import { defineStore } from "pinia";
import type { ClientDetails } from "~/components/Forms/ClientDetails.vue";
import type { InvoiceDetails } from "~/components/Forms/InvoiceDetails.vue";
import type { ItemDetails } from "~/components/Forms/ItemDetails.vue";
import type { SellerDetails } from "~/components/Forms/SellerDetails.vue";

interface FormDataStore {
  invoiceDetails: InvoiceDetails;
  sellerDetails: SellerDetails;
  clientDetails: ClientDetails;
  itemDetails: ItemDetails;
}

export const useFormStore = defineStore(
  "form",
  () => {
    const form = ref<FormDataStore>({
      invoiceDetails: {
        invoiceNo: "",
        invoiceDate: "",
        dueDate: "",
        currency: "",
        notes: "",
        paymentTerms: "",
      },
      sellerDetails: {
        logo: "",
        businessName: "",
        businessAddress: { street: "", city: "", country: "" },
        email: "",
        phoneNumber: "",
        taxId: "",
      },
      clientDetails: {
        clientName: "",
        businessName: "",
        businessAddress: { street: "", city: "", country: "" },
        email: "",
        phoneNumber: "",
      },
      itemDetails: {
        items: [{ description: "", quantity: null, unitPrice: null, id: 1 }],
        discount: { type: "rate", discountValue: null },
        charges: [{ type: "rate", name: "", chargeValue: null, id: 1 }],
        totals: {
          subTotal: null,
          discount: null,
          charges: null,
          grandTotal: null,
        },
      },
    });
    const formComplete = ref(false);
    // const step = computed(() => (formComplete.value ? "preview" : undefined));

    function $reset() {
      formComplete.value = false;
      form.value = {
        invoiceDetails: {
          invoiceNo: "",
          invoiceDate: "",
          dueDate: "",
          currency: "",
          notes: "",
          paymentTerms: "",
        },
        sellerDetails: {
          logo: "",
          businessName: "",
          businessAddress: { street: "", city: "", country: "" },
          email: "",
          phoneNumber: "",
          taxId: "",
        },
        clientDetails: {
          clientName: "",
          businessName: "",
          businessAddress: { street: "", city: "", country: "" },
          email: "",
          phoneNumber: "",
        },
        itemDetails: {
          items: [{ description: "", quantity: null, unitPrice: null, id: 1 }],
          discount: { type: "rate", discountValue: null },
          charges: [{ type: "rate", name: "", chargeValue: null, id: 1 }],
          totals: {
            subTotal: null,
            discount: null,
            charges: null,
            grandTotal: null,
          },
        },
      };
    }

    return { form, formComplete, $reset };
  }
  //   { persist: true }
);
