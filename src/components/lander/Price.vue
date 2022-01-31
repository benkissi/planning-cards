<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-4xl font-bold text-gray-800">Free forever</div>
    <div class="mt-5 text-xl text-center md:text-left px-5">
      But just in case you want to show some appreciation, you can buy me coffee
    </div>
    <div class="mt-10 ">
    <pc-button text="Buy me coffee" bgColor="bg-yellow-600" @btnClick="handleBuyCoffe" lg/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing",

  methods: {
    handleBuyCoffe() {
      window.open('https://www.buymeacoffee.com/benkissi', '_blank')
    }
  }
};
</script>
