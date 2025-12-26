<script setup lang="ts">
import { marked } from 'marked'
import { blogs } from '@/components/blog/blogs.ts'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

const route = useRoute()
const technicalBlogName = computed(() => String(route.params.technicalName))

const blog = computed(() => blogs.find((b) => b.technicalName === technicalBlogName.value))

const html = computed(() => (blog.value ? marked.parse(blog.value.mdFile) : ''))
</script>

<template>
  <div v-if="blog">
    <RouterLink :to="{ name: 'blog' }"><IconArrowLeft /></RouterLink>
    <article class="markdown" v-html="html" />
  </div>
  <div v-else>Blog not found</div>
</template>

<style scoped lang="scss">
@media (hover: hover) {
  a:hover {
    background-color: transparent;
  }
}
</style>
