<template>
    <!-- <n-config-provider :theme="darkTheme"> -->
    <div class="navBar">
        <n-button @click="theme = darkTheme">
            Dark
        </n-button>
        <n-button @click="theme = null">
            Light
        </n-button>
        <router-link to="/">Home</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Projects">Projects</router-link>
    </div>
    <!-- </n-config-provider> -->
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
})
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>