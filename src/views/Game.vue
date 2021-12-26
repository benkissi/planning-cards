<template>
  <div class="flex flex-col h-full">
    <Nav />
    <div class="flex justify-between items-center h-full px-10">
      <Players :players="roomInfo.users" />
      <div class="bg-purple-300 h-1/4 w-1/4 rounded-full"></div>
      <div></div>
    </div>
    <div class="flex justify-center">
      <Cards
        :type="game.voting"
        class="mb-20"
        v-on:voteSelected="handleVoteSelection"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "../components/Nav.vue";
import Cards from "../components/Cards.vue";
import Players from "../components/Players.vue";
export default {
  name: "Game",
  components: {
    Nav,
    Cards,
    Players,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      game: (state) => state.game,
      roomInfo: (state) => state.roomInfo,
    }),
  },
  methods: {
    handleVoteSelection(value) {
      this.$socket.emit("vote", {id: this.user.id, value }, (error) => {
          console.log('error', error)
      });
    },
  },
};
</script>
