import {defineNuxtRouteMiddleware} from "nuxt/app";
import {useAuthStore} from '../store/authStore';

export default defineNuxtRouteMiddleware(async () => {
    const authStore = useAuthStore();
    await authStore.fetchUser();
    const router = useRouter();
    const userRoles = useRoles();
    userRoles.value = authStore.authorizedUser.role;
})