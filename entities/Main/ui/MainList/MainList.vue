<script setup>
import "./main-list.scss";

const services = [
  {
    title: "Монтаж отопления",
    subtitle: "",
    points: ["Радиаторами", "Теплыми полами", "Комбинированная система"],
    img: "/baner_5.png",
  },
  {
    title: "Монтаж водоснабжения",
    subtitle: "",
    points: [
      "Внутренняя разводка",
      "Наружные магистрали",
      "Обвязка скважины",
      "Системы фильтрации",
    ],
    img: "/work/4.png",
  },
  {
    title: "Монтаж канализации",
    subtitle: "",
    points: ["Наружная", "Внутренняя"],
    img: "/work/6.png",
  },
  {
    title: "Монтаж котельной",
    subtitle: "",
    points: [
      "Газовая",
      "Электрическая",
      "Твердотопливная",
      "Типловой насос",
      "Комбинированная",
    ],
    img: "/work/1.png",
  },
  // {
  //   title: "Монтаж конвекторов",
  //   subtitle: "",
  //   points: [
  //     "Напольные",
  //     "Настенные",
  //     "С принудительной конвекцией",
  //     "С естественной конвекцией",
  //   ],
  //   img: "/work/5.png",
  // },
  // {
  //   title: "Монтаж бойлеров под ГВС",
  //   subtitle: "",
  //   points: [
  //     "Твердотопливные бойлеры",
  //     "Газовые бойлеры",
  //     "Электрические бойлеры",
  //     "Дизельные бойлеры",
  //   ],
  //   img: "/work/4.png",
  // },
];
</script>
<template>
  <section class="main-list" id="services">
    <h2>Услуги</h2>
    <div class="main-list__grid">
      <div v-for="(service, i) in services" :key="i" class="main-list__item">
        <div class="main-list__bg">
          <NuxtImg
            :src="service.img"
            :alt="service.title"
            sizes="500px"
            format="webp"
          />
        </div>
        <div class="main-list__content">
          <h3 class="main-list__title">{{ service.title }}</h3>
          <p v-if="service.subtitle" class="main-list__subtitle">
            {{ service.subtitle }}
          </p>
          <ul class="main-list__points">
            <li v-for="(point, j) in service.points" :key="j">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-list__note">
      <h3 class="main-list__note-title">Стоимость работ</h3>
      <p class="main-list__note-text">
        Стоимость монтажных работ рассчитывается индивидуально в зависимости от
        площади, типа оборудования, технических условий и особенностей
        помещения. Мы предлагаем прозрачные условия и всегда стремимся к
        оптимальному соотношению цены и качества.
      </p>
    </div>
  </section>
</template>
