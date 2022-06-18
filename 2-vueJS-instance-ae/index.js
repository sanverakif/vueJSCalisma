const app = Vue.createApp({
    data() {
        return {
            title: "Akif emre şanver",
            content: "sanver akif",
            hobbies: [1, 2, 3, 4, 5],
            personal: {
                name: "akif",
                surName: "sanver",
                tel: "12345"
            },
            details: '<a href="https://www.google.com">Google a git</a>',
            link: "https://www.google.com",
            coordsX: 0,
            coordsY: 0,
            fullName: "emre"
        }
    },
    methods: {
        updateValue(title) {
            // alert()
            this.title = title || "baslık degisti"
            this.fullName = "degisti"
        },
        updateCoords(e) {
            this.coordsX = e.offsetX
            this.coordsY = e.offsetY
            this.updateValue(`${this.coordsX},${this.coordsY}`)
        },
        updateInput(text, e) {
            console.log(text, e)
            this.fullName = e.target.value
        },
    },
}).mount("#app");