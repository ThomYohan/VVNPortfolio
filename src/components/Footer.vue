<template>
    <div class="footerContainer">
        <div>
            <h3>Footer</h3>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Data from "../data.json"

// export default defineComponent({
//     data() {
//         return {
//             Data
//         }
//     },
// })
export default defineComponent({
    setup() {
        return {
            Data
        }
    }
})
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>