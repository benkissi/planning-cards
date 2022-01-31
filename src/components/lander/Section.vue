<template>
  <div class="flex flex-col md:flex-row md:px-72 justify-between items-center">
    <div :class="['flex flex-col text-center mb-10', flip && 'order-last']">
      <div class="text-2xl md:text-4xl font-bold text-gray-800">{{ title }}</div>
      <div class="text-lg text-gray-500">{{ subTitle }}</div>
    </div>
    <div class="md:mr-10 md:w-1/2">
     <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    flip: {
      type: Boolean,
      required: false
    }
  },
};
</script>
