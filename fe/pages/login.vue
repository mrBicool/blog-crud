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
        color: "red",
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
      <div
        class="flex justify-between font-semibold text-gray-600 py-2 mb-2 border-b"
      >
        <h1>Blog CRUD</h1>
        <h1 class="font-normal">Login</h1>
      </div>
      <UFormGroup label="Email" required>
        <UInput
          @keyup.enter="login"
          v-model.trim="form.email"
          color="primary"
          variant="outline"
          placeholder="Search..."
        />
      </UFormGroup>
      <UFormGroup class="mt-2" label="Password" required>
        <UInput
          @keyup.enter="login"
          v-model.trim="form.password"
          type="password"
          color="primary"
          variant="outline"
          placeholder="Search..."
        />
      </UFormGroup>
      <div class="mt-2 flex justify-end">
        <UButton @click="login">Login</UButton>
      </div>

      <div
        class="mt-4 border-2 border-dashed border-gray-300 p-2 text-gray-500 text-sm"
      >
        Accounts:

        <div>Emails: admin|editor|viewer@sample.com</div>
        <div>Password: password</div>
      </div>
    </div>
  </div>
</template>
