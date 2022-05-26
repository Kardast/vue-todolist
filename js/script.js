const myList = new Vue ({

    // il mio selettore
    el: "#my_space",
    // i miei dati
    data: {
        newTodo: "",
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
            if (this.newTodo !== "") {
                this.todos.push(task);
                this.newTodo = "";
            }
        },
        deleteItem(index){
            this.todos.splice(index,1);
        },
        toggleDone(){
            if (this.done === false) {
                this.done = true;
            } else {
                this.done = false;
            }
            console.log(this.done);
        }
    }
}); 