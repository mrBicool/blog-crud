<script setup>
definePageMeta({
  middleware: "auth",
});

const useAuth = useAuthStore();

const articles = ref(null);
async function getArticles() {
  try {
    const { data: response, error } = await useApiFetch(`/articles`, {
      method: "GET",
      params: {
        page: 1,
        // limit: 15,
      },
    });
    if (error.value) {
      return;
    }
    // console.log("ARTICLES", error.value?.data);
    articles.value = JSON.parse(JSON.stringify(response.value));
  } catch (error) {
    console.error(error);
  }
}
async function remove(item) {
  //   console.log("REMOVE", item);
  try {
    if (confirm("Are you sure you want to delete this item?")) {
      console.log("DELETE", item);
      const { data: response, error } = await useApiFetch(
        `/articles/${item.id}`,
        {
          method: "DELETE",
        }
      );

      if (error.value) {
        return;
      }

      console.log("RESPONSE", response.value);
      await getArticles();
    }
  } catch (error) {
    console.error(error);
  }
}
async function edit(item) {
  console.log("EDIT", item);
  navigateTo(`/articles/${item.id}/edit`);
}
// async mounted
onMounted(async () => {
  await useSleep(1);
  console.log("MOUNTED");
  await getArticles();
});
</script>

<template>
  <div class="">
    <div class="">
      <div
        v-if="['admin', 'editor'].includes(useAuth.user_role)"
        class="flex justify-end"
      >
        <UButton to="/articles/create" size="xs">Create Post</UButton>
      </div>

      <!-- ARTICLES -->
      <div class="">
        <ul v-if="articles" role="list" class="divide-y divide-gray-100">
          <li
            v-for="item in articles.data"
            :key="item.id"
            class="flex gap-x-4 py-5"
          >
            <div class="flex-auto">
              <div class="flex items-baseline justify-between gap-x-4">
                <p
                  class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 tracking-wider"
                >
                  <nuxt-link
                    :to="`/articles/${item.id}`"
                    class="hover:underline"
                  >
                    {{ item.title }}
                  </nuxt-link>
                  <span
                    v-if="['admin', 'editor'].includes(useAuth.user_role)"
                    class="font-normal text-gray-500 text-xs ml-2"
                    >|
                    <NuxtLink :to="`/articles/${item.id}/edit`">
                      <span class="hover:text-blue-600 cursor-pointer ml-1"
                        >Edit</span
                      >
                    </NuxtLink>
                    <span
                      v-if="['admin'].includes(useAuth.user_role)"
                      @click="remove(item)"
                      class="hover:text-red-600 cursor-pointer ml-1"
                    >
                      Delete</span
                    >
                  </span>
                </p>
                <p class="flex-none text-xs text-gray-600 dark:text-gray-400">
                  <time datetime="2023-03-04T15:54Z">
                    {{ item.formatted_created_at }}
                  </time>
                </p>
              </div>

              <p
                class="mt-1 line-clamp-6 text-sm leading-6 text-gray-600 dark:text-gray-400 font-light"
                v-html="item.content"
              ></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
