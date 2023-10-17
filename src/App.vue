<script setup lang="ts">
import Header from '@/components/Header/index.vue'
</script>

<template>
  <Header />

  <div :class="[PREFIX_NAME_WRAPPER('view')]">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.#{PREFIX_NAME_WRAPPER(view)} {
  width: 100%;
  height: calc(100% - #{$header-height});
}
</style>
