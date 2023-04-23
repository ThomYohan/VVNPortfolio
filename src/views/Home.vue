<template>
    <!-- <n-config-provider :theme="!darkTheme"> -->
    <div>weewoo</div>
    <!-- <p>{{ greeting }}</p>
        <n-gradient-text :gradient="{
            deg: 180,
            from: 'rgb(85, 85, 85)',
            to: 'rgb(170, 170, 170)'
        }">
            Custom Color
        </n-gradient-text>
        <br>
        <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
            A Scribbled Color
        </n-gradient-text>
        <n-gradient-text :gradient="{
                deg: 180,
                from: 'rgb(85, 85, 85)',
                to: 'rgb(170, 170, 170)'
            }">
            Custom Color
        </n-gradient-text>
        <br>
        <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
            A Scribbled Color
        </n-gradient-text>
        <n-card title="Card with Cover">
            <template #cover>
                <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
                <img class="card-img" src="../assets/icons/slycoopy.png">
            </template>
            Card Content
        </n-card> -->
    <Tile />
    <!-- </n-config-provider> -->
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
// import { Icon } from '@vicons/utils'
import Tile from '../components/Tile.vue'

export default defineComponent({
    components: {
        Tile
    },
    setup() {
        return {
            darkTheme,
            theme: ref<GlobalTheme | null>(null)
        }
    },
    data() {
        return {
            greeting: "homie"
        }
    }
})
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>