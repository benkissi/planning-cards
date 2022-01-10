<template>
  <div class="flex">
    <div class="flex flex-col">
      <div class="text-4xl font-bold">{{ title }}</div>
      <div class="text-lg">{{ subTitle }}</div>
    </div>
    <div>
      <div>{{ image }}</div>
      <div><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      title: String,
      required: true,
    },
    subTitle: {
      title: String,
      required: true,
    },
    image: {
      title: String,
      required: true,
    },
  },
};
</script>
