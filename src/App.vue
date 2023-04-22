<template>
  <!-- <main></main> -->
  <!-- <n-config-provider :theme="darkTheme"> -->
  <n-config-provider :theme-overrides="themeOverrides">
    <!-- <n-config-provider> -->
    <NavBar />
    <router-view />
  </n-config-provider>
</template>


<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
// import NavBar from './components/NavBar.vue';

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#44FFD2',
    textColor1: '#613F75',
    textColor2: '#00A6FB',
    // secondaryColor: '#613F75',
    // primaryBgColor: '#00A6FB',
    // secondaryBgColor: '#E3B23C',
    // primaryAccentColor: '#CAA8F5',
    // secondaryAccentColor: ''
  },

  Button: {
    textColor: '#FF0000'
  },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: '#FF0000'
  //     }
  //   }
  // }
  // ...
}
</script>


<style scoped></style>
