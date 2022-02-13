<template>
  <div class="flex flex-col rounded border p-5 h-full">
    <div class="text-gray-500 text-xl mb-4 font-bold">Players</div>
    <div class="flex-1 overflow-scroll overflow-x-hidden">
      <div
        v-for="(player, idx) in players"
        :key="idx"
        class="flex items-center capitalize text-gray-700 mb-2 bg-white px-3 py-3 rounded shadow-sm"
      >
        <pc-avater class="mr-3" :name="player.username" />
        <div class="flex flex-col">
          <div class="flex">
            <div>{{ player.username }}</div>
            <span v-if="currentUser.id === player.id" class="ml-2">(you)</span>
          </div>

          <div class="flex mt-2">
            <div class="italic" v-if="!player.vote && !reveal">
              Not voted yet
            </div>
            <div class="italic" v-if="!reveal && player.vote">
              Voted
            </div>

            <div v-if="reveal">
              <span class="italic">User vote - </span>
              <span class="font-bold">{{ player.vote }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Players",
  props: {
    players: {
      type: Array,
      default: () => [],
    },
    reveal: {
      type: Boolean,
      default: false,
    },
    currentUser: {
      type: Object,
      default: () => {},
    },
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
