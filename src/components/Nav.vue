<template>
  <nav class="flex justify-between items-center p-2 px-10">
    <div class="flex">
      <pc-avater class="mr-3" :name="user.username" />
      <div class="text-left">
        <div class="text-gray-500 capitalize">{{ user.type }}</div>
        <div class="text-gray-700 font-bold text-lg capitalize">
          {{ user.username }}
        </div>
      </div>
    </div>
    <div class="font-bold text-gray-700 cursor-pointer hover:text-purple-700" @click="handleCopyLink">
      Get Invite Link
    </div>
    <div
      class="flex justify-center items-center cursor-pointer"
      @click="showSettings = !showSettings"
    >
      <Cog :size="30" class="text-purple-500 mr-3" />
      <div class="text-left">
        <div class="text-gray-500 capitalize">Game name</div>
        <div class="text-gray-700 font-bold text-lg capitalize">
          {{ game.name }}
        </div>
      </div>
    </div>
    <pc-modal v-if="showSettings" @close="showSettings = false" />
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
  data() {
    return {
      showSettings: false,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      game: (state) => state.game,
    }),
  },
  methods: {
    async handleCopyLink() {
      const room = this.game.room
      const url = `${window.location.origin}/join/${room}`

      await navigator.clipboard.writeText(url)

      this.$toast("Invite link copied to clipboard", {
        position: "top-right",
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
    },
  },
};
</script>
