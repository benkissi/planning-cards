<template>
  <div>
    <div class="text-gray-500 mb-4 font-bold">Tasks</div>
    <div v-for="(task, idx) in tasks" :key="idx" class="flex capitalize text-gray-700 mb-3 border-b pb-2">
        <div>{{task.title}}</div>
        <div class="ml-2 font-bold">- Average {{task.score}}</div>
    </div>
    <div class="border-b pb-2">
        <div>Total: <span class="font-bold text-lg text-purple-700">{{total}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
      total() {
          return this.tasks.reduce((acc, curr) => {
              return acc + curr.score
          }, 0)
      }
  }
};
</script>
