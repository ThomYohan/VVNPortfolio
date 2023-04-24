<template>
    <div class="historyContainer">
        <div>
            <h3>History</h3>
            <div v-for="data in Data.history" :key="data.id">
                <h3>{{ data.role }}</h3>
                <h3>{{ data.name }}</h3>
                <h4>{{ data.location }}</h4>
                <div v-for="details in data.details">

                    <h5>{{ details }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Data from "../data.json"

export default defineComponent({
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