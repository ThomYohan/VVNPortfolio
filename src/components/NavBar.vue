<template>
    <div class="navBar">
        <div class="navBarContainer">
            <Motion :initial="{ y: -50, opacity: 0 }" :animate="{ y: 0, opacity: 1 }"
                :transition="{ duration: 0.5, delay: 4 }">
                <router-link class="jdNav" style="margin-left: 10px;" :to="Data.routes[0].route">TY</router-link>
            </Motion>
            <Motion class="navBarTile" :initial="{ y: -50, opacity: 0 }" :animate="{ y: 0, opacity: 1 }"
                :transition="{ duration: 0.5, delay: 4.2 }">
                <a class="jdNav">Resume</a>
                <!-- <img style="{{ font-size: 24 }}" src="../assets/icons/LinkedIn.png" />
                <img style="{{ font-size: 24 }}" src="../assets/icons/Github.png" /> -->
                <Icon size="24">
                    <a class="center" :href="Data.links[1].link" target="_blank">
                        <LogoLinkedin />
                    </a>
                </Icon>
                <Icon size="24">
                    <a class="center" :href="Data.links[2].link" target="_blank">
                        <LogoGithub />
                    </a>
                </Icon>
                <Icon size="24">
                    <a class="center" target="_blank">
                        <Mail24Regular />
                    </a>
                </Icon>
            </Motion>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
import Data from "../data.json"
import { Motion, Presence } from "motion/vue"
import { Icon } from '@vicons/utils'
import { LogoGithub, LogoLinkedin } from "@vicons/ionIcons4";
import { Mail24Regular, Location12Filled, } from "@vicons/fluent";

export default defineComponent({
    name: 'NavBar',
    components: {
        Motion,
        Presence,
        Icon,
        Mail24Regular,
        Location12Filled,
        LogoGithub,
        LogoLinkedin

    },
    data() {
        return {
            Data
        }
    },
    methods: {
        scrollTo(ref: string) {
            console.log(ref)
            const element = this.$refs?.[ref] as HTMLElement | undefined;
            // console.log(element)
            if (element) {
                this.$nextTick(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                });
            }
        }
    },
    setup() {
        // return {
        //     darkTheme,
        //     theme: ref<GlobalTheme | null>(null)
        // }
    },
})
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>