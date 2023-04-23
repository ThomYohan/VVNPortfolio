<template>
    <div class="webContainer">
        <div>woowee</div>
        <p>{{ greeting }}</p>
    </div>
</template>


<script lang="ts">
export default {
    data() {
        return {
            greeting: 'Hello Abwout'
        }
    }
}
</script>


<style scoped>
p {
    color: purple
}
</style>