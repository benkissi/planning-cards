<template>
  <nav class="flex justify-between items-center p-2 px-5 md:px-10 mt-3">
    <MenuIcon :size="30" class="text-purple-600" @click="toggleMenu" />
    <div
      :class="[
        'flex items-center absolute z-10 top-0 left-0 w-full h-full bg-purple-300 bg-opacity-80 transition-all duration-700 ease-in-out delay-300',
        showMenu ? 'left-0 bg-opacity-80' : '-left-full bg-opacity-0 ',
      ]"
    >
      <div
        :class="[
          'flex flex-col h-screen w-3/4 bg-white absolute transition-all duration-700 ease-in-out delay-300',
          showMenu ? 'left-0' : '-left-full',
        ]"
      >
        <div class="flex justify-between items-center p-3 pt-5 bg-purple-100">
          <div class="flex">
            <pc-avater class="mr-3" :name="currentUser.username" />
            <div class="text-left">
              <div class="text-gray-500 capitalize">{{ currentUser.type }}</div>
              <div class="text-gray-700 font-bold text-lg capitalize">
                {{ currentUser.username }}
              </div>
            </div>
          </div>
          <CloseIcon :size="30" class="text-purple-600" @click="toggleMenu" />
        </div>

        <div class="mt-3">
          <div
            class="flex hover:bg-purple-50 py-3 px-5 mb-4"
            @click="handleCopyLink"
          >
            <HomeIcon class="mr-4 text-purple-400" />
            <div>Home</div>
          </div>
          <div
            class="flex hover:bg-purple-50 py-3 px-5 mb-4"
            @click="handleCopyLink"
          >
            <AddIcon class="text-purple-400 mr-4" />
            <div>Create new game</div>
          </div>
          <div
            class="flex hover:bg-purple-50 py-3 px-5 mb-4"
            @click="handleCopyLink"
          >
            <LinkIcon class="text-purple-400 mr-4" />
            <div>Get invite link</div>
          </div>
          <div
            class="flex hover:bg-purple-50 py-3 px-5 mb-4"
            @click="toggleSettings"
          >
            <Cog class="text-purple-400 mr-4" />
            <div vl>Settings</div>
          </div>
        </div>

        <div class="mt-auto mb-5 px-5">
          <div class="text-left">
            <div class="text-gray-500 capitalize">Game name</div>
            <div class="text-gray-700 font-bold text-lg capitalize">
              {{ game.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <pc-modal v-if="showSettings" @close="showSettings = false">
      <template v-slot:header> Game Settings </template>
      <div class="mt-4">
        <GameSetings />
      </div>
    </pc-modal>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import Cog from "vue-material-design-icons/Cog.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import LinkIcon from "vue-material-design-icons/Link.vue";
import HomeIcon from "vue-material-design-icons/Home.vue";
import AddIcon from "vue-material-design-icons/PlusBox.vue";
import GameSetings from "./GameSettings.vue";
export default {
  name: "Nav",
  components: {
    Cog,
    GameSetings,
    LinkIcon,
    MenuIcon,
    CloseIcon,
    HomeIcon,
    AddIcon
  },
  data() {
    return {
      showSettings: false,
      showMenu: false,
    };
  },

  computed: {
    ...mapState({
      currentUser: (state) => state.user,
      game: (state) => state.game,
    }),
  },
  methods: {
    async handleCopyLink() {
      const room = this.game.room;
      const url = `${window.location.origin}/join/${room}`;

      await navigator.clipboard.writeText(url);

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

      this.toggleMenu();
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    toggleSettings() {
      this.showSettings = !this.showSettings;
      this.toggleMenu();
    },
  },
};
</script>

<style scoped>
.hideNav {
  left: -100%;
}

.showNav {
  left: 0;
}

.sideNav {
  transition: all 1s ease;
  position: absolute;
  left: -100%;
}
.show {
  left: 0;
}
</style>
