<template>
  <nav class="flex justify-between p-2 px-10">
    <div class="flex">
      <pc-avater class="mr-3" :name="user.username" />
      <div class="text-left">
        <div class="text-gray-500 capitalize">{{ user.type }}</div>
        <div class="text-gray-700 font-bold text-lg capitalize">
          {{ user.username }}
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center cursor-pointer">
      <Cog :size="30" class="text-purple-500 mr-3"/>
      <div class="text-left">
        <div class="text-gray-500 capitalize">Game name</div>
        <div class="text-gray-700 font-bold text-lg capitalize">
          {{ game.name }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Cog from "vue-material-design-icons/Cog.vue";
import { mapState } from "vuex";
export default {
  name: "Nav",
  components: {
    Cog,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      game: (state) => state.game,
    }),
  },
};
</script>
