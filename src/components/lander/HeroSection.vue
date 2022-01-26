<template>
  <div class="flex justify-center items-center wrapper bg-white">
    <div class="flex flex-col w-2/4">
      <div class="text-5xl font-extrabold mb-7">
        Planning cards for agile development teams
      </div>
      <div class="mb-5">Fun and engaging tool to generate estimates for your tasks</div>
      <div class="w-1/3">
        <pc-button text="Start new game" @btnClick="$router.push('/create')" />
      </div>
    </div>
    <div class="relative mt-auto">
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
