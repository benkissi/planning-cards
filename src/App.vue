<template>
  <div class="min-h-screen bg-purple-50">
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",

  watch: {
    system(newState) {
      console.log("system chenge");
      this.$toast(`System message: ${newState.text}`, {
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

  computed: {
    ...mapState({
      system: (state) => state.systemMessage,
    }),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  /* box-sizing: border-box !important; */
}
</style>
