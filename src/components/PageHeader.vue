<template>
  <nav class="w-100 flex items-center justify-between flex-wrap bg-teal-500 p-4 rounded-t-lg ">
    <span class="font-semibold text-xl tracking-tight text-slate-100">Step:</span>
    <span class="text-white">{{ stepText }}</span>
  </nav>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  computed: {
    stepText() {
      if (this.step === 1) {
        return 'username'
      } else if (this.step === 2) {
        return 'email'
      } else {
        return 'review'
      }
    }
  }
}
</script>