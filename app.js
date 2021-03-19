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
        }
    }
})

app.mount('#app')