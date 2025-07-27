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
  Statistics,
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
      <Statistics />
      <Review />
    </div>
  </section>
</template>
