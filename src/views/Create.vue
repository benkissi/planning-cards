<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/2">
      <div class="mb-5">Create new game</div>
      <pc-input placeholder="Game name" class="mb-3" v-model="name" />
      <pc-select
        :options="votingOptions"
        placeholder="Select voting type"
        v-on:selection="onVotingSelect"
        class="mb-3"
      />
      <pc-input placeholder="Pick a username" class="mb-3" v-model="username" />
      <pc-button class="mt-8" text="Start game" v-on:btnClick="handleStart" />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      username: "",
      name: "",
      votingType: "",
      votingOptions: [
        {
          text: "Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ? )",
          value: "fibonacci",
        },
        {
          text: "Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ? )",
          value: "powers of 2",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      addGame: 'addGame',
      addUser: 'addUser'
    }),
    handleStart() {
      this.$socket.emit(
        "startGame",
        {
          name: this.name,
          voting: this.votingType,
          username: this.username,
        },
        (error, game, user) => {
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
          }else {
            console.log('user***', user)
            this.addGame(game)
            this.addUser(user)
            this.$router.push('/game')
          }
        }
      );
    },

    onVotingSelect(value) {
      this.votingType = value;
    },
  },
};
</script>
