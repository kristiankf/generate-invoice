<template>
    <footer class="max-width text-white">
        <div class="rounded-4xl bg-black p-20 flex justify-center gap-10 items-center sm:flex-row flex-col">
            <div class="w-[300px] space-y-3">
                <p class="text-sm">Give me your honest feedback</p>

                <form @submit.prevent="submitForm">
                    <textarea v-model="form.feedback" placeholder="Tell me what you think..." rows="3"
                        class="block w-full p-4 bg-gray-200 rounded-md mb-2 text-gray-700 placeholder:text-gray-500"></textarea>
                    <UButton type="submit" :disabled="result === 'Please wait...'" size="xl"
                        class="w-full flex justify-center items-center" :color="status">{{ result }}</UButton>
                </form>
            </div>

            <div class="w-[300px] space-y-2">
                <div class="text-center">
                    <a href="https://buymeacoffee.com/kriswale" target="_blank" rel="noopener noreferrer"
                        class="bg-gradient-to-r from-purple-500 via-blue-400 to-purple-700 text-transparent bg-clip-text animate-gradient text-xl sm:text-3xl font-bold">Buy
                        me a coffee</a>
                </div>
                <div class="flex gap-3 items-center justify-center">
                    <ThemeComponent />
                    <a href="https://github.com/kristiankf/generate-invoice" target="_blank" rel="noopener noreferrer"
                        class="flex items-center">
                        <UIcon name="mdi:github" class="text-2xl hover:scale-120 transition" />
                    </a>
                </div>
                <div class="text-center text-sm">
                    <p class="">Created by: <a href="https://kriswale.netlify.app/" target="_blank"
                            rel="noopener noreferrer"
                            class="bg-gradient-to-r from-purple-500 via-blue-400 to-purple-700 text-transparent bg-clip-text animate-gradient  font-bold">kriswale</a>
                    </p>
                </div>
                <div class="text-center text-xs">
                    <span>&copy; {{ new Date().getFullYear() }}</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const form = ref({
    access_key: config.public.web3formsAccessKey,
    subject: "New Message from Invoice generator",
    feedback: ""
});
const result = ref('Send Message')
const status = ref<"info" | "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | undefined>('primary')

type Web3FormsResponse = {
    success: boolean;
    message: string;
};


const submitForm = async () => {
    console.log(config.public.web3formsAccessKey)
    result.value = "Please wait...";
    try {
        const res = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: form.value,
        });
        const response = res as unknown as Web3FormsResponse
        console.log(response)
        result.value = response.message;
        if (response.success) status.value = 'success';
    } catch (error) {
        const err = error as Error; // Type assertion
        console.error("Error submitting form:", err.message);

        status.value = "error";
        result.value = "Something went wrong!";
    }
    finally {
        // Reset form after submission
        form.value.feedback = "";

        // Clear result and status after 5 seconds
        setTimeout(() => {
            result.value = "Send Message";
            status.value = "primary";
        }, 5000);
    }
};

</script>

<style scoped></style>