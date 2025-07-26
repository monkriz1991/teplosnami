<script setup>
import './page-header.scss';
</script>

<template>
  <div class="page-header">
    <div class="page-header__container _container">
      <h1 class="page-header__heading heading_h1"><slot /></h1>
    </div>
  </div>
</template>
