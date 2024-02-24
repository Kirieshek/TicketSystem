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
          <v-row>
              <v-sheet width="300" class="mx-auto">
                <v-form fast-fail @submit.prevent class="mt-10">
                  <v-text-field v-model="summary" label="Тема тикета"></v-text-field>
                  <v-textarea v-model="content" label="Описание проблемы"></v-textarea>
                  <v-select
                    v-model="priority"
                    label="Приоритет"
                    :items="['НИЗКИЙ', 'СРЕДНИЙ', 'ВЫСОКИЙ']"
                  />
                  <v-btn @click="addTicket" type="submit" block class="mt-2">СОЗДАТЬ</v-btn>
                </v-form>
              </v-sheet>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container fluid>
          <v-row>

          </v-row>
        </v-container>
      </v-window-item>
    </v-window>

  </v-container>
</template>
  
<script>

export default {
  name: 'MainUser',

  components: {
  },

  data: () => ({
    tab: 1,
    summary: '',
    content: '',
    priority: '',
  }),
}
</script>
  