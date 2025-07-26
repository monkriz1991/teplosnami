<script setup>
import "./work-steps.scss";
import { BaseModal } from "@/shared/ui";

const isModalOpen = ref(false);
const steps = [
  {
    title: "Заявка и выезд",
    text: "Вы оставляете заявку → мы перезваниваем и выезжаем на объект для встречи и замеров.",
  },
  {
    title: "Техобсуждение и ТЗ",
    text: "Обсуждаем отопление, водоснабжение, канализацию, размещение приборов. Формируем техническое задание и предварительную смету.",
  },
  {
    title: "Проект и расчёты",
    text: "Разрабатываем проект, рассчитываем теплопотери, подбираем оборудование и утверждаем финальную стоимость.",
  },
  {
    title: "Монтаж и сдача",
    text: "Монтируем систему: отопление, водоснабжение, канализацию, котельную. Запускаем, балансируем и передаём готовую систему.",
  },
];
</script>
<template>
  <section class="work-stages" id="steps">
    <div class="container">
      <h2 class="work-stages__headline">Этапы</h2>

      <div class="work-stages__grid">
        <div
          class="work-stages__item"
          v-for="(step, i) in steps"
          :key="i"
          :data-step="i + 1"
          :class="{ 'is-dark': i === 0 || i === 2 }"
        >
          <div class="work-stages__body">
            <h3 class="work-stages__title">{{ step.title }}</h3>
            <p class="work-stages__text">{{ step.text }}</p>
            <button
              v-if="i === 0"
              class="work-stages__btn button"
              @click="isModalOpen = true"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
      <BaseModal v-model="isModalOpen" />
    </div>
  </section>
</template>
