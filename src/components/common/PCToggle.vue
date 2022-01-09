<template>
  <div
    :class="[
      'w-12  p-1 rounded-full cursor-pointer relative',
      toggle && !disabled ? 'bg-purple-600' : disabled? 'bg-purple-400':'bg-purple-200',
    ]"
    @click="handleToggle"
  >
    <div
      :class="[
        'w-3/5 h-4 bg-white rounded-full transition-all duration-500 ease-in-out',
        toggle ? 'float-right' : 'float-left',
      ]"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Toggle",
  props: {
    currentState: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggle: this.currentState,
    };
  },
  methods: {
    handleToggle() {
      if (!this.disabled) {
        this.toggle = !this.toggle;
        this.$emit('toggle', this.toggle)
      }
    },
  },
};
</script>
