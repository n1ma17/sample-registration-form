<template>
  <div>
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      v-model="username"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      @input="validate"
    />
    <div v-if="error" class="my-2 text-[12px] text-red-700">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import validationService from "../services/ValidationService";
import Step1Validator from "../services/Step1Validator";

export default {
  emits: ['update:username'],
  setup({usernameError},ctx) {
    const username = ref("");
    const error = ref(null);
    error.value = usernameError;
    username.value = localStorage.getItem('username') || '';
    const validate = () => {
      error.value = validationService.validate(1, { username: username.value });
      localStorage.setItem('username', username.value);
      ctx.emit('update:username', username.value);
    };

    validationService.registerValidator(1, new Step1Validator());

    return {
      username,
      error,
      validate,
    };
  },
};
</script>
