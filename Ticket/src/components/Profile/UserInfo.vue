<template>
  <div class="container">
    <div class="card">
      <div class="cardInfo" v-if="this.user != ''">
        <div class="welcome">
          <div class="tittle">
            ВАШ ПРОФИЛЬ
          </div>
          <div class="info">
            Здесь всё о вас
          </div>
        </div>
        <div class="avatar">
          <div class="photo"></div>
        </div>
        <div class="nickname">
          <div class="full">
            <div class="bigText">
              ФИО:
            </div>
            <div class="smallText">
              {{ this.user.fullname }}
            </div>
          </div>
          <div class="short">
            <div class="bigText">
              Логин:
            </div>
            <div class="smallText">
              {{ this.user.login }}
            </div>
          </div>
        </div>
        <div class="email">
          <div class="bigText">
            Эл. почта:
          </div>
          <div class="smallText">
            {{ this.user.email }}
          </div>
        </div>
        <div class="city">
          <div class="bigText">
            Город:
          </div>
          <div class="smallText">
            {{ this.user.city }}
          </div>
        </div>
        <div class="status">
          <div class="bigText">
            Роль:
          </div>
          <div class="smallText">
            {{ this.user.role }}
          </div>
        </div>
        <div class="btn-group">
          <button  @click="LogOut()">Выйти</button>
        </div>
      </div>
      <div v-else class="error">
        ВЫ НЕ АВТОРИЗОВАНЫ
      </div>
    </div>
  </div>
</template>
  
<script>
  
  export default {
    name: 'UserInfo',
  
    components: {
    },
  
    data: () => ({
      //
    }),
    computed: {
      user() {
        return this.$store.state.user.currentUser
      }
    },
    methods: {
      LogOut() {
        this.$store.state.user.currentUser = ''

        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    max-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
  }

  .card { 
      height: 630px;
      width: 450px;
      display: flex;
      align-items: center;
      border-radius: 25px;
      flex-direction: column;
      box-shadow: 1px 1px 10px rgb(189, 189, 189);
      margin-top: 60px;
    }

    .bigText{
      font-weight: 600;
      font-size: 18px;
    }

    .smallText{
      color: gray;
      font-size: 14px;
    }

    .tittle{
      font-weight: 500;
      font-size: 20px;
      color: #283593;
      font-weight: 500;
      margin-top: 24px;
    }

    .info{
      color: gray;
      font-weight: 100;
      font-size: 13px;
    }

    .cardInfo{
      width: 350px;
    }

    .nickname{
      width: 100%;
      margin-top: 30px;
    }

    .full{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .short, .email, .city, .status{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }

    .photo {
      height: 200px;
      width: 200px;
      background: url('https://sh-sayanskaya-r81.gosweb.gosuslugi.ru/netcat_files/9/67/Honorary_Members_placeholder_0.jpg');
      background-size: cover;
      border-radius: 40px;
    }

    .avatar{
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .btn-group{
      color: rgb(124, 28, 28);
      margin-top: 40px;
      font-size: 14px;
    }
    
    .error{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-weight: 600;
      font-size: 20px;
    }
</style>
  