<script setup>
import OrderCallBtn from '@/components/OrderCallBtn.vue'

const props = defineProps({
  isModalOpen: Boolean,
})

const emit = defineEmits(['open-modal'])

const openModal = () => {
  emit('open-modal')
}
</script>

<template>
  <div class="flex flex-col max-w-[1420px] w-full rubik">
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div class="mb-6 lg:mb-0 flex flex-col gap-6 max-w-[489px]">
        <h3 class="text-3xl md:text-5xl/[50px] tracking-tight font-medium">Остались вопросы?</h3>
        <p class="text-base md:text-[28px] text-[#27AE60] font-light">
          Закажите обратный звонок и узнайте больше о наших услугах!
        </p>
        <p class="text-base md:text-[22px] font-light">
          Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут
        </p>
        <OrderCallBtn @click="openModal" class="max-w-[254px] hidden lg:block" />
      </div>

      <div class="w-full lg:w-1/2 flex flex-col items-center">
        <div class="hidden lg:block w-[318px] bg-[#27AE60] h-[57px]"></div>
        <form
          class="flex flex-col px-5 md:px-11 pt-5 md:pt-11 pb-4 md:pb-8 bg-white gap-2 w-full rounded-xl"
        >
          <input
            class="border-solid border-1 border-slate-200 rounded py-2 pl-3 md:py-6 md:pl-7"
            type="text"
            placeholder="Имя"
            name="firstname"
          />
          <input
            class="border-solid border-1 border-slate-200 rounded py-2 pl-3 md:py-6 md:pl-7"
            type="tel"
            placeholder="Телефон"
            name="phone"
          />
          <textarea
            placeholder="Комментарии"
            class="border-solid border-1 border-slate-200 rounded py-2 pl-3 md:py-6 md:pl-7 min-h-[172px]"
            name="comment"
          ></textarea>
          <div class="flex gap-3 ml-1 mt-8">
            <input type="checkbox" />
            <span >Соглашение о персональных данных</span>
          </div>
          <button type="submit" class="max-w-30 mt-4 bg-[#27AE60] text-white rounded py-2 px-4">
            Отправить
          </button>
        </form>
        <div class="hidden lg:block w-[318px] bg-[#27AE60] h-[57px]"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
