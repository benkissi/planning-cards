<template>
  <div class="text-center">
    <div class="flex flex-col">
      <div class="text-4xl font-bold mb-3 text-gray-800">{{ title }}</div>
      <div class="text-lg text-gray-500">{{ subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
