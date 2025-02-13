<script setup>

import DeliveryComponent from "@/components/DeliveryComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="flex flex-col max-w-[1420px] w-full rubik px-3">
    <HeaderComponent/>
    </div>
  <section class="flex flex-col w-full items-end pl-3">
    <DeliveryComponent class="mt-8"/>
  </section>
  <FooterComponent/>
</template>

<style scoped>

</style>
