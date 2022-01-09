<template>
  <button
    :disabled="disabled"
    :class="['w-full rounded p-2 text-white text-center capitalize text-lg ', disabled? 'bg-purple-300 cursor-not-allowed' :'bg-purple-600 cursor-pointer']"
    @click="$emit('btnClick')"
  >
    {{text}}
  </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Button text'
        },
        disabled: {
          type: Boolean,
          required: false,
          default: false
        }
    }
}
</script>
