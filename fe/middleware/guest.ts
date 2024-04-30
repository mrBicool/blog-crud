export default defineNuxtRouteMiddleware((to, from) => {
    const useAuth = useAuthStore();
    if (useAuth.isAuthenticated()) {
        return navigateTo('/');
    }
})
