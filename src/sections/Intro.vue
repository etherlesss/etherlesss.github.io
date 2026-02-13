<template>
    <section class="relative overflow-hidden" id="intro-section">
        <BlurryCircle />

        <div class="relative z-10 flex min-h-screen flex-col items-start justify-center px-6 lg:px-8 xl:mx-auto xl:max-w-6xl">
            <p class="accent">
                {{ $t("intro.role") }}
            </p>

            <div class="flex flex-col my-2 md:my-4 xl:my-6 gap-0 md:gap-2 xl:gap-4">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-title leading-tight">
                    {{ displayedText }}<span v-if="isTyping" class="cursor">|</span>
                </h1>

                <p class="text-md sm:text-lg md:text-xl xl:text-2xl">
                    {{ $t("intro.description") }}
                </p>
            </div>
            
            <p class="italic">"
                {{ $t("slogan") }}"
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import BlurryCircle from "../components/BlurryCircle.vue";

const { t, locale } = useI18n();

const displayedText = ref("");
const isTyping = ref(true);

let timeout: ReturnType<typeof setTimeout> | null = null;

const baseSpeed = 45;
const randomVariation = 80;

// Randomize delay to make it feel realistic
const getHumanDelay = (char: string) => {
    let delay = baseSpeed + Math.random() * randomVariation;

    if (char === " ") delay += 40;
    if (".,!?:;".includes(char)) delay += 200;

    return delay;
}

// Typewriter effect
const typeWriter = (text: string) => {
    displayedText.value = "";
    isTyping.value = true;

    let index = 0;

    const type = () => {
        if (index < text.length) {
            const currentChar = text.charAt(index);
            displayedText.value += currentChar;
            index++

            timeout = setTimeout(type, getHumanDelay(currentChar));
        } else {
            isTyping.value = false;
        }
    }

    type();
}

onMounted(() => {
    typeWriter(t("intro.greeting"));
});

watch(locale, () => {
    if (timeout) clearTimeout(timeout);
    typeWriter(t("intro.greeting"));
});

onBeforeUnmount(() => {
    if (timeout) clearTimeout(timeout);
});
</script>

<style scoped>
.cursor {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
}
</style>