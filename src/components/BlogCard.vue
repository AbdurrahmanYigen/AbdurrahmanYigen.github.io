<script setup lang="ts">
import type { Blog } from '@/components/blog/Blog.ts'

interface Props {
  blog: Blog
  imgSrc?: string
}
const props = defineProps<Props>()
</script>

<template>
  <RouterLink
    class="card mb-4 shadow-sm"
    :to="{ name: 'blog-detail', params: { technicalName: props.blog.technicalName } }"
  >
    <img v-if="props.imgSrc" class="card-img-top" :src="props.imgSrc" alt="not found" />
    <div class="card-body">
      <h5 class="card-title">{{ props.blog.title }}</h5>
      <p class="card-text">{{ props.blog.description }}</p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  max-width: 600px;
}
//
//@media (hover: hover) {
//  a:hover {
//    background-color: #a1a758;
//  }
//}
</style>
