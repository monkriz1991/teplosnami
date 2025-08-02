<script setup>
import "./work-steps.scss";
import { Hands, Calculator, Car, Tools } from "~/utils/icons/index.jsx";
import { BaseModal } from "@/shared/ui";

const isModalOpen = ref(false);
const steps = [
  {
    title: "Заявка и выезд",
    text: "Вы оставляете заявку → мы перезваниваем и выезжаем на объект для встречи и замеров.",
    icon: Car,
  },
  {
    title: "Встреча на объекте",
    text: "Поможем подобрать оптимальное решение для отопления вашего здания с учетом ваших пожеланий. Обсудим размещение оборудования и выбор котельной.",
    icon: Hands,
  },
  {
    title: "Расчет стоимости",
    text: "По результатам встречи на объекте будет подготовлено детальное предложение, содержащее стоимость работ и необходимых материалов.",
    icon: Calculator,
  },
  {
    title: "Монтаж и сдача",
    text: "Согласовав стоимость работ и материалов, мы определяем удобные для вас даты монтажа. Монтаж и запуск системы могут быть выполнены как единым этапом, так и разбиты на несколько, что бы соответствовать готовности вашего объекта.",
    icon: Tools,
  },
];
</script>
<template>
  <section class="work-stages" id="steps">
    <div class="container">
      <h2 class="work-stages__headline">Заказать монтаж</h2>

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
          <div class="work-stages__icon">
            <component :is="step.icon" />
          </div>
        </div>
      </div>
      <BaseModal v-model="isModalOpen" />
    </div>
  </section>
</template>
