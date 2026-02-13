<template>
    <section id="projects">
        <h2 class="text-xl md:text-2xl text-title font-bold mb-4">
            {{ projects.title }}
        </h2>
        
        <div class="flex flex-wrap gap-4">
            <div class="relative flex flex-col justify-between rounded-2xl border border-vintage-grape bg-midnight-violet/20 p-6 min-h-65 h-auto w-auto lg:w-80" v-for="project in projects.projects" :key="project.name">
                <a class="absolute top-4 right-4 hover:text-title transition" v-if="project.link != 'None'" :href="project.link" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M5.5 4H12v6.5h-1V5.707l-6.146 6.147l-.708-.708L10.293 5H5.5z" clip-rule="evenodd"/></svg></a>
                
                <div>
                    <div class="flex gap-2 items-center mb-2">
                        <h3 class="font-bold text-title">
                            {{ project.name }}
                        </h3>

                        <span class="bg-midnight-violet border border-vintage-lavander text-amethyst-smoke text-xs font-medium px-1.5 py-0.5 rounded-lg">
                            {{ project.tag }}
                        </span>
                    </div>

                    <p class="text-sm md:text-base leading-relaxed">
                        {{ project.description }}
                    </p>
                </div>

                <ul class="mt-4">
                    <li v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="inline-block mr-2">
                        <span class="bg-midnight-violet border border-vintage-lavander text-amethyst-smoke text-xs font-medium px-1.5 py-0.5 rounded-full">{{ tech }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { tm } = useI18n();

const projects = computed(() => tm('projects'));
</script>

<style scoped>

</style>