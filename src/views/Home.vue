<template>
    <!-- <n-config-provider :theme="!darkTheme"> -->
    <br>
    <div class="jdLandingContainer">
        <div>
            <h1 class="jdH1">Hello I'm Thomas</h1>
            <div>
                <n-gradient-text class="jdH1" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
                    A Frontend Software Engineer
                </n-gradient-text>
                <h1 class="jdH1"> based in Wichita, Kansas</h1>
            </div>
        </div>
        <div>
            <h2 class="jdH2">Placeholder text, click on the resume</h2>
        </div>
        <n-button strong secondary type="warning">
            Resume
        </n-button>
        <!-- <h3></h3> -->
    </div>
    <div class="aboutContainer">
        <div>
            <h2 class="jdH3">Fullstack Developer with a <h2 class="jdH3">Frontend Focus</h2>
            </h2>
        </div>
        <h4 class="jdH5">Welcome to my personal website! I'm Thomas Yohannes, a Frontend Software Engineer with a passion for building beautiful and functional web experiences. Using cutting-edge technologies such as Vue 3, Vite, Naive UI, React, HTML, CSS, and TypeScript, I specialize in creating dynamic and engaging websites that captivate users and deliver results. With expertise in Motion One, I can add fluid animations and seamless transitions to elevate your site to the next level. Whether you're looking to build a web app from scratch or need help optimizing an existing site, I'm here to help. Let's collaborate and create something amazing together that reflects the latest trends and best practices in the industry!</h4>
    </div>
    <Tile />
    <History />
    <!-- </n-config-provider> -->
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
// import { Icon } from '@vicons/utils'
import History from '../components/History.vue'
import Tile from '../components/Tile.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
    components: {
        History,
        Tile,
        Footer
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


<style scoped>
p {
    color: lightsalmon
}
</style>