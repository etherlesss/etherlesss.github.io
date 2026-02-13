<template>
    <Navbar />
    <Intro />
    <main class="px-6 lg:px-8 xl:mx-auto xl:max-w-6xl [&>section]:py-10">
        <Experience />
        <Projects />
        <Stack />
        <Education />
    </main>
    <Footer class="px-6 lg:px-8 xl:mx-auto xl:max-w-6xl" />
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Intro from "../sections/Intro.vue";
import Experience from "../sections/Experience.vue";
import Projects from "../sections/Projects.vue";
import Stack from "../sections/Stack.vue";
import Education from "../sections/Education.vue";
import Footer from "../components/Footer.vue";
</script>