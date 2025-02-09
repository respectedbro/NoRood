<script setup>
import { ref } from 'vue';

// Состояние для отображения прелоудера
const isLoading = ref(true);

// Функция для отключения прелоудера после загрузки карты
const onIframeLoad = () => {
  isLoading.value = false;
};
</script>

<template>
  <section class="flex flex-col w-full items-end pl-3">
    <div class="flex max-w-[1670px] w-full rubik">
      <div class="flex max-w-[670px] w-full flex-col justify-between gap-25">
        <div class="flex flex-col gap-12">
          <h3 class="text-5xl/[50px] tracking-tight font-medium mt-10">Доставка</h3>
          <p class="max-w-[500px] text-lg font-normal">
            Основная миссия компании Спец-транс — комплексные поставки нерудных материалов для
            корпоративных клиентов и частных лиц. Мы осуществляем доставку по Санкт-Петербургу и
            Ленинградской области.
          </p>

          <ul class="flex flex-col gap-12 text-[#67675F]">
            <li class="flex gap-4">
              <img src="/images/icons/star-delivery.svg" alt="star-delivery" />
              <p>Вы оставляете заявку через сайт или по телефону</p>
            </li>
            <li class="flex gap-4">
              <img src="/images/icons/star-delivery.svg" alt="star-delivery" />
              <p>Мы производим точный расчет стоимости</p>
            </li>
            <li class="flex gap-4">
              <img src="/images/icons/star-delivery.svg" alt="star-delivery" />
              <p>Осуществляем поставку заказанного вами материала точно в срок</p>
            </li>
            <li class="flex gap-4">
              <img src="/images/icons/star-delivery.svg" alt="star-delivery" />
              <p>Соблюдаем своевременный документооборот</p>
            </li>
          </ul>
        </div>

        <div class="flex gap-4 rubik font-normal">
          <div class="flex flex-col p-13 text-center bg-[#F8F8F8] gap-3">
            <span>г. Санкт-Петербург,</span>
            <span class="text-base text-[#848692]">Невский проспект, д. 12/2</span>
          </div>

          <div class="flex flex-col px-11 py-13 text-center bg-[#F8F8F8] gap-3">
            <span>+7 812 545 44 53</span>
            <span class="text-base text-[#848692]">Ежедневно с 08:00 до 24:00</span>
          </div>
        </div>
      </div>

      <div class="relative w-full wax-h-[980px]">
        <!-- Прелоудер -->
        <div
          v-if="isLoading"
          class="absolute inset-0 flex items-center justify-center bg-white z-10"
        >
          <div class="loader"></div>
        </div>

        <!-- Карта -->
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac15fcd3e256eec8e027b6c9698d1b1c0ef7c6b350fb078d5ecfe93d3f4e39d78&amp;source=constructor"
          width="100%"
          height="100%"
          @load="onIframeLoad"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Стили для прелоудера */
.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
