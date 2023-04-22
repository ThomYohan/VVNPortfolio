<template>
    <n-config-provider :theme="darkTheme">
        <div>weewoo</div>
        <p>{{ greeting }}</p>
    </n-config-provider>
</template>


<script lang="ts">
  import { defineComponent } from 'vue'
  import { darkTheme } from 'naive-ui'

  export default defineComponent({
    setup() {
      return {
        darkTheme
      }
    },
    data() {
        return {
            greeting: "homie"
        }
    }
  })
</script>


<style scoped>
p {
    color: lightsalmon
}
</style>