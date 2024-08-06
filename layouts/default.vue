<script setup lang="ts">
import '~/assets/css/style.css';
import Header from '~/components/HeaderMenu.vue';
import {useAuthStore} from '../store/authStore';
import {onBeforeMount, computed, ref} from 'vue';

const authStore = useAuthStore();


</script>
<template>
  <div class="flex flex-col justify-between h-[100vh]">
    <Header :isAuthorized="authStore.isAuthorized" :authorizedUser="authStore.authorizedUser"/>
    <NuxtPage/>
    <FooterMenu/>
  </div>
</template>
<style scoped>
</style>
