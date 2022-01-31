<template>
  <div class="flex justify-center items-center wrapper bg-white overflow-hidden">
    <div class="flex flex-col w-full md:w-2/4 text-center md:text-left">
      <div class="text-3xl md:text-5xl font-extrabold mb-7">
        Planning cards for agile development teams
      </div>
      <div class="mb-5 text-xl md:text-2xl">Fun and engaging tool to generate estimates for your tasks</div>
      <div class="w-full px-10 md:px-0 md:w-1/3 mt-10">
        <pc-button text="Start new game" @btnClick="$router.push('/create')" />
      </div>
    </div>
    <div class="relative mt-auto hidden md:block">
      <HeroImage />
    </div>
  </div>
</template>

<script>
import HeroImage from "../../assets/svg/HeroImage.vue";
export default {
  name: "HeroSection",
  components: { HeroImage },
};
</script>

<style scoped>
.wrapper {
  height: 55vh;
}
</style>
