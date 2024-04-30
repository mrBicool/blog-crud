<script setup>
definePageMeta({
  middleware: "auth",
});

const route = useRoute();
const toast = useToast();

console.log("ROUTE", route.params.id);
const article = ref(null);
const form = ref({
  title: "",
  content: "",
});

async function getData() {
  try {
    const { data: response, error } = await useApiFetch(
      `/articles/${route.params.id}`,
      {
        method: "GET",
      }
    );
    if (error.value) {
      console.log("ERROR", error.value);
      // throw createError({
      //   statusCode: 404,
      //   statusMessage: "Page Not Found",
      //   fatal: true,
      // });
      toast.add({
        title: "Not found",
        color: "red",
      });
      navigateTo("/");
      return;
    }
    console.log("RESPONSE", response.value);
    article.value = JSON.parse(JSON.stringify(response.value.data));
    form.value.title = article.value.title;
    form.value.content = article.value.content;
    // articles.value = JSON.parse(JSON.stringify(response.value));
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  await useSleep(1);
  console.log("MOUNTED");
  await getData();
});

async function submit() {
  try {
    if (!confirm("Are you sure you want to update this article?")) return;
    const { data: response, error } = await useApiFetch(
      `/articles/${route.params.id}`,
      {
        method: "PATCH",
        body: form.value,
      }
    );
    if (error.value) {
      toast.add({
        title: error.value.data.message,
        color: "red",
      });
      return;
    }
    console.log("RESPONSE", response.value);

    navigateTo("/articles");
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="">
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
          Update
        </UButton>
      </div>
    </div>
  </div>
</template>
