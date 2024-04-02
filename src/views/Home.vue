<template>
    <header class="header">
        <div class="header-container">
            <!-- <h1>Hello,</h1>
            <h1>I'm Thomas Yohannes</h1> -->
            <div class="title-box">
                <!-- <n-gradient-text class="title-align" gradient="linear-gradient(90deg, #CAA8F5, #44FFD2, #F79256)"
                    :animation-speed="1" :animation-direction="'alternate'">I'm Thomas Yohannes</n-gradient-text> -->
                <h1 class="title-align">I'm Thomas Yohannes</h1>
                <h2 class="title-align">Frontend Software Engineer</h2>
            </div>
            <div class="header-box">
                <div class="header-link-container">
                    <div class="header-links" v-for="data in Data.links" :key="data.id">
                        <!-- <Icon size="32">
                            <a class="" v-if="data.name !== 'Resume'" :href="data.link" target="_blank">
                                <component :is="data.icon" />
                            </a>
                            <a class="footer-icons" v-else :href="data.link" target="_blank" rel="">
                                {{ data.name }}
                            </a>
                        </Icon> -->
                        <a class="" v-if="data.name !== 'Resume'" :href="data.link" target="_blank">
                            {{ data.name }}
                            </a>
                            <a class="footer-icons" v-else :href="data.link" target="_blank" rel="">
                                {{ data.name }}
                            </a>
                    </div>
                </div>
                <div class="info-box">
                    <h5 class="info-text">Working on cool web stuff</h5>
                </div>
            </div>
        </div>
    </header>
    <main class="page-layout">
        <section class="projects">
            <!-- <section class="projects" v-for="(project, index) in Data.projects" :key="project.id"> -->
            <!-- <div class="tile" :class="getTileClass(index)">Tile A</div> -->
            <div class="tile tile-a">
                <h3 class="tile-header">{{ Data.projects[0].name }}</h3>
                <div class="techStack">
                    <h6 v-for=" data in Data.projects[0].techStack">{{ data }}</h6>
                </div>
                <h5>{{ Data.projects[0].description }}</h5>
            </div>
            <div class="tile tile-b">
                <h3 class="tile-header">{{ Data.projects[1].name }}</h3>
                <div class="techStack">
                    <h6 v-for=" data in Data.projects[1].techStack">{{ data }}</h6>
                </div>
                <h5>{{ Data.projects[1].description }}</h5>
            </div>
            <!-- <div class="tile tile-c">
                <h3>{{ Data.projects[2].name }}</h3>
                <h4>{{ Data.projects[2].description }}</h4>
            </div> -->
            <div class="tile tile-d">
                <h3 class="tile-header">{{ Data.projects[2].name }}</h3>
                <div class="techStack">
                    <h6 v-for=" data in Data.projects[2].techStack">{{ data }}</h6>
                </div>
                <h5>{{ Data.projects[2].description }}</h5>
            </div>
            <div class="tile tile-e">
                <h3 class="tile-header">{{ Data.projects[3].name }}</h3>
                <div class="techStack">
                    <h6 v-for=" data in Data.projects[3].techStack">{{ data }}</h6>
                </div>
                <h5>{{ Data.projects[3].description }}</h5>
            </div>
        </section>
        <section class="history">
            <History id="history" ref="history" />
            <section class="edu-container">
                <section class="edu-box" v-for="data in Data.educationContact" :key="data.id">
                    <h4>{{ data.education }}</h4>
                    <h5>{{ data.certificate }}</h5>
                    <h5 class="job-date">{{ data.date }}</h5>
                </section>
            </section>
        </section>
    </main>

    <footer>
        <section class="footer-box">
            <!-- <section class="footerInfo"> -->
            <section class="footer-container">
                <h5 class="footer-description">Made with Coffee</h5>
                <h5 class="footer-description">© 2024 Portfolio by Thomas Yohannes</h5>
            </section>
            <!-- </section> -->
            <section class="footer-container2">
                <div v-for="data in Data.footerLinks" :key="data.id">
                    <Icon size="24">
                        <a class="footer-icons" v-if="data.name !== 'Resume'" :href="data.link" target="_blank">
                            <!-- <`${{ data.icon }}` /> -->
                            <!-- <component :is="data.icon" /> -->
                            {{ data.name }}
                        </a>
                        <a class="footer-icons" v-else :href="data.link" target="_blank" rel="">
                            {{ data.name }}
                        </a>
                    </Icon>
                </div>
            </section>

        </section>
    </footer>


    <!-- <Tile id="tiles" ref="tiles" /> -->
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
// import { Icon } from '@vicons/utils'
import History from '../components/History.vue'
import Tile from '../components/Tile.vue'
import Data from "../data.json"
import "@lottiefiles/lottie-player";


export default defineComponent({
    name: 'Home',
    components: {
        History,
        Tile,
    },

    setup() {
        // const header = ref(null)
        const isVisible = ref(false)
        // const landingName = ref<HTMLElement | null>(null)
        const landingName: any = ref(null)

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.target.classList.contains("header-container")) {
                    entry.target.classList.add("header-scrolled");
                    // } else if (entry.target.classList.contains("tile")) {
                    //     entry.target.classList.add("animate");
                } else if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    // Stop observing the element after it's intersecting
                    observer.unobserve(entry.target);
                }
            });
        };

        // Initialize IntersectionObserver
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.8 });

        // Execute code after component is mounted
        onMounted(() => {
            // Observe the desired elements
            observeElement('.navvyBar');
            observeElement('.header-container');
            observeElement('.tile')
            observeElement('.job-box')
            observeElement('.edu-box')
            observeElement('.footer-box')
            observeElement('.reachContainer');
        });

        const observeElement = (selector: string) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                observer.observe(element);
            });
        };

        return {
            // header,
            landingName,
            isVisible
        };
    },
    data() {
        return {
            Data
        }
    },
    // data() {
    //     return {
    //         greeting: "homie"
    //     }
    // }
})
</script>


<style scoped>
/* p {
    color: lightsalmon
} */
</style>