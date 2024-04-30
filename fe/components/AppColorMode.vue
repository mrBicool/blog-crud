<script setup>
const colorMode = useColorMode();

// const themes = [
//   {
//     name: "Dark",
//     value: "dark",
//     icon: "i-heroicons-moon-20-solid",
//   },
//   {
//     name: "Light",
//     value: "light",
//     icon: "i-heroicons-sun-20-solid",
//   },
// ];
// const selected = ref(null);

// onMounted(() => {
//   selected.value = themes.find((theme) => theme.value === colorMode.value);
// });

// function changeTheme() {
//   colorMode.preference = selected.value.value;
// }

//-----
const isDark = ref(colorMode.value === "dark" ? true : false);
function toggleColorMode() {
  isDark.value = !isDark.value;

  if (isDark.value) {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
}
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      :class="{
        'dark:text-white dark:hover:bg-green-400': isDark,
        'text-white hover:bg-green-400': !isDark,
      }"
      color="green"
      variant="ghost"
      @click="toggleColorMode"
      size="xs"
    />
    <!-- <USelectMenu
      v-model="selected"
      :options="themes"
      @change="changeTheme"
      size="xs"
      option-attribute="name"
    >
      <template #leading>
        <UIcon v-if="selected.icon" :name="selected.icon" class="w-5 h-5" />
      </template>
    </USelectMenu> -->
  </ClientOnly>
</template>
