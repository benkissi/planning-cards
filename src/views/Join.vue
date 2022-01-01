<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/2">
      <div class="mb-5">Join Game</div>
      <pc-input
        placeholder="Game name"
        class="mb-3"
        v-model="game"
        :disabled="true"
      />

      <pc-input placeholder="Pick a username" class="mb-3" v-model="username" />
      <pc-button class="mt-8" text="Join game" v-on:btnClick="handleJoin" />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Join",
  data() {
    return {
      game: "",
      username: "",
      room: "",
      gameId: "",
    };
  },
  created() {
    const room = this.$route?.params?.roomId;
    if (room) {
      this.game = room.split("+")[1];
      this.room = room;
      this.gameId = room.split("+")[0];
    }

    console.log("room", room);
  },
  methods: {
    ...mapActions({
      addGame: "addGame",
      addUser: "addUser",
    }),
    handleJoin() {
      const data = {
        username: this.username,
        room: this.room,
        gameId: this.gameId,
      };

      this.$socket.emit("join", data, (error, game, user) => {
        console.log("error", error);
        if (error) {
          this.$toast.error(error, {
            position: "bottom-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        } else {
          this.addGame(game);
          this.addUser(user);
          this.$router.push('/game')
        }
      });

      console.log("join data", data);
    },
  },
};
</script>
