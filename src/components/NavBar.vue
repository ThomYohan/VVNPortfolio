<template>
    <!-- <n-config-provider :theme="darkTheme"> -->
    <n-space>
        <n-switch size="medium">
            <template #icon>
                🤔
            </template>
        </n-switch>
    </n-space>
    <div class="navBar" v-for="data in Data.routes" :key="data.id">
        <!-- <n-button @click="theme = darkTheme">
            Dark
        </n-button>
        <n-button @click="theme = null">
            Light
        </n-button> -->
        <!-- <n-menu> -->
            <router-link :to="data.route">{{ data.name }}</router-link>
        <!-- </n-menu> -->
        <!-- <router-link to="/">
            <h2>Home</h2>
        </router-link>
        <router-link to="/About">
            <h2>About</h2>
        </router-link>
        <router-link to="/Projects">
            <h2>Projects</h2>
        </router-link>
        <router-link to="/Resume">
            <h2>Resume</h2>
        </router-link> -->
    </div>
    <!-- </n-config-provider> -->
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import Data from "../data.json"

export default defineComponent({
    setup() {
        return {
            darkTheme,
            theme: ref<GlobalTheme | null>(null)
        }
    },
    data() {
        return {
            Data
        }
    },
})
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>