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
        <AddArt />
      </Section>
    </div>
    <div class="mt-28">
      <Section
        title="Download vote information"
        subTitle="Easily download voting information to a CSV file"
      >
        <DownloadArt />
      </Section>
    </div>
    <div class="mt-28 pt-16 bg-white">
      <Title title="High Stake Wins" subTitle="Get started in 3 simple steps" />
      <div class="flex justify-between px-72 mt-12">
        <div class="w-2/6">
          <Step
            title="1. Start new game"
            description="Start a new game and add your issues."
          >
            <GameArt />
          </Step>
        </div>
        <div class="w-2/6">
          <Step
            title="2. Invite your team"
            description="Copy and share your games invite link."
          >
            <InviteArt />
          </Step>
        </div>
        <div class="w-2/6">
          <Step
            title="3. Start Voting"
            description="Start voting in real time."
          >
            <VoteArt />
          </Step>
        </div>
      </div>
    </div>
    <div class="pt-40 bg-white">
      <div class="bg-purple-100 py-32">
        <div class="mt-10">
          <Pricing />
        </div>
      </div>
      <div class="-mt-5">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/lander/HeroSection.vue";
import Title from "../components/lander/Title.vue";
import Section from "../components/lander/Section.vue";
import Step from "../components/lander/Step.vue";
import Pricing from "../components/lander/Price.vue";
import Footer from "../components/lander/Footer.vue";

import UpvoteArt from "../assets/svg/Upvote.vue";
import AddArt from "../assets/svg/AddImage.vue";
import DownloadArt from "../assets/svg/DownloadImage.vue";

import InviteArt from "../assets/svg/InviteImage.vue";
import GameArt from "../assets/svg/GameImage.vue";
import VoteArt from "../assets/svg/VoteImage.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    Title,
    Section,
    UpvoteArt,
    AddArt,
    DownloadArt,
    InviteArt,
    VoteArt,
    Step,
    Pricing,
    Footer,
    GameArt,
  },
};
</script>
