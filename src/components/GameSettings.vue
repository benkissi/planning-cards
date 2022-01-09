<template>
  <div>
    <div class="mb-8">
      <div class="text-gray-500 mb-2">Change game name</div>
      <div class="flex mt-2">
        <pc-input placeholder="Game name" v-model="gameName" />
        <div>
          <pc-button
            text="Update"
            class="ml-3"
            v-on:btnClick="handleUpdate"
            :disabled="gameName === game.name"
          />
        </div>
      </div>
    </div>
    <div class="mb-8">
      <div class="text-gray-500 mb-2">Make user facilitator</div>
      <div class="flex mt-2" v-for="user in users" :key="user.id">
        <div class="mr-3 w-1/2">
          {{ user.username }}
          <span v-if="currentUser.id === user.id" class="ml-2">(you)</span>
        </div>
        <div
          :class="[
            'mr-3 capitalize font-bold underline',
            user.type === 'facilitator' ? 'text-green-500' : 'text-yellow-500',
          ]"
        >
          {{ user.type }}
        </div>
        <pc-toggle
          class="ml-auto"
          v-on:toggle="(state) => handleToggle(state, user.id)"
          :currentState="user.type === 'facilitator'"
          :disabled="currentUser.id === user.id"
        />
      </div>
    </div>

    <div class="mb-8">
      <div class="text-gray-500 mb-2">Change card system</div>
      <div class="mt-2">
        <pc-select
          :options="votingOptions"
          :existingValue="
            votingOptions.find((item) => item.value === votingType)
          "
          placeholder="Select voting type"
          v-on:selection="onVotingSelect"
          class="mb-3"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "GameSettings",
  data() {
    return {
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
      gameName: "",
    };
  },
  watch: {
    game: {
      handler(newValue) {
        if (newValue) {
          this.gameName = newValue.name;
          this.votingType = newValue.voting;
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.user,
      game: (state) => state.game,
      users: (state) => state.roomInfo.users,
    }),
  },

  methods: {
    onVotingSelect(value) {
      this.$socket.emit("updateGame", {
        gameId: this.game.id,
        value: value,
        fieldName: "voting",
      }, (error) => {
          if (error) {
            this.showToast(error, error);
          } else {
            this.showToast(error, "Game update successfull");
          }
      });
    },

    handleUpdate() {
      console.log("update");
      this.$socket.emit(
        "updateGame",
        {
          gameId: this.game.id,
          value: this.gameName,
          fieldName: "name", //name, id, reveal, room, voting
        },
        (error) => {
          if (error) {
            this.showToast(error, error);
          } else {
            this.showToast(error, "Name update successfull");
          }
        }
      );
    },

    handleToggle(state, id) {
      this.$socket.emit(
        "updateUser",
        {
          userId: id,
          value: state ? "facilitator" : "contributor",
          fieldName: "type",
        },
        (error) => {
          if (error) {
            this.showToast(error, error);
          } else {
            this.showToast(error, "User update succe!ssful");
          }
        }
      );
    },

    showToast(error, message) {
      if (error) {
        this.$toast.error(message, {
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
        this.$toast.success(message, {
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
      }
    },
  },
};
</script>
