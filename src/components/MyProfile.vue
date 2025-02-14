<script setup lang="ts">
import { MapPin, Mail, User } from 'lucide-vue-next'

const url = '/profile-picture.jpg'
</script>

<template>
  <div class="wrapper mb-3">
    <el-image class="profile-picture-image" :src="url" fit="cover" />

    <div class="my-information">
      <div class="my-name"><User />Abdurrahman Yigen</div>
      <div class="my-email"><Mail />abdurrahman.yigen@hotmail.de</div>
      <div class="my-place"><MapPin />Germany, Frankfurt</div>
    </div>
  </div>
</template>

<style lang="scss">
.profile-picture-image {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  img {
    height: 400px;
    width: 400px;
    border-radius: 50%;
    object-position: 45% 55%;
  }
}

.my-information {
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-right: 6px;
  }

  .my-name {
    font-size: 24px;
    font-weight: 500;

    svg {
      stroke-width: 3;
    }
  }

  .my-email, .my-place {
    color: grey;

    svg {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
