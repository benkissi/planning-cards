<template>
  <div
    class="flex justify-center items-center absolute z-10 top-0 left-0 w-full h-full bg-purple-300 bg-opacity-80"
  >
    <div class="opacity-100 bg-white rounded p-5 w-1/2">
    <Close class="float-right cursor-pointer" @click="handleClose"/>
</div>
  </div>
</template>

<script>
import Close from "vue-material-design-icons/Close.vue";
export default {
  name: "PCModal",
  components: {
      Close
  },
  methods: {
      handleClose() {
          this.$emit('close')
      }
  }
};
</script>
