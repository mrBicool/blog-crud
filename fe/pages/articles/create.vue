<script setup>
const form = ref({
  title: "",
  content: "",
});

const submit = async () => {
  try {
    const { data: response, error } = await useApiFetch(`/articles`, {
      method: "POST",
      body: form.value,
    });
    if (error.value) {
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
  <div class="p-2">
    <div class="mt-4">
      <UFormGroup label="Title">
        <UInput
          v-model.trim="form.title"
          color="primary"
          variant="outline"
          placeholder="Search..."
        />
      </UFormGroup>
      <UFormGroup label="Content" class="mt-2">
        <UTextarea
          v-model.trim="form.content"
          color="primary"
          variant="outline"
          placeholder="content..."
        />
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
  </div>
</template>
