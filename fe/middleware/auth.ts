export default defineNuxtRouteMiddleware((to, from) => {
    console.log('running auth middleware') 
    const useAuth = useAuthStore();
    if (!useAuth.isAuthenticated()) {
        return navigateTo('/login');
    }
})
