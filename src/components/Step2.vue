<template>
  <div>
    <label for="email">Email:</label>
    <input
      type="text"
      id="email"
      name="email"
      v-model="email"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      @input="validate"
    />
    <div v-if="error" class="my-2 text-[12px] text-red-700">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import validationService from "../services/ValidationService";
import Step2Validator from "../services/Step2Validator";

export default {
  emits: ['update:email'],
  setup({emailError}, ctx) {
    const email = ref("");
    const error = ref(null);
    error.value = emailError;
    email.value = localStorage.getItem('email') || '';
    const validate = () => {
      error.value = validationService.validate(2, { email: email.value });
      localStorage.setItem('email', email.value);
      ctx.emit('update:email', email.value);
    };

    validationService.registerValidator(2, new Step2Validator());

    return {
      email,
      error,
      validate,
    };
  },
};
</script>
