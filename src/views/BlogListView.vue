<script setup lang="ts">
import BlogCard from '@/components/BlogCard.vue'
import { blogs } from '@/components/blog/blogs.ts'
import type { Blog } from '@/components/blog/Blog.ts'

const leftSideCards: ComputedRef<Blog[]> = computed(() => [])
const rightSideCards: ComputedRef<Blog[]> = computed(() => [])

blogs.forEach((blog, index) => {
  if (index % 2 === 0) {
    leftSideCards.value.push(blog)
  } else {
    rightSideCards.value.push(blog)
  }
})
</script>
<template>
  <div class="row">
    <div class="col">
      <BlogCard v-for="blog in leftSideCards" v-bind:key="blog.technicalName" :blog="blog" />
    </div>
    <div class="col">
      <BlogCard v-for="blog in rightSideCards" v-bind:key="blog.technicalName" :blog="blog" />
    </div>
  </div>
</template>
