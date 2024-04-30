<script setup>
definePageMeta({
  layout: "guest",
  middleware: ["guest"],
});

const toast = useToast();
const useAuth = useAuthStore();

const form = ref({
  email: "admin@sample.com",
  password: "password",
});

async function login() {
  try {
    const { data: response, error } = await useApiFetch(`/login`, {
      method: "POST",
      body: form.value,
    });

    if (error.value) {
      console.log("LOGIN", error.value.data.message);
      toast.add({
        title: error.value.data.message,
      });
      return;
    }

    // SETTING UP NECESSARY DATA
    console.info(response.value.data);
    useAuth.setToken(response.value.data.token);
    useAuth.setUser(response.value.data.user);
    useAuth.setUserRole(response.value.data.role);
    // SETTING UP NECESSARY DATA

    toast.add({
      title: response.value.message,
      callback: () => {
        navigateTo("/");
      },
      timeout: 1000,
    });
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="max-w-lg">
      <div>
        <label for="">Email</label>
        <UInput
          v-model.trim="form.email"
          color="primary"
          variant="outline"
          placeholder="Search..."
        />
      </div>
      <div>
        <label for="">Password</label>
        <UInput
          v-model.trim="form.password"
          type="password"
          color="primary"
          variant="outline"
          placeholder="Search..."
        />
      </div>
      <div>
        <UButton @click="login">Login</UButton>
      </div>
    </div>
  </div>
</template>
