<script setup>
import "./base-text-field.scss";

const props = defineProps({
  placeholder: { type: String, required: true },
  type: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  value: { type: [String, Number], required: false, default: "" },
  modelValue: { type: [String, Number], default: "" },
});

const emits = defineEmits([
  "update:modelValue",
  "setValue",
  "setFocus",
  "blur",
]);

const isLabelAnimated = ref(false);

// Преобразуем значения в строку для использования в input
const inputValue = computed(() => {
  return props.modelValue === 0
    ? ""
    : String(props.modelValue || props.value || "");
});

const handleInput = (e) => {
  const inputValue = e.target.value;
  //const parsedValue = props.type === 'text' ? inputValue : Number(inputValue);

  const parsedValue = isNaN(Number(inputValue))
    ? inputValue
    : Number(inputValue);

  emits("update:modelValue", parsedValue);
  emits("setValue", parsedValue);
};

const handleFocus = (focused) => {
  emits("setFocus", focused);
  isLabelAnimated.value = focused || !!inputValue.value;
};

const handleBlur = (e) => {
  handleFocus(false);
  emits("blur", e); // Эмитируем событие blur
};

// Следим за изменением начального значения и корректируем анимацию лейбла
watch(
  () => props.modelValue,
  (newValue) => {
    isLabelAnimated.value = !!newValue;
  }
);

onMounted(() => {
  isLabelAnimated.value = !!inputValue.value;
});
</script>

<template>
  <div class="entryarea">
    <div class="entryarea__container">
      <input
        class="entryarea__input"
        :type="type"
        :value="inputValue"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus(true)"
        @blur="handleBlur"
      />
      <div
        class="entryarea__label"
        :class="{
          active: isLabelAnimated,
        }"
      >
        {{ placeholder }}
      </div>
    </div>
    <slot />
  </div>
</template>
