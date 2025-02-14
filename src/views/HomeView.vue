<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import OrderCallBtn from '@/components/OrderCallBtn.vue'
import FormQuestion from '@/components/FormQuestion.vue'
import DeliveryComponent from '@/components/DeliveryComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import { useModalStore } from '@/store/root.js'

const modalStore = useModalStore()
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <div class="home-view px-3">
      <div class="flex flex-col gap-10 md:gap-90 max-w-[1420px] w-full justify-self-center">
        <header-component
          :isModalOpen="modalStore.isModalOpen"
          @open-modal="modalStore.openModal"
        />

        <section class="flex flex-col items-start max-w-3xl text-white gap-y-12">
          <h1 class="rubik text-3xl md:text-6xl font-bold font-mono">
            Продажа и доставка нерудных материалов
          </h1>

          <div class="rubik text-white-200 text-l font-normal">
            <p>У нас вы можете заказать материалы премиального качества.</p>
            <p>Индивидуальный подход и качественная продукция – ключевые преимущества</p>
            <p>нашей компании.</p>
          </div>

          <OrderCallBtn @click="modalStore.openModal" class="mb-4 sm:mb-40" />
        </section>
      </div>
    </div>

    <section class="flex flex-col max-w-[1420px] w-full rubik px-3">
      <h2
        class="text-2xl/[50px] md:text-5xl/[50px] tracking-tight font-medium mb-6 mt-4 md:mt-20 md:mb-14"
      >
        Почему выбирают нас
      </h2>

      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row items-center gap-2 text-sm rubik"
      >
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 w-full h-18"
        >
          <img src="/images/icons/time-work.svg" alt="time-work" />
          <p>Мы работаем с <span class="text-[#27AE60]">2000</span> года</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
        >
          <img src="/images/icons/clients.svg" alt="clients" />
          <p>Более <span class="text-[#27AE60]">5000</span> счастливых клиентов</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
        >
          <img src="/images/icons/circle-clients.svg" alt="circle-clients" />
          <p>Лучшие цены</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
        >
          <img src="/images/icons/star-products.svg" alt="star-products" />
          <p>Качественная продукция</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18 md:col-span-2 md:justify-center"
        >
          <img src="/images/icons/clock-operative.svg" alt="clock-operative" />
          <p>Оперативность</p>
        </li>
      </ul>

      <h3
        class="text-2xl md:text-5xl/[50px] tracking-tight font-medium mt-8 mb-10 md:mt-20 md:mb-14"
      >
        Основные материалы
      </h3>
      <div class="flex justify-center flex-wrap items-center gap-1">
        <router-link
          :to="{ path: '/materials', query: { tab: 'sand' } }"
          class="text-white rubik text-2xl/[24px] md:text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform md:hover:-translate-y-5"
        >
          <p class="sand w-[340px] h-56 rounded-md md:h-[524px] flex items-end p-7">Песок</p>
        </router-link>
        <router-link
          to="/materials"
          class="text-white rubik text-2xl/[24px] md:text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform md:hover:-translate-y-5"
        >
          <p class="ballast w-[340px] h-56 rounded-md md:h-[524px] flex items-end p-7">Щебень</p>
        </router-link>
        <router-link
          :to="{ path: '/materials', query: { tab: 'gravel' } }"
          class="text-white rubik text-2xl/[24px] md:text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform md:hover:-translate-y-5"
        >
          <p class="asphalt w-[340px] h-56 rounded-md md:h-[524px] flex items-end p-7">
            Асфальтная крошка
          </p>
        </router-link>
        <router-link
          to="/services"
          class="text-white rubik text-2xl/[24px] md:text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform md:hover:-translate-y-5"
        >
          <p class="technique w-[340px] h-56 rounded-md md:h-[524px] flex items-end p-7">
            Аренда техники
          </p>
        </router-link>
      </div>
    </section>

    <section
      class="flex flex-col items-center text-center sm:text-start md:items-stretch max-w-[1420px] w-full rubik px-3"
    >
      <div class="flex flex-col mt-10 md:mt-0 md:flex-row justify-between items-center">
        <div class="md:w-1/2 flex-col flex gap-8 w-full mb-6 md:mb-0">
          <h3 class="text-2xl md:text-5xl/[50px] tracking-tight font-medium">
            О компании СПЕЦ-ТРАНС
          </h3>
          <p class="max-w-[579px] text-sm md:text-lg font-normal text-[#67675F]">
            Наша фирма существует уже многие годы, заработав репутацию на рынке предлагаемых услуг
            как надежного и ответственного партнера. В число наших клиентов вошли крупнейшие
            организации. При этом стоит отметить, что на индивидуальный подход при заказе наших
            услуг могут рассчитывать как крупные компании, так и частные лица.
          </p>
        </div>

        <div
          class="w-[335px] flex-col gap-4 md:flex-row flex justify-start md:justify-center items-center mb-20 pt-10 md:pt-28 md:pb-36 pb-13 pr-8 md:pr-16 pl-10 md:pl-20 md:w-1/2 md:mt-20 rounded-xl bg-[#F8F8F8]"
        >
          <div class="w-1/2 flex flex-col items-center">
            <div class="text-5xl lg:text-[88px] font-semibold lg:font-light relative">
              <img src="/images/icons/+.svg" alt="plus" class="absolute top-0 left-17 lg:left-28" />
              60
            </div>
            <p
              class="whitespace-nowrap text-center text-lg lg:text-2xl font-normal text-slate-500 lg:pl-6"
            >
              Единиц техники
            </p>
          </div>
          <div class="w-1/2 flex flex-col items-center">
            <div class="text-5xl lg:text-[88px] font-semibold lg:font-light">15</div>
            <p class="text-lg lg:text-2xl font-normal text-slate-500">Карьеров</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F8F8F8] flex flex-col items-center w-full pb-6 lg:pb-0 px-3">
      <FormQuestion @open-modal="modalStore.openModal" />
    </section>

    <DeliveryComponent />

    <FooterComponent class="mt-16" />
  </div>

  <ModalComponent :is-modal-open="modalStore.isModalOpen" @close-modal="modalStore.closeModal" />
</template>

<style scoped>
.home-view {
  background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3)),
    url('/images/mainImg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}
@media (max-width: 378px) {
  .home-view {
    background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3)),
      url('/images/mainSm.jpeg');
    background-size: contain;
    background-position: top;
    width: 100%;
    height: 100vh;
  }
}

.sand {
  background-image: url('/images/materials/sand.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
}

.ballast {
  background-image: url('/images/materials/ballast.jpeg');
}

.asphalt {
  background-image: url('/images/materials/asphalt.jpeg');
}

.technique {
  background-image: url('/images/materials/technique.jpeg');
}
</style>
