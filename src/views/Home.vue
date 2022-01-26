<template>
  <div>
    <div class="">
      <HeroSection />
    </div>
    <div class="mt-10">
      <Title
        title="Stop boring plannings"
        subTitle=" we give you the confidence that your teams is connected anss stays productive."
      />
    </div>
    <div class="mt-28">
      <Section
        title="Vote issues in real-time"
        subTitle="Your team will be more engaged with our clear and useful interface."
      >
        <UpvoteArt />
      </Section>
    </div>
    <div class="mt-28">
      <Section
        :flip="true"
        title="Add your issues and vote for them"
        subTitle="Add your issue title and description and easily see the score for each issue added."
      >
        <UpvoteArt />
      </Section>
    </div>
    <div class="mt-28">
      <Section
        title="Download vote information"
        subTitle="Easily download voting information to a CSV file"
      >
        <UpvoteArt />
      </Section>
    </div>
    <div class="mt-28 pt-16 bg-white">
      <Title title="High Stake Wins" subTitle="Get started in 3 simple steps" />
      <div class="flex justify-between px-72 mt-12">
        <Step title="1. Start new game" description="Start a new game and add the issues you want to vote for."/>
        <Step title="2. Invite your team" description="Copy and share your games invite link"/>
        <Step title="3. Start Voting" description="Start voting in real time"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/lander/HeroSection.vue";
import Title from "../components/lander/Title.vue";
import Section from "../components/lander/Section.vue";
import Step from "../components/lander/Step.vue";

import UpvoteArt from "../assets/svg/Upvote.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    Title,
    Section,
    UpvoteArt,
    Step,
  },
};
</script>
