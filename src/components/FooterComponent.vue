<script setup></script>

<template>
  <footer class="w-full bg-[#424141]">
    <div class="flex w-full justify-center mx-auto">
      <div class="flex justify-between w-full items-center gap-x-25 h-[128px] px-3 max-w-[1420px]">
        <div class="flex items-center gap-10">
          <router-link to="/">
            <img src="/images/logo-footer.svg" alt="logo-footer" />
          </router-link>

          <div class="text-[#848692]">
            <p>Политика конфиденциальности © спец-транс, 2023</p>
          </div>
        </div>

        <div>
          <ul class="text-slate-300 flex gap-10">
            <router-link to="/materials">Материалы</router-link>
            <li>Услуги</li>
          </ul>
        </div>

        <div class="flex gap-10 items-center">
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
            <button class="py-2 px-5 border-solid border-1 text-slate-300">+7 928 245 15 20</button>
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
