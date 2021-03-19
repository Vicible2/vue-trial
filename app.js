const app = Vue.createApp({
    //routes component data, functions, ...
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            genre: 'Thriller',
            age: 45,
            x: 0,
            y: 0,
            showBoxes: false,
            books: [
                    {title: 'The Wind', author: 'Patrick Rothfuss', genre: 'Fantasy', img:'assets/book1.png', isFav: true},
                    {title: 'The way of kings', author: 'Brandon Sanderson', genre: 'Fantasy', img:'assets/book2.png', isFav: false},
                    {title: 'The final empire', author: 'Brandon Sanderson', genre: 'Thriller', img:'assets/book3.png', isFav: true},
            ],
            url: 'https://www.games-workshop.com/en-BE/Home'
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

        //Other mouse events
        handleEvent(ev, data) {
            console.log(ev, ev.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove (ev) {
            this.x = ev.offsetX
            this.y = ev.offsetY
        },
        toggleShowBoxes () {
            this.showBoxes = !this.showBoxes
        },
        toggleFav (book) {
            book.isFav = !book.isFav
        }

    },
    computed: {
        filteredBooks () {
            return this.books.filter((book) => book.isFav )
        }
    }
})

app.mount('#app')