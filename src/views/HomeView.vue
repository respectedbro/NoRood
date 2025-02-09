<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import OrderCallBtn from '@/components/OrderCallBtn.vue'
import FormQuestion from '@/components/FormQuestion.vue'
import DeliveryComponent from "@/components/DeliveryComponent.vue";
import {ref} from "vue";

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <div class="home-view px-3">
      <div class="flex flex-col gap-90 max-w-[1420px] w-full justify-self-center">
        <header-component/>

        <section class="flex flex-col items-start max-w-3xl text-white gap-y-12">
          <h1 class="rubik text-6xl font-bold font-mono">Продажа и доставка нерудных материалов</h1>

          <div class="rubik text-white-200 text-l font-normal">
            <p>У нас вы можете заказать материалы премиального качества.</p>
            <p>Индивидуальный подход и качественная продукция – ключевые преимущества</p>
            <p>нашей компании.</p>
          </div>

          <OrderCallBtn @click="openModal"/>
        </section>
      </div>
    </div>

    <section class="flex flex-col max-w-[1420px] w-full rubik px-3">
      <h2 class="text-5xl/[50px] tracking-tight font-medium mt-20 mb-14">Почему выбирают нас</h2>

      <ul class="flex items-center gap-2 text-sm rubik">
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 w-full h-18"
        >
          <img src="/images/icons/time-work.svg" alt="time-work"/>
          <p>Мы работаем с <span class="text-[#27AE60]">2000</span> года</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
        >
          <img src="/images/icons/clients.svg" alt=""/>
          <p>Более <span class="text-[#27AE60]">5000</span> счастливых клиентов</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
        >
          <img src="/images/icons/circle-clients.svg" alt="circle-clients"/>
          <p>Лучшие цены</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
        >
          <img src="/images/icons/star-products.svg" alt="star-products"/>
          <p>Качественная продукция</p>
        </li>
        <li
          class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
        >
          <img src="/images/icons/clock-operative.svg" alt="clock-operative"/>
          <p>Оперативность</p>
        </li>
      </ul>

      <h3 class="text-5xl/[50px] tracking-tight font-medium mt-20 mb-14">Основные материалы</h3>
      <div class="flex justify-between gap-1">
        <router-link :to="{ path: '/materials', query: { tab: 'sand' } }"
                     class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
        >
          <p class="sand w-[340px] h-[524px] flex items-end p-7">Песок</p>
        </router-link>
        <router-link to="/materials"
                     class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
        >
          <p class="ballast w-[340px] h-[524px] flex items-end p-7">Щебень</p>
        </router-link>
        <router-link :to="{ path: '/materials', query: { tab: 'gravel' } }"
                     class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
        >
          <p class="asphalt w-[340px] h-[524px] flex items-end p-7">Асфальтная крошка</p>
        </router-link>
        <router-link to="/services"
                     class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
        >
          <p class="technique w-[340px] h-[524px] flex items-end p-7">Аренда техники</p>
        </router-link>
      </div>
    </section>

    <section class="flex flex-col max-w-[1420px] w-full rubik px-3">
      <div class="flex justify-between items-center">
        <div class="w-1/2 flex-col flex gap-8">
          <h3 class="text-5xl/[50px] tracking-tight font-medium">О компании СПЕЦ-ТРАНС</h3>
          <p class="max-w-[579px] text-lg font-normal text-[#67675F]">
            Наша фирма существует уже многие годы, заработав репутацию на рынке предлагаемых услуг
            как надежного и ответственного партнера. В число наших клиентов вошли крупнейшие
            организации. При этом стоит отметить, что на индивидуальный подход при заказе наших
            услуг могут рассчитывать как крупные компании, так и частные лица.
          </p>
        </div>

        <div
          class="flex justify-center items-center mb-20 pt-28 pb-36 pr-16 pl-20 w-1/2 mt-20 rounded-xl bg-[#F8F8F8]"
        >
          <div class="w-1/2 flex flex-col items-center">
            <div class="text-[88px] font-light relative">
              <img src="/images/icons/+.svg" alt="plus" class="absolute top-8 left-30"/>
              60
            </div>
            <p class="text-2xl font-normal text-slate-500 pl-6">Единиц техники</p>
          </div>
          <div class="w-1/2 flex flex-col items-center">
            <div class="text-[88px] font-light">15</div>
            <p class="text-2xl font-normal text-slate-500">Карьеров</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F8F8F8] flex flex-col items-center w-full px-3">
      <FormQuestion/>
    </section>

    <DeliveryComponent/>

    <FooterComponent class="mt-16"/>
  </div>

  <div
    v-if="isModalOpen"
    class="fixed top-0 bottom-0 right-0 left-0 w-full bg-slate-500/50">
    <div
      class="fixed w-[700px] h-[400px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button class="absolute top-3 right-4 text-xl text-black cursor-pointer" @click="closeModal">
        &#x2715;
      </button>
      <form class="flex flex-col px-11 pt-11 pb-8 bg-white gap-2 w-full rounded-xl">
        <h3 class="self-center text-xl pb-3">Заполните форму, мы с вами свяжемся в ближайшее
          время</h3>
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
        <div class="flex items-center justify-between p-3 ">
          <div class="flex gap-3 ">
            <input type="checkbox"/>
            <span>Соглашение о персональных данных</span>
          </div>
          <div>
            <OrderCallBtn type="submit"/>
          </div>

        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
.home-view {
  background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3)),
  url('/images/mainImg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 1000px;
  width: 100%;
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
