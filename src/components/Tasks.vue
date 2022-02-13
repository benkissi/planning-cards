<template>
  <div class="rounded border p-5 h-full flex flex-col w-full">
    <div class="text-gray-500 text-xl mb-4 font-bold">Tasks</div>
    <div class="h-full overflow-scroll overflow-x-hidden">
      <div
        v-for="(task, idx) in allTasks"
        :key="idx"
        class="flex flex-col capitalize text-gray-700 mb-3 border-b pb-2 bg-white p-2 rounded shadow-sm"
      >
        <div class="text-2xl font-bold">{{ task.title }}</div>
        <div class="mt-3" v-if="task.score">Average Score</div>
        <div class="font-bold text-gray-500 text-xl italic">
          {{ task.score }}
        </div>
      </div>
    </div>
    <div class="border-t pt-2 mt-auto">
      <div>
        Total:
        <span class="font-bold text-lg text-purple-700">{{ total }}</span>
      </div>
      <download-csv :data="taskData" name= "TaskScores.csv" class="flex cursor-pointer justify-center w-full p-2 rounded text-white text-center capitalize text-lg bg-purple-600">
        Download Scores
      </download-csv>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
    gameName: {
      type: String,
      default: ""
    }
  },
  computed: {
    total() {
      return this.tasks.reduce((acc, curr) => {
        return Number(acc) + Number(curr.score);
      }, 0);
    },

    allTasks() {
      if (this.tasks) {
        return [...this.tasks].reverse();
      }
      return [];
    },

    taskData() {
      return this.allTasks.map(item => {
        delete item.gameId
        item.game = this.gameName
        return item
      })
    }
  },
};
</script>

<style scoped>
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #c5b5fc #ebebeb;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #ebebeb;
}

*::-webkit-scrollbar-thumb {
  background-color: #c5b5fc;
  border-radius: 20px;
  border: 3px solid #ebebeb;
}
</style>
