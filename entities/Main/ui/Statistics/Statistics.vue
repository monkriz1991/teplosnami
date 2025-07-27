<script setup>
import { ref, reactive } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import "./statistics.scss";

const steps = [
  { title: "Реализованных проектов", number: 57 },
  { title: "Лет на рынке", number: 12 },
  { title: "Года гарантии", number: 3 },
];

const animatedValues = reactive(steps.map(() => 0));
const hasAnimated = ref(false);

const animateCount = (index, target, duration = 3500) => {
  const stepTime = Math.max(10, Math.floor(duration / target));
  let current = 0;

  const interval = setInterval(() => {
    current += 1;
    if (current >= target) {
      clearInterval(interval);
      current = target;
    }
    animatedValues[index] = current;
  }, stepTime);
};

const stepsRef = ref(null);

useIntersectionObserver(
  stepsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true;
      steps.forEach((step, index) => {
        animateCount(index, step.number);
      });
    }
  },
  {
    threshold: 0.1,
  }
);
</script>
<template>
  <section class="statistics-stages" id="steps" ref="stepsRef">
    <div class="container">
      <h2 class="statistics-stages__headline">Мы в цифрах</h2>
      <div class="statistics-stages__grid">
        <div
          class="statistics-stages__item"
          v-for="(step, i) in steps"
          :key="i"
        >
          <div class="statistics-stages__body">
            <span class="statistics-stages__number">
              {{ animatedValues[i] }}
            </span>
            <h3 class="statistics-stages__title">{{ step.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
