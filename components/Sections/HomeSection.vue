<template>
    <header class="min-h-dvh">
        <div class="max-width pt-20">
            <h1 class="text-4xl sm:leading-14 xl:leading-20 sm:text-5xl xl:text-7xl capitalize">
                Generate professional invoices instantly and streamline your billing process with ease!
            </h1>

            <div class="flex gap-10 mt-16 lg:flex-row flex-col-reverse">
                <div class="text lg:w-[40%] my-10">
                    <p class="">Our invoice generator is a fast, user-friendly tool for creating professional invoices
                        with ease. Perfect for freelancers and businesses, it lets you generate, customize, and download
                        invoices in just a few clicks. Stay organized and get paid faster with a seamless invoicing
                        experience.</p>
                    <h2 class="text-xl font-bold mb-4 my-5 ">Who Can Use Our Platform?</h2>
                    <ul class="space-y-2 text-smlist-disc my-5 ml-10">
                        <li class="list-disc">
                            Freelancers
                        </li>
                        <li class="list-disc">
                            Small business owners
                        </li>
                        <li class="list-disc">
                            Consultants
                        </li>
                        <li class="list-disc">
                            Service providers
                        </li>
                        <li class="list-disc">
                            Entrepreneurs
                        </li>
                        <li class="list-disc">
                            Agencies
                        </li>
                    </ul>

                    <div class="">
                        <NuxtLink to="/generate">
                            <UButton size="xl" trailing-icon="i-lucide-arrow-right" color="neutral"
                                class="hover:cursor-pointer">Get Started
                            </UButton>
                        </NuxtLink>
                    </div>
                </div>
                <div class="invoice w-[250px] sm:w-[400px] 2xl:w-[600px] aspect-[1/1.3] mx-auto  relative ">
                    <div class="size-full overflow-clip">
                        <img src="/images/invoice-green.png" alt="invoice"
                            class="w-full h-full absolute inset-0 shadow-md -rotate-2 object-contain">
                        <img src="/images/invoice-blue.png" alt="invoice"
                            class="w-full h-full absolute inset-0 shadow-md rotate-10 translate-y-[2%] translate-x-[10%] object-contain">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped></style>