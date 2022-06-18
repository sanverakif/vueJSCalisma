app = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {

    },
    beforeCreate() {
        console.log("beforecreate çalıştı")
    },
    created() {
        console.log("created çalıştı")
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
})