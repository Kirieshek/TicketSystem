<template>
  <div class="container">
      <v-sheet width="600" class="mx-auto">
        <form @submit.prevent="submit">
          <v-text-field
            v-model="name.value.value"
            :error-messages="name.errorMessage.value"
            label="Имя"

          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :error-messages="phone.errorMessage.value"
            label="Номер телефона"
            class="input"
          ></v-text-field>

          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
            class="input"
          ></v-text-field>

          <v-btn @click="Edit" class="me-4 input">
            РЕДАКТИРОВАТЬ  
          </v-btn>

          <v-btn class="me-4 input" type="submit">
            ПОДТВЕРДИТЬ
          </v-btn>

          <v-btn @click="handleReset" class="me-4 input">
            ОЧИСТИТЬ  
          </v-btn>
        </form>
    </v-sheet>
  </div>

</template>
  
<script>
  
  export default {
    name: 'UserInfo',
  
    components: {
    },
  
    data: () => ({
      //
    }),
  }
</script>

<script setup>

import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name (value) {
      if (value?.length >= 2) return true

      return 'Имя должно содержать не менее 2 символов.'
    },
    phone (value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'Номер телефона должен состоять как минимум из 9 цифр'
    },
    email (value) {
      if (/^[a-z.-|0-9]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Должен быть действительный адрес электронной почты.'
    },
  },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    max-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
  }
</style>
  