<script setup>
import { defineEmits, defineProps } from 'vue'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

// Пропсы
const { isModalOpen } = defineProps({
  isModalOpen: Boolean,
})

// Эмиттеры
const emit = defineEmits(['close-modal'])
const closeModal = () => {
  emit('close-modal')
}

// Схема валидации
const validationSchema = toTypedSchema(
  z.object({
    firstname: z
      .string()
      .min(1, 'Обязательные поля') // Имя обязательно
      .regex(/^[А-Яа-яЁё]+$/, { message: 'Имя должно содержать только русские буквы' }),
    phone: z
      .string()
      .min(1, { message: 'Обязательные поля' }) // Телефон обязателен
      .regex(/^\+?\d{11}$/, 'Телефон должен начинаться с "+" и содержать 11 цифр'),
    agreement: z.boolean().refine((val) => val === true, {
      message: 'Необходимо согласиться с обработкой персональных данных',
    }),
    comment: z
      .string()
      .max(500, 'Комментарий не может превышать 500 символов') // Комментарий не обязателен
      .optional(), // Делаем поле необязательным
  }),
)

// Используем useForm
const { handleSubmit, errors } = useForm({
  validationSchema,
})

// Поля формы
const { value: firstname } = useField('firstname')
const { value: phone } = useField('phone')
const { value: agreement } = useField('agreement')
const { value: comment } = useField('comment')

// Обработчик формы
const sendForm = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div v-if="isModalOpen" class="fixed top-0 bottom-0 right-0 left-0 w-full bg-slate-500/50">
    <div
      class="fixed w-full sm:w-[700px] sm:h-[400px] px-3 lg:top-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <button
        @click="closeModal"
        class="p-2 absolute top-3 right-4 text-xl text-black cursor-pointer"
      >
        &#x2715;
      </button>
      <form
        @submit.prevent="sendForm"
        class="flex flex-col px-11 pt-11 pb-8 bg-white gap-2 w-full rounded-xl"
      >
        <h3 class="self-center text-center text-sm lg:text-xl pb-3">
          Заполните форму, мы с вами свяжемся в ближайшее время
        </h3>

        <!-- Поле Имя -->
        <input
          v-model="firstname"
          class="border-solid border-1 border-slate-200 rounded py-3 lg:py-6 pl-3 lg:pl-7"
          type="text"
          placeholder="Имя"
          name="firstname"
        />
        <span class="text-red-500 text-sm">{{ errors.firstname }}</span>

        <!-- Поле Телефон -->
        <input
          v-model="phone"
          class="border-solid border-1 border-slate-200 rounded py-3 lg:py-6 pl-3 lg:pl-7"
          type="tel"
          placeholder="Телефон"
          name="phone"
        />
        <span class="text-red-500 text-sm">{{ errors.phone }}</span>

        <!-- Поле Комментарий -->
        <textarea
          v-model="comment"
          placeholder="Комментарии"
          maxlength="500"
          class="border-solid border-1 border-slate-200 rounded py-3 lg:py-6 pl-3 lg:pl-7 min-h-[100px] resize-none overflow-hidden"
          name="comment"
        ></textarea>
        <span class="text-red-500 text-sm">{{ errors.comment }}</span>

        <!-- Соглашение -->
        <div class="flex gap-3 items-center">
          <input type="checkbox" v-model="agreement" name="agreement" />
          <span class="text-sm">Соглашение о персональных данных</span>
        </div>
        <span class="text-red-500 text-sm">{{ errors.agreement }}</span>

        <!-- Кнопка -->
        <div>
          <button type="submit" class="max-w-30 mt-4 bg-[#27AE60] text-white rounded py-2 px-4">
            Отправить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
