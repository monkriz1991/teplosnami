<script setup>
import "./base-modal.scss";
import { Close } from "~/utils/icons/index.jsx";
import { setScrollHidden } from "@/shared/lib/helpers/scroll-helpers";
import { BaseTextField } from "@/shared/ui";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
});
const emit = defineEmits(["update:modelValue"]);

const form = ref({
  contact: "",
  phone: "",
  description: "",
});

const errors = ref({
  contact: "",
  phone: "",
  description: "",
});

const loading = ref(false);

const validate = () => {
  const phoneVal = String(form.value.phone || "").trim();

  errors.value = {
    contact: String(form.value.contact || "").trim()
      ? ""
      : "Укажите контактное лицо",

    phone: !phoneVal
      ? "Введите телефон"
      : isValidPhone(phoneVal)
        ? ""
        : "Введите корректный телефон",

    description: String(form.value.description || "").trim()
      ? ""
      : "Введите описание",
  };

  return !Object.values(errors.value).some((e) => e);
};
const submitForm = async () => {
  if (!validate()) return;

  loading.value = true;
  try {
    const res = await $fetch("/api/send-email", {
      method: "POST",
      body: { ...form.value },
    });

    if (res.success) {
      alert("Заявка отправлена!");
      close();
      form.value = { contact: "", phone: "", description: "" };
    } else {
      alert("Ошибка при отправке. Попробуйте ещё раз.");
    }
  } catch (err) {
    alert("Ошибка сети");
  } finally {
    loading.value = false;
  }
};
watch(
  () => props.modelValue,
  (val) => {
    setScrollHidden(val);
  }
);
watch(
  () => form.value.contact,
  (newVal) => {
    if (typeof newVal === "string" && newVal.trim()) {
      errors.value.contact = "";
    }
  }
);
watch(
  () => form.value.phone,
  (newVal) => {
    const val = String(newVal || "").trim();
    if (!val) {
      errors.value.phone = "Введите телефон";
    } else if (isValidPhone(val)) {
      errors.value.phone = "";
    } else {
      errors.value.phone = "Введите корректный телефон";
    }
  }
);
watch(
  () => form.value.description,
  (newVal) => {
    if (typeof newVal === "string" && newVal.trim()) {
      errors.value.description = "";
    }
  }
);
const close = () => {
  emit("update:modelValue", false);
  form.value = { contact: "", phone: "", description: "" };
  errors.value = { contact: "", phone: "", description: "" };
};
function isValidPhone(phone) {
  // Разрешаем цифры, пробелы, скобки, +, тире
  const phonePattern = /^[\d\s()+-]+$/;
  return phonePattern.test(phone.trim());
}
</script>
<template>
  <div class="modal" v-if="modelValue" @click="close">
    <div class="modal__dialog" @click.stop>
      <button
        class="modal__dialog-cross-btn button_icon-primary"
        @click="close"
      >
        <Close />
      </button>

      <div class="hero-form__row">
        <h4 class="hero-form__row-title-with-span">Контактное лицо</h4>
        <BaseTextField
          v-model="form.contact"
          type="text"
          placeholder="Введите имя"
          class="hero-form__input-text"
        />
        <span v-if="errors.contact" class="hero-form__error">{{
          errors.contact
        }}</span>
      </div>

      <div class="hero-form__row">
        <h4 class="hero-form__row-title-with-span">Телефон</h4>
        <BaseTextField
          v-model="form.phone"
          type="text"
          placeholder="Введите телефон"
          class="hero-form__input-text"
        />
        <span v-if="errors.phone" class="hero-form__error">{{
          errors.phone
        }}</span>
      </div>

      <div class="hero-form__row">
        <h4 class="hero-form__row-title-with-span">Описание работ</h4>
        <div class="hero-form__textarea-container">
          <textarea
            v-model="form.description"
            class="hero-form__textarea"
            placeholder="Введите описание"
          />
        </div>
        <span v-if="errors.description" class="hero-form__error">{{
          errors.description
        }}</span>
      </div>

      <button
        class="button button_outlined-icon"
        @click="submitForm"
        :disabled="loading"
      >
        {{ loading ? "Отправка..." : "Отправить" }}
      </button>
    </div>
  </div>
</template>
