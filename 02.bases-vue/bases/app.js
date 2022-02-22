
const app = Vue.createApp({
    // template: `
    //     <h1>hola Amaia</h1>
    //     <p>Desde app.js</p>
    //     `

    data() {
        return {
            // declaración de propiedades
            // Estas propiedades son reactivas, si éstas cambiaran en la vista de la app también cambiaran
            quote: 'I`m Batman',
            author: 'Bruce Wayne'
        }
    },
    // Métodos como funciones
    methods: {
        //  En changeQuote estoy recibiendo el argumento por defecto que el click emite, por lo que así tengo acceso a todos sus propiedades y métodos 
       changeQuote( event ) {
           console.log('Hola Mundo', event)
           this.author = 'Amaia Casas'
           this.capitalize()
       },
       capitalize() {
           this.quote = this.quote.toUpperCase()
       }
    }
})

app.mount('#myApp')