<script setup>
import "./base-dropdown.scss";

const props = defineProps({
  placeholder: { type: String, required: true },
  options: { type: Array, required: true, default: () => [] },
  modelValue: { type: [String, Number], default: "" },
  optionLabel: { type: String, default: null },
  optionValue: { type: String, default: null },
});

const emits = defineEmits(["update:modelValue"]);

const isDropdownOpened = ref(false);
const dropdown = ref(null);

// const selectedValue = computed(() => {
//   return props.modelValue || "";
// });

const selectedLabel = computed(() => {
  if (props.optionValue && props.optionLabel) {
    const found = props.options.find(
      (opt) => opt[props.optionValue] === props.modelValue
    );
    return found ? found[props.optionLabel] : "";
  } else {
    return props.modelValue || "";
  }
});

const toggleDropdown = () => {
  isDropdownOpened.value = !isDropdownOpened.value;
};

const handleOptionClick = (value) => {
  emits("update:modelValue", value);
  isDropdownOpened.value = false;
};

const handleClickOutside = (e) => {
  if (dropdown.value && !dropdown.value.contains(e.target)) {
    isDropdownOpened.value = false;
  }
};

onMounted(() => {
  document.body.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.body.removeEventListener("click", handleClickOutside);
});
</script>
<template>
  <div ref="dropdown" class="dropdown">
    <div
      class="dropdown__btn"
      :class="{ active: isDropdownOpened }"
      @click="toggleDropdown"
    >
      <span class="dropdown__text button__text">
        {{ selectedLabel || props.placeholder }}
      </span>
      <svg
        class="dropdown__chevron"
        :class="{ active: isDropdownOpened }"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="dropdown__body" :class="{ active: isDropdownOpened }">
      <div
        v-for="(item, index) in props.options"
        :key="index"
        class="dropdown__item"
        @click="
          handleOptionClick(props.optionValue ? item[props.optionValue] : item)
        "
      >
        <span class="dropdown__text button__text">
          {{ props.optionLabel ? item[props.optionLabel] : item }}
        </span>
      </div>
    </div>
  </div>
</template>
