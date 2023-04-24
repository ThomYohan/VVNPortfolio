<template>
    <div class="projectsContainer">
        <div>pwojects</div>
        <p>{{ greeting }}</p>
    </div>
</template>


<script lang="ts">
export default {
    data() {
        return {
            greeting: 'Hello Pwojects'
        }
    }
}
</script>


<style scoped>
p {
    color: lightpink
}
</style>