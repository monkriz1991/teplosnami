<script setup>
import "./review.scss";
import { Left, Right } from "~/utils/icons/index.jsx";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const reviews = [
  {
    name: "Стасюк Виктор Адамович",
    text: "Отличная работа! Качественно, в срок, по адекватной цене и с полной прозрачностью по материалам. Рекомендую!",
    photo: "/reviews/stasyuk.webp",
  },
  {
    name: "Сергей Кочергин",
    text: `Всех приветствую! Хочу выразить слова благодарности коллективу ПрофиТерм и лично Дмитрию за монтаж котельной. Доверился ребятам полностью и не прогадал...`,
    photo: "/reviews/kocherhin.webp",
  },
  {
    name: "Сергей Афанасьевич Бондаренко",
    text: "Благодарен профитерм за проделанную работу. Все сделали качественно, в срок и по приемлемой стоимости. Дмитрий профессионал, который знает свое дело.",
    photo: "/reviews/bondarenko.webp",
  },
  {
    name: "Андрей Лукопров",
    text: "Благодарю Дмитрия и его команду за проделанную работу. Работа была выполнена с душой, качественно и в срок. Рекомендую!",
    photo: "/reviews/lukoprov.jpg",
  },
  {
    name: "Андрей Дранкевич",
    text: "Спасибо за вашу работу. Подход к работе у Дмитрия — внимание к деталям, четкость исполнения, качество.",
    photo: "/reviews/drankevich.jpg",
  },
];
</script>

<template>
  <section class="reviews" id="review">
    <div class="container">
      <h2 class="reviews__headline">Отзывы</h2>

      <Swiper
        :modules="[Navigation, Pagination]"
        :space-between="12"
        :slides-per-view="2"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }"
        pagination
        class="gallery__swiper"
      >
        <SwiperSlide
          v-for="(review, i) in reviews"
          :key="i"
          class="reviews__item"
        >
          <div class="reviews__card">
            <img
              class="reviews__photo"
              :src="review.photo"
              :alt="review.name"
              loading="lazy"
            />
            <div class="reviews__content">
              <p class="reviews__name">{{ review.name }}</p>
              <p class="reviews__text">"{{ review.text }}"</p>
            </div>
          </div>
        </SwiperSlide>
        <div class="swiper-button-prev"><Left /></div>
        <div class="swiper-button-next"><Right /></div>
      </Swiper>
    </div>
  </section>
</template>
