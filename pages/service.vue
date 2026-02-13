<script setup lang="ts">
import ServiceButton from "~/components/ServiceButton.vue"
const { data, pending, error, refresh } = await useFetch('/api/service')

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}

interface ServiceButton {
  title: string;
  url: string;
}

const openLink = (button: ServiceButton) => {
  if (!data.value) return;
  
  if (data.value.jumpOut === 1) {
    window.open(button.url, '_blank')
  } else {
    window.location.href = button.url
  }
}
</script>

<template>
  <div class="min-h-screen bg-background flex flex-col items-center font-sans text-white">
    <header class="w-full max-w-md flex flex-col relative z-20 border-b-[3px] border-dotted border-accent/60">
      <div class="absolute inset-0 bg-[url(/static_images/header_bg.webp)] bg-cover bg-center -z-10"></div>

      <div class="flex items-center p-4 relative min-h-[80px]">
        <button @click="goBack" class="w-10 h-10 flex items-center justify-center rounded-xl bg-black/40 hover:bg-black/60 transition-colors absolute left-4 z-20" aria-label="Go back">
          <img src="/static_images/back.svg" class="w-5 h-5 object-contain" alt="Decoration" />
        </button>
        
        <h1 class="text-xl font-bold w-full text-center text-white flex items-center justify-center gap-2 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
             <path d="M12 2C6.48 2 2 6.48 2 12v5.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V12c0-2.76 2.24-5 5-5s5 2.24 5 5v5.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V12c0-5.52-4.48-10-10-10z" />
          </svg>
          Serviço
        </h1>

        <div class="absolute -bottom-10 right-0 z-30 w-20 h-20 pointer-events-none">
            <img src="/static_images/header_edge.webp" class="w-full h-full object-contain" alt="Decoration" />
        </div>
      </div>
    </header>

    <main class="w-full max-w-md p-5 flex-1 flex flex-col gap-6">
      
      <div v-if="pending" class="flex flex-col items-center justify-center py-20 text-accent">
        <svg class="animate-spin h-10 w-10 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="font-medium text-white/70">Loading options...</p>
      </div>

      <div v-else-if="error" class="flex flex-col items-center justify-center py-10 text-center">
        <div class="bg-red-500/10 text-red-500 p-4 rounded-xl border border-red-500/20 mb-4 w-full">
          <p class="font-medium">Failed to load customer service options.</p>
        </div>
        <button @click="refresh()" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors font-medium text-sm">
          Try Again
        </button>
      </div>

      <div v-else class="flex flex-col gap-5 animate-fade-in">
        <div class="bg-surface p-5 rounded-2xl shadow-lg border border-white/5">
          <div class="flex items-start gap-4">
             <div class="bg-primary/30 p-2 rounded-lg text-accent shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
               </svg>
             </div>
             <div class="text-sm text-white leading-relaxed text-center">
               <p>Depois de receber seus comentários, nossa equipe de atendimento ao cliente responderá o mais rápido possível durante o horário de trabalho, seja paciente, obrigado!</p>
             </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h2 class="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1 mb-1">Available Channels</h2>
          <ServiceButton
            v-for="(btn, index) in data?.customerButtons" 
            :key="index"
            :title="btn.title"
            :url="btn.url"
            @click="openLink(btn)"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
