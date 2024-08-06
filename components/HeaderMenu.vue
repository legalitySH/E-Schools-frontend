<script setup lang="ts">
import {DropdownItem} from "@nuxt/ui/dist/runtime/types";
import {User, useAuthStore} from "../store/authStore";
import {useToast} from "vue-toastification";
import {ref} from "vue"

export interface HeaderProps {
  isAuthorized: boolean,
  authorizedUser: User
}

const authStore = useAuthStore();
const isOpen = ref(false);
const props = defineProps<HeaderProps>()
const toast = useToast();
const router = useRouter();

function getRole(role: Array<string>) {
  if (role && role.length === 0) {
    return 'no role';
  }
  return role ? role[0].replace("ROLE_", '').replace("_", ' ').toLowerCase() : 'loading...';
}

const items: DropdownItem[][] = [
  [{
    label: props.authorizedUser.email,
    slot: 'account',
  }],
  [{
    label: 'Profile',
    icon: 'i-heroicons-user',
    slot: 'item'
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    slot: 'signout',
    click: () => {
      isOpen.value = true;
    }
  }]
]

</script>

<template>
  <header class="shadow-md">
    <nav class="container mx-auto flex navbar justify-around nowrap">
      <div class="basis-1/6">
        <nuxt-link id="logo-text" to="/" class="pr-5 text-nowrap">
          E-SCHOOLS
        </nuxt-link>
      </div>
      <div class="basis-1/2 hidden lg:block">
        <ul class=" flex gap-5">
          <li><a class="menu-item" href="/possibilities">Possibilities</a></li>
          <li><a class="menu-item" href="/tariffs">Tariffs</a></li>
          <li><a class="menu-item" href="/faq">FAQ</a></li>
          <li><a class="menu-item" href="/contacts">Contacts</a></li>
        </ul>
      </div>
      <div v-if="!props.isAuthorized" class="basis-1/4 flex justify-around gap-4">
        <button class="btn basis-1/2 bg-[#6366f1] pl-10 pr-10 pt-2 pb-2 rounded-md">
          <nuxt-link class="text-[#ffffff]" to="/register">
            Register
          </nuxt-link>
        </button>
        <button
            class="btn basis-1/2 border-[#6366f1] text-base border-2  bg-[#f5f5f4] pl-10 pr-10 pt-2 pb-2 rounded-md text-black">
          <nuxt-link to="/login">
            Authorization
          </nuxt-link>
        </button>
      </div>
      <div v-else class="flex basis-1/3 items-center ">
        <UDropdown :items="items" :popper="{placement: 'bottom-end'}" mode="hover">
          <UAvatar
              size="sm"
              :src='props.authorizedUser.avatar_url'
              :alt="props.authorizedUser.username[0].toUpperCase()"
              class="mr-5"
              chip-position="top-right"
          />
          <p class="text-nowrap font-prompt ml-2 cursor-pointer">{{ props.authorizedUser.username }} &#9660;</p>

          <template #account="{ item }">
            <div class="text-left">
              <p class="!font-prompt !text-blue !opacity-100">
                Signed in as
              </p>
              <p class="truncate font-prompt opacity-40 font-medium text-black">
                {{ item.label }}
              </p>
            </div>
          </template>

          <template #item="{ item }">
            <span class="font-bold">{{ item.label }}</span>
            <UIcon :name="item.icon" class="h-6 w-6   ms-auto"/>
          </template>

          <template #signout="{ item }" onclick="console.log()">
            <span class="font-bold">{{ item.label }}</span>
            <UIcon :name="item.icon" class="h-6 w-6   ms-auto"/>
          </template>

        </UDropdown>

        <UBadge class="!bg-blue !text-white ml-4 items-center">
          {{ authStore.authorizedUser.email = getRole(props.authorizedUser.role) }}
        </UBadge>
      </div>
    </nav>
  </header>

  <UModal v-model="isOpen" :overlay="false" :ui="{
    background: '!bg-[#E8E8E8]',
    width: '!w-96',
    height: '!h-80',
  }">
    <div class="flex flex-col align-top justify-center">
      <div class="self-center pt-4">
        <UIcon name="i-heroicons-arrow-right-circle" class="w-10 h-10"/>
      </div>
      <p class="text-center font-bold mt-15 text-xl text-black">Are you sure you want to log
        out?</p>
      <p class="text-center text-[2vh] mt-4">After logging out of your account, some features will no longer be
        available!</p>
      <div class="flex flex-col self-center gap-2 mt-10">
        <UButton :ui="{truncate: '!text-center'}"
                 class="!bg-red-600 !text-white h-10 w-80 flex justify-center"
                 @click="() => {
          authStore.logOut();
          isOpen = false;
          toast.success('You have successfully logged out of your account');
          router.push('/');
        }" label="Sign out"/>
        <UButton :ui="{truncate: '!text-center'}" variant="outline"
                 class="!bg-white !text-black h-10 w-80 flex justify-center"
                 @click="() => {
          isOpen = false;
        }" label="Cancel">
        </UButton>
      </div>
    </div>
  </UModal>
</template>

<style scoped>
.menu-item {
  font-family: 'Prompt', sans-serif;
  font-size: 1.1rem;
}

.menu-item:hover {
  transition: all 0.6s;
  color: #0680f3;
  border-bottom: 1px solid #177cdf;
}

.navbar {
  align-items: center;
  padding: 1vh 0;
}

header {
  background: #f5f5f5;
}

#logo-text {
  color: #006fff;
  font-family: "Source Code Pro", monospace;
  font-size: 3vh;
  border-right: 1px solid #006fff;
}
</style>
