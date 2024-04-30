<template>
  <div class="min-h-10 max-h-10 bg-primary-500 text-white flex items-center">
    <div
      class="mx-auto max-w-3xl container flex justify-between items-center px-2"
    >
      <div class="flex items-center">
        <div>
          <nuxt-link to="/"> Blog CRUD </nuxt-link>
          <!-- | {{ useAuth.user_role }} -->
        </div>
      </div>
      <div class="flex items-center gap-2">
        <!-- RIGHT SIDE -->
        <AppColorMode />
        <!-- <UAvatar alt="Admin" size="sm" /> -->
        <AppHeaderUser />
      </div>
    </div>
  </div>
</template>

<script setup>
const useAuth = useAuthStore();
</script>
