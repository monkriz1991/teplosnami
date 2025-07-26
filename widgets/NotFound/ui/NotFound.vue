<script setup>
import "./not-found.scss";
</script>

<template>
  <div class="not-found">
    <div class="not-found__container">
      <div class="not-found__content">
        <h2 class="not-found__error">404</h2>
        <h1 class="not-found__heading heading_h1">
          {{ "Извините, эта страница не найдена" }}
        </h1>
        <p class="not-found__paragraph">
          {{
            "Страница, которую вы ищете, могла быть удалена, ее название было изменено или она временно недоступна."
          }}
        </p>
        <NuxtLink :to="'/'" class="button button_primary not-found__button">{{
          "Вернуться на главную страницу"
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
