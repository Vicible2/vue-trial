const app = Vue.createApp({
    //routes component data, functions, ...
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        } //return object
    } //shorthand for function inside of object : name(haakjes) {curly brackets}
})

app.mount('#app')