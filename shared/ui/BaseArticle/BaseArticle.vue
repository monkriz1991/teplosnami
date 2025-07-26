<script setup>
import './base-article.scss';

defineProps({
  title: {
    type: String,
    default: null
  }
});
</script>

<template>
  <article class="article">
    <div v-if="title" class="article__box">
      <h4 class="article__heading heading_h4" v-html="title"/>
      <div class="article__line" />
    </div>
    <div class="article__content">
      <slot />
    </div>
  </article>
</template>
