<template>
    <UModal v-model:open="state" title="Thank you" :close="{ onClick: () => emit('close', false) }">
        <!-- <UButton label="Open" color="neutral" variant="subtle" /> -->

        <template #body>
            <div class="text-center">
                Thanks for using our application. Support us by donating something small here
                <UIcon name="heroicons:arrow-down" class="relative top-0.5" />
                <div class="mt-3">
                    <a href="https://buymeacoffee.com/kriswale" target="_blank"
                        class="bg-gradient-to-r from-purple-500 via-blue-400 to-purple-700 text-transparent bg-clip-text animate-gradient text:xl sm:text-3xl font-bold">Buy
                        me a coffee</a>
                </div>
            </div>

            <div class="my-3 text-center text-gray-400">
                <small>Click on finish to if satisfied with service</small>
            </div>

            <div class="flex justify-center items-center !mt-3">
                <UButton size="xl" trailing-icon="ix:certificate-success-filled" color="success" @click="finish">
                    Finish
                </UButton>
            </div>
        </template>
    </UModal>
</template>


<script setup lang="ts">

const emit = defineEmits(['close'])
const state = ref(true)
const formStore = useFormStore()
const router = useRouter()

function finish() {
    formStore.$reset()
    router.push('/')
}
</script>

<style lang="scss" scoped></style>