<template>
    <main class="history">
        <section class="job-box" v-for="data in Data.history" :key="data.id">
            <h2 class="job-title">{{ data.role }}</h2>
            <h3 class="company-name">{{ data.name }}</h3>
            <p class="date">{{ data.date }}</p>
            <p class="description">{{ data.details.detail1 }}</p>
            <p class="description">{{ data.details.detail2 }}</p>
            <p class="description">{{ data.details.detail3 }}</p>
            <p class="description">{{ data.details.detail4 }}</p>
        </section>
    </main>
    <!-- <div class="historyTimeline">
            <n-card title="Where I've Worked" style="margin-bottom: 16px">
                <n-tabs type="line" animated>
                    <n-tab-pane name="Job1" tab="Dstillery">
                        <h3 class="jdH4">From {{ Data.history[0].date }}</h3>
                        <h3 class="jdH5">- {{ Data.history[0].details.detail1 }}</h3>
                        <h3 class="jdH5">- {{ Data.history[0].details.detail2 }}</h3>
                        <h3 class="jdH5">- {{ Data.history[0].details.detail3 }}</h3>
                        <h3 class="jdH5">- {{ Data.history[0].details.detail4 }}</h3>
                    </n-tab-pane>
                    <n-tab-pane name="Job2" tab="Speakfully">
                        <h3 class="jdH4">From {{ Data.history[1].date }}</h3>
                        <h3 class="jdH5">- {{ Data.history[1].details.detail1 }}</h3>
                        <h3 class="jdH5">- {{ Data.history[1].details.detail2 }}</h3>
                        <h3 class="jdH5">- {{ Data.history[1].details.detail3 }}</h3>
                        <h3 class="jdH5">- {{ Data.history[1].details.detail4 }}</h3>
                    </n-tab-pane>
                    <n-tab-pane name="Job3" tab="RentChirp">
                        <h3 class="jdH4">From {{ Data.history[2].date }}</h3>
                        <h3 class="jdH5">- {{ Data.history[2].details.detail1 }}</h3>
                        <h3 class="jdH5">- {{ Data.history[2].details.detail2 }}</h3>
                        <h3 class="jdH5" v-if="Data.history[2].details.detail3">- {{ Data.history[2].details.detail3 }}</h3>
                        <h3 class="jdH5" v-if="Data.history[2].details.detail4">- {{ Data.history[2].details.detail4 }}</h3>
                    </n-tab-pane>
                    <n-tab-pane name="Job4" tab="PK Technology">
                        <h3 class="jdH4">From {{ Data.history[3].date }}</h3>
                        <h3 class="jdH5">- {{ Data.history[3].details.detail1 }}</h3>
                        <h3 class="jdH5" v-if="Data.history[3].details.detail2">- {{ Data.history[3].details.detail2 }}</h3>
                        <h3 class="jdH5" v-if="Data.history[3].details.detail3">- {{ Data.history[2].details.detail3 }}</h3>
                        <h3 class="jdH5" v-if="Data.history[3].details.detail4">- {{ Data.history[2].details.detail4 }}</h3>
                    </n-tab-pane>
                </n-tabs>
            </n-card>
    </div> -->
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Data from "../data.json"
import { Icon } from '@vicons/utils'
import { IosGitCommit } from "@vicons/ionIcons4";

export default defineComponent({
    components: {
        Icon,
        IosGitCommit
    },
    setup() {
        return {
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