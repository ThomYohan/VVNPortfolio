<template>
    <div class="navBar">
        <div>
            <h3>Orca</h3>
        </div>
        <div class="row">
            <div class="navBarTile" v-for="data in Data.routes" :key="data.id">
                <router-link class="jdNav" :to="data.route">{{ data.name }}</router-link>
            </div>
            <n-space>
                <n-switch size="medium">
                    <template #icon>
                        🤔
                    </template>
                </n-switch>
            </n-space>
        </div>
    </div>
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