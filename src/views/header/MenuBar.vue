<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

watch(isDark, () => {
  document.body.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <div class="header-nav-bar">
    <nav class="my-nav-bar my-3">
      <RouterLink to="/">About me</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
    </nav>

    <el-switch
      v-model="isDark"
      class="dark-mode-switch"
      size="large"
      inline-prompt
      :active-icon="Moon"
      :inactive-icon="Sunny"
    />
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
