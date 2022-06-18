app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
            list: []
        }
    },
    methods: {
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
    beforeCreate() {
        console.log("beforecreate çalıştı")
    },
    created() {
        console.log("created çalıştı");
        setTimeout(() => {
            this.list = [1, 2, 3, 4, 5, 6]
        }, 2000);
    },
    beforeMount() {
        console.log("beforemount çalıştı")
    },
    mounted() {
        console.log("mounted çalıştı")
    },
    beforeUpdate() {
        console.log("beforeupdate çalıştı")
    },
    updated() {
        console.log("updated çalıştı")
    },
    beforeUnmount() {
        console.log("beforeunmount çalıştı")
    },
    unmounted() {
        console.log("unmounted çalıştı")
    },
});

app.mount("#app")