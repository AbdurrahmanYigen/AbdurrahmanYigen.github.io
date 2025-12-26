<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

watch(isDark, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', val)
})
</script>

<template>
  <div class="header-nav-bar">
    <nav class="my-nav-bar d-flex">
      <RouterLink to="/" class="align-content-center">About me</RouterLink>
      <RouterLink to="/blog" class="align-content-center">Blog</RouterLink>
      <el-switch
        v-model="isDark"
        class="dark-mode-switch ms-auto"
        size="large"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
      />
    </nav>
  </div>
</template>

<style lang="scss">
.header-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;

  .dark-mode-switch .el-switch__core .el-switch__inner .el-icon {
    color: black;
  }
}
</style>
