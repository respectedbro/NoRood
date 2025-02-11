<script setup>
import { defineEmits, defineProps } from 'vue'
import OrderCallBtn from '@/components/OrderCallBtn.vue'

const { isModalOpen } = defineProps({
  isModalOpen: Boolean,
})

const emit = defineEmits(['close-modal'])

const closeModal = () => {
  emit('close-modal')
}
</script>

<template>
  <div v-if="isModalOpen" class="fixed top-0 bottom-0 right-0 left-0 w-full bg-slate-500/50">
    <div
      class="fixed w-[700px] h-[400px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <button @click="closeModal" class="absolute top-3 right-4 text-xl text-black cursor-pointer">
        &#x2715;
      </button>
      <form class="flex flex-col px-11 pt-11 pb-8 bg-white gap-2 w-full rounded-xl">
        <h3 class="self-center text-xl pb-3">
          Заполните форму, мы с вами свяжемся в ближайшее время
        </h3>
        <input
          class="border-solid border-1 border-slate-200 rounded py-6 pl-7"
          type="text"
          placeholder="Имя"
          name="firstname"
          required
        />
        <input
          class="border-solid border-1 border-slate-200 rounded py-6 pl-7"
          type="tel"
          placeholder="Телефон"
          name="phone"
          required
        />
        <textarea
          placeholder="Комментарии"
          class="border-solid border-1 border-slate-200 rounded pt-6 pl-7 min-h-[172px]"
          name="comment"
        ></textarea>
        <div class="flex items-center justify-between p-3">
          <div class="flex gap-3">
            <input type="checkbox" />
            <span>Соглашение о персональных данных</span>
          </div>
          <div>
            <OrderCallBtn type="submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
