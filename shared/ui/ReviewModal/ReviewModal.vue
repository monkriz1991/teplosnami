<script setup>
import "./review-modal.scss";
import { setScrollHidden } from "@/shared/lib/helpers/scroll-helpers";
import { Close } from "~/utils/icons/index.jsx";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
});
const emit = defineEmits(["update:modelValue"]);

watch(
  () => props.modelValue,
  (val) => {
    setScrollHidden(val);
  }
);

const close = () => {
  emit("update:modelValue", false);
};
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

      <slot />
    </div>
  </div>
</template>
