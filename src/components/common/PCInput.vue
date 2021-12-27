<template>
  <div class="border rounded p-2 focus:border-red-200">
    <input
      :value="value"
      class="focus:outline-none w-full bg-transparent"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "PCInput",
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "Your input",
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
