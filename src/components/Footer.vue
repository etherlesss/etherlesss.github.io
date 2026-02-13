<template>
    <footer id="contact" class="px-6 py-12 sm:px-8 sm:py-16">
        <div class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <div class="text-center lg:text-left">
                <h2 class="text-xl font-bold">
                    Joaquín Llantén
                </h2>

                <p class="italic">
                    "{{ $t("slogan") }}"
                </p>
            </div>

            <ul class="flex flex-row gap-3 sm:gap-6 *:flex *:items-center *:gap-2 [&>li>a]:hover:text-title transition">
                <li>
                    <Icon icon="bi:linkedin" width="24" height="24" />

                    <a :href="$t('footer.linkedin')" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                     </a>
                </li>

                <li>
                    <Icon icon="akar-icons:github-fill" width="24" height="24" />

                    <a href="https://github.com/etherlesss" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>

                <li>
                    <Icon icon="material-symbols:mail" width="24" height="24" />

                    <a :href="`mailto:${mail}`">
                        Email
                    </a>
                </li>
            </ul>
        </div>

        <div class="py-8 px-6 text-center">
            <div class="border-t border-midnight-violet/80 py-3"></div>
            <p class="text-xs opacity-40 italic text-nowrap">
                {{ $t("footer.built_with") }}
            </p>

            <p class="text-sm opacity-60 mt-2">
                {{ $t("footer.copyright") }}
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const mail = 'joaquin.llantenvalenzuela@gmail.com';
</script>