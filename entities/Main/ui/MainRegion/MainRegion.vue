<script setup>
import { BaseModal } from "@/shared/ui";
import "./main-region.scss";
const cities = [
  "Минск",
  "Борисов",
  "Жодино",
  "Смолевичи",
  "Фаниполь",
  "Молодечно",
  "Вилейка",
  "Заславль",
  "Дзержинск",
  "Логойск",
];

const isModalOpen = ref(false);
</script>

<template>
  <section class="region-block">
    <div class="container">
      <h2 class="region-block__title">География работ</h2>
      <p class="region-block__desc">
        Мы выполняем монтаж инженерных систем в Минске и Минском районе.
      </p>

      <ul class="region-block__list">
        <li v-for="city in cities" :key="city" class="region-block__item">
          <span class="region-block__pin" /> {{ city }}
        </li>
      </ul>

      <p class="region-block__note">
        Если вашего города нет в списке — свяжитесь с нами, и мы обсудим
        возможность выезда.
      </p>

      <div class="region-block__actions">
        <button class="main-banner__btn button" @click="isModalOpen = true">
          Оставить заявку
        </button>
        <a href="tel:+375296909898" class="region-block__phone">
          или свяжитесь с нами по номеру: <span>+375 (29) 690-98-98</span>
        </a>
      </div>

      <BaseModal v-model="isModalOpen" />
    </div>
  </section>
</template>
