<template>
<div>
    <div class="flex flex-col">
    <div class="text-4xl font-bold">{{ title }}</div>
    <div class="text-lg">{{ subTitle }}</div>
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
