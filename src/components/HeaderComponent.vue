<script setup>
import OrderCallBtn from '@/components/OrderCallBtn.vue'
</script>

<template>
  <header class="flex justify-between w-full items-center gap-x-25 h-[100px]">
    <router-link to="/" class="min-w-[200px] cursor-pointer">
      <img src="/images/logo.svg" alt="logo" />
    </router-link>

    <nav>
      <ul class="flex gap-x-10 rubik">
        <li>Услуги</li>
        <router-link to="/materials" exact-active-class="active">Материалы</router-link>
        <li>Доставка и оплата</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <OrderCallBtn />
  </header>
</template>

<style scoped>
.rubik {
  font-family: Rubik, sans-serif;
}

.active {
  font-weight: bold;
  color: #27ae60; /* Пример стиля для активной ссылки */
}
</style>
