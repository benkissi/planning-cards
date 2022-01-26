<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-3xl font-bold text-gray-800">{{ title }}</div>
    <div class="text-xl text-gray-600 mt-5">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
};
</script>
