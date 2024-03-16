<template>
  <!-- <div class="container">
    <div class="nothing">
    
    </div>
    <p>{{ this.$store.state.counter.count }}</p>


    <div class="btn">
      <button @click="increment">Добавить +1</button>
      <button @click="setNewCount">Сделать 999</button> 
    </div>
  </div> -->

  <MainAdmin v-if="user.user_type == 'admin'" />
  <MainUser v-if="user.user_type == 'user'" />
</template>
  
<script>
  import MainAdmin from './MainAdmin.vue'
  import MainUser from './MainUser.vue'
  
  export default {
    name: 'Main',
  
    components: {
      MainAdmin,
      MainUser
    },

    computed: {
      user() {
        return this.$store.state.user.currentUser
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      setNewCount() {
        this.$store.commit('setNewCount', 999)
      }
    },
    mounted() {
      if (this.user == ''){
        this.$router.push('/login')
      }
    }
  }
</script>
  
<style scoped>
  .nothing {
    margin-top: 250px;
  }

  button{
    height: 50px;
    width: 200px;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 6px black;
    display: flex;
    align-items: center;
    justify-content: center;    
  }

  .btn{
    width: 100%;
    display: flex;
    justify-content: space-around ;
  }
  
  .container{
    width: 100%;
    height: 500px;
    justify-content: center;
    display: flex;  
    flex-direction: column;
  }
</style>