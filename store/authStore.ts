import {defineStore} from "pinia";
import {useCookie} from "nuxt/app";
import {handleFetchError} from "../assets/js/handlers";

export interface User {
    username: string,
    email: string,
    role: Array<string> | string,
    avatar_url: string
}

export interface State {
    accessToken: string | null;
    refreshToken: string | null;
    isUserAuthorized: boolean;
    authorizedUser: User | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        authorizedUser: {},
        isUserAuthorized: false,
    }),
    getters: {
        isAuthorized: (state) => state.isUserAuthorized,
        getAuthorizedUser: (state) => state.authorizedUser,
    },

    actions: {
        async fetchUser(): void {
            try {
                this.authorizedUser = await $fetch(`${useRuntimeConfig().public.apiBase}/me`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },

                        credentials: 'include',
                        onResponseError(): Promise<void> | void {
                            this.isUserAuthorized = false;
                        }
                    });
                if (!this.authorizedUser) {
                    this.isUserAuthorized = false;
                    return;
                }

                this.isUserAuthorized = true;

                return this.authorizedUser;
            } catch (error) {
                this.isUserAuthorized = false;
            }
        },

        async logOut(): void {
            try {
                await $fetch(`${useRuntimeConfig().public.apiBase}/logout`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    }
                );
                this.authorizedUser = {};
                this.isUserAuthorized = false;
            } catch (error) {
                handleFetchError(error);
            }
        },
        //
        // async googleAuth(idToken: string): Promise<boolean> {
        //     try {
        //         await $fetch(`${useRuntimeConfig().public.apiBase}/oauth/google`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({idToken}),
        //             credentials: 'include'
        //         });
        //
        //         return true;
        //     } catch (error) {
        //         console.error('Error in googleAuth:', error);
        //         return false;
        //     }
        // }

        async refreshToken(): void {
            try {
                await $fetch(`${useRuntimeConfig().public.apiBase}/token/refresh`, {
                    method: 'POST',
                    credentials: 'include'
                })
            } catch (error) {
                handleFetchError(error);
            }
        }

    },
});