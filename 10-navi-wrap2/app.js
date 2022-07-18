const app = Vue.createApp({
    data: () => ({
        dividerPosition: 50
    }),
    methods: {
        handleDragging(e) {
            const percentage = (e.pageX / window.innerWidth) * 100

            if (percentage >= 10 && percentage <= 90) {
                this.dividerPosition = percentage.toFixed(2)
            }
        },
        startDragging() {
            document.addEventListener('mousemove', this.handleDragging)
        },
        endDragging() {
            document.removeEventListener('mousemove', this.handleDragging)
        },
    }
}).mount("#app")