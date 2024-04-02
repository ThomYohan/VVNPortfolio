<template>
    <div class="footer">
        <div class="footerContainer">
            <!-- <img style="{{ font-size: 24 }}" src="../assets/icons/LinkedIn.png"/>
            <img style="{{ font-size: 24 }}" src="../assets/icons/Github.png"/> -->
        </div>
        <div>
            <h3>Orca</h3>
        </div>
    </div>
</template>


<script lang="ts">
import Data from "../data.json"
import { defineComponent } from "vue";



export default defineComponent({
    name: "Footer",
    components: {
    },
    // data() {
    //     return {
    //     };
    // },
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