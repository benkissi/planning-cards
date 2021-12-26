<template>
  <div>
    <div class="text-gray-500 capitalize">Voting type</div>
    <div class="capitalize text-gray-700 font-bold text-lg mb-3">
      {{ type }}
    </div>
    <div class="flex ">
      <div
        @click="handleCardClick(item)"
        v-for="(item, idx) in votingType"
        :key="idx"
        class="flex justify-center items-center shadow-lg w-20 h-20 border rounded cursor-pointer mr-3 hover:bg-purple-100 text-gray-700"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      fib: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "?"],
      pow: [0, 1, 2, 4, 8, 16, 32, 64, "?"],
    };
  },
  computed: {
    votingType() {
      if (this.type === "powers of 2") return this.fib;
      return this.pow;
    },
  },
  methods: {
      handleCardClick(item) {
          console.log('item', item)
          this.$emit('voteSelected', item)
      }
  }
};
</script>
