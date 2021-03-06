const myList = new Vue ({

    // il mio selettore
    el: "#my_space",
    // i miei dati
    data: {
        newTodo: "",
        myCss: {
            bg: "background",

        },
        todos : [
            {
                text: "Aprire il recinto alle papere",
                done: true
            },
            {
                text: "Dar da mangiare alle papere",
                done: true
            },
            {
                text: "Riempire le vasche delle papere",
                done: false
            },
            {
                text: "Far colazione",
                done: false
            },
            {
                text: "Iniziare a programmare",
                done: false
            },
        ]
    },
    // i miei metodi
    methods : {

        addItem(){

            const task = {
                text : this.newTodo,
                done : false
            }
            if (this.newTodo.trim() !== "") {
                this.todos.push(task);
                this.newTodo = "";
            }
        },
        deleteItem(index){
            this.todos.splice(index,1);
        },
        toggleDone(item){
            // if (this.todos[index].done === false) {
            //     this.todos[index].done = true;
            // } else {
            //     this.todos[index].done = false;
            // }
            // console.log(this.todos[index].done);

            // alternativa migliore in quanto item è già definito
            if (item.done === false) {
                item.done = true;
            } else {
                item.done = false;
            }
        }
    }
}); 


