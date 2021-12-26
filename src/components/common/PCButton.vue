<template>
  <div
    class="rounded p-2 bg-purple-600 text-white text-center capitalize text-lg cursor-pointer"
    @click="$emit('btnClick')"
  >
    {{text}}
  </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Button text'
        }
    }
}
</script>
