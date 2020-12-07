
let app = {
    data() {
        return {
            message: "Hello my little dolly",

        }
    },
    methods: {
        reverse(){
           this.message = this.message.split('').reverse().join('');
        }
    }

}
Vue.createApp(app).mount("#app")

