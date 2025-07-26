<script setup>
import "./header-logo.scss";
const route = useRoute();
const titleHeader = ref("Teplo ");
const subTitleHeader = ref("");
</script>

<template>
  <NuxtLink to="/" class="header__logo" aria-label="Логотип">
    <!-- <img src="/u5.png" alt="Логотип" class="header__logo-image" /> -->
    <div class="header__logo-text">
      <span class="header__logo-title">{{ titleHeader }}</span>
      <span class="header__logo-subtitle">{{ subTitleHeader }}</span>
    </div>
  </NuxtLink>
</template>
