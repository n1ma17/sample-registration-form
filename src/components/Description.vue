<!-- Description.vue -->
<template>
  <div>
    <p v-if="step === 1">Step 1: Enter your username</p>
    <p v-else-if="step === 2">Step 2: Enter your email</p>
    <p v-else>Step 3: Review your information</p>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>
