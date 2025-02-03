<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="home-view flex flex-col items-center max-w-[1920px] w-full">
    <div class="flex flex-col gap-90 max-w-[1420px] w-full">
      <HeaderComponent />

      <section class="flex flex-col items-start max-w-3xl text-white gap-y-12">
        <h1 class="rubik text-6xl font-bold font-mono">Продажа и доставка нерудных материалов</h1>

        <div class="rubik text-white-200 text-l font-normal">
          <p>У нас вы можете заказать материалы премиального качества.</p>
          <p>Индивидуальный подход и качественная продукция – ключевые преимущества</p>
          <p>нашей компании.</p>
        </div>

        <button class="py-2 px-7 bg-[#27AE60] rounded-md text-white rubik">Заказать звонок</button>
      </section>
    </div>
  </div>

  <section class="flex flex-col max-w-[1420px] w-full rubik">
    <h2 class="text-5xl/[50px] tracking-tight font-medium mt-20 mb-14">Почему выбирают нас</h2>

    <ul class="flex items-center gap-2 text-sm rubik">
      <li
        class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 w-full h-18"
      >
        <img src="/images/icons/time-work.svg" alt="" />
        <p>Мы работаем с <span class="text-[#27AE60]">2000</span> года</p>
      </li>
      <li
        class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
      >
        <img src="/images/icons/clients.svg" alt="" />
        <p>Более <span class="text-[#27AE60]">5000</span> счастливых клиентов</p>
      </li>
      <li
        class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
      >
        <img src="/images/icons/circle-clients.svg" alt="" />
        <p>Лучшие цены</p>
      </li>
      <li
        class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
      >
        <img src="/images/icons/star-products.svg" alt="" />
        <p>Качественная продукция</p>
      </li>
      <li
        class="items-center flex gap-6 border-gray-300 border-1 border-solid rounded-md pr-12 pl-5 p-6 w-full h-18"
      >
        <img src="/images/icons/clock-operative.svg" alt="" />
        <p>Оперативность</p>
      </li>
    </ul>

    <h3 class="text-5xl/[50px] tracking-tight font-medium mt-20 mb-14">Основные материалы</h3>
    <div class="flex justify-between gap-1">
      <div
        class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
      >
        <p class="sand w-[340px] h-[524px] flex items-end p-7">Песок</p>
      </div>
      <div
        class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
      >
        <p class="ballast w-[340px] h-[524px] flex items-end p-7">Щебень</p>
      </div>
      <div
        class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
      >
        <p class="asphalt w-[340px] h-[524px] flex items-end p-7">Асфальтная крошка</p>
      </div>
      <div
        class="text-white rubik text-4xl/[47px] font-bold cursor-pointer duration-500 ease-in-out transform hover:-translate-y-5"
      >
        <p class="technique w-[340px] h-[524px] flex items-end p-7">Аренда техники</p>
      </div>
    </div>
  </section>

  <section class="flex flex-col max-w-[1420px] w-full rubik">
    <div class="flex justify-between items-center">
      <div class="w-1/2">
        <h3 class="text-5xl/[50px] tracking-tight font-medium">О компании СПЕЦ-ТРАНС</h3>
        <p class="max-w-[579px] text-lg font-normal text-[#67675F]">
          Наша фирма существует уже многие годы, заработав репутацию на рынке предлагаемых услуг как
          надежного и ответственного партнера. В число наших клиентов вошли крупнейшие организации.
          При этом стоит отметить, что на индивидуальный подход при заказе наших услуг могут
          рассчитывать как крупные компании, так и частные лица.
        </p>
      </div>

      <div
        class="flex justify-center items-center mb-20 pt-28 pb-36 pr-16 pl-20 w-1/2 mt-20 rounded-xl bg-[#F8F8F8]"
      >
        <div class="w-1/2 flex flex-col items-center">
          <div class="text-[88px] font-light relative">
            <img src="/images/icons/+.svg" alt="plus" class="absolute top-8 left-30" />
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

  <section class="bg-[#F8F8F8] flex flex-col items-center max-w-[1920px] w-full">
    <div class="flex flex-col max-w-[1420px] w-full rubik">
      <div class="flex justify-between">
        <div class="flex flex-col gap-6 max-w-[489px]">
          <h3 class="text-5xl/[50px] tracking-tight font-medium">Остались вопросы?</h3>
          <p class="text-[28px] text-[#27AE60] font-light">
            Закажите обратный звонок и узнайте больше о наших услугах!
          </p>
          <p class="text-[22px] font-light">
            Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут
          </p>
          <button class="py-2 px-7 bg-[#27AE60] rounded-md text-white w-[254px] mt-8 rubik">
            Заказать звонок
          </button>
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
            <input type="checkbox" />
            <span>Соглашение о персональных данных</span>
          </form>
          <div class="w-[318px] bg-[#27AE60] h-[57px]"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-view {
  background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3)),
    url('/images/mainImg.png');
  background-size: cover; /* Масштабирует изображение, чтобы оно покрывало весь фон */
  background-position: center; /* Центрирует изображение */
  background-repeat: no-repeat; /* Предотвращает повторение изображения */
  min-height: 1000px; /* Задает высоту контейнера на весь экран */
  width: 100%; /* Задает ширину контейнера на всю ширину */
}

.sand {
  background-image: url('/images/materials/sand.jpeg');
  background-size: cover; /* Масштабирует изображение, чтобы оно покрывало весь фон */
  background-position: center; /* Центрирует изображение */
  background-repeat: no-repeat; /* Предотвращает повторение изображения */
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

.rubik {
  font-family: Rubik, sans-serif;
}
</style>
