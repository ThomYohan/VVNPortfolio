<template>
    <div class="footer">
        <div class="footerContainer">
            <img style="{{ font-size: 24 }}" src="../assets/icons/LinkedIn.png"/>
            <img style="{{ font-size: 24 }}" src="../assets/icons/Github.png"/>
            <Icon size="24">
                <Mail24Regular />
            </Icon>
        </div>
        <div>
            <h3>Orca</h3>
        </div>
    </div>
</template>


<script lang="ts">
import Data from "../data.json"
import { defineComponent } from "vue";
import { Icon } from '@vicons/utils'
import { Mail24Regular } from "@vicons/fluent";



export default defineComponent({
    name: "Footer",
    components: {
        Icon,
        Mail24Regular
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