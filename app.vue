<script setup>
import { AppPreloader } from "@/shared/ui";
import { useGlobalLoading } from "@/composables/useGlobalLoading";
import {} from "@/shared/ui";

const isGlobalLoading = useGlobalLoading();

useSeoMeta({
  title: "Site",
  ogTitle: "Site",
});
</script>

<template>
  <NuxtLoadingIndicator :throttle="0" :duration="1500" />
  <AppPreloader :loading="isGlobalLoading" />
  <NuxtLayout class="wrapper">
    <main class="main">
      <keep-alive>
        <NuxtPage />
      </keep-alive>
    </main>
  </NuxtLayout>
</template>
