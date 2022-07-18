const app = Vue.createApp({
    data() {
        return {
            name: "uieuei",
            styles: {
                bgColor: false,
                border: false,
                color: false,
                fontBold: false,
                borderRadius: false,
                fontItalic: false,
            }
        }
    },
    computed: {
        textAreaClass() {
            return {
                bgColor: this.styles.bgColor,
                border: this.styles.border,
                color: this.styles.color,
                fontBold: this.styles.fontBold,
                borderRadius: this.styles.borderRadius,
                fontItalic: this.styles.fontItalic,
            }
        }
    }
}).mount("#app")