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
        <router-link to="/services" exact-active-class="active">Услуги</router-link>
        <router-link to="/materials" exact-active-class="active">Материалы</router-link>
        <router-link to="/delivery" exact-active-class="active">Доставка и оплата</router-link>
        <router-link to="/" exact-active-class="active">О компании</router-link>
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
  color: #27ae60;
}
</style>
