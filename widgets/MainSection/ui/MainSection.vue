<script setup>
import "./main-section.scss";
import {
  MainBanner,
  MainList,
  MainInfo,
  WorkSteps,
  Gallery,
  Review,
  MainRegion,
} from "@/entities/Main";
</script>

<template>
  <section class="main__section">
    <div class="main__body _container">
      <MainBanner />
      <MainList />
      <WorkSteps />
      <MainInfo />
      <Gallery />
      <MainRegion />
      <Review />
    </div>
  </section>
</template>
