<template>
  <button
    :type="'submit'"
    @click="onClick"
    :disabled="disabled"
    class="relative overflow-hidden rounded-full bg-gray-700 dark:bg-white text-white w-[180px] h-[60px] text-lg font-semibold flex justify-center items-center transition-all duration-300"
  >
    <div
      class="absolute inset-0 scale-[1.06] blur-lg transition-transform duration-300"
    >
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary animate-rotate"
      ></div>
    </div>
    <div
      class="relative w-[156px] h-[45px] flex justify-center items-center rounded-full bg-secondary text-primary border border-primary"
    >
        {{ label }}
    </div>
  </button>
</template>

<script setup>
defineProps({
    label:{
        type:String,
        default:'Button'
    },
    onClick:{
        type:Function,
        default:() =>{}
    },
    disabled: {
      type: Boolean,
      default: false
    }
})
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-rotate {
  animation: rotate 2s linear infinite;
}
</style>
