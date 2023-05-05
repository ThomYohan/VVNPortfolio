<template>
    <div id="landing" ref="landing" class="jdLandingContainer">
        <!-- <div class="landingTextContainer"> -->
        <div>
            <div class="landingNameCont">
                <!-- <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }" :transition="{ duration: 0.5 }"> -->
                <lottie-player autoplay mode="normal" speed="1.5"
                    src="https://assets1.lottiefiles.com/packages/lf20_llbjwp92qL.json" style="width: 350px">
                </lottie-player>
                <!-- </Motion> -->
                <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.7, delay: 2 }">
                    <n-gradient-text class="jdH1" gradient="linear-gradient(90deg, #CAA8F5, #44FFD2, #F79256)"
                        :animation-speed="1" :animation-direction="'alternate'">I'm Thomas Y</n-gradient-text>
                </Motion>
            </div>
            <!-- <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }" :transition="{ duration: 0.5 }">
                <h1 class="jdH1">Hello! <n-gradient-text gradient="linear-gradient(90deg, #CAA8F5, #44FFD2, #F79256)"
                        :animation-speed="1" :animation-direction="'alternate'">I'm Thomas Yohannes</n-gradient-text></h1>
            </Motion> -->
            <div>
                <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.7, delay: 2.7 }">
                    <h1 class="jdH1">Frontend Software Engineer</h1>
                </Motion>
                <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.7, delay: 3.4 }">
                    <!-- <h1 class="jdH1">based in Wichita, KS</h1> -->
                    <h1 class="jdH3">
                        <Icon size="32" style="color: red;">
                            <Location12Filled />
                        </Icon> Wichita, KS
                    </h1>
                </Motion>
            </div>
            <div class="landingAnimationCont">
                <!-- <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.5, delay: 2.9 }"> -->
                <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.5, delay: 3.4 }">
                    <lottie-player autoplay loop mode="normal"
                        src="https://assets3.lottiefiles.com/packages/lf20_iombyzfq.json"
                        style="width: 450px; max-width: 100vw;">
                    </lottie-player>
                </Motion>
            </div>
        </div>
        <!-- <div>
            <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                :transition="{ duration: 0.5, delay: 0.6 }">
                <h2 class="jdH2">Placeholder text, click on the resume</h2>
            </Motion>
        </div>
        <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.7 }">
            <n-button strong secondary type="warning">Resume</n-button>
        </Motion> -->
    </div>
    <div id="about" ref="about" class="aboutContainer">
        <Motion v-for="(index, i) in [1, 2]" :key="i" :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5, delay: 5.25 }">
            <div v-if="index === 1">
                <h2 class="jdH3">Fullstack Developer with a <h2 class="jdH3">Frontend Focus</h2>
                </h2>
            </div>
            <div v-else>
                <h4 class="jdH5">Welcome to my personal website! I'm Thomas Yohannes, a Frontend Software Engineer with a
                    passion
                    for building beautiful and functional web experiences. Using cutting-edge technologies such as Vue 3,
                    Vite,
                    Naive UI, React, HTML, CSS, and TypeScript, I specialize in creating dynamic and engaging websites that
                    captivate users and deliver results. With expertise in Motion One, I can add fluid animations and
                    seamless
                    transitions to elevate your site to the next level. Whether you're looking to build a web app from
                    scratch or
                    need help optimizing an existing site, I'm here to help. Let's collaborate and create something amazing
                    together
                    that reflects the latest trends and best practices in the industry!</h4>
            </div>
        </Motion>
    </div>
    <Motion :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.7, delay: 0.5 }">
        <History id="history" ref="history" />
    </Motion>
    <Tile id="tiles" ref="tiles" />
    <div id="reach" ref="reach" class="reachContainer">
        <Presence>
            <Motion :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }">
                <div class="reachLink">
                    <h3 class="jdH6">
                        If you're looking for a skilled
                        and
                        dedicated individual to join your group, feel free to contact me. Let's create something
                        great
                        together!
                    </h3>
                </div>
            </Motion>
        </Presence>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
// import { Icon } from '@vicons/utils'
import History from '../components/History.vue'
import Tile from '../components/Tile.vue'
import { Motion, Presence } from "motion/vue"
import { Icon } from '@vicons/utils'
import { Location12Filled } from "@vicons/fluent";
import "@lottiefiles/lottie-player";

export default defineComponent({
    name: 'Home',
    components: {
        History,
        Tile,
        Motion,
        Presence,
        Icon,
        Location12Filled
    },
    setup() {
        // const lastEl = ref<HTMLElement | null>(null);

        // function scrollToElement(): void {
        //     const el = lastEl.value;
        //     if (el) {
        //         el.scrollIntoView({ behavior: "smooth" });
        //     }
        // }

        // return {
        //     lastEl,
        //     scrollToElement,
        // };
    },
    // data() {
    //     return {
    //         greeting: "homie"
    //     }
    // }
})
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>