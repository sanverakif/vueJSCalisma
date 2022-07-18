const app = Vue.createApp({
    data() {
        return {
            style: {
                backgroundColor: false,
                fontColor: false,
                borderColor: false,
                borderRadius: false,
                fontItalic: false
            }
        }
    },
    methods: {},
    computed: {
        containerProperties() {
            return {
                backgroundColor: this.style.backgroundColor,
                fontColor: this.style.fontColor,
                borderColor: this.style.borderColor,
                borderRadius: this.style.borderRadius,
                fontItalic: this.style.fontItalic,
            }
        }
    }
}).mount("#app")