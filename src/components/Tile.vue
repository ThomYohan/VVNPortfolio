<template>
    <div v-for="data in Data.projects" :key="data.id">
        <!-- <n-image width="200" height="100" src="../../public/GBAPurpleStack.png" /> -->
        <h3>{{ data.name }}</h3>
        <h4>{{ data.subheading }}</h4>
        <!-- <n-image :src="data.thumbnail" /> -->
    </div>
</template>


<script lang="ts">
import Data from "../data.json";

export default {
    data() {
        return {
            // greeting: 'Hello Abwout'
            // data: Data
            Data
        }
    }
}
</script>


<style scoped>
p {
    color: gold
}
</style>