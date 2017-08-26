(function() {
    "use strict";

    const Message = require("../components/card-message.vue");

    Vue.component('card-message', Message);

    new Vue({
        el: "#root"
    });

}());