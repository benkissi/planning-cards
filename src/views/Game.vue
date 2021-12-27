<template>
  <div class="flex flex-col h-full">
    <Nav />
    <div class="flex justify-between items-center h-full px-10">
      <Players
        :players="roomInfo.users"
        :reveal="game.reveal"
        :currentUser="currentUser"
      />
      <div class="flex items-center h-full w-1/2">
        <div v-if="players.left">
          <div
            class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
          >
            <img src="../assets/card.png" class="w-full h-full" />
          </div>
        </div>

        <div
          class="flex-1 flex flex-col justify-center items-center h-full mx-4"
        >
          <div v-if="players.top" class="flex flex-wrap">
            <div
              class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
            >
              <img
                src="../assets/card.png"
                class="w-full h-full"
                v-if="!game.reveal"
              />
              <div class="h-full w-full"></div>
            </div>
          </div>
          <div
            class="flex items-center justify-center bg-purple-300 h-1/4 w-full rounded-full my-4"
          >
            <pc-button
              text="Reveal cards"
              class="w-9/12"
              v-if="tasks && currentTask"
              v-on:btnClick="handleReveal"
            />
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
          <div v-if="players.bottom" class="flex flex-wrap">
            <div
              v-for="(player, idx) in players.bottom"
              :key="idx"
              class="text-center capitalize"
            >
              <div
                class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
              >
                <img
                  src="../assets/card.png"
                  class="w-full h-full"
                  v-if="!game.reveal"
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
            class="w-14 h-20 bg-purple-200 rounded relative border border-purple-600"
          >
            <img src="../assets/card.png" class="w-full h-full" />
          </div>
        </div>
      </div>
      <Tasks :tasks="tasks? tasks.tasks : []"/>
    </div>
    <div class="flex justify-center">
      <Cards
        :type="game.voting"
        :ready="!!currentTask"
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
import Tasks from "../components/Tasks.vue";

export default {
  name: "Game",
  components: {
    Nav,
    Cards,
    Players,
    Tasks,
  },
  data() {
    return {
      taskTitle: "",
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      game: (state) => state.game,
      roomInfo: (state) => state.roomInfo,
      tasks: (state) => state.tasks,
    }),
    players() {
      const players = this.roomInfo.users.filter(
        (player) => player.vote !== null  
      );
      if (players.length === 1) {
        return {
          bottom: players,
          top: null,
          left: null,
          right: null,
        };
      }
      return {
        bottom: players,
        top: null,
        left: null,
        right: null,
      };
    },

    currentUser() {
      const users = this.roomInfo.users;
      return users.find((user) => user.id === this.user.id);
    },

    currentTask() {
        const tasks = this.tasks?.tasks
        if(!tasks) return null
        return tasks.find(task => !task.completed)
    }


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
