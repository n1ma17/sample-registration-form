<!-- Step3.vue -->
<template>
  <div>
    <p>Review your information:</p>
    <p>Username: {{ username }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>
