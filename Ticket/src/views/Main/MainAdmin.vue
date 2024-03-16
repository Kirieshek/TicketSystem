<template>
  <v-container>
    <v-row justify="center">
      <v-tabs v-model="tab" color="indigo-darken-3" align-tabs="center">
        <v-tab :value="1">ОТКРЫТЫЕ</v-tab>
        <v-tab :value="2">РЕШЁННЫЕ</v-tab>
      </v-tabs>
    </v-row>
    <v-window v-model="tab">
      <v-window-item :value="1">
        <v-container class="ticketloc">
          <v-row class="ticket-pos mt-10">
            <div class="hide" v-if="loading" v-for="item in 20">
              <v-skeleton-loader
              class="border skeleton"  
              width="390" 
              height="260"
              type="article, actions">
            </v-skeleton-loader>
            </div>
            <div v-if="!loading" v-for="item in tickets" v-show="item.status == 'Created'">
              <TicketCard :ticket="item" />
            </div>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container class="ticketloc">
          <v-row class="ticket-pos mt-10">
            <div class="hide" v-if="loading" v-for="item in 20">
              <v-skeleton-loader
              class="border skeleton"  
              width="390" 
              height="260"
              type="article, actions">
            </v-skeleton-loader>
            </div>
            <div v-if="!loading" v-for="item in tickets" v-show="item.status == 'Done'">
              <TicketCard :ticket="item" />
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
  name: 'MainAdmin',

  components: {
    TicketCard
  },
  async mounted() {
    this.loading = true
    const res = await this.$store.dispatch('getAllTickets')
    if (res){
      setTimeout(() => this.loading = false, 2000);
    }
  },
  data: () => ({
    tab: 1,
    loading: false,
  }),
  computed: {
    tickets() {
      return this.$store.state.ticket.tickets.toReversed()
    },
  },
  methods: {

  }
}
</script>

<style scoped>
.ticket-pos {
  display: flex;
  align-items: center;
  justify-content: center;
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

.hr {
  width: 100%;
}

.hide {
    width: 420px;
    display: flex;
    flex-direction: column;
}

.hide{ 
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

.textB {
  font-size: 20px;
}
</style>