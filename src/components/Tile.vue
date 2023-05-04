<template>
    <div class="tileList" ref="sectionRef">
        <Motion :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ type: 'spring', stiffness: 200, damping: 20 }" class="osTile" v-for="data in Data.projects"
            :key="data.id" ref="contentRef" style="opacity: 1;">
            <!-- <n-image class="tileImg" :src="data.thumbnail" /> -->
            <!-- <img class=osTileImg src="/GBAPurpleStack.png" /> -->
                <lottie-player autoplay loop mode="normal" :src="data.lottie" class="osTileImg">
                </lottie-player>
            <div class="tileText">
                <h3 class="jdH4">{{ data.name }}</h3>
                <h4 class="jdH5">{{ data.subheading }}</h4>
            </div>
        </Motion>
    </div>
</template>


<script lang="ts">
import { ref, onMounted } from 'vue';
import Data from "../data.json";
import { Motion, Presence } from "motion/vue"
import "@lottiefiles/lottie-player";
// import { inView, animate } from "motion";

// export default {
export default (await import('vue')).defineComponent({
    components: {
        Motion,
        Presence,
    },
    data() {
        return {
            Data,
            Current: 0
        }
    },
    setup() {
        const show = ref(false);

        const handleScroll = () => {
            const el = document.querySelector(".fade-up");
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    show.value = true;
                }
            }
        };
        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
            handleScroll();
        });
        return {
            show
        };
    }
})
</script>


<style scoped>
p {
    color: gold
}

.fade-up {
    opacity: 0;
}
</style>