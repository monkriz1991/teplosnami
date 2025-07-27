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
    text: "Отличная работа! Качественно, в срок, по адекватной цене и с полной прозрачностью по материалам. Рек...",
    photo: "/reviews/rzgctdveterinar.webp",
  },
  {
    name: "Сергей Кочергин",
    text: "Всех приветствую! Хочу выразить слова благодарности коллективу ПрофиТерм и лично руководителю компан...",
    photo: "/reviews/99iyw0bcn5m20230408_144829_1_11zon.webp",
  },
  {
    name: "Сергей Афанасьевич Бондаренко",
    text: "Благодарен профитерм за проделанную работу. Все сделали качественно, в срок и по приемлемой стоимост...",
    photo: "/reviews/f1pdnu268qbondarenko11_3_11zon.webp",
  },
  {
    name: "Андрей Лукопров",
    text: "Благодарю Дмитрия и его команду за проделанную работу. Работа была выполнена с душой, качественно и ...",
    photo: "/reviews/s870moandr1.jpg",
  },
  {
    name: "Андрей Дранкевич",
    text: "Спасибо за вашу работу. Приятно знать , что все работает по уму. Подход к работе у Дмитрия именно та...",
    photo: "/reviews/w5i81rIMG-d03a103db959c54358c8c51392c91c40-V1.jpg",
  },
  {
    name: "Ильин Андрей Павлович",
    text: "Просто не могу не поделиться своим восторгом от работы ребят по монтажу отопления! От момента консул...",
    photo: "/reviews/6to3iilyin.webp",
  },
  {
    name: "Валерий Гвоздецкий",
    text: "Добрый день!Надеюсь мой отзыв окажется полезным.Несколько лет назад смонтировал в доме «систему отоп...",
    photo: "/reviews/gqixoValeriy2.jpg",
  },
  {
    name: "Алексей Николаевич",
    text: "Дмитрий совершил не возможное-сделал хорошо и дёшево(хорошее дешёвым как правило не бывает).Все у на...",
    photo: "/reviews/s0vg9falex2.jpg",
  },
  {
    name: "Виктор Васильевич",
    photo: "/reviews/yfyvp8IMG-277584996ceee4367491511e6514d4ac-V1.jpg",
    text: "Хочу выразить огромную благодарность команде, которая устанавливала нам отопление...",
  },
  {
    name: "Глушец Екатерина",
    photo: "/reviews/92vdrScreenshot_20211209-211913_Gallery2.jpg",
    text: "Хотелось бы выразить огромную благодарность Дмитрию и его команде за профессионализм...",
  },
  {
    name: "Дмитрий Поух",
    photo: "/reviews/zjrjawIMG-8a90c95ee3029aeb9810fab5a933f083-V1.jpg",
    text: "Очень долго искал подрядчика по монтажу системы отопления и водоснабжения...",
  },
  {
    name: "Гапанюк Андрей",
    photo: "/reviews/4h7saqIMG-fffd958cecc4f75c193a8e6115cfc382-V1.jpg",
    text: "Хочу смело порекомендовать Дмитрия и его команду к работе любой сложности...",
  },
  {
    name: "Сидорович Валерий",
    photo: "/reviews/y32u3dIMG-de1c4def05e94b8e810856dd2c96036c-V1.jpg",
    text: "Долго искал монтажников для своей котельной, просмотрел кучу видео на ютубе...",
  },
  {
    name: "Ксения Жукович",
    photo: "/reviews/xraxvKsenia.2.jpg",
    text: "Очень довольны работой Дмитрия и его команды. Все четко, грамотно, быстро...",
  },
  {
    name: "Анатолий Гарбуза",
    photo: "/reviews/5kixseratomka1.jpg",
    text: "Приятно иметь дело с профессионалами, у которых всегда под рукой собственная...",
  },
  {
    name: "Олег Перлов",
    photo: "/reviews/tql98tIMG-e437b6f65c241fd283f579dd0c760e37-V2.jpg",
    text: "Редко пишу отзывы , но не могу не поделиться. Хорошие сантехники большая редкость...",
  },
  {
    name: "Алексей",
    text: "Знакомы с Дмитрием довольно продолжительное время. Когда стал вопрос проектирования и строительства ...",
    photo: "/reviews/xsjd48AAA2.jpg",
  },
  {
    name: "Наталья Шульга",
    text: "Бесконечно благодарна Дмитрию за проделанную работу у меня в коттедже. Дмитрий выполнял в доме разво...",
    photo: "/reviews/b2ptydnatalia1.jpg",
  },
  {
    name: "Юрий Бобчёнок",
    text: "Здравствуйте, хочу поблагодарить Вас за работу. Наша система отопления спустя 2 года работает исправ...",
    photo: "/reviews/nex2boIMG-ff227c30675a8e57783f2a15dce75d46-V1.jpg",
  },
  {
    name: "Вячеслав Шидловский",
    text: "Работой специалистов компании Profiterm полностью удовлетворен: компетентны во всех современных техн...",
    photo: "/reviews/xum56IMG-195fdeca861a434189b44b23312e191a-V1.jpg",
  },
  {
    name: "Виталий",
    text: "Компания ПрофиТерм делала систему отопления и прокладывали канализацию в каркасном доме. Всё было сд...",
    photo: "/reviews/m0s9zfvitalii1.jpg",
  },
  {
    name: "Игорь Троцкий",
    text: "В 2017 году, при строительстве моего дома, выбрал Дмитрия для выполнения следующих видов работ:монта...",
    photo: "/reviews/egdlaiIMG-955f6de41c22cdaffa3a3cf997cf97d5-V1.jpg",
  },
  {
    name: "Наталья Ивановна Козыренко",
    text: "ПрофиТерм исправлял у нас ошибки предшественников. Как вы понимаете, у нас уже было с чем сравнивать...",
    img: "/reviews/4emwvIMG-ffa9f925fdf8f701930ca81361f4cf32-V1.jpg",
  },
  {
    name: "Максим",
    text: "Ну что сказать - Профитерм = профессионалы своего дела,что редкость в наше время.Сотрудничать с ними...",
    photo: "/reviews/6xzvavIMG-5935ba2a6f2bdab295625c359e1bfada-V1.jpg",
  },
  {
    name: "Марина",
    text: "Дмитрий, Вы-профи, Вы-лучший! Как же повезло нашей семье с таким специалистом, как - вы!Ничуть не пр...",
    photo: "/reviews/bdh7qjIMG-0a7f9167dd4f7a9e1c3fb6bf9f960925-V2.jpg",
  },
  {
    name: "Ирина",
    text: "Выражаю благодарность за проделанную работу в 2020г. по проектированию и устройству водоснабжения, о...",
    photo: "/reviews/axd0loIMG-e4bef13de6efec887b1db4a43b993191-V1.jpg",
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
        :pagination="{
          type: 'fraction',
        }"
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
