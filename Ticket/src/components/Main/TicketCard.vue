<template>
    <div>
        <div class="hide">
            <v-card variant="outlined" class="mx-auto margin card-di"
                :color="ticket.priority == 'ВЫСОКИЙ' ? 'red' : ticket.priority == 'СРЕДНИЙ' ? 'rgb(255, 175, 25)' : 'green'">
                {{ ticket.priority }}
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1 ">
                            {{ ticket.from }}
                        </div>
                        <div class="text-h6 mb-1 ticket-content">
                            <span class="ticket-UP">{{ ticket.summary }}</span>
                        </div>
                        <div class="text-caption ticket-content">
                            {{ ticket.content }}
                        </div>
                        <br>
                        <div class="text-caption ticket-content2">
                            {{ localeDate }}
                        </div>
                    </div>

                    <div class="flex-mg mt-2">
                        <v-btn
                            :color="ticket.priority == 'ВЫСОКИЙ' ? 'red' : ticket.priority == 'СРЕДНИЙ' ? 'rgb(255, 175, 25)' : 'green'"
                            @click="dialog = true" class="btn-white">ПОДРОБНЕЕ
                        </v-btn>

                        <v-card-actions>
                            <v-btn class="mx-auto" @click="deleteTicket(ticket)">
                                УДАЛИТЬ
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card-item>

                <!-- <v-dialog max-width="500" v-model="dialog">

                    <template>
                        <v-card>
                            <v-card-text>
                                <b> <span class="bigText ticket-UP">{{ ticket.summary }}</span></b>
                            </v-card-text>
                            <v-card-text>
                                <i>{{ ticket.content }}</i>
                            </v-card-text>

                            <br>
                            <br>

                            <v-card-actions>
                                <v-card-text>
                                    <span class="smallText">{{ ticket.from }}</span>
                                </v-card-text>

                                <v-btn v-model="dialog2" :color="'green'" class="btn-white ml-2">ОТВЕТИТЬ
                                </v-btn>


                                <v-btn text="ЗАКРЫТЬ" @click="dialog = false" class="button-red"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
</v-dialog> -->
                <!-- <v-dialog v-model="dialog2" max-width="340">

                    <template>
                        <v-card prepend-icon="mdi-bullseye-arrow"
                            text="Pass any valid querySelector to the activator prop to bind the dialog to the target element."
                            title="Target Activator">
                            <template v-slot:actions>
                                <v-btn class="ml-auto" text="Close" @click="dialog2 = false"></v-btn>
                            </template> 
                        </v-card>
                    </template>
                </v-dialog> -->
            </v-card>
        </div>
    </div>

    <template>
        <div class="pa-4 text-center">
            <v-dialog v-model="dialog" max-width="480">
                <v-card>
                    <v-card-text>
                        <b> <span class="bigText ticket-UP">{{ ticket.summary }}</span></b>
                    </v-card-text>
                    <v-card-text>
                        <i>{{ ticket.content }}</i>
                    </v-card-text>
                    <v-card-text v-show="ticket.status == 'Done'">
                        ОТВЕТ:
                    </v-card-text>
                    <v-card-text class="ticket-UP2" v-show="ticket.status == 'Done'">
                            {{ ticket.answ }}
                    </v-card-text>
                    <br>
                    <v-card-actions>
                        <v-card-text>
                            <span class="smallText">{{ ticket.from }}</span>
                        </v-card-text>
                        <v-btn v-show="this.$store.state.user.currentUser.user_type == 'admin' && ticket.status == 'Created'" v-model="dialog2"
                            :color="'green'" class="btn-white ml-2" @click="dialog2 = true, dialog = false">ОТВЕТИТЬ
                        </v-btn>
                        <v-btn text="ЗАКРЫТЬ" @click="dialog = false" class="button-red"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialog2" max-width="480">
                <v-card>
                    <v-card-text>
                        <b> <span class="bigText ticket-UP">ОТВЕТ</span></b>
                    </v-card-text>
                    <v-textarea v-model="answ" label="Описание проблемы" class="mt-3 textareap"/>
                    <div class="box">
                        <div v-if="errorsContent.length" class="errorBox">
                            <span v-for="error in errorsContent" class="error">{{ error }}<br></span>
                        </div>
                        <div v-if="!errorsContent.length">
                            <div class="empty"></div>
                        </div>
                    </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="ОТПРАВИТЬ" variant="text" @click="validateForm()" class="button-red"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </template>
</template>


<script>
export default {
    data() {
        return {
            dialog: false,
            dialog2: false,
            errorsContent: [],
            answ: '',
        }
    },
    props: {
        ticket: Object
    },
    methods: {
        deleteTicket() {
            // this.$store.commit("DELETE_TICKET", { id: this.ticket.id });
            this.$store.dispatch('deleteTicket', {id: this.ticket.id})
        },
        validateForm() {
            this.errorsContent = []

            if (this.answ.length < 10) {
                this.errorsContent.push('Дайте понятный ответ');
            }

            const payload = {
                answ: this.answ,
                status: 'Done',
                id: this.ticket.id
            }

            if (this.errorsContent.length === 0) {
                // this.$store.commit('REPLY_TICKET', payload, { id: this.ticket.id })
                this.$store.dispatch('updateTicket', {id: this.ticket.id, ticketData: payload})
                this.dialog2 = false
            }

        }
    },
    computed: {
        localeDate() {
            return (new Date(this.ticket.create_date)).toLocaleString() 
    },
}
}
</script>

<style scoped>
.margin {
    padding-top: 10px
}       

.ticket-content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ticket-content2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
}

.ticket-content3 {
    color: #000;    
    font-weight: 600;
}

.flex-mg {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-di {
    width: 390px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 1px 1px 5px rgb(192, 192, 192);
}

.smallText {
    font-size: 10px;
    color: gray;
}

.bigText {
    font-size: 25px;
}

.hide {
    width: 420px;
}

.button-red {
    color: rgb(124, 28, 28);
}

.ticket-UP {
    text-transform: uppercase;
}

.ticket-UP2 {
    font-weight: 600;
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
    text-align: center;
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
</style>