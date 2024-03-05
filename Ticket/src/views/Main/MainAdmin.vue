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
        <v-container class="ticketloc">
          <v-row class="ticket-pos mt-10">
            <div v-for="item in ticket" >
              <TicketCard :ticket="item" v-show="item.status == 'Решено'"/>
            </div>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container class="ticketloc">
          <v-row class="ticket-pos mt-10">
            <div v-for="item in ticket">
              <TicketCard :ticket="item" v-show="item.status == 'Не решено'"/>
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
    
  }
}
</script>

<style>
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
</style>