<script setup lang="ts">
import {Field, Form, ErrorMessage} from "vee-validate";
import * as yup from 'yup';
import {onBeforeMount, onMounted} from "vue";
import {useAuthStore} from '../store/authStore';
import {useRouter} from "nuxt/app";
import {handleGoogleLogin} from "../assets/js/google-Oauth";
import {onRegisterSubmitHandler} from "../assets/js/handlers";

const authStore = useAuthStore();
const router = useRouter();

onBeforeMount(() => {
  if (authStore.isAuthorized) {
    router.push('/');
  }
});


onMounted(() => {
  const googleLoginButton = document.getElementById('google-login-btn');
  if (googleLoginButton) {
    googleLoginButton.addEventListener('click', handleGoogleLogin);
  }
});

const schema = yup.object({
  email: yup.string()
      .required('Email must be required !')
      .email('Email must be valid !'),
  username: yup.string()
      .required('Name must be required !')
      .min(3, 'Name must be at least 3 characters long !')
      .max(60, 'Name must not exceed 60 characters')
      .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'The name must contain only Latin and Cyrillic letters'),
  plain_password: yup.string()
      .required('Password must be required !')
      .min(6, 'Password must be at least 6 characters long!')
      .max(60, 'Password must not exceed 60 characters')
      .matches(/[A-ZА-ЯЁ]/, 'Password must contain at least one uppercase letter!')
      .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character!'),
  plain_password_confirmation: yup.string()
      .required('Password confirmation must required!')
      .oneOf([yup.ref('plain_password'), null], 'Passwords must match')
});

</script>

<template>
  <div class="bg-[#f1f5f9] container flex justify-center w-1/4 rounded-xl mx-auto mb-10 pb-4 shadow-lg"
       id="formContainer">
    <Form @submit="onRegisterSubmitHandler" :validation-schema="schema" method="post" autocomplete="off">
      <p class="text-center text-xl font-prompt pt-2 pb-4">Authorize via your socials</p>

      <button disabled id="google-login-btn" type="button" class="login-with-google-btn formInput">
        Sign in with Google
      </button>

      <p class="text-center font-bold pt-4 pb-4">OR REGISTER</p>

      <div>
        <p class="font-prompt text-xl">Your email</p>
        <Field name="email" aria-placeholder="For example: student.adress@mail.com"
               class="formInput border-2 h-10 border-blue rounded-md"></Field>
        <p class="mt-2 text-red-500 font-medium">
          <ErrorMessage name="email"></ErrorMessage>
        </p>
      </div>

      <div>
        <p class="font-prompt text-xl">Your name</p>
        <Field name="username" aria-placeholder="For example: Ivan Ivanov"
               readonly onfocus="this.removeAttribute('readonly')"
               class="formInput border-2 h-10 border-blue rounded-md"></Field>
        <p class="mt-2 text-red-500 font-medium">
          <ErrorMessage name="username"></ErrorMessage>
        </p>
      </div>

      <div>
        <p class="font-prompt text-xl">Your password</p>
        <Field name="plain_password" type="password" class="formInput border-2 h-10 border-blue rounded-md"
               readonly onfocus="this.removeAttribute('readonly')"></Field>
        <p class="mt-2 text-red-500 font-medium">
          <ErrorMessage name="plain_password"></ErrorMessage>
        </p>
      </div>

      <div>
        <p class="font-prompt text-xl">Confirm your password</p>
        <Field name="plain_password_confirmation" type="password"
               class="formInput border-2 h-10 border-blue rounded-md"></Field>
        <p class="mt-2 text-red-500 font-medium">
          <ErrorMessage class="" name="plain_password_confirmation"></ErrorMessage>
        </p>
      </div>

      <div class="mt-4">
        <UButton
            label="Register"
            type="submit"
            class="w-[20vw]"
        />
      </div>
      <p class="text-center mt-4">Already have an account?
        <nuxt-link href="/login" class="text-[#000FFF]">Login</nuxt-link>
      </p>
    </Form>
  </div>

</template>

<style scoped>
.formInput {
  width: 20vw;
  background: whitesmoke;
}


.login-with-google-btn {
  transition: background-color .3s, box-shadow .3s;

  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Prompt', sans-serif;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04),
    0 2px 4px rgba(0, 0, 0, .25),
    0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }
}
</style>
