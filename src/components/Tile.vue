<template>
    <div class="tileList" ref="sectionRef">
            <div class="osTile" v-for="data in Data.projects" :key="data.id">
                <!-- <n-image class="tileImg" :src="data.thumbnail" /> -->
                <!-- <img class=osTileImg src="/GBAPurpleStack.png" /> -->

                    <!-- <lottie-player autoplay loop mode="normal" :src="data.lottie" class="osTileImg">
                    </lottie-player> -->
                <div class="tileText">
                    <h3 class="jdH4">{{ data.name }}</h3>
                    <h4 class="jdH5">{{ data.subheading }}</h4>
                </div>
            </div>
    </div>
</template>


<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';
import Data from "../data.json";
import "@lottiefiles/lottie-player";

// export default {
export default defineComponent({
    components: {
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