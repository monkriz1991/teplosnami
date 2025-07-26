<script setup>
import "./app-header.scss";
import { Instagram, Facebook, Youtube, Close } from "~/utils/icons/index.jsx";
import { menuItems } from "@/shared/config/menu";
import { debounce } from "@/shared/lib/helpers/debounce";
import { HeaderLogo } from "@/entities/Header";

const route = useRoute();
const breakpoint = 1280;
const isMenuOpened = ref(false);

const phone = "+375 (29) 690-98-98";
const dopphone = "+375 (29) 690-98-98";
const activeSection = ref("");
const closeMenuOnResize = () => {
  if (isMenuOpened.value) {
    if (window.innerWidth > breakpoint) {
      isMenuOpened.value = false;
    }
  }
};
const sectionOffsets = [];

onMounted(() => {
  updateSectionOffsets();
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const updateSectionOffsets = () => {
  sectionOffsets.length = 0;
  menuItems.forEach((item) => {
    const el = document.querySelector(item.to);
    if (el) {
      sectionOffsets.push({
        id: item.to,
        top: el.offsetTop,
        bottom: el.offsetTop + el.offsetHeight,
      });
    }
  });
};

const onScroll = () => {
  const scrollY = window.scrollY + 100; // отступ сверху

  for (const section of sectionOffsets) {
    if (scrollY >= section.top && scrollY < section.bottom) {
      activeSection.value = section.id;
      break;
    }
  }
};
const scrollToAnchor = (hash) => {
  const target = document.querySelector(hash);
  if (target) {
    const offset = 80;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = targetPosition - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    activeSection.value = hash;
    isMenuOpened.value = false;
  }
};
const debouncedCloseMenuOnResize = debounce(closeMenuOnResize, 150);

const setIsMenuOpened = () => {
  isMenuOpened.value = !isMenuOpened.value;
};

onMounted(() => {
  window.addEventListener("resize", debouncedCloseMenuOnResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", debouncedCloseMenuOnResize);
});
</script>
<template>
  <!-- Оверлей -->
  <Transition>
    <div
      v-if="isMenuOpened"
      class="header-overlay"
      @click="isMenuOpened = false"
    />
  </Transition>

  <!-- Хедер -->
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <HeaderLogo />

        <!-- Бургер -->
        <div
          class="header__burger burger-header"
          :class="{ active: isMenuOpened }"
          @click="setIsMenuOpened"
        >
          <div class="burger-header__stripe burger-header__stripe_1" />
          <div class="burger-header__stripe burger-header__stripe_2" />
          <div class="burger-header__stripe burger-header__stripe_3" />
        </div>

        <!-- Меню -->
        <div class="header__body" :class="{ active: isMenuOpened }">
          <!-- Навигация -->
          <nav class="header__navmenu navmenu-header">
            <ul class="navmenu-header__list">
              <li
                class="navmenu-header__item"
                v-for="(item, index) in menuItems"
                :key="index"
              >
                <a
                  href="javascript:void(0)"
                  class="header__link"
                  :class="{ active: activeSection === item.to }"
                  @click="scrollToAnchor(item.to)"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
          <!-- Контакты + соцсети (desktop) -->
          <div class="header__contacts" v-if="!isMenuOpened">
            <div class="header__contacts-info">
              <p>
                <a :href="`tel:${phone}`">{{ phone }}</a>
              </p>
              <!-- <p>
                <a :href="`tel:${dopphone}`">{{ dopphone }}</a>
              </p> -->
            </div>
            <div class="header__contacts-socials">
              <a href="https://www.instagram.com/profiterm.by/" target="_blank"
                ><Instagram
              /></a>
              <!-- <a href="https://www.facebook.com/profitherm.by" target="_blank"
                ><Facebook
              /></a> -->
            </div>
          </div>
          <!-- Контакты (mobile) -->
          <div
            class="header__contacts header__contacts_mobile"
            v-if="isMenuOpened"
          >
            <div class="header__contacts-info">
              <p>
                <a :href="`tel:${phone}`">{{ phone }}</a>
              </p>
              <!-- <p>
                <a :href="`tel:${dopphone}`">{{ dopphone }}</a>
              </p> -->
            </div>
            <div class="header__contacts-socials">
              <a href="https://www.instagram.com/profiterm.by/" target="_blank"
                ><Instagram
              /></a>
              <!-- <a href="https://www.facebook.com/profitherm.by" target="_blank"
                ><Facebook
              /></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
