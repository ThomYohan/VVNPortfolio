<template>
    <div class="jdLandingContainer">
        <div>
            <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }" :transition="{ duration: 0.5 }">
                <h1 class="jdH1">Hey! I'm Thomas</h1>
            </Motion>
            <div>
                <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.5, delay: 0.2 }">
                    <n-gradient-text class="jdH1" gradient="linear-gradient(90deg, #F79256, #44FFD2, #5F1A37)">
                        A Frontend Software Engineer
                    </n-gradient-text>
                </Motion>
                <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.5, delay: 0.4 }">
                    <h1 class="jdH1"> based in Wichita, Kansas</h1>
                </Motion>
            </div>
        </div>
        <div>
            <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
                :transition="{ duration: 0.5, delay: 0.6 }">
                <h2 class="jdH2">Placeholder text, click on the resume</h2>
            </Motion>
        </div>
        <Motion :initial="{ x: -50, opacity: 0 }" :animate="{ x: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.7 }">
            <n-button strong secondary type="warning">Resume</n-button>
        </Motion>

    </div>
    <div class="aboutContainer">
        <Motion v-for="(index, i) in [1, 2]" :key="i" :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: i * 0.2, type: 'spring', stiffness: 200, damping: 20 }">
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
    <Tile />
    <History />
    <div>
        "I'm currently seeking a talented team to collaborate with. If you're looking for a skilled and dedicated individual to join your group, feel free to contact me. Let's create something great together!"
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

export default defineComponent({
    components: {
        History,
        Tile,
        Motion,
        Presence
    },
    setup() {
        return {
            // darkTheme,
            // theme: ref<GlobalTheme | null>(null)
        }
    },
    data() {
        return {
            greeting: "homie"
        }
    }
})
</script>


<style scoped>p {
    color: lightsalmon
}</style>