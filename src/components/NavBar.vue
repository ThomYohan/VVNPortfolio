<template>
    <!-- <n-config-provider :theme="darkTheme"> -->
    <div class="navBar">
        <!-- <n-button @click="theme = darkTheme">
            Dark
        </n-button>
        <n-button @click="theme = null">
            Light
        </n-button> -->
        <router-link to="/">
            <h2>Home</h2>
        </router-link>
        <router-link to="/About">
            <h2>About</h2>
        </router-link>
        <router-link to="/Projects">
            <h2>Projects</h2>
        </router-link>
        <n-space>
            <n-switch size="medium">
                <template #icon>
                    🤔
                </template>
            </n-switch>
        </n-space>
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