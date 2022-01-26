<template>
  <div class="flex justify-between items-center px-72">
    <div :class="['flex flex-col', flip && 'order-last']">
      <div class="text-4xl font-bold text-gray-800">{{ title }}</div>
      <div class="text-lg text-gray-500">{{ subTitle }}</div>
    </div>
    <div class="mr-10">
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
      type: String,
      required: false
    }
  },
};
</script>
