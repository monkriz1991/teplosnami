<script setup>
import "./main-banner.scss";
import { BaseModal } from "@/shared/ui";

const form = reactive({});
const isModalOpen = ref(false);
</script>

<template>
  <section class="main-banner">
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
    <div class="main-banner__img">
      <NuxtImg
        src="./baner_5.png"
        alt="Монтаж систем отопления, водоснабжения, канализации"
        sizes="500px"
        format="webp"
      />
    </div>
    <BaseModal v-model="isModalOpen" />
  </section>
</template>
