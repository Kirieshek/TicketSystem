<template>
  <div class="container">
    <div class="card">
      <div class="errorAuth" v-if="this.user != ''">
        ВЫ УЖЕ АВТОРИЗОВАНЫ
      </div>
      <v-sheet width="400" class="mx-auto" v-else>
        <div class="tittle">АВТОРИЗАЦИЯ</div>
        <v-form @submit.prevent>
          <v-text-field v-model="login" :rules="rulesLogin" label="Логин" />
          <div class="box">
            <div v-if="errorsLogin.length" class="errorBox">
              <span v-for="error in errorsLogin" class="error">{{ error }}<br></span>
            </div>
            <div v-if="!errorsLogin.length">
              <div class="empty"></div>
            </div>
          </div>
          <v-text-field v-model="password" :rules="rulesPassword" label="Пароль" type="password" class="input" />
          <div class="box">
            <div v-if="errorsPassword.length" class="errorBox">
              <span v-for="error in errorsPassword" class="error">{{ error }}<br></span>
            </div>
            <div v-if="!errorsPassword.length">
              <div class="empty"></div>
            </div>
          </div>
          <v-text-field v-model="email" :rules="rulesEmail" label="Элекронная почта" type="text" class="input" />
          <div class="box">
            <div v-if="errorsEmail.length" class="errorBox">
              <span v-for="error in errorsEmail" class="error">{{ error }}<br></span>
            </div>
            <div v-if="!errorsEmail.length">
              <div class="empty"></div>
            </div>
          </div>
          <v-text-field v-model="town" label="Город (необязательно)" type="text" class="input" />
          <v-btn @click="validateForm" type="submit" class="mt-2" block>ВОЙТИ</v-btn>
          <div class="box2">
            <div v-if="errorsAuth.length" class="errorBox">
              <span v-for="error in errorsAuth" class="error">{{ error }}<br></span>
            </div>
            <div v-if="!errorsAuth.length">
              <div class="empty"></div>
            </div>
          </div>
          <v-row align="center" justify="center">
            <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
              <v-card class="mx-auto, mt-5" width="400" :color="color" :variant="variant">
                <v-card-item>
                  <div>
                    <div class="text-h6 mb-1">
                      БЕТА-ТЕСТ
                    </div>
                    <div class="text-caption">Текущий сайт находиться в разработке </div>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'LoginForm',

  components: {
  },
  computed: {
    user() {
      return this.$store.state.user.currentUser
    }
  },
  data: () => ({
    login: '',
    email: '',
    town: '',
    password: '',
    errorsLogin: [],
    errorsPassword: [],
    errorsEmail: [],
    errorsAuth: [],

    // rulesLogin: [
    //   value => {
    //     if (value) {
    //       return true
    //     }

    //     if (value.length < 5) {
    //       return 'Ваш логин должен быть больше 5 символов'
    //     }

    //     return 'Поле не должно быть пустым'
    //   },
    // ],
    // rulesPassword: [
    //   value => {
    //     if (value) {
    //       return true
    //     }

    //     if (value.length < 5) {
    //       return 'Ваш пароль должен быть больше 5 символов'
    //     }

    //     return 'Поле не должно быть пустым'
    //   },
    // ],
  }),
  methods: {
    validateForm() {

      this.errorsEmail = [];
      this.errorsPassword = [];
      this.errorsLogin = [];
      this.errorsAuth = [];

      if (!this.email.includes('@') || this.email.length < 3) {
        this.errorsEmail.push('Неправильный синтаксис электронной почты');
      }

      if (this.password.length < 8) {
        this.errorsPassword.push('Пароль должен быть больше 8 символов');
      }

      if (this.login.length < 5) {
        this.errorsLogin.push('Логин должен быть больше 5 символов');
      }

      const userData = {
        login: this.login,
        password: this.password,
        email: this.email
      }

      this.$store.commit('LOGIN', userData)

      if (this.errorsLogin.length === 0 && this.errorsPassword.length === 0 && this.errorsEmail.length === 0) {
        if (this.$store.state.user.currentUser === '') {
          this.errorsAuth.push('Аккаунт не существует');
        }
        else {
          this.$router.push('/profile');
        }
      }
    }
  }
}
</script>

<script setup>
import { ref } from 'vue'

const variants = ['outlined']
const color = ref('indigo-darken-3')
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 50px;
}

.input {
  margin-top: 6px;
}

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

.errorAuth {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  font-size: 20px;
}

.card {
  height: 630px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  flex-direction: column;
  box-shadow: 1px 1px 10px rgb(189, 189, 189);
  margin-top: 60px;
}

.tittle {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  color: #283593;
  font-weight: 500;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgb(214, 214, 214) rgb(255, 255, 255);
}

.error {
  color: rgb(124, 28, 28);
  font-size: 12px;
}

.empty {
  height: 24px;
}

.box {
  margin-top: -15px;
}

.box2 {
  margin-top: 10px;
}

.submit {
  margin-bottom: 10px;
}
</style>
  