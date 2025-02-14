<script setup></script>

<template>
  <footer class="w-full bg-[#424141] pt-2">
    <div class="flex w-full justify-center mx-auto">
      <div class="flex justify-between w-full items-center lg:gap-x-25 px-3 max-w-[1420px]">
        <div class="flex items-start lg:items-center flex-col xl:flex-row xl:gap-10">
          <router-link to="/">
            <img
              class="min-w-[100px] lg:min-w-[200px]"
              src="/images/logo-footer.svg"
              alt="logo-footer"
            />
          </router-link>
          <div class="flex-col-reverse md:flex-row gap-4 md:gap-6 flex">
            <div class="text-[#848692] text-xs md:text-lg text-center">
              <p>Политика конфиденциальности © спец-транс, 2023</p>
            </div>

            <div>
              <ul class="text-base lg:text-xl text-slate-300 flex gap-3 xl:gap-10 justify-start">
                <router-link class="text-base lg:text-xl" to="/materials">Материалы</router-link>
                <router-link class="text-base lg:text-xl" to="/services">Услуги</router-link>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex gap-10 flex-col lg:flex-row items-center">
          <ul class="flex gap-5">
            <li>
              <img src="/images/socials/vk.svg" alt="vk" />
            </li>
            <li>
              <img src="/images/socials/fb.svg" alt="fb" />
            </li>
            <li>
              <img src="/images/socials/wup.svg" alt="wup" />
            </li>
          </ul>

          <div class="flex justify-end rubik">
            <button
              class="text-[9px] md:text-sm py-1 px-2 lg:py-2 lg:px-5 border-solid border-1 text-slate-300"
            >
              +7 928 245 15 20
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.rubik {
  font-family: Rubik, sans-serif;
}
</style>
