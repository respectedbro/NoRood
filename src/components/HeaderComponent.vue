<script setup>
import OrderCallBtn from '@/components/OrderCallBtn.vue'

const emit = defineEmits(['open-modal'])

const openModal = () => {
  emit('open-modal')
}
</script>

<template>
  <header class="flex justify-between w-full items-center lg:gap-x-7 xl:gap-x-25 md:h-[100px]">
    <router-link to="/" class="min-w-[200px] cursor-pointer">
      <img src="/images/logo.svg" alt="logo" />
    </router-link>

    <nav>
      <ul class="hidden lg:flex lg:gap-x-5 xl:gap-x-10 rubik">
        <router-link to="/services" exact-active-class="active">Услуги</router-link>
        <router-link to="/materials" exact-active-class="active">Материалы</router-link>
        <router-link to="/delivery" exact-active-class="active">Доставка и оплата</router-link>
        <router-link to="/" exact-active-class="active">О компании</router-link>
        <li>Контакты</li>
      </ul>
    </nav>

    <OrderCallBtn @click="openModal" class="hidden lg:block" />
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
