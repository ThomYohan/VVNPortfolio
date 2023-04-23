<template>
    <div class="tileList">
        <div class="tile" v-for="data in Data.projects" :key="data.id">
            <!-- <n-image width="200" height="100" src="../../public/GBAPurpleStack.png" /> -->
            <h3>{{ data.name }}</h3>
            <h4>{{ data.subheading }}</h4>
            <n-image class="tileImg" :src="data.thumbnail" />
        </div>

        
        <!-- <n-grid :cols="2">
            <n-form-item-gi label="Item Count">
                <n-input-number :min="1" />
            </n-form-item-gi>
            <n-form-item-gi label="Max Rows After Collapsed">
                <n-input-number :min="1" />
            </n-form-item-gi>
            <n-form-item-gi label="Show Suffix Node">
                <n-switch />
            </n-form-item-gi>
            <n-form-item-gi label="Grid Collapsed">
                <n-switch />
            </n-form-item-gi>
        </n-grid> -->


        <!-- <n-grid :cols="5" :collapsed="gridCollapsed" :collapsed-rows="gridCollapsedRows">
            <n-gi v-for="i in gridItemCount" :key="i" :class="i % 2 ? 'green' : 'light-green'">
                {{ i }}
            </n-gi>
            <n-gi v-if="showSuffix" suffix class="suffix" #="{ overflow }">
                {{ overflow ? 'Node Overflows Exists' : 'No Node Overflows' }}
            </n-gi>
        </n-grid> -->
    </div>
</template>


<script lang="ts">
import Data from "../data.json";

export default {
    data() {
        return {
            Data
        }
    },
    setup() {
        return {
            //   gridCollapsed: ref(false),
            //   gridCollapsedRows: ref(1),
            //   gridItemCount: ref(4),
            //   showSuffix: ref(true)
        }
    }
}
</script>


<style scoped>
p {
    color: gold
}
</style>