const myList = new Vue ({

    // il mio selettore
    el: "#my_space",
    // i miei dati
    data: {

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
            }
        ]
    },
    // i miei metodi
    methods : {


    }
}); 