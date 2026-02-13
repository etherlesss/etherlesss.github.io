<template>
    <section id="stack">
        <h2 class="text-xl md:text-2xl text-title font-bold mb-4">
            {{ stack.title }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex flex-col" v-for="(skills, index) in stack.skills" :key="index">
                <div class="inline-flex items-center border-b-2 border-midnight-violet mb-2 pb-2 w-fit">
                    <div class="flex items-center justify-center w-8 h-8 bg-midnight-violet mr-2 rounded-lg">
                        <Icon :icon="icons[index]" width="20" height="20" class="text-vintage-lavander" />
                    </div>

                    <h3 class="font-bold text-title whitespace-nowrap">{{ skills.title }}</h3>
                </div>

                <ul class="list-disc list-inside marker:text-vintage-grape">
                    <li class="text-sm md:text-base leading-relaxed md:leading-normal" v-for="skill in skills.items" :key="skill">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const { tm } = useI18n();

const stack = computed(() => tm('stack'));

const icons = {
    "langs": "solar:programming-bold",
    "frameworks": "simple-icons:framework",
    "databases": "material-symbols:database",
    "tools": "mingcute:tool-fill"
} as any;
</script>

<style scoped>

</style>