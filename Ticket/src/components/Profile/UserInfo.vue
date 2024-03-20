<template>
  <div class="container">
    <div class="card">
      <div class="cardInfo" v-if="this.user != ''">
        <div class="welcome">
          <div class="tittle">
            ВАШ ПРОФИЛЬ
          </div>
          <div class="info">
            Здесь всё о вас
          </div>
        </div>
        <div class="avatar">
          <div class="photo"></div>
        </div>
        <div class="nickname">
          <div class="full">
            <div class="bigText">
              ФИО:
            </div>
            <div class="smallText">
              {{ this.user.full_name }}
            </div>
          </div>
          <div class="short">
            <div class="bigText">
              Логин:
            </div>
            <div class="smallText">
              {{ this.user.login }}
            </div>
          </div>
        </div>
        <div class="email">
          <div class="bigText">
            Эл. почта:
          </div>
          <div class="smallText">
            {{ this.user.email }}
          </div>
        </div>
        <!-- <div class="city">
          <div class="bigText">
            Город:
          </div>
          <div class="smallText">
            {{ this.user.city }}
          </div>
        </div> -->
        <div class="status">
          <div class="bigText">
            Роль:
          </div>
          <div class="smallText">
            {{ this.user.user_type }}
          </div>
        </div>
        <div class="btn-group">
          <button @click="Open" class="btn2">Редактировать</button>
          <button @click="LogOut" class="btn1">Выйти</button>
        </div>
      </div>
      <div v-else class="error">
        ВЫ НЕ АВТОРИЗОВАНЫ
      </div>
    </div>

    <template>
      <div class="pa-4 text-center">
        <v-dialog v-model="dialog" max-width="480">
          <v-card>
            <v-card-text>
              <b> <span class="bigText ticket-UP">РЕДАКТИРОВАНИЕ</span></b>
            </v-card-text>
            <v-form @submit.prevent class="into">
              <v-sheet width="400" class="form">
                <v-text-field v-model="fullname" label="Имя пользователя" />
                <div class="box">
                  <div v-if="errorsName.length" class="errorBox">
                    <span v-for="error in errorsName" class="error">{{ error }}<br></span>
                  </div>
                  <div v-if="!errorsName.length">
                    <div class="empty"></div>
                  </div>
                </div>

                <v-text-field v-model="password" label="Пароль" type="password" class="input" />
                <div class="box">
                  <div v-if="errorsPassword.length" class="errorBox">
                    <span v-for="error in errorsPassword" class="error">{{ error }}<br></span>
                  </div>
                  <div v-if="!errorsPassword.length">
                    <div class="empty"></div>
                  </div>
                </div>

                <v-text-field v-model="email" label="Элекронная почта" type="text" class="input" />
                <div class="box">
                  <div v-if="errorsEmail.length" class="errorBox">
                    <span v-for="error in errorsEmail" class="error">{{ error }}<br></span>
                  </div>
                  <div v-if="!errorsEmail.length">
                    <div class="empty"></div>
                  </div>
                </div>

                <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="ИЗМЕНИТЬ" variant="text" @click="Edit()" class="button-red mt-my"></v-btn>
                    </v-card-actions>
              </v-sheet>


            </v-form>
          </v-card>
        </v-dialog>

      </div>
    </template>






    <div class="plan" v-if="this.user != ''">
      <v-container style="max-width: 500px" class="re">
        <div class="up">
          <v-text-field v-model="newTask" label="Что вам нужно сделать?" class="ior" variant="solo"
            @keydown.enter="create">
            <template v-slot:append-inner>
              <v-fade-transition>
                <v-btn v-show="newTask" icon="mdi-plus-circle" variant="text" @click="create"></v-btn>
              </v-fade-transition>
            </template>
          </v-text-field>
        </div>

        <div class="down">
          <h2 class="text-h4 text-success ps-4 mt-10">
            Задания:&nbsp;
            <v-fade-transition leave-absolute>
              <span :key="`tasks-${tasks.length}`">
                {{ tasks.length }}
              </span>
            </v-fade-transition>
          </h2>

          <v-divider class="mt-4"></v-divider>

          <v-row align="center" class="my-1">
            <strong class="mx-4 text-info-darken-2">
              Осталось: {{ remainingTasks }}
            </strong>

            <v-divider vertical></v-divider>

            <strong class="mx-4 text-success-darken-2">
              Сделано: {{ completedTasks }}
            </strong>

            <v-spacer></v-spacer>

            <v-progress-circular v-model="progress" class="me-2"></v-progress-circular>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <v-card v-if="tasks.length > 0">
            <v-slide-y-transition class="py-0" tag="v-list" group>
              <template v-for="(task, i) in tasks" :key="`${i}-${task.text}`">
                <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

                <v-list-item @click="task.done = !task.done">
                  <template v-slot:prepend>
                    <v-checkbox-btn v-model="task.done" color="grey"></v-checkbox-btn>
                  </template>

                  <v-list-item-title>
                    <span :class="task.done ? 'text-grey' : 'text-primary'">{{ task.text }}</span>
                  </v-list-item-title>

                  <template v-slot:append>
                    <v-expand-x-transition>
                      <v-icon v-if="task.done" color="success">
                        mdi-check
                      </v-icon>
                    </v-expand-x-transition>
                  </template>
                </v-list-item>
              </template>
            </v-slide-y-transition>
          </v-card>
          <div class="box2">
            <div v-if="errorsAuth.length" class="errorBox">
              <span v-for="error in errorsAuth" class="error">{{ error }}<br></span>
            </div>
            <div v-if="!errorsAuth.length">
              <div class="empty"></div>
            </div>
          </div>
        </div>
      </v-container>
    </div>
  </div>

