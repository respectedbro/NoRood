<script setup>
import OrderCallBtn from '@/components/OrderCallBtn.vue'
import { ref } from 'vue'

const emit = defineEmits(['open-modal'])
const isMenuOpen = ref(false)

const openModal = () => {
  emit('open-modal')
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="flex justify-between w-full items-center lg:gap-x-7 xl:gap-x-25 md:h-[100px] relative"
  >
    <!-- Логотип -->
    <router-link to="/" class="min-w-[200px] cursor-pointer">
      <img src="/images/logo.svg" alt="logo" />
    </router-link>

    <!-- Навигация -->
    <nav>
      <!-- Десктопное меню -->
      <ul class="hidden lg:flex lg:gap-x-5 xl:gap-x-10 rubik">
        <router-link to="/services" exact-active-class="active">Услуги</router-link>
        <router-link to="/materials" exact-active-class="active">Материалы</router-link>
        <router-link to="/delivery" exact-active-class="active">Доставка и оплата</router-link>
        <router-link to="/" exact-active-class="active">О компании</router-link>
        <li>Контакты</li>
      </ul>

      <!-- Мобильное меню -->
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 z-40" @click="closeMenu"></div>
      <ul
        class="fixed top-0 right-0 h-full w-3/4 sm:w-1/3 bg-white flex flex-col gap-y-8 !p-6 z-50 rubik transition-transform transform"
        :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
      >
        <li class="flex justify-between items-center border-b">
          <router-link to="/">
            <img class="max-w-[150px] cursor-pointer" src="/images/logo.svg" alt="logo" />
          </router-link>
          <div @click="closeMenu" class="text-2xl cursor-pointer">✕</div>
        </li>

        <router-link to="/services" exact-active-class="active" @click="closeMenu">
          Услуги
        </router-link>
        <router-link to="/materials" exact-active-class="active" @click="closeMenu">
          Материалы
        </router-link>
        <router-link to="/delivery" exact-active-class="active" @click="closeMenu">
          Доставка и оплата
        </router-link>
        <router-link to="/" exact-active-class="active" @click="closeMenu">
          О компании
        </router-link>
        <li @click="closeMenu">Контакты</li>
        <OrderCallBtn
          class="max-w-[200px]"
          @click="
            () => {
              closeMenu()
              openModal()
            }
          "
        />
        <li class="mt-auto border-t pt-4">
          <span class="text-xs text-gray-500">Политика конфиденциальности © спец-транс, 2023</span>
        </li>
      </ul>
    </nav>

    <!-- Бургер для мобильного меню -->
    <button class="lg:hidden text-3xl cursor-pointer" @click="toggleMenu">&#9776;</button>

    <!-- Кнопка "Заказать звонок" для десктопа -->
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style>
