<script setup lang="ts">
import { computed, ref, shallowRef, watch, onServerPrefetch } from 'vue'
import { getAllContent, type MarkdownContent, Category } from '../content/index'
const data = shallowRef<MarkdownContent[]>([])

const loadFilter = (): 'all' | Category => {
  try {
    const storedFilter = window?.localStorage.getItem('contentFilter')
    if (storedFilter) {
      const parsed = JSON.parse(storedFilter)
      if (parsed === 'all' || Object.values(Category).includes(parsed)) {
        return parsed
      }
    }
    const legacy = window?.localStorage.getItem('checkedCategories')
    if (legacy) {
      const parsedLegacy = JSON.parse(legacy)
      if (
        Array.isArray(parsedLegacy) &&
        parsedLegacy.every((item: unknown) => Object.values(Category).includes(item as Category))
      ) {
        if (parsedLegacy.includes(Category.Record) && parsedLegacy.includes(Category.Blog))
          return 'all'
        if (parsedLegacy.includes(Category.Record)) return Category.Record
        if (parsedLegacy.includes(Category.Blog)) return Category.Blog
      }
    }
  } catch {}
  return 'all'
}

const selectedFilter = ref<'all' | Category>(loadFilter())

watch(selectedFilter, (newValue) => {
  try {
    window.localStorage.setItem('contentFilter', JSON.stringify(newValue))
  } catch {}
})

const pages = computed(() => {
  const articles = data.value
    .filter((item) =>
      selectedFilter.value === 'all' ? true : item.category === selectedFilter.value,
    )
    .map((item) => {
      return {
        title: item.title,
        url: item.title,
        date: item.date,
        year: item.year,
      }
    })

  articles.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  const groupedByYear: { year: number; article: typeof articles }[] = articles
    .reduce(
      (acc, cur) => {
        const item = acc.find((item) => item.year === cur.year)
        if (!item) {
          acc.push({ year: cur.year, article: [cur] })
          return acc
        }
        item.article.push(cur)
        return acc
      },
      [] as { year: number; article: typeof articles }[],
    )
    .sort((a, b) => b.year - a.year)

  return groupedByYear
})
onServerPrefetch(async () => {
  const res = await getAllContent()
  data.value = res
})
getAllContent().then((res) => {
  data.value = res
})
</script>

<template>
  <div>
    <section class="flex items-center">
      <a href="https://github.com/a145789" target="_blank">
        <img height="40" src="https://avatars.githubusercontent.com/u/37403253?v=4" width="40" />
      </a>
      <div class="flex items-center gap-4">
        <h1 class="text-xl font-semibold md:text-2xl">Clen Cat</h1>
        <p class="text-sm font-semibold">要开心，开心，还是开心。</p>
      </div>
    </section>
    <hr />

    <div>
      <span>全部 {{ pages.flatMap((item) => item.article).length }}</span>
      <input id="all" type="radio" value="all" v-model="selectedFilter" />
      <label for="all">全部</label>
      <input id="record" type="radio" :value="Category.Record" v-model="selectedFilter" />
      <label for="record">小记录</label>
      <input id="blog" type="radio" :value="Category.Blog" v-model="selectedFilter" />
      <label for="blog">博客</label>
    </div>

    <div v-for="{ year, article } in pages" :key="year">
      <div class="flex items-center gap-4px">
        <h2 class="text-lg font-bold text-gray-700 my-2">{{ year }}年</h2>
        <span class="text-sm">({{ article.length }})</span>
      </div>
      <ul class="space-y-1 mt-1">
        <li v-for="page in article" :key="page.title">
          <div>
            <RouterLink :to="page.url">
              {{ page.title }}
            </RouterLink>
          </div>
          <div>{{ page.date }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
