export const userState = {
    state: { // data
       users: [
        {id: 0, fullname: "Кирилл", login: "quizz", password: "user1234", email: "xxhappyedxxy@gmail.com", role: "admin"},
        {id: 1, fullname: "Арина", login: "cheater12345", password: "77777777", email: "arinochka@mail.ru", role: "user"},
        {id: 2, fullname: "Обама", login: "blackman", password: "iamnegrochek", email: "presidentofworld@gmail.com", role: "user"},
        {id: 3, fullname: "Иван", login: "IVANchel", password: "ivanchelo", email: "peperone@mail.ru", role: "user"},
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