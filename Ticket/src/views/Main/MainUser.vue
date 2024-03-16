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

          <v-sheet width="400" class="mx-auto mt-my">
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

              <v-btn @click="validateForm" v-if="!loading"  type="submit" class="mt-2" block>СОЗДАТЬ</v-btn>
              <v-btn v-if="loading" type="submit" disabled class="mt-2" block>
              <v-progress-circular
                color="primary"
                indeterminate="disable-shrink"
                size="16"
                width="2"
              ></v-progress-circular>
            </v-btn>
            </v-form>
          </v-sheet>


        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container class="ticketloc">
          <v-row class="ticket-pos mt-10">
            <div class="hide" v-if="loading2" v-for="item in 20">
              <v-skeleton-loader
              class="border skeleton"  
              width="390" 
              height="260"
              type="article, actions">
            </v-skeleton-loader>
            </div>
            <div v-for="item in ticket" v-if="!loading2">
              <TicketCard :ticket="item" v-show="item.from == user.full_name" />
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
  async mounted() {
    this.loading2 = true
    const res = await this.$store.dispatch('getUserTickets', this.user.login)
    if (res){
      setTimeout(() => this.loading2 = false, 2000);
    }
  },
  data: () => ({
    tab: 1,
    summary: '',
    content: '',
    priority: '',
    errorsSummary: [],
    errorsContent: [],
    errorsPriority: [],
    loading: false,
    loading2: false,
  }),
  computed: {
    ticket() {
      return this.$store.state.ticket.tickets.toReversed()
    },
    user() {
      return this.$store.state.user.currentUser
    }
  },
  methods: {
      async validateForm() {
        this.loading = true;

        this.errorsSummary = [];
        this.errorsContent = [];
        this.errorsPriority = [];

        // ('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0' )

        if (this.summary.includes('1')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('2')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('3')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('4')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('5')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('6')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('7')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('8')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('9')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.includes('0')) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название не должно содержать цифры');
        }

        if (this.summary.length < 5) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsSummary.push('Название должно быть больше 5 символов');
        }

        if (this.content.length < 20) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsContent.push('Опишите подробнее');
        }

        if (this.priority.length == 0) {
          setTimeout(() => this.loading = false, 1000);
          this.errorsPriority.push('Выберите значимость вашей проблемы');
        }

        if (this.errorsSummary.length === 0 && this.errorsContent.length === 0 && this.errorsPriority.length === 0) {
          const newTicket = {
            summary: this.summary,
            content: this.content,
            priority: this.priority,
            from: this.user.login,
          }
            let res = await this.$store.dispatch('addTicket', newTicket) 
            if (res){
              setTimeout(() => this.loading = false, 1);
            }
          }

          this.summary = '';
          this.content = '';
          this.priority = '';

          setTimeout(() => this.loading = false, 1);
        }
      }
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

.hide {
    width: 420px;
    display: flex;
    flex-direction: column;
}

.skeleton{
  width: 390px;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 1px 1px 5px rgb(192, 192, 192);
}

.mt-my{
  margin-top: 60px;
}


.v-form, .hide{ 
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