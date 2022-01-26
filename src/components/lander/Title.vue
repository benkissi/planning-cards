<template>
  <div class="text-center">
    <div class="flex flex-col">
      <div
        :class="[
          titleClass ? titleClass : 'text-gray-800',
          'text-4xl font-bold mb-3',
        ]"
      >
        {{ title }}
      </div>
      <div
        :class="[subTitleClass ? subTitleClass : 'text-gray-500', 'text-lg ']"
      >
        {{ subTitle }}
      </div>
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
    titleClass: {
      type: String,
      required: false,
    },
    subTitleClass: {
      type: String,
      required: false,
    },
  },
};
</script>
