<template>
  <v-container>
    <v-row justify="center">
      <v-tabs v-model="tab" color="indigo-darken-3" align-tabs="center">
        <v-tab :value="1">ФОРМА</v-tab>
        <v-tab :value="2">ИСТОРИЯ</v-tab>
      </v-tabs>
    </v-row>
    <v-window v-model="tab">
      <v-window-item :value="1">
        <v-container fluid>
          <!-- <v-row class="mt-2">
            <v-sheet width="300" class="mx-auto">
              <v-form fast-fail @submit.prevent class="mt-10">
                <v-text-field v-model="summary" label="Тема тикета"></v-text-field>
                <v-textarea v-model="content" label="Описание проблемы"></v-textarea>
                <v-select v-model="priority" label="Приоритет" :items="['НИЗКИЙ', 'СРЕДНИЙ', 'ВЫСОКИЙ']" />
                <v-btn @click="addTicket" type="submit" block class="mt-2">СОЗДАТЬ</v-btn>
              </v-form>
            </v-sheet>
          </v-row> -->

          <v-sheet width="400" class="mx-auto mt-10">
            <v-form @submit.prevent>
              <v-text-field v-model="summary" label="Тема тикета" class="mt-2"/>
              <div class="box">
                <div v-if="errorsSummary.length" class="errorBox">
                  <span v-for="error in errorsSummary" class="error">{{ error }}<br></span>
                </div>
                <div v-if="!errorsSummary.length">
                  <div class="empty"></div>
                </div>
              </div>

              <v-textarea v-model="content" label="Описание проблемы" class="mt-2"/>
              <div class="box">
                <div v-if="errorsContent.length" class="errorBox">
                  <span v-for="error in errorsContent" class="error">{{ error }}<br></span>
                </div>
                <div v-if="!errorsContent.length">
                  <div class="empty"></div>
                </div>
              </div>

              <v-select v-model="priority" label="Описание проблемы" :items="['НИЗКИЙ', 'СРЕДНИЙ', 'ВЫСОКИЙ']" class="mt-2"/>
              <div class="box">
                <div v-if="errorsPriority.length" class="errorBox">
                  <span v-for="error in errorsPriority" class="error">{{ error }}<br></span>
                </div>
                <div v-if="!errorsPriority.length">
                  <div class="empty"></div>
                </div>
              </div>

              <v-btn @click="validateForm" type="submit" class="mt-2" block>СОЗДАТЬ</v-btn>

            </v-form>
          </v-sheet>


        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container class="ticketloc">
          <v-row class="ticket-pos mt-10">
            <div v-for="item in ticket">
              <TicketCard :ticket="item" v-show="item.from == user.full_name" />
              <!-- <div class="tickets">
                <div class="ticket">
                <p><b class="textB">Тема:</b> {{ item.summary }}</p>
                <p><b class="textB">Содержание:</b> {{ item.content }}</p>
                <p><b class="textB">Важность:</b> <span
                    :style="{ 'color': item.priority == 'ВЫСОКИЙ' ? 'red' : item.priority == 'СРЕДНИЙ' ? 'orange' : 'grey' }">{{ item.priority }}</span>
                </p>
                <p><b class="textB">Пользователь:</b> {{ item.from }}</p>
                <p><b class="textB">Статус:</b> <span :style="{ 'color': item.status == 'Решено' ? 'green' : 'red' }">{{
                  item.status }}</span></p>
                <p><b class="textB">Дата создания:</b> {{ item.create_date }}</p>
                <hr class="hr" v-if="item.status == 'Решено'">
                <p v-if="item.status == 'Решено'"><b class="textB">Ответ:</b> {{ item.answer }}</p>
                <p v-if="item.status == 'Решено'"><b class="textB">Дата ответа:</b> {{ item.update_date }}</p>
              </div>
                <v-btn @click="deleteTicket(item)" color="red mt-1">Удалить</v-btn>
              </div> -->
            </div>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>

  </v-container>
</template>

<script>
import TicketCard from '../../components/Main/TicketCard.vue'

export default {
  name: 'MainUser',

  components: {
    TicketCard
  },

  data: () => ({
    tab: 1,
    summary: '',
    content: '',
    priority: '',
    errorsSummary: [],
    errorsContent: [],
    errorsPriority: [],
  }),
  computed: {
    ticket() {
      return this.$store.state.ticket.tickets
    },
    user() {
      return this.$store.state.user.currentUser
    }
  },
  methods: {
      validateForm() {

        this.errorsSummary = [];
        this.errorsContent = [];
        this.errorsPriority = [];

        // ('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0' )

        if (this.summary.includes('1')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('2')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('3')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('4')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('5')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('6')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('7')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('8')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('9')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('0')) {
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.length < 5) {
          this.errorsSummary.push('Название должно быть больше 5 символов');
        }

        if (this.content.length < 20) {
          this.errorsContent.push('Опишите подробнее');
        }

        if (this.priority.length == 0) {
          this.errorsPriority.push('Выберите значимость вашей проблемы');
        }

        if (this.errorsSummary.length === 0 && this.errorsContent.length === 0 && this.errorsPriority.length === 0) {
          this.$store.commit("ADD_TICKET", {
            summary: this.summary,
            content: this.content,
            priority: this.priority,
            from: this.user.fullname,
            status: 'Не решено',
            create_date: new Date().toLocaleString(),
          });

          this.summary = '';
          this.content = '';
          this.priority = '';
        }
      }
    },
  }
</script>

<style scoped>
.ticket-pos {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hr {
  width: 100%;
}

.textB {
  font-size: 20px;
}

.error {
  color: rgb(124, 28, 28);
  font-size: 12px;
  margin-bottom: 10px;
}

.empty {
  height: 24px;
}

.box {
  margin-top: -15px;
}
</style>