<template>
  <button
    :disabled="disabled"
    :class="[
      'w-full rounded text-white text-center capitalize text-lg ',
      disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      bgColor ? bgColor : 'bg-purple-600',
      lg ? 'p-4 px-10' : 'p-2',
    ]"
    @click="$emit('btnClick')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button text",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    bgColor: {
      type: String,
      required: false,
    },
    lg: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
