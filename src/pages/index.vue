<script setup lang="ts">
import { computed, ref, shallowRef, watch } from 'vue'
import { getAllContent, type MarkdownContent, Category } from '../content/index'
const data = shallowRef<MarkdownContent[]>([])

// Load checkedCategories from localStorage on component mount
const loadCheckedCategories = (): Category[] => {
  try {
    const stored = localStorage.getItem('checkedCategories')
    if (stored) {
      const parsed = JSON.parse(stored)
      // Validate that the parsed data is an array and contains valid Category values
      if (Array.isArray(parsed) && parsed.every((item) => Object.values(Category).includes(item))) {
        return parsed
      }
    }
  } catch (error) {
    console.warn('Failed to load checkedCategories from localStorage:', error)
  }
  return [Category.Record, Category.Blog] // Default value
}

const checkedCategories = ref<Category[]>(loadCheckedCategories())

// Watch for changes and save to localStorage
watch(
  checkedCategories,
  (newValue) => {
    try {
      localStorage.setItem('checkedCategories', JSON.stringify(newValue))
    } catch (error) {
      console.warn('Failed to save checkedCategories to localStorage:', error)
    }
  },
  { deep: true },
)
const pages = computed(() => {
  const articles = data.value
    .filter((item) => checkedCategories.value.includes(item.category))
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

  // Group by year
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

getAllContent().then((res) => {
  data.value = res
})
</script>

<template>
  <div>
    <section class="flex items-center">
      <a target="_blank" href="https://github.com/a145789">
        <img height="40" src="https://avatars.githubusercontent.com/u/37403253?v=4" width="40" />
      </a>
      <div class="flex items-center gap-4">
        <h1 class="text-xl font-semibold md:text-2xl">Clen Cat</h1>
        <p class="text-sm font-semibold">要开心，开心，还是开心。</p>
      </div>
    </section>
    <hr />

    <div>
      <span>All {{ pages.flatMap((item) => item.article).length }}</span>
      <input type="checkbox" id="record" :value="Category.Record" v-model="checkedCategories" />
      <label for="record">小记录</label>
      <input type="checkbox" id="blog" :value="Category.Blog" v-model="checkedCategories" />
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
