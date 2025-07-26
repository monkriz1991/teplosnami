<script setup>
import "./app-preloader.scss";

const props = defineProps({ loading: Boolean });
const { loading } = toRefs(props);
</script>

<template>
  <Transition name="fade">
    <div v-if="loading" class="preloader-overlay">
      <div class="spinner" />
    </div>
  </Transition>
</template>
