<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FormQuestion from '@/components/FormQuestion.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import {ref, watch} from 'vue'
import {useRoute} from "vue-router";

const activeTab = ref('sand')
const route = useRoute()

const setActiveTab = (tab) => {
  activeTab.value = tab
}

watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab) {
      setActiveTab(newTab)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex flex-col max-w-[1420px] w-full rubik px-3">
    <header-component/>

    <ul class="flex flex-col sm:flex-row gap-3 items-center  justify-around lg:mt-12 text-center">
      <li
        @click="setActiveTab('sand')"
        :class="{
          'gr-list text-[#1E1E1C99] w-sm cursor-pointer hover:text-[#148142] relative': true,
          'text-[#148142] active-tab': activeTab === 'sand',
        }"
      >
        Песок
      </li>
      <li
        @click="setActiveTab('gravel')"
        :class="{
          'gr-list text-[#1E1E1C99] w-sm cursor-pointer hover:text-[#148142] relative': true,
          'text-[#148142] active-tab': activeTab === 'gravel',
        }"
      >
        Щебень
      </li>
      <li
        @click="setActiveTab('asphalt')"
        :class="{
          'gr-list text-[#1E1E1C99] w-sm cursor-pointer hover:text-[#148142] relative': true,
          'text-[#148142] active-tab': activeTab === 'asphalt',
        }"
      >
        Асфальтная крошка
      </li>
    </ul>

    <div class=" mt-6 lg:mt-24 flex flex-col gap-20 mb-20 lg:mb-48">
      <div v-if="activeTab === 'sand'" class="flex flex-col lg:flex-row gap-10">
        <img class="max-h-[280px] sm:max-h-[380px] md:max-h-[480px]" src="/images/materials/sand-materials-view.jpeg" alt="sand"/>
        <div>
          <h3 class="text-2xl lg:text-3xl font-semibold mb-6">Песок</h3>
          <p class="mb-12 text-sm lg:text-lg">
            Зернистость песка влияет на водопотребность раствора и его прочностные характеристики –
            чем больше модуль крупности, тем выше прочность бетона и меньше расход воды для его
            приготовления.Увеличение зернистости свидетельствует о большем среднем диаметре частиц
            песка. Это ведет к снижению пластичности цементного раствора. Поэтому зернистость песка
            должна подбираться в зависимости от назначения и условий, при которых будет
            эксплуатироваться бетон.
          </p>

          <ul class="flex flex-col gap-4">
            <li class="flex">
              <p class="text-base font-light">Песок карьерный 1.91</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 160 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Песок карьерный 1.40</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 160 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Песок карьерный 1.10</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 160 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Песок намывной</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 250 ₽</span>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="activeTab === 'gravel'" class="flex flex-col lg:flex-row gap-10">
        <img class="max-h-[280px] sm:max-h-[380px] md:max-h-[480px]" src="/images/materials/ballast-materials-view.jpeg" alt="ballast"/>
        <div>
          <h3 class="text-3xl font-semibold mb-6">Щебень</h3>
          <p class="mb-12 text-sm lg:text-lg">
            Щебень размером 5-20 мм. Это самый востребованный в строительстве и производстве ЖБИ
            материал, его также применяют для строительства дорог и создания фундамента. Такой
            щебень незаменим и в частном строительстве при подготовке бетона. Щебень 20-40 мм.
            Используется в дренажных работах, при строительстве трамвайных и железнодорожных путей,
            а также может применяться при обустройстве фундаментов зданий промышленного назначения.
            Щебень размером 40-70 мм может использовать для дренажа, добавляться в бетон и бетонные
            изделия;
          </p>

          <ul class="flex flex-col gap-4">
            <li class="flex">
              <p class="text-base font-light">Щебень гранитный фр. 5-20</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 800 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Щебень гранитный фр. 20-40</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 600 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Щебень гравийный фр. 5-20</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 500 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Гранитный отсев</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 1000 ₽</span>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="activeTab === 'asphalt'" class="flex flex-col lg:flex-row gap-10">
        <img class="max-h-[280px] sm:max-h-[380px] md:max-h-[480px]" src="/images/materials/asphalt-materials-view.jpeg" alt="asphalt"/>
        <div class="w-full">
          <h3 class="text-3xl font-semibold mb-6">Вторичные материалы</h3>
          <p class="mb-12 text-sm lg:text-lg">Вторичные материалы, такие как асфальтная крошка, бой кирпича и бой бетона, играют
            важную роль в устойчивом строительстве и экологии. Асфальтная крошка представляет собой
            переработанный асфальт, который используется в производстве новых асфальтовых покрытий,
            что позволяет сократить потребление новых материалов и уменьшить отходы. Бой кирпича и бой бетона, который образуется в
            результате сноса конструкций, также находит применение в качестве заполнителя для новых
            бетонных смесей, что позволяет снижать нагрузку на природные ресурсы.</p>
          <ul class="flex flex-col gap-4">
            <li class="flex">
              <p class="text-base font-light">Асфальтная крошка</p>
              <div class="flex-1 w-full border-b border-dashed"></div>
              <span>От 500 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Бой кирпича</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 500 ₽</span>
            </li>
            <li class="flex">
              <p class="text-base font-light">Бой бетона</p>
              <div class="flex-1 border-b border-dashed"></div>
              <span>От 200 ₽</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section class="bg-[#F8F8F8] flex flex-col items-center w-full px-3">
    <FormQuestion class="px-3"/>
  </section>
  <footer-component/>
</template>

<style scoped>
.gr-list {
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}

.gr-list::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(#148142, rgba(20, 129, 66, 0));
  transform: scaleX(0);
  transform-origin: bottom;
  transition: transform 0.6s ease;
}

.gr-list:hover,
.active-tab {
  color: #148142;
}

.gr-list:hover::after,
.active-tab::after {
  transform: scaleX(1);
}
</style>
