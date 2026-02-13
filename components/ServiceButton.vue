<script setup lang="ts">
defineProps<{
  title: string
  url: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button 
    @click="emit('click')"
    class="w-full p-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform duration-200 bg-gradient-to-b from-btn-green-start to-btn-green-end hover:brightness-110"
  >
    <span class="block text-center font-bold text-surface text-lg drop-shadow-sm">{{ title }}</span>
  </button>
</template>
