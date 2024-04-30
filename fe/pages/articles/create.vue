<script setup>
definePageMeta({
  middleware: "auth",
});

const toast = useToast();

const form = ref({
  title: "",
  content: "",
});

const submit = async () => {
  try {
    if (!confirm("Are you sure you want to submit?")) {
      return;
    }

    const { data: response, error } = await useApiFetch(`/articles`, {
      method: "POST",
      body: form.value,
    });
    if (error.value) {
      console.log("CREATE", error.value.data.message);
      toast.add({
        color: "red",
        title: error.value.data.message,
      });
      return;
    }
    console.log("RESPONSE", response.value);
    // articles.value = JSON.parse(JSON.stringify(response.value));
    navigateTo("/articles");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="mt-4">
    <UFormGroup label="Title" required>
      <UInput v-model.trim="form.title" color="primary" variant="outline" />
    </UFormGroup>
    <UFormGroup label="Content" class="mt-2" required>
      <TiptapEditor v-model.trim="form.content" />
    </UFormGroup>
    <div>
      <UButton
        @click="submit"
        color="primary"
        class="mt-4"
        size="xs"
        variant="solid"
      >
        Submit
      </UButton>
    </div>
  </div>
</template>
