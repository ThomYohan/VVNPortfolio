<template>
    <main class="navvyBar">
        <section class="navvyBarContainer">
            <router-link class="jdNav" style="margin-left: 10px;" :to="Data.routes[0].route">TY</router-link>
            <div class="navvyBarTile">
                <a class="jdNav">Resume</a>
            </div>
        </section>
    </main>
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