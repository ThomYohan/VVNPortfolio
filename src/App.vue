<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="webContainer">
      <!-- <NavBar ref="navbar" @scrollTo="scrollToRef" /> -->
      <router-view />
      <!-- <Footer /> -->
    </div>
  </n-config-provider>
  <!-- <n-config-provider :theme="darkTheme"> -->
</template>


<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
// import NavBar from './components/NavBar.vue';
// import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue';


const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#44FFD2',
    // primaryColor: '#44FFD2',
    textColor1: '#3F4451',
    textColor2: '#00A6FB',
    // textColor1: '#613F75',
    // textColor2: '#00A6FB',
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

const navbar = ref();
const scrollToRef = (refValue: string) => {
  const element = document.querySelector(`[ref=${refValue}]`) as HTMLElement;
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

onMounted(() => {
  navbar.value = document.querySelector('.webContainer');
});
</script>


<style scoped></style>
