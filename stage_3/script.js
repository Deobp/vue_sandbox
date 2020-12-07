
let app = {
    data() {
        return {
            message: "hello said on " + new Date().toLocaleString(),

        }
    },

}
Vue.createApp(app).mount("#app")

