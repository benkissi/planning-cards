<template>
  <div class="footer bg-gray-800 flex justify-center items-center text-lg text-white">
      © {{year}} Getch, All Rights Reserved.
  </div>
</template>
<script>
export default {
  name: "Footer",
  computed: {
      year() {
          const date = new Date()
          return date.getFullYear()
      }
  }
};
</script>

<style scoped>
.footer {
  height: 50px;
}
</style>
