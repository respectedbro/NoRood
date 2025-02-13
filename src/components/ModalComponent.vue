<script setup>
import {defineEmits, defineProps} from 'vue'
import {Form, Field} from 'vee-validate'

const {isModalOpen} = defineProps({
  isModalOpen: Boolean,
})

const emit = defineEmits(['close-modal'])

const closeModal = () => {
  emit('close-modal')
}

const sendForm = () => {
  console.log('SEND')
}

const isRequired = (value) => {
  if (value && value.trim()) {
    return true
  }
  return 'This is required'
}
</script>

<template>
  <div v-if="isModalOpen" class="fixed top-0 bottom-0 right-0 left-0 w-full bg-slate-500/50">
    <div
      class="fixed w-full sm:w-[700px] sm:h-[400px] px-3 lg:top-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <button @click="closeModal"
              class="p-2 absolute top-3 right-4 text-xl text-black cursor-pointer">
        &#x2715;
      </button>
      <Form @submit="sendForm"
            class="flex flex-col px-11 pt-11 pb-8 bg-white gap-2 w-full rounded-xl">
        <h3 class="self-center text-center text-sm lg:text-xl pb-3">
          Заполните форму, мы с вами свяжемся в ближайшее время
        </h3>
        <Field :rules="isRequired"
          class="border-solid border-1 border-slate-200 rounded py-3 lg:py-6 pl-3 lg:pl-7"
          type="text"
          placeholder="Имя"
          name="firstname"
          required
        />
        <Field
          class="border-solid border-1 border-slate-200 rounded py-3 lg:py-6 pl-3 lg:pl-7"
          type="tel"
          placeholder="Телефон"
          name="phone"
          required
        />
        <Field
          placeholder="Комментарии"
          class="border-solid border-1 border-slate-200 rounded py-3 lg:py-6 pl-3 lg:pl-7 min-h-[172px]"
          name="comment"
        ></Field>
        <div class="flex flex-col md:flex-row items-start sm:items-center justify-between p-3">
          <div class="flex gap-3">
            <input type="checkbox"/>
            <span class="text-sm">Соглашение о персональных данных</span>
          </div>
          <div>
            <button type="submit" class=" max-w-30 mt-4 bg-[#27AE60] text-white rounded py-2 px-4">
              Отправить
            </button>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
