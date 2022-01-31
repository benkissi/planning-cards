<template>
  <div class="flex flex-col min-h-screen md:h-screen">
    <Nav class="d-none hidden md:flex" />
    <MobileNav class="md:hidden" />
    <div
      class="flex flex-col md:flex-row justify-between items-center h-4/5 px-5 md:px-10"
    >
      <div class="w-full md:w-1/5 h-full py-10">
        <Players
          :players="roomInfo.users"
          :reveal="reveal"
          :currentUser="currentUser"
        />
      </div>
      <div class="flex items-center h-full w-full md:w-1/2 mb-5 md:mb-0">
        <div v-if="players.left">
          <div
            v-for="(player, idx) in players.left"
            :key="idx"
            class="text-center capitalize mr-4"
          >
            <div
              class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
            >
              <img
                src="../assets/card.png"
                class="w-full h-full"
                v-if="!reveal"
              />
              <div v-else class="flex flex-col h-full w-full p-1 rounded">
                <div class="text-left">{{ player.vote }}</div>
                <div class="text-right mt-auto">{{ player.vote }}</div>
              </div>
            </div>
            <div class="h-full w-full">{{ player.username }}</div>
          </div>
        </div>

        <div
          class="flex-1 flex flex-col justify-center items-center h-full mx-4"
        >
          <div v-if="players.top" class="flex flex-wrap">
            <div
              v-for="(player, idx) in players.top"
              :key="idx"
              class="text-center capitalize mr-4"
            >
              <div
                class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
              >
                <img
                  src="../assets/card.png"
                  class="w-full h-full"
                  v-if="!reveal"
                />
                <div v-else class="flex flex-col h-full w-full p-1 rounded">
                  <div class="text-left">{{ player.vote }}</div>
                  <div class="text-right mt-auto">{{ player.vote }}</div>
                </div>
              </div>
              <div class="h-full w-full">{{ player.username }}</div>
            </div>
          </div>
          <div class="bg-purple-300 h-1/4 w-full rounded-full my-4 px-10 py-5">
            <div
              v-if="user.type === 'facilitator'"
              class="flex items-center justify-center w-full h-full"
            >
              <pc-button
                text="Reveal cards"
                class="w-9/12"
                v-if="tasks && currentTask && votesMade"
                v-on:btnClick="handleReveal"
              />
              <div
                v-else-if="tasks && currentTask && !votesMade"
                class="text-purple-600 font-semibold"
              >
                No votes made
              </div>
              <div v-else>
                <pc-input
                  class="mb-2 bg-white"
                  placeholder="Task title"
                  v-model="taskTitle"
                />
                <pc-button
                  text="Add Task"
                  class="bg-green-400"
                  v-on:btnClick="handleAddTask"
                />
              </div>
            </div>
          </div>
          <div v-if="players.bottom" class="flex flex-wrap">
            <div
              v-for="(player, idx) in players.bottom"
              :key="idx"
              class="text-center capitalize mr-4"
            >
              <div
                class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
              >
                <img
                  src="../assets/card.png"
                  class="w-full h-full"
                  v-if="!reveal"
                />
                <div v-else class="flex flex-col h-full w-full p-1 rounded">
                  <div class="text-left">{{ player.vote }}</div>
                  <div class="text-right mt-auto">{{ player.vote }}</div>
                </div>
              </div>
              <div>{{ player.username }}</div>
            </div>
          </div>
        </div>

        <div v-if="players.right">
          <div
            v-for="(player, idx) in players.right"
            :key="idx"
            class="text-center capitalize mr-4"
          >
            <div
              class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
            >
              <img
                src="../assets/card.png"
                class="w-full h-full"
                v-if="!reveal"
              />
              <div v-else class="flex flex-col h-full w-full p-1 rounded">
                <div class="text-left">{{ player.vote }}</div>
                <div class="text-right mt-auto">{{ player.vote }}</div>
              </div>
            </div>
            <div>{{ player.username }}</div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/5 h-full py-10">
        <Tasks :tasks="tasks ? tasks.tasks : []" />
      </div>
    </div>
    <div class="flex justify-center">
      <Cards
        :type="game.voting"
        :ready="!!currentTask"
        :selection="currentUser.vote"
        class="mb-20"
        v-on:voteSelected="handleVoteSelection"
      />
    </div>
  </div>
</template>

<script>
import chunk from "lodash/chunk";
import { mapState } from "vuex";
import Nav from "../components/Nav.vue";
import Cards from "../components/Cards.vue";
import Players from "../components/Players.vue";
import Tasks from "../components/Tasks.vue";
import MobileNav from "../components/MobileNav.vue";

export default {
  name: "Game",
  components: {
    Nav,
    Cards,
    Players,
    Tasks,
    MobileNav,
  },
  data() {
    return {
      taskTitle: "",
    };
  },
  watch: {
    reveal(newState, oldState) {
      if (!oldState && newState) {
        this.taskTitle = "";
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      game: (state) => state.game,
      roomInfo: (state) => state.roomInfo,
      tasks: (state) => state.tasks,
    }),
    reveal() {
      return this.game.reveal;
    },
    players() {
      const players = this.roomInfo.users.filter(
        (player) => player.vote !== null && player.vote !== undefined
      );
      if (players.length < 5) {
        return {
          bottom: players[0] ? [players[0]] : [],
          top: players[1] ? [players[1]] : [],
          left: players[2] ? [players[2]] : [],
          right: players[3] ? [players[3]] : [],
        };
      }
      if (players.length > 4) {
        const size = Math.ceil(players.length / 4);
        console.log(size);
        const chunks = chunk(players, size);
        return {
          bottom: chunks?.[0] || [],
          top: chunks?.[1] || [],
          left: chunks?.[2] || [],
          right: chunks?.[3] || [],
        };
      }
      return {
        bottom: players,
        top: null,
        left: null,
        right: null,
      };
    },

    votesMade() {
      const players = this.roomInfo.users.filter(
        (player) => player.vote !== null
      );

      if (players.length > 0) {
        return true;
      }

      return false;
    },

    currentUser() {
      const users = this.roomInfo.users;
      return users.find((user) => user.id === this.user.id);
    },

    currentTask() {
      const tasks = this.tasks?.tasks;
      console.log('tasks----', tasks)
      if (!tasks) return null;
      return tasks.find((task) => !task.completed);
    },
  },
  methods: {
    handleVoteSelection(value) {
      this.$socket.emit("vote", { id: this.user.id, value }, (error) => {
        console.log("error", error);
      });
    },

    handleAddTask() {
      console.log("tasks", {
        gameId: this.game.id,
        title: this.taskTitle,
      });
      this.$socket.emit(
        "addTask",
        {
          gameId: this.game.id,
          title: this.taskTitle,
        },
        (error) => {
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
          }
        }
      );
    },

    handleReveal() {
      console.log("toggleReveal");
      this.$socket.emit(
        "toggleReveal",
        {
          gameId: this.game.id,
        },
        (error) => {
          console.log("error", error);
        }
      );
    },
  },
};
</script>
