<template>
  <div class="size-full shadow-xl">
    <PageHeader :step="step" />
    <form class="mt-4 p-6">
      <Step1 v-if="step === 1" :error="usernameError" @update:username="username = $event" />
      <Step2 v-if="step === 2" :error="emailError" @update:email="email = $event" />
      <Step3 v-if="step === 3" :username="username" :email="email" />
      <div class="mt-10 flex w-100 justify-between">
        <button
          type="button"
          @click="prevStep"
          :disabled="step === 1"
          id="btn-prev"
          class="w-2/5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold disabled:opacity-40 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Prev
        </button>
        <button
          type="button"
          @click="nextStep"
          :disabled="step === 3"
          id="btn-next"
          class="w-2/5 bg-transparent hover:bg-green-500 text-green-700 font-semibold disabled:opacity-40 hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import PageHeader from "./PageHeader.vue";
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";
import validationService from "../services/ValidationService";
import Step1Validator from "../services/Step1Validator";
import Step2Validator from "../services/Step2Validator";

export default {
  components: {
    PageHeader,
    Step1,
    Step2,
    Step3,
  },
  setup() {
    const step = ref(1);
    const username = ref("");
    const email = ref("");
    const usernameError = ref(null);
    const emailError = ref(null);

    const nextStep = () => {
      if (step.value < 3) {
        if (step.value === 1 ) {
          if (username.value) step.value++;
          else usernameError.value = "Invalid Username.";
        } else if (step.value === 2) {
          if (email.value) step.value++;
          else emailError.value = "Invalid Email.";
        } else {
          error.value = "Please fill in the required fields";
        }
      }
    };

    const prevStep = () => {
      if (step.value > 1) {
        step.value--;
      }
    };


    validationService.registerValidator(1, new Step1Validator());
    validationService.registerValidator(2, new Step2Validator());


    return {
      step,
      nextStep,
      prevStep,
      username,
      email,
    };
  },
};
</script>
