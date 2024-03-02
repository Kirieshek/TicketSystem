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
          <v-row class="mt-2">
            <v-sheet width="300" class="mx-auto">
              <v-form fast-fail @submit.prevent class="mt-10">
                <v-text-field v-model="summary" label="Тема тикета"></v-text-field>
                <v-textarea v-model="content" label="Описание проблемы"></v-textarea>
                <v-select v-model="priority" label="Приоритет" :items="['НИЗКИЙ', 'СРЕДНИЙ', 'ВЫСОКИЙ']" />
                <v-btn @click="addTicket" type="submit" block class="mt-2">СОЗДАТЬ</v-btn>
              </v-form>
            </v-sheet>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container fluid>
          <v-row class="ticket-pos mt-10">
            <div v-for="item in ticket">
              <TicketCard :ticket="item" v-show="item.from == user.fullname"/>
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
    addTicket() {
      this.$store.commit("ADD_TICKET", {
        summary: this.summary,
        content: this.content,
        priority: this.priority,
        from: this.user.fullname,
        status: 'UNDONE',
        create_date: new Date().toLocaleString(),
      });

      this.summary = '';
      this.content = '';
      this.priority = '';
    },
  }
}
</script>

<style>
.ticket-pos {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
}

.ticket {
  width: 550px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 1px 1px 10px rgb(124, 124, 124);
  border-radius: 20px;
  margin: 10px 0 10px 0;
  padding: 10px;
  margin-top: 50px;
}

.hr {
  width: 100%;
}

.textB {
  font-size: 20px;
}
</style>