</template>

<script>

export default {
  name: 'UserInfo',

  props: {
    currentUser: Object
  },

  data: () => ({
    tasks: [],
    newTask: null,
    errorsAuth: '',
    dialog: false,
    errorsEmail: '',
    errorsPassword: '',
    errorsName: '',
    email: '',
    password: '',
    fullname: '',
  }),
  computed: {
    user() {
      return this.$store.state.user.currentUser
    },
    completedTasks() {
      return this.tasks.filter(task => task.done).length
    },
    progress() {
      return this.completedTasks / this.tasks.length * 100
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks
    },
  },
  methods: {
    LogOut() {
      this.$store.commit('LogOut');
      this.$router.push('/login');
    },
    create() {
      this.errorsAuth = [];

      if (this.tasks.length < 8) {
        this.tasks.push({
          done: false,
          text: this.newTask,
        })
      }
      else {
        this.errorsAuth.push('Максимум заданий - 8');

        return
      }

      this.newTask = null
    },
    Open() {
      this.dialog = !this.dialog
    },
    Edit() {
      this.errorsEmail = [],
      this.errorsPassword = [],
      this.errorsName = []

      // if (this.answ.length < 10) {
      //     this.errorsContent.push('Дайте понятный ответ');
      // }

      const payload = {
        email: this.email,
        password: this.password,
        full_name: this.fullname,
        id: this.user.id
      }

      // if (this.errorsContent.length === 0) {
      //     // this.$store.commit('REPLY_TICKET', payload, { id: this.ticket.id })
      //     this.$store.dispatch('updateTicket', {id: this.ticket.id, ticketData: payload})
      //     this.dialog2 = false
      // }

      this.$store.dispatch('updateProfile', { id: this.user.id, userData: payload })
      this.dialog = false


    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  max-height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 10px;
}

.into{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.card {
  height: 630px;
  width: 450px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  flex-direction: column;
  box-shadow: 1px 1px 10px rgb(189, 189, 189);
  margin-top: 60px;
}

.error {
  color: rgb(124, 28, 28);
  margin-top: 20px;
  font-size: 12px;
}

.empty {
  height: 24px;
}

.mt-my{
  margin-top: -20px;
}

.box {
  margin-top: -15px;
}

.box2 {
  margin-top: 10px;
  font-size: 12px;
}

.plan {
  height: 630px;
  width: 450px;
  display: flex;
  align-items: center;
  margin-top: 60px;
}

.up {
  position: fixed;
  top: 150px;
}

.down {
  position: fixed;
  top: 190px;
  width: 420px;

}

.ior {
  width: 420px;
}

.bigText {
  font-weight: 600;
  font-size: 18px;
}

.smallText {
  color: gray;
  font-size: 14px;
}

.tittle {
  font-weight: 500;
  font-size: 20px;
  color: #283593;
  font-weight: 500;
  margin-top: 24px;
}

.info {
  color: gray;
  font-weight: 100;
  font-size: 13px;
}

.cardInfo {
  width: 350px;
}

.nickname {
  width: 100%;
  margin-top: 30px;
}

.full {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.short,
.email,
.city,
.status {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.photo {
  height: 200px;
  width: 200px;
  background: url('https://sh-sayanskaya-r81.gosweb.gosuslugi.ru/netcat_files/9/67/Honorary_Members_placeholder_0.jpg');
  background-size: cover;
  border-radius: 40px;
}

.avatar {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-group {
  margin-top: 90px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
}

.btn1 {
  color: rgb(124, 28, 28);
}

.btn2 {
  color: rgb(27, 139, 23);
}

.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  font-size: 20px;
}

.card,
.up,
.down {
  animation: fade-in 1s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>