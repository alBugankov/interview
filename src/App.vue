<script lang="ts" setup>
import NavigationBar from '@/modules/navigation/components/NavigationBar.vue'
import { useFeedbackStore } from '@/modules/feedback/stores/feedbackStore'
import ToastMessage from '@/modules/feedback/components/ToastMessage.vue'

const feedbackStore = useFeedbackStore()
</script>

<template>
  <app-progress
    v-if="feedbackStore.isGlobalLoading"
    class="flex justify-content-center align-content-center"
    style="height: 100vh"
  />
  <toast-message />

  <div class="app-container">
    <div class="header-container">
      <navigation-bar />
    </div>
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-container,
.content-container {
  width: 100%;
  max-width: 375px;
  min-width: 315px;
  padding-inline: 15px;
}

.content-container {
  margin-bottom: 30px;
}
</style>
