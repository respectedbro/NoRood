<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import FormQuestion from '@/components/FormQuestion.vue'
</script>

<template>
  <div class="flex flex-col max-w-[1420px] w-full rubik px-3">
    <header-component />

    <div class="mt-8 lg:mt-24 flex flex-col gap-20 mb-8">
      <div class="flex flex-col-reverse lg:flex-row gap-10 ">
        <img src="/images/services/special-equipment.jpeg" alt="special-equipment" />
        <div>
          <h3 class="text-3xl font-semibold mb-6">Аренда спецтехники</h3>
          <p class="mb-12 text-lg">
            Мы предлагаем широкий выбор техники, включая строительное оборудование, садовую технику,
            а также автомобили для перевозки. Все наши агрегаты регулярно проходят техническое
            обслуживание и проверку перед арендой, что гарантирует их надежность и безопасность в
            использовании. Вы можете выбрать необходимые параметры аренды по своему усмотрению: от
            краткосрочной аренды на выходные до долгосрочных контрактов для крупных проектов.
          </p>
          <ul class="flex flex-col gap-4">
            <li class="flex">
              <p class="text-base font-light">Экскаваторы</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 5000 смена</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Краны</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 5000 смена</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Погрузчики</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 2000 смена</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Бетононасосы</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 3000 смена</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col-reverse lg:flex-row gap-10">
        <img src="/images/services/tippers.svg" alt="special-equipment" />
        <div>
          <h3 class="text-3xl font-semibold mb-6">Аренда самосвалов</h3>
          <p class="mb-12 text-lg">
            Аренда самосвалов – это удобное решение для строительных компаний и частных клиентов,
            которым необходимо перевозить крупные объемы стройматериалов, грунта или отходов. В
            нашем автопарке представлены современные модели самосвалов, которые обеспечивают высокую
            производительность и надежность. Мы предлагаем гибкие условия аренды, включая
            краткосрочные и долгосрочные контракты. Наша команда готова помочь с выбором подходящего
            автомобиля в зависимости от ваших потребностей. Обратите внимание на конкурентные цены и
            высокое качество обслуживания!
          </p>
          <ul class="flex flex-col gap-4">
            <li class="flex">
              <p class="text-base font-light">Самосвал 20куб</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>от 1500 ₽ смена</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Самосвал 25куб</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>от 1500 ₽ смена</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Самосвал 30куб</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>от 1600 ₽ смена</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section class="bg-[#F8F8F8] flex flex-col items-center w-full px-3">
    <FormQuestion class="px-3" />
  </section>
  <footer-component />
</template>

<style scoped></style>
