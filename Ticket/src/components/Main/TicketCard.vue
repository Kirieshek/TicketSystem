<template>
    <div>
        <div class="hide">
            <v-card variant="outlined" class="mx-auto margin card-di" :color="ticket.priority == 'ВЫСОКИЙ' ? 'red' : ticket.priority == 'СРЕДНИЙ' ? 'orange' : 'green'">
            {{ ticket.priority }}
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">
                        {{ ticket.from }}
                    </div>
                    <div class="text-h6 mb-1 ticket-content">
                        {{ ticket.summary }}
                    </div>
                    <div class="text-caption ticket-content">
                        {{ ticket.content }}
                    </div>
                </div>
            </v-card-item>

            <v-dialog max-width="500">

                <template v-slot:activator="{ props: activatorProps }">

                    <div class="flex-mg">
                        <v-btn v-bind="activatorProps"
                            :color="ticket.priority == 'ВЫСОКИЙ' ? 'red' : ticket.priority == 'СРЕДНИЙ' ? 'orange' : 'green'"
                            text="ПОДРОБНЕЕ" variant="flat" class="btn-white"></v-btn>

                        <v-card-actions>
                            <v-btn class="mx-auto" @click="deleteTicket(ticket)">
                                УДАЛИТЬ
                            </v-btn>
                        </v-card-actions>
                    </div>

                </template>

                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-card-text>
                            <b> <span class="bigText">{{ ticket.summary }}</span></b>
                        </v-card-text>
                        <v-card-text>
                            <i>{{ ticket.content }}</i>
                        </v-card-text>
                        <br>
                        <br>
                        <v-card-text>
                            <span class="smallText">{{ ticket.from }}</span>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text="ЗАКРЫТЬ" @click="isActive.value = false"></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-card>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ticket: Object
    },
    methods: {
        deleteTicket(id) {
            this.$store.commit("DELETE_TICKET", id);
        }
    }
}
</script>

<style>
.margin {
    padding-top: 10px
}

.ticket-content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.flex-mg {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-di {
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
}

.smallText {
    font-size: 10px;
}

.bigText {
    font-size: 25px;
}

.hide{
    width: 350px;
}
</style>