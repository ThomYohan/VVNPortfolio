<template>
    <n-config-provider :theme="darkTheme">
        <n-card>
            <n-space>
                <n-button @click="theme = darkTheme">
                    Dark
                </n-button>
                <n-button @click="theme = null">
                    Light
                </n-button>
            </n-space>
        </n-card>
        <router-link to="/">Home</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Projects">Projects</router-link>
        <!-- <router-view /> -->
    </n-config-provider>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

export default defineComponent({
    setup() {
        return {
            darkTheme,
            theme: ref<GlobalTheme | null>(null)
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
p {
    color: lightsalmon
}
</style>