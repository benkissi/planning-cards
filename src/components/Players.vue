<template>
  <div>
    <div class="text-gray-500 mb-4 font-bold">Players</div>
    <div
      v-for="(player, idx) in players"
      :key="idx"
      class="flex capitalize text-gray-700"
    >
      <div>{{ player.username }}</div>
      <div class="ml-3" v-if="reveal">
        <span class="mr-3">-</span> {{ player.vote }}
      </div>
      <span v-if="currentUser.id === player.id" class="ml-2">(you)</span>
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
