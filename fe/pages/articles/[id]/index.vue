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
      toast.add({
        title: "Not found",
        color: "red",
      });
      navigateTo("/");
      return;
    }
    console.log("RESPONSE", response.value);
    article.value = JSON.parse(JSON.stringify(response.value.data));
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  await useSleep(1);
  await getData();
});
</script>

<template>
  <ClientOnly v-if="article">
    <h1 class="text-xl tracking-wider">{{ article.title }}</h1>
    <p
      v-html="article.content"
      class="mt-4 text-justify pb-10 text-gray-800 font-light"
    ></p>
  </ClientOnly>
</template>
