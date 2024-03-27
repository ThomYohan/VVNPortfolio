<template>
    <!-- <div id="landing" ref="landing" class="jdLandingContainer">
        <div class="landingTextContainer">
        <div ref="landingName" class="landingName">
            <div class="landingNameCont" v-once v-if="isVisible">
            <div class="landingNameCont">
                <lottie-player autoplay mode="normal" speed="1.5"
                        src="https://assets1.lottiefiles.com/packages/lf20_llbjwp92qL.json" style="width: 350px">
                    </lottie-player>
                <section ref="header" class="scrolled">
                    <n-gradient-text class="jdH1 header" gradient="linear-gradient(90deg, #CAA8F5, #44FFD2, #F79256)"
                        :animation-speed="1" :animation-direction="'alternate'">I'm Thomas Y</n-gradient-text>
                </section>
            </div>
            <div>
                <h1 class="jdH1">Frontend Software Engineer</h1>
                <h1 class="jdH3">
                    <Icon size="32" style="color: red;">
                        <Location12Filled />
                    </Icon> Wichita, KS
                </h1>
            </div>
            <div class="landingAnimationCont">
                <lottie-player autoplay loop mode="normal"
                        src="https://assets3.lottiefiles.com/packages/lf20_iombyzfq.json"
                        style="width: 450px; max-width: 100vw;">
                    </lottie-player>
            </div>
        </div>
    </div> -->
    <!-- <div id="about" ref="about" class="aboutContainer">
        <div>
            <h2 class="jdH3">Fullstack Developer with a <h2 class="jdH3 center">Frontend Focus</h2>
            </h2>
        </div>
        <div>
            <h4 class="jdH5">Welcome to my personal website! I'm Thomas Yohannes, a Frontend Software Engineer with a
                passion
                for building beautiful and functional web experiences. Using cutting-edge technologies such as Vue 3,
                Vite,
                Naive UI, React, HTML, CSS, and TypeScript, I specialize in creating dynamic and engaging websites that
                captivate users and deliver results. With expertise in fluid animations and
                seamless
                transitions to elevate your site to the next level. Whether you're looking to build a web app from
                scratch or
                need help optimizing an existing site, I'm here to help. Let's collaborate and create something amazing
                together
                that reflects the latest trends and best practices in the industry!</h4>
        </div>
    </div> -->
    <main class="page-layout">
        <section class="projects">
            <div class="tile tile-a">Tile A</div>
            <div class="tile tile-b">Tile B</div>
            <div class="tile tile-c">Tile C</div>
            <div class="tile tile-a">Tile D</div>
            <div class="tile tile-b">Tile E</div>
            <!-- <div class="tile tile-c">Tile F</div>
            <div class="tile tile-c">Tile G</div> -->
        </section>
        <History id="history" ref="history" />
    </main>


    <!-- <Tile id="tiles" ref="tiles" /> -->
    <!-- <div id="reach" ref="reach" class="reachContainer">
        <div class="reachLink">
            <h3 class="jdH6">
                If you're looking for a skilled
                and
                dedicated individual to join your group, feel free to contact me. Let's create something
                great
                together!
            </h3>
            <a href="mailto:thomasgyohannes@gmail.com">
                <n-button type="tertiary">
                    <h4 class="jdH3" style="color: cadetblue">
                        Lets Connect
                        <Icon size="24">
                            <a class="center" href="mailto:thomasgyohannes@gmail.com" target="_blank">
                                <MdArrowForward />
                            </a>
                        </Icon>
                    </h4>
                </n-button>
            </a>
        </div>
    </div> -->
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
// import { Icon } from '@vicons/utils'
import History from '../components/History.vue'
import Tile from '../components/Tile.vue'
import { Icon } from '@vicons/utils'
import { MdArrowForward } from "@vicons/ionIcons4";
import { Location12Filled } from "@vicons/fluent";
import "@lottiefiles/lottie-player";


export default defineComponent({
    name: 'Home',
    components: {
        History,
        Tile,
        Icon,
        Location12Filled,
        MdArrowForward,
    },

    setup() {
        // const header = ref(null)
        const isVisible = ref(false)
        // const landingName = ref<HTMLElement | null>(null)
        const landingName: any = ref(null)

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scrolled");
                    // Stop observing the element after it's intersecting
                    observer.unobserve(entry.target);
                }
            });
        };

        // Initialize IntersectionObserver
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

        // Execute code after component is mounted
        onMounted(() => {
            // Observe the desired elements
            observeElement('.landingName');
            observeElement('.aboutContainer');
            observeElement('.reachContainer');
            // observeElement('.progress-ae');
            // observeElement('.progress-xd');
            // observeElement('.progress-id');
        });
        const observeElement = (selector: string) => {
            const element = document.querySelector(selector);
            if (element) {
                observer.observe(element);
            } else {
                console.error(`Element with selector ${selector} not found`);
            }
        };
        return {
            // header,
            landingName,
            isVisible
        };
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