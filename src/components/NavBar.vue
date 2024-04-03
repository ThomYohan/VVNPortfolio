<template>
    <main class="navvyBar">
        <section class="navvyBarContainer">
            <router-link class="jdNav" style="margin-left: 10px;" :to="Data.routes[0].route">TY</router-link>
            <div class="navvyBarTile">
                <a href="https://docs.google.com/document/d/e/2PACX-1vQCHGS_EUrn2lDTieukci7pDY74Cpvan5jcYuPgEOuKmhZ3AIj5uNV2JG47SgMlS-E7x4wOGxtyAduz/pub" class="jdNav" target="_blank">Resume</a>
            </div>
        </section>
    </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
import Data from "../data.json"

export default defineComponent({
    name: 'NavBar',
    components: {

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