<template>
  <div>
    <div @click="showList = !showList" class="flex border rounded p-2 cursor-pointer">
      <div :class="['flex-1 text-left', !selected && 'text-gray-400']">
        {{ selectedDisplay }}
      </div>
      <ChevronDown />
    </div>
    <div class="border mt-1 py-2" v-if="showList">
      <div
        v-for="(item, idx) in options"
        :key="idx"
        :class="[
          'text-left p-2 cursor-pointer',
         isSelected(item) ?
            'bg-purple-500 text-white font-semibold' : 'hover:bg-purple-100',
        ]"
        @click="handleSelection(item)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
export default {
  components: {
    ChevronDown,
  },
  props: {
    placeholder: {
      type: String,
      default: "Select value",
    },
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
    existingValue: {
      type: Object,
      default: null,
      required: false
    }
  },
  data() {
    return {
      selected: this.existingValue,
      showList: false
    };
  },
  computed: {
    selectedDisplay() {
      return this.selected ? this.selected.text : this.placeholder;
    },
  },
  methods: {
    handleSelection(item) {
      this.selected = item;
      this.showList = false

      this.$emit('selection', item.value)
    },

    isSelected(item) {
      return item?.value === this.selected?.value;
    },
  },
};
</script>
