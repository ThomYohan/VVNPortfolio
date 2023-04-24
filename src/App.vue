<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="webContainer">
      <NavBar />
      <router-view />
      <Footer />
    </div>
  </n-config-provider>
  <!-- <n-config-provider :theme="darkTheme"> -->
</template>


<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

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
}
</script>


<style scoped></style>
