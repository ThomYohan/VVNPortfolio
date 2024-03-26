<template>
    <div class="navBar">
        <div class="navBarContainer">
            <!-- <div class="navBarContainer" v-if="Data.anchors"> -->
            <router-link class="jdNav" style="margin-left: 10px;" :to="Data.routes[0].route">TY</router-link>
            <div class="navBarTile">
                <a class="jdNav">Resume</a>
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
                    <a class="center" href="mailto:thomasgyohannes@gmail.com" target="_blank">
                        <Mail24Regular />
                    </a>
                </Icon>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
import Data from "../data.json"
import { Icon } from '@vicons/utils'
import { LogoGithub, LogoLinkedin } from "@vicons/ionIcons4";
import { Mail24Regular, Location12Filled, } from "@vicons/fluent";

export default defineComponent({
    name: 'NavBar',
    components: {
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