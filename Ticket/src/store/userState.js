import api from './api'

export const userState = {
    state: { // data
    //    users: [
    //     {id: 0, full_name: "Бета-Тестер", login: "user@user", password: "user@user", email: "user@user", city: "Неизвестно", type: "Администратор"},
    //     {id: 1, full_name: "Исаев Кирилл Валерьевич", login: "emibanso", password: "Tmk131415tmk", email: "isaevkirill0@gmail.com", city: "Краснодар", type: "Администратор"},
    //     {id: 2, full_name: "Анатосян Наталья Викторовна", login: "cheater12345", password: "77777777", email: "natasha@mail.ru", city: "Обосранск", type: "Пользователь"},
    //     {id: 3, full_name: "Барак Хуссейн Обама", login: "blackman", password: "iamnegrochek", email: "presidentofworld@rambler.ru", city: "Вашингтон", type: "Пользователь"},
    //     {id: 4, full_name: "Иван Иванов Иванович", login: "IVANchel", password: "ivanchelo", email: "ivan@mail.ru", city: "Иваново", type: "Пользователь"},
    //     {id: 5, full_name: "Бета-Тестер", login: "user@user1", password: "user@user1", email: "user@user1", city: "Неизвестно", type: "Пользователь"},
    //    ],
       currentUser: JSON.parse(localStorage.getItem('user')) ?? '',
    },
    mutations: { // methods
        LOGIN(state, payload) {
            //    state.users.forEach((user) => {
            //         if(user.login == payload.login && user.password == payload.password && user.email == payload.email){
            //             state.currentUser = user;
            //         }
            //     })

            state.currentUser = payload
            localStorage.setItem('user', JSON.stringify(state.currentUser))
        },
        LogOut(state) {
            state.currentUser = '';
            localStorage.removeItem('user')
        },
        EDIT_PROFILE(state, payload) {
                if (state.currentUser.id == payload.userData.id) {
                    state.currentUser.email = payload.userData.email;
                    state.currentUser.password = payload.userData.password;
                    state.currentUser.full_name = payload.userData.full_name;
                }
            
        },
    },
    actions: {
        async login({ commit }, payload) {
            try {
                const res = await api.post("login", payload);
                // console.log(res);
                commit('LOGIN', res.data.user)
                return res.data.user
            } catch (error) {
                console.log(error)
            }
        },
        async setProfile({ commit }, {id}) {
            try {
                const res = await api.get("user/" + id);
                commit('LOGIN', res.data.user)
                return res.data.user    
            } catch (error) {
                console.log(error)
            }
        },  
        async updateProfile({ commit }, { id, userData }) {
            try {
                const res = await api.put("user/" + id, userData);
                commit('EDIT_PROFILE', { id: id,userData: userData })
                console.log(userData)
                return res.data.user    
            } catch (error) {
                console.log(error)
            }
        },  
    }
} 