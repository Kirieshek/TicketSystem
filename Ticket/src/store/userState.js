export const userState = {
    state: { // data
       users: [
        {id: 0, fullname: "Исаев Кирилл Валерьевич", login: "emibanso", password: "user1234", email: "xxhappyedxxy@gmail.com", city: "Краснодар", role: "Администратор"},
        {id: 1, fullname: "Анатосян Наталья Викторовна", login: "cheater12345", password: "77777777", email: "natasha@mail.ru", city: "Обосранск", role: "Пользователь"},
        {id: 2, fullname: "Барак Хуссейн Обама", login: "blackman", password: "iamnegrochek", email: "presidentofworld@gmail.com", city: "Вашингтон", role: "Пользователь"},
        {id: 3, fullname: "Иван Иванов Иванович", login: "IVANchel", password: "ivanchelo", email: "peperone@mail.ru", city: "Иваново", role: "Пользователь"},
        {id: 4, fullname: "Бета-Тестер", login: "user@user", password: "user@user", email: "user@user", city: "Неизвестно", role: "Администратор"},
       ],
       currentUser: '',
    },
    mutations: { // methods
        LOGIN(state, payload) {
           state.users.forEach((user) => {
                if(user.login == payload.login && user.password == payload.password){
                    state.currentUser = user;
                }
            })
        },
    },
}