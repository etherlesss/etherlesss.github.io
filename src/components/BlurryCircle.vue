<template>
    <div class="background-wrapper">
        <div ref="blob" id="blob" class="bg-white opacity-40 aspect-square absolute rounded-full"></div>
        <div id="blur"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const blob = ref<HTMLDivElement | null>(null);

onMounted(() => {
    if (!blob.value) return;

    document.addEventListener("pointermove", (event: PointerEvent) => {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        const x = event.clientX + scrollX;
        const y = event.clientY + scrollY;

        blob.value!.animate({
            left: `${x}px`,
            top: `${y}px`,
            },
            { duration: 3000, fill: "forwards" }
        );
    });
});
</script>

<style scoped>
.background-wrapper {
    position: absolute;
    inset: 0;
    z-index: 0;
}

#blob {
    height: 500px;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background: linear-gradient(
        to right,
        var(--color-vintage-grape),
        var(--color-vintage-lavander)
    );
    animation: rotate 20s infinite;
}

#blur {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    backdrop-filter: blur(12vmax);
}

@keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.5;
    }

    to {
      rotate: 360deg;
    }
}
</style>