<template>
    <section id="experience">
        <h2 class="text-xl md:text-2xl text-title font-bold mb-4">
            {{ tm('experience.title') }}
        </h2>

        <ol class="flex flex-col gap-6 border-s border-vintage-lavander/20 relative">
            <li class="flex flex-col gap-1 md:gap-2 ms-6" v-for="(job, index) in experience.experiences" :key="index">
                <div>
                    <div :class="Number(index) === 0 ? 'bg-vintage-lavander' : 'bg-midnight-violet'" class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-onyx"></div>
                    
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 class="font-bold text-title">
                            {{ job.role }}
                        </h3>

                        <time class="text-sm md:text-base">
                            {{ job.start }} – {{ job.end }}
                        </time>
                    </div>
                    
                    <p class="accent text-sm md:text-base">
                        {{ job.company }}
                    </p>
                </div>

                <ul class="list-disc list-inside marker:text-vintage-grape *:my-2 text-sm md:text-base leading-relaxed">
                    <li v-for="(bulletpoint, bpIndex) in job.bulletpoints" :key="bpIndex">
                        {{ bulletpoint }}
                    </li>
                </ul>

                <ul v-if="job.technologies != 'None'">
                    <li v-for="(tech, techIndex) in job.technologies" :key="techIndex" class="inline-block mr-2 mb-2 md:mb-0">
                        <span class="bg-midnight-violet border border-vintage-lavander text-amethyst-smoke text-xs font-medium px-1.5 py-0.5 rounded-full">
                            {{ tech }}
                        </span>
                    </li>
                </ul>
            </li>
        </ol>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { tm } = useI18n();

const experience = computed(() => tm('experience'));
</script>

<style scoped>

</style>