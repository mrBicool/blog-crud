import type { UseFetchOptions } from 'nuxt/app';

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  const runtimeConfig = useRuntimeConfig();
  const useAuth = useAuthStore() as any;

  let headers: any = {}; 

  if (useAuth.isAuthenticated()) {
    headers['Authorization'] = `Bearer ${useAuth.token}`; 
  }

  return useFetch(`${runtimeConfig.public.apiUrl}/api` + path, {
    // credentials: 'include',
    // watch: false,
    ...options,
    headers: {
      accept: 'application/json',
      ...headers,
      ...options?.headers
    },
    // server: false,
    // lazy: false,
    
  })
}
 