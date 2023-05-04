<template>
    <div class="navBar">
        <div class="navBarContainer">
            <Motion :initial="{ y: -50, opacity: 0 }" :animate="{ y: 0, opacity: 1 }" :transition="{ duration: 0.5 }">
                <router-link class="jdNav" :to="Data.routes[0].route">TY</router-link>
            </Motion>
            <Motion :initial="{ y: -50, opacity: 0 }" :animate="{ y: 0, opacity: 1 }" :transition="{ duration: 0.5 }">
                <a class="jdNav">Resume</a>
            </Motion>
        </div>
        <!-- <div class="row">
            <div class="navBarTile" v-for="data in Data.timeline" :key="data.id">
                <a class="jdNav" href="#" @click.prevent="scrollTo(data.ref)">{{ data.name }}</a>
            </div>
        </div> -->
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
import Data from "../data.json"
import { Motion, Presence } from "motion/vue"

export default defineComponent({
    name: 'NavBar',
    components: {
        Motion,
        Presence
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