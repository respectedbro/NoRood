<script setup>
import OrderCallBtn from '@/components/OrderCallBtn.vue'
</script>

<template>
  <div class="flex flex-col max-w-[1420px] w-full rubik">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-6 max-w-[489px]">
        <h3 class="text-5xl/[50px] tracking-tight font-medium">Остались вопросы?</h3>
        <p class="text-[28px] text-[#27AE60] font-light">
          Закажите обратный звонок и узнайте больше о наших услугах!
        </p>
        <p class="text-[22px] font-light">
          Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут
        </p>
        <OrderCallBtn class="max-w-[254px]" />
      </div>

      <div class="w-1/2 flex flex-col items-center">
        <div class="w-[318px] bg-[#27AE60] h-[57px]"></div>
        <form class="flex flex-col px-11 pt-11 pb-8 bg-white gap-2 w-full rounded-xl">
          <input
            class="border-solid border-1 border-slate-200 rounded py-6 pl-7"
            type="text"
            placeholder="Имя"
            name="firstname"
          />
          <input
            class="border-solid border-1 border-slate-200 rounded py-6 pl-7"
            type="tel"
            placeholder="Телефон"
            name="phone"
          />
          <textarea
            placeholder="Комментарии"
            class="border-solid border-1 border-slate-200 rounded pt-6 pl-7 min-h-[172px]"
            name="comment"
          ></textarea>
          <div class="flex gap-3 ml-1 mt-8">
            <input type="checkbox" />
            <span>Соглашение о персональных данных</span>
          </div>
        </form>
        <div class="w-[318px] bg-[#27AE60] h-[57px]"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
