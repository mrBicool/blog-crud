// import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: null,
            token: '',
            user_role: '',
            permission: [],
        }
    },
    actions: {
        setToken(token: string) {
            console.log(`token: ${token}`);
            this.token = token
        },
        setUser(user: any) {
            console.log(`user: ${user}`);
            this.user = user
        },
        setUserRole(user_role: string) {
            console.log(`user_role: ${user_role}`);
            this.user_role = user_role
        },
        async logout() {

            await useApiFetch('/logout', {
                method: 'POST', 
            })

            this.user = null
            this.token = ''
            this.user_role = ''
            this.permission = []
        },
        isAuthenticated() {
            return !!this.token
        }
    },
    persist: true,
})