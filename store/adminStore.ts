import {defineStore} from "pinia";

export const useAdminStore = defineStore("admin", {
    actions: {
        async getUsersPage(page) {
            return await $fetch(
                `${useRuntimeConfig().public.apiBase}/users/page=${page}`,
                {credentials: 'include'}
            );
        }
    }
})