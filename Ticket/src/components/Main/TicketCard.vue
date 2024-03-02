<template>
    <div>
        <v-card variant="outlined" class="mx-auto margin" max-width="344" :color="ticket.priority == 'ВЫСОКИЙ' ? 'red' : ticket.priority == 'СРЕДНИЙ' ? 'orange' : 'green'">
            {{ ticket.priority }}
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">
                        {{ ticket.from }}
                    </div>
                    <div class="text-h6 mb-1">
                        {{ ticket.summary }}
                    </div>
                    <div class="text-caption ticket-content">
                        {{ ticket.content }}
                    </div>
                </div>
            </v-card-item>

            <v-card-actions>
                <v-btn class="mx-auto" @click="deleteTicket(ticket)">
                    УДАЛИТЬ
                </v-btn>
            </v-card-actions>
        </v-card>
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
    .margin{
        padding-top: 10px
    }

    .ticket-content{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>