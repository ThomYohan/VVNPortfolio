<template>
    <div class="footerContainer">
        <div class="footerIconContainer">
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
// import { NIcon } from "naive-ui";
// import { fluent } from "@vicons/fluent";
// import { Fluent } from '@xicons/fluent';
import { Icon } from '@vicons/utils'
import { Mail24Regular } from "@vicons/fluent";




// export default defineComponent({
//     data() {
//         return {
//             Data
//         }
//     },
// })
export default defineComponent({
    name: "Footer",
    components: {
        // NIcon,
        Icon,
        Mail24Regular
    },
    data() {
        return {
            // linkedinIcon: Fluent['logo-linkedin'],
            // githubIcon: Fluent['logo-github'],
        };
    },
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