<script setup>
import "./app-footer.scss";
import { Instagram, Facebook, Youtube } from "~/utils/icons/index.jsx";

const phone = ref("+375 (29) 690-98-98");
const dopphone = ref("");
const email = ref("6909898@mail.ru");
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <p class="footer__content-title">
          Проектирование, монтаж систем отопления, водоснабжения, канализации.
        </p>
        <p v-if="phone">
          Tel.:<a :href="`tel:+37529` + phone" class="f-phone">{{ phone }}</a>
        </p>
        <p v-if="dopphone">
          Tel.:<a :href="`tel:+37529` + dopphone" class="f-phone">{{
            dopphone
          }}</a>
        </p>
        <p v-if="email">E-mail.: {{ email }}</p>
        <div class="social-links">
          <a href="https://www.instagram.com/profiterm.by/" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/profitherm.by" target="_blank">
            <Facebook />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3wkjV2806LxgRBjtnPR4eQ"
            target="_blank"
          >
            <Youtube />
          </a>
        </div>
        <p><span>© 2025 «ПРОФИТЕРМ»</span></p>
      </div>
    </div>
  </footer>
</template>
