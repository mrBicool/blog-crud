<template>
  <div class="min-h-10 max-h-10 bg-primary-500 text-white flex justify-between">
    <div class="flex items-center">
      <div class="w-12 flex justify-center">
        <!-- @click="isOpen = !isOpen" -->
      </div>
      <div>
        <nuxt-link to="/"> Blog CRUD </nuxt-link>
        | {{ useAuth.user_role }}
      </div>
    </div>
    <div class="flex items-center px-2 gap-2">
      <!-- RIGHT SIDE -->
      <AppColorMode />
      <!-- <UAvatar alt="Admin" size="sm" /> -->
      <AppHeaderUser />
    </div>
  </div>
</template>

<script setup>
const useAuth = useAuthStore();
</script>
