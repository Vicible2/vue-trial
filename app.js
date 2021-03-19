const app = Vue.createApp({
    //routes component data, functions, ...
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            genre: 'Thriller',
            age: 45
        } //return object
    }, //shorthand for function inside of object : name(haakjes) {curly brackets}
    methods: {
        changeTitle(title) {
            //this.title =  'Words of Radiance'
            this.title = title
        },
        resetTitle() {
            this.title = 'The Final Empire'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
    }
})

app.mount('#app')