<script setup lang="ts">
import '~/assets/css/style.css';
import {useAuthStore} from '../store/authStore';
import {definePageMeta, useRoles} from "../.nuxt/imports";

const authStore = useAuthStore();

const links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/admin/dashboard/'
  },],

  [
    {
      label: 'Users',
      icon: 'i-heroicons-user',
      to: '/admin/dashboard/users'
    },

    {
      label: 'Teachers',
      icon: 'i-heroicons-academic-cap',
      to: '/dashboard/admin/teachers'
    },

    {
      label: 'Directors',
      icon: 'i-heroicons-cube',
      to: '/dashboard/admin/directors'
    },

    {
      label: 'Students',
      icon: 'i-heroicons-user-group',
      to: '/dashboard/admin/students'
    },
  ],
  [
    {
      label: 'Educational orders',
      icon: 'i-heroicons-home-modern',
      to: '/dashboard/admin/educational-orders',
      badge: 4
    },
    {
      label: 'Technical requests',
      icon: 'i-heroicons-wrench',
      to: '/dashboard/admin/technical-requests',
      badge: 1
    }, {
    label: 'Logs',
    icon: 'i-heroicons-bars-3-bottom-left',
    to: '/dashboard/admin/logs',
  },
  ],
  [
    {
      label: 'Exit',
      icon: 'i-heroicons-arrow-left-end-on-rectangle',
      to: '/',
    }
  ]
]


</script>

<template>
  <div class="flex flex-col justify-between h-[100vh] ">
    <HeaderMenu class="basis-0" :isAuthorized="authStore.isAuthorized" :authorizedUser="authStore.authorizedUser"/>
    <div class="container mx-auto flex h-[100vh] ">
      <div class="w-1/4 mt-2 lg:w-1/6">
        <UVerticalNavigation
            :links="links"
            :ui="{
            inactive: 'text-black  hover:!text-black hover:!bg-blue',
            active: '!font-bold !text-black bg-blue ',
            base: 'gap-4',
            size: 'lg:text-sm text-xs',
            padding: 'py-2',
            divider: {
              wrapper: {
                base: 'p-4',
              },
            },
            badge: {
              base: 'flex-shrink-0 ml-auto !bg-blue relative rounded-xl !text-white',
              color: 'gray',
              variant: 'solid',
              size: 'xs',
            },
        }"
        />
      </div>
      <div class="container ml-4 mt-2">
        <NuxtPage/>
      </div>
    </div>
    <FooterMenu class="basis-0"/>
  </div>

</template>

<style scoped>
</style>
