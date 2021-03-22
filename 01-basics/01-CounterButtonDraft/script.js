import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        counterHanlder() {
            this.count += 1;
        }
    }
}).$mount('#app');
