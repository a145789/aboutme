<template>
  <main class="mx-auto w-full p-4 md:max-w-[56%] md:p-8">
    <NuxtPage />
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
