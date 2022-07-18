const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
            itemList: []
        }
    },
    methods: {
        // getResult() {
        //     console.log("counter çalıştı")
        //     return this.counter > 0 ? "Pozitif" : this.counter < 0 ? "Negatif" : "Sıfır"

        // },
        // getResult2() {
        //     console.log("counter2 çalıştı")
        //     return this.counter2 > 0 ? "Pozitif" : this.counter2 < 0 ? "Negatif" : "Sıfır"
        // },
        addItem() {
            this.itemList.push(new Date().getTime())
        }
    },

    computed: {
        getResult() {
            console.log("counter çalıştı")
            return this.counter > 0 ? "Pozitif" : this.counter < 0 ? "Negatif" : "Sıfır"

        },
        getResult2() {
            console.log("counter2 çalıştı")
            return this.counter2 > 0 ? "Pozitif" : this.counter2 < 0 ? "Negatif" : "Sıfır"
        },
    },
    watch: {
        counter(oldValue, newValue) {
            console.log(`counter: ${newValue} - ${oldValue}`)
        },
        getResult(oldValue, newValue) {
            console.log(`getResult: ${newValue} => ${oldValue}`)
        },

        itemList: {
            deep: true,
            handler(item) {
                console.log("item", item)
            }
        }
        // itemList(itemList) {
        //     console.log("itemlist", itemList)
        // }
    }


});

app.mount("#app");