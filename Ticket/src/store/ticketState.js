export const ticketState = {
    state: { // data
        tickets: JSON.parse(localStorage.getItem('tickets')) ?? [ {}
            // {
            //     id: 0, 
            //     summary: "Я System34 удалил", 
            //     status: "Решено", 
            //     priority: "ВЫСОКИЙ", 
            //     content: "Я дурак", 
            //     from: "Max", 
            //     create_date: "20.12.2024 18:15:23",
            //     update_date: "20.12.2024 18:32:42",
            //     answer: "Удалите VSCode"
            // },
            // {
            //     id: 1, 
            //     summary: " ", 
            //     status: "Не решено", 
            //     priority: "НИЗКИЙ", 
            //     content: " ", 
            //     from: "Arina", 
            //     create_date: " ",
            //     update_date: " ",
            //     answer: " "
            // },
            // {
            //     id: 2, 
            //     summary: " ", 
            //     status: "Решено", 
            //     priority: "СРЕДНИЙ", 
            //     content: " ", 
            //     from: "Miranda", 
            //     create_date: " ",
            //     update_date: " ",
            //     answer: " "
            // },
            // {
            //     id: 3, 
            //     summary: " ", 
            //     status: "Не решено", 
            //     priority: "ВЫСОКИЙ", 
            //     content: "", 
            //     from: "Alex", 
            //     create_date: " ",
            //     update_date: " ",
            //     answer: " "
            // },
            // {
            //     id: 4, 
            //     summary: " ", 
            //     status: "Решено", 
            //     priority: "СРЕДНИЙ", 
            //     content: " ", 
            //     from: "Linda", 
            //     create_date: " ",
            //     update_date: " ",
            //     answer: " "
            // }
            
        ]
    },
    getters: { // computed
  
    },
    mutations: { // methods
        ADD_TICKET(state, payload) {
            let dateID = Date.now()
            let dateCREATE = new Date

            const ticket = {
                id: dateID, 
                summary: payload.summary, 
                status: "Не решено", 
                priority: payload.priority, 
                content: payload.content,
                from: payload.from, 
                create_date: dateCREATE.toLocaleString(),
                update_date: "",
                answ: ""
            }

            state.tickets.unshift(ticket);
            localStorage.setItem("tickets", JSON.stringify(state.tickets));
        },
        DELETE_TICKET(state, payload){
            state.tickets = state.tickets.filter((ticket) => {
                if(ticket.id != payload.id) {
                    return ticket;
                }
            })

            localStorage.setItem("tickets", JSON.stringify(state.tickets));
        },
        REPLY_TICKET(state, payload){
            state.tickets.forEach(ticket => {
                if(ticket.id == payload.id){
                    let date = new Date();

                    let update_date = date.toLocaleString()

                    ticket.answ = payload.answer;
                    ticket.status = payload.status;
                    ticket.update_date = update_date;
                }
            });

            localStorage.setItem("tickets", JSON.stringify(state.tickets)); 
        }
    },
    actions: { // async functions
  
    },
    modules: { // modules

    }
  }