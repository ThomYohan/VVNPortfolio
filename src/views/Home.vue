<template>
    <!-- <n-config-provider :theme="!darkTheme"> -->
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
    <div class="jdLandingContainer">
        <div>
            <h1>Hello I'm <h1>Thomas</h1>
            </h1>
            <h2>A Frontend Software Engineer based in Wichita, Kansas</h2>
        </div>
        <n-button strong secondary type="warning">
            Resume
        </n-button>
        <!-- <h3></h3> -->
    </div>
    <div class="aboutContainer">
        <div>
            <h2>Fullstack Developer with a <h2>Frontend Focus</h2>
            </h2>
        </div>
        <h3> From under 10 person startups to over 100 person companies </h3>
        <h4>1</h4>
        <h5>2</h5>
        <h6>3</h6>
    </div>
    <Tile />
    <History />
    <Footer />
    <!-- </n-config-provider> -->
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
// import { Icon } from '@vicons/utils'
import History from '../components/History.vue'
import Tile from '../components/Tile.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
    components: {
        History,
        Tile,
        Footer
    },
    setup() {
        return {
            // darkTheme,
            // theme: ref<GlobalTheme | null>(null)
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