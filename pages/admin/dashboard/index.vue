<script setup lang="ts">
import {useAuthStore} from '../../../store/authStore';
import {definePageMeta} from "../../../.nuxt/imports";

definePageMeta({
  layout: 'admin',
  middleware: ['nuxt-permissions'],
  roles: ['ROLE_ADMIN'],
  permissions: []
});

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]

const authStore = useAuthStore();
</script>

<template>
</template>

<style scoped>

</style>
