<template>
  <div
    class="flex justify-center items-center rounded-full h-12 w-12 bg-purple-500 text-white"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "PCAvater",
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
  },
  computed: {
    text() {
      const nameArr = this.name.split(" ");
      return nameArr.length > 1
        ? nameArr[0].charAt(0).toUpperCase() + "" + nameArr[1].charAt(0).toUpperCase()
        : nameArr[0].charAt(0).toUpperCase();
    },
  },
};
</script>
