const app = Vue.createApp({
    data() {
        return {
            myClass: "text-green",
            counter: 0,
        }
    },
    created() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    },
    computed: {
        boxClass() {
            return {
                "text-red": this.counter > 3,
                "text-green": this.counter == 0,
                "text-orange": this.counter == 1,
                "text-gray": this.counter == 2
            }
        }
    }
}).mount("#app");