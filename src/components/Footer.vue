<template>
    <div class="footerContainer">
        <div>
            <h3>Footer</h3>
        </div>
    </div>
</template>


<script lang="ts">
import Data from "../data.json"

// export default defineComponent({
//     data() {
//         return {
//             Data
//         }
//     },
// })
export default {
    setup() {
        return {
            Data
        }
    }
}
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>