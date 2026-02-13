<template>
    <section id="education">
        <h2 class="text-xl md:text-2xl text-title font-bold mb-4">{{ tm('education.title') }}</h2>

        <ol>
           <li v-for="(study, index) in education.studies" :key="index" class="mb-6">
                <div class="flex flex-col">
                    <h3 class="font-bold text-title">
                        {{ study.degree }}
                    </h3>

                    <p class="text-sm md:text-base leading-relaxed md:leading-normal">
                        {{ study.institution }}
                    </p>

                    <time class="accent text-sm md:text-base leading-relaxed md:leading-normal">
                        {{ study.start }} – {{ study.end }}
                    </time>
                </div>
           </li> 
        </ol>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { tm } = useI18n();
const education = computed(() => tm("education"));
</script>

<style scoped>

</style>