export const userState = {
    state: { // data
       users: [
        {id: 0, fullname: "Бета-Тестер", login: "user@user", password: "user@user", email: "user@user", city: "Неизвестно", role: "Администратор"},
        {id: 1, fullname: "Исаев Кирилл Валерьевич", login: "emibanso", password: "Tmk131415tmk", email: "isaevkirill0@gmail.com", city: "Краснодар", role: "Администратор"},
        {id: 2, fullname: "Анатосян Наталья Викторовна", login: "cheater12345", password: "77777777", email: "natasha@mail.ru", city: "Обосранск", role: "Пользователь"},
        {id: 3, fullname: "Барак Хуссейн Обама", login: "blackman", password: "iamnegrochek", email: "presidentofworld@rambler.ru", city: "Вашингтон", role: "Пользователь"},
        {id: 4, fullname: "Иван Иванов Иванович", login: "IVANchel", password: "ivanchelo", email: "ivan@mail.ru", city: "Иваново", role: "Пользователь"},
       ],
       currentUser: JSON.parse(localStorage.getItem('user')) ?? '',
    },
    mutations: { // methods
        LOGIN(state, payload) {
           state.users.forEach((user) => {
                if(user.login == payload.login && user.password == payload.password && user.email == payload.email){
                    state.currentUser = user;
                }
            })
            localStorage.setItem('user', JSON.stringify(state.currentUser))
        },
        LogOut(state) {
            state.currentUser = '';
            localStorage.removeItem('user')
        },
    },
}