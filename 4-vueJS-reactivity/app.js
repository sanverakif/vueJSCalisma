app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
            itemList: [],
        }
    },
    methods: {
        addItem() {
            this.itemList.push(new Date().getTime())
        }
    },
    computed: {
        getResult() {
            console.log("Counter1 Çalıştı..");
            return this.counter > 0 ?
                "Pozitif" :
                this.counter < 0 ?
                "Negatif" :
                "Sıfır";
        },
        getResult2() {
            console.log("Counter2 Çalıştı..");
            return this.counter2 > 0 ?
                "Pozitif" :
                this.counter2 < 0 ?
                "Negatif" :
                "Sıfır";
        },
    },
    watch: {
        counter(newValue, oldValue) {
            console.log("counter watch çalıştı?", newValue, oldValue)
        },
        getResult(newValue, oldValue) {
            console.log(`Watch : Result ${oldValue} => ${newValue}`)
        },
        //array referans tiplidir, watcherler değer tipleri veya objeyi kontrol ederler
        itemList: {
            deep: true,
            handler(item) {
                console.log("itemList", item)
            }
        },
        // itemList(itemList) {
        //     console.log("itemList", itemList)
        // },
    }
});

app.mount("#app")