import {useToast} from "vue-toastification";
import {useRuntimeConfig, useRouter} from "nuxt/app";
import {useAuthStore} from "../../store/authStore";


export const handleResponseError = (response: FetchResponse) => {
    const toast = useToast();
    console.error('Response error:', response);
    toast.error(response._data.error);
};

export const handleFetchError = (error: any) => {
    const toast = useToast();
    console.log(error.message);
    console.error('Fetch error:', error.message);
    toast.error(error.message);
};

export const onRegisterSubmitHandler = async (values) => {
    const router = useRouter();
    const toast = useToast();
    await $fetch(`${useRuntimeConfig().public.apiBase}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then(() => {
            toast.success('Successful! Please authorize');
            router.push('/login');
        })
        .catch((error) => {
            handleFetchError(error)
        })
}

export const onLoginSubmitHandler = async (values) => {
    const toast = useToast();
    const authStore = useAuthStore();
    const router = useRouter();
    await $fetch(`${useRuntimeConfig().public.apiBase}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(values),
    })
        .then(() => {
            toast.success('Successful! Please authorize');
            authStore.fetchUser();
            router.push('/');
        }, (error) => {
            toast.error('Invalid credentials! Try again..')

        })

}