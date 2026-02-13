<template>
    <nav ref="navRef" class="fixed top-0 left-0 w-full z-50 backdrop-blur-md py-4 px-6">
        <div class="flex justify-between">
            <!-- DIV LOGO -->
            <div @click="jumpToTop" class="text-xl font-bold text-title cursor-pointer">
                Joaquín Llantén
            </div>

            <div class="flex items-center gap-4">
                <!-- LINKS DESKTOP -->
                <ul class="hidden lg:flex [&>li:hover]:text-title transition [&>li>a]:p-3">
                    <li>
                        <a @click="jumpToSection" href="#experience">
                            {{ $t("navbar.experience") }}
                        </a>
                    </li>
                    <li>
                        <a @click="jumpToSection" href="#projects">
                            {{ $t("navbar.projects") }}
                        </a>
                    </li>
                    <li>
                        <a @click="jumpToSection" href="#stack">
                            {{ $t("navbar.stack") }}
                        </a>
                    </li>
                    <li>
                        <a @click="jumpToSection" href="#contact">
                            {{ $t("navbar.contact") }}
                        </a>
                    </li>
                </ul>

                <!-- TRADUCTOR -->
                <button @click="toggleLanguage" class="relative group w-6 h-6 flex items-center justify-center" aria-label="Change language">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="absolute transition-opacity duration-200 group-hover:opacity-0">
                        <path fill="currentColor" d="m11.9 22l4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22zM4 19l-1.4-1.4l5.05-5.05q-.875-.875-1.588-2T4.75 8h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45l-.75 2.05l-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"/>
                    </svg>
                
                    <span class="absolute text-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100">{{ locale === 'es' ? '🇪🇸' : '🇬🇧' }}</span>
                    <span class="hidden lg:block absolute -bottom-8 text-xs bg-black/70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">{{ locale === 'es' ? 'Español' : 'English' }}</span> 
                </button>

                <!-- HAMBURGER -->
                <button @click="toggleMenu" class="lg:hidden relative w-6 h-6 flex items-center justify-center" aria-label="Toggle menu">
                    <span :class="['absolute', 'w-5', 'h-0.5', 'bg-title', 'transition-transform', showMenu ? 'rotate-45' : '-translate-y-1.5']"></span>
                    <span :class="['absolute', 'w-5', 'h-0.5', 'bg-title', 'transition-opacity', showMenu ? 'opacity-0' : 'opacity-100']"></span>
                    <span :class="['absolute', 'w-5', 'h-0.5', 'bg-title', 'transition-transform', showMenu ? '-rotate-45' : 'translate-y-1.5']"></span>
                </button>
            </div>
        </div>
        
        <!-- LINKS MOBILE -->
        <ul v-if="showMenu" id="links-mobile" class="flex flex-col items-end [&>li:hover]:text-title transition [&>li>a]:block [&>li>a]:py-3 [&>li]:w-full [&>li>a]:text-end lg:hidden">
            <li>
                <a @click="jumpToSection" href="#experience">
                    {{ $t("navbar.experience") }}
                </a>
            </li>
            <li>
                <a @click="jumpToSection" href="#projects">
                    {{ $t("navbar.projects") }}
                </a>
            </li>
            <li>
                <a @click="jumpToSection" href="#stack">
                    {{ $t("navbar.stack") }}
                </a>
            </li>
            <li>
                <a @click="jumpToSection" href="#contact">
                    {{ $t("navbar.contact") }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

const showMenu = ref(false);
const navRef = ref<HTMLElement | null>(null);

const { locale } = useI18n({ useScope: 'global' });

// Language toggler
const toggleLanguage = () => {
    locale.value = locale.value === "es" ? "en" : "es";
    localStorage.setItem("locale", locale.value);
};

// Menu toggler
const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};

// Jump to top
const jumpToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Outside click handler for mobile menu
const handleClickOutside = (event: MouseEvent) => {
    if (
        showMenu.value &&
        navRef.value &&
        !navRef.value.contains(event.target as Node)
    ) {
        showMenu.value = false
    }
}

watch(showMenu, (isOpen) => {
    if (isOpen) {
        document.addEventListener("click", handleClickOutside)
    } else {
        document.removeEventListener("click", handleClickOutside)
    }
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside)
})

// Close menu and scroll to section
const jumpToSection = (event: Event) => {
    event.preventDefault();
    const target = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (target) {
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            showMenu.value = false;
        }
    }
};

// Media query to close mobile menu on desktop
let mediaQuery: MediaQueryList;

const handleBreakpointChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
        showMenu.value = false
    }
}

onMounted(() => {
    mediaQuery = window.matchMedia("(min-width: 1024px)")
    mediaQuery.addEventListener("change", handleBreakpointChange)
})
</script>

<style scoped>

</style>