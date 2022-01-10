<template>
  <div>
    <div class="">
      <HeroSection />
    </div>
    <div class="text-center">
      <Title title="Stop boring plannings" subTitle=" we give you the confidence that your teams is connected anss stays productive"/></div>
      <div><Section title="Vote issues in real-time" subTitle="Your team will be more engaged with our clear and useful interface"/></div>
    
  </div>
</template>

<script>
import HeroSection from "../components/lander/HeroSection.vue";
import Title from "../components/lander/Title.vue";
import Section from "../components/lander/Section.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    Title,
    Section,
  },
};
</script>
