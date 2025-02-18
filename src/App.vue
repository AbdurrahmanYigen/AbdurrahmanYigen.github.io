<script setup lang="ts">

import MenuBar from '@/views/header/MenuBar.vue'
import {RouterView} from 'vue-router'
import MyProfile from '@/components/MyProfile.vue'

</script>

<template>
  <MenuBar />
  <div id="content">
    <MyProfile />

    <RouterView />
  </div>
</template>

<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (max-width: 1023px) {
  .header-nav-bar {
    .dark-mode-switch {
      position: absolute;
      right: 0;
    }
  }
}
</style>
