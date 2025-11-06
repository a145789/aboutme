<script setup lang="ts">
const { data } = await useAsyncData('articles-list', () =>
  queryCollection('content').all())

const pages = computed(() => {
  const files = data.value!.map((item) => {
    return {
      stem: item.stem,
      path: item.path,
      meta: item.meta as { createdAt: string },
    }
  })

  files.sort((a, b) => {
    const dateA = new Date(a.meta.createdAt)
    const dateB = new Date(b.meta.createdAt)
    return dateB.getTime() - dateA.getTime()
  })
  return files
})
</script>

<template>
  <div>
    <section class="flex items-center">
      <NuxtLink target="_blank" to="https://github.com/a145789">
        <NuxtImg
          height="40"
          provider="github"
          src="a145789"
          width="40"
        />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <h1 class="text-xl font-semibold md:text-2xl">
          Clen Cat
        </h1>
        <p class="text-sm font-semibold">
          要开心，开心，还是开心。
        </p>
      </div>
    </section>
    <hr>

    <div class="space-y-2">
      <ul>
        <li
          v-for="page in pages"
          :key="page.stem"
          class="space-x-1"
        >
          <div>
            <NuxtLink :to="page.path">
              {{ page.stem }}
            </NuxtLink>
          </div>

          <div>{{ page.meta.createdAt }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
