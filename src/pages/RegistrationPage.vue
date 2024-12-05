<template>
  <v-container class="primary fill-height d-flex justify-center align-center">
    <v-card>
      <v-container>
        <v-card-title class="justify-center">
          Register for an Account
        </v-card-title>
        <v-form
          ref="form"
          validate-on="submit lazy" @submit.prevent="submitForm"
        >
          <v-text-field
            v-model="firstName"
            :rules="firstNameRules"
            prepend-icon="mdi-account"
            label="First Name"
            required
          />
          <v-text-field
            v-model="middleName"
            prepend-icon="mdi-account"
            label="Middle Name"
            required
          />
          <v-text-field
            v-model="lastName"
            :rules="lastNameRules"
            prepend-icon="mdi-account"
            label="Last Name"
            required
          />
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail address"
            prepend-icon="mdi-at"
            required
          />

          <v-text-field
            v-model="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
            :rules="passwordRules"
          />

          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            prepend-icon="mdi-lock"
            type="password"
            :rules="confirmPasswordRules"
          />

          <v-checkbox
            v-model="checkboxChecked"
            :rules="[checkboxRule]"
            label="I agree to Terms of Use"
            required
          />
          <v-row>
            <v-col>
              <v-btn
                large
                block
                @click="goToLoginPage"
              >
                Cancel
              </v-btn>
            </v-col>
            <v-col class="pl-2">
              <v-btn
                block
                large
                color="primary"
                type="submit"
              >
                Register
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-dialog
        v-model="showSuccessModal"
        persistent
        max-width="500"
      >
        <v-card>
          <v-card-title class="text-h5">
            Registration Successful
          </v-card-title>
          <v-card-text>
            You have been successfully <strong>registered.</strong>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="goToLoginPage"
            >
              Login Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import GlobalMixin from "../mixins/GlobalMixin.vue";
import { useRouter } from 'vue-router';

export default {
  name: "SignupForm",
  mixins: [GlobalMixin],
  setup() {
    const router = useRouter();
    const showSuccessModal = ref(false);
    const form = ref(null);
    const firstName = ref(null);
    const firstNameRules = ref([(v) => !!v || "First name is required"]);
    const middleName = ref(null);
    const lastName = ref(null);
    const lastNameRules = ref([(v) => !!v || "Last name is required"]);
    const email = ref(null);
    const emailRules = ref([
      (v) => !!v || "Email address is required",
      (v) => /.+@.+\..+/.test(v) || "Entry should be an e-mail address",
    ]);
    const checkboxChecked = ref(false);
    const checkboxRule = (v) =>
      !!v || "You will be able to register if you do not agree";

    const password = ref("");
    const confirmPassword = ref("");

    const passwordRules = [
      (value) => !!value || "Please type password.",
      (value) => (value && value.length >= 6) || "Minimum 6 characters.",
    ];

    const confirmPasswordRules = computed(() => [
      (value) => !!value || "Type confirm password.",
      (value) =>
        value === password.value || "The password confirmation does not match.",
    ]);


    const goToLoginPage = () => {
      // Define your navigation logic here
      router.push({ name: 'login' });
    };

    const submitForm = async () => {

      if (form.value) {
        const { valid } = await form.value.validate();
        if (valid) alert('Form is valid');
      }

      // if (!(await form.validate())) {
      //   return;
      // }

      // try {
      //   // add api call here
      //   showSuccessModal.value = true;
      // } catch (err) {
      //   alert(err.response.data.message);
      //   console.error(err);
      // }
    };

    return {
      showSuccessModal,
      form,
      firstName,
      firstNameRules,
      middleName,
      lastName,
      lastNameRules,
      email,
      emailRules,
      checkboxChecked,
      password,
      confirmPassword,
      passwordRules,
      confirmPasswordRules,
      checkboxRule,
      goToLoginPage,
      submitForm,
    };
  },
};
</script>
