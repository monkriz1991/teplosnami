<script setup>
import "./main-banner.scss";
import { BaseModal } from "@/shared/ui";

const form = reactive({});
const isModalOpen = ref(false);
</script>

<template>
  <section class="main-banner">
    <NuxtImg
      src="./baner/bn_3.jpg"
      alt="Монтаж систем отопления, водоснабжения, канализации"
      format="webp"
      class="main-banner__bg"
    />

    <div class="main-banner__overlay" />

    <div class="main-banner__content">
      <h1 class="main-banner__title">
        Монтаж систем отопления, водоснабжения, канализации.
      </h1>
      <h2 class="main-banner__subtitle">
        Комплекс услуг по устройству коммуникаций в частном доме с гарантией.
        <br />
        Доступные цены! <br />
        Действует рассрочка платежа!
      </h2>
      <button class="main-banner__btn button" @click="isModalOpen = true">
        Оставить заявку
      </button>
    </div>

    <BaseModal v-model="isModalOpen" />
  </section>
</template>
