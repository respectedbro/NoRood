<script setup></script>

<template>
  <div class="flex justify-between w-full items-center gap-x-25 h-[100px] px-3">
    <div class="min-w-[200px]">
      <img src="/images/logo.svg" alt="logo" />
    </div>

    <nav>
      <ul class="flex gap-x-10 rubik">
        <li>Услуги</li>
        <li>Материалы</li>
        <li>Доставка и оплата</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="flex justify-end rubik">
      <button class="py-2 px-7 bg-[#27AE60] rounded-md text-white">Заказать звонок</button>
    </div>
  </div>
</template>

<style scoped>
.rubik {
  font-family: Rubik, sans-serif;
}
</style>
