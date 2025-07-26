<script setup>
import "./gallery.scss";
import { Left, Right } from "~/utils/icons/index.jsx";
import { useMediaQuery } from "@vueuse/core";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

const services = [
  { img: "/gallery/1.webp" },
  { img: "/gallery/2.webp" },
  { img: "/gallery/3.webp" },
  { img: "/gallery/4.webp" },
  { img: "/gallery/5.webp" },
  { img: "/gallery/6.webp" },
  { img: "/gallery/7.webp" },
  { img: "/gallery/8.webp" },
  { img: "/gallery/9.webp" },
  { img: "/gallery/10.webp" },
  { img: "/gallery/11.webp" },
  { img: "/gallery/12.webp" },
  { img: "/gallery/13.webp" },
  { img: "/gallery/14.webp" },
];

const isMobile = useMediaQuery("(max-width: 768px)");
</script>

<template>
  <section class="gallery" id="gallery">
    <h2>Галерея</h2>
    <!-- Десктопная галерея -->
    <div v-if="!isMobile" class="gallery__grid">
      <div
        v-for="(service, i) in services.slice(0, 16)"
        :key="i"
        class="gallery__item"
      >
        <div class="gallery__bg">
          <NuxtImg
            :src="service.img"
            sizes="350px"
            loading="lazy"
            decoding="async"
            format="webp"
            data-fancybox="gallery"
            :alt="`Галерея фото ${i + 1}`"
          />
        </div>
      </div>
    </div>
    <!-- Мобильная галерея -->
    <ClientOnly v-else>
      <Swiper
        :modules="[Navigation, Pagination]"
        :space-between="12"
        :slides-per-view="1"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        class="gallery__swiper"
      >
        <SwiperSlide v-for="(service, i) in services" :key="i">
          <div class="gallery__item">
            <div class="gallery__bg">
              <NuxtImg
                :src="service.img"
                sizes="sm:300px md:300px"
                loading="lazy"
                decoding="async"
                format="webp"
                data-fancybox="gallery"
                :alt="`Фото ${i + 1}`"
              />
            </div>
          </div>
        </SwiperSlide>
        <div class="swiper-button-prev"><Left /></div>
        <div class="swiper-button-next"><Right /></div>
      </Swiper>
    </ClientOnly>
  </section>
</template>
