const app = Vue.createApp({
    data() {
        return {
            memberList: [{ id: 1, name: "Ahmet Sanver" },
                { id: 2, name: "Suleyman Sanver" },
                { id: 3, name: "Sedat Sanver" },
                { id: 4, name: "Emre Sanver" },
                { id: 5, name: "Akif Sanver" }
            ],
            imgUrl: "https://4.bp.blogspot.com/-BmINtir1prQ/TzGMQi-m5XI/AAAAAAAAC50/pzKReF1XdXg/s1600/at_beyaz.jpg",
            name: "akif emre sanver",
            value: "",

            bgColor: false,
            border: false,
            color: false,
            fontBold: false,
            borderRadius: false,
            fontItalic: false,
        }
    },
    methods: {
        getRandom() {
            return Math.round(Math.random())
        },
        showAlert() {
            alert()
        },
        valueUpdated(text) {
            console.log(text.target.value);
            this.value = text.target.value
        },
        nameUpdated(txt) {
            this.name = txt.target.value;
        },
    },
}).mount("#app")