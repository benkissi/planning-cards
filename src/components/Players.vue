<template>
  <div>
    <div class="text-gray-500">Players</div>
    <div v-for="(player, idx) in players" :key="idx" class="capitalize">{{ player.username }}</div>
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
  },
};
</script>
