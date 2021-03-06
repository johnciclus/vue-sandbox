(function() {
    "use strict";
    const View = require("../components/ui-view.vue");

    Vue.component("ui-view", View);
    /*Vue.mixin({
        data: function () {
            return {
                eventHub: eventHub
            }
        }
    });*/
    window.Event = new class{
        constructor(){
            this.vue = new Vue();
        }

        fire (event, data = null){
            this.vue.$emit(event, data)
        }

        listen (event, callback){
            this.vue.$on(event, callback);
        }
    };

    let vue = new Vue({
        el: "#root",
        data: {
            currentView: "1"
        },
        methods: {
            change: function(){
                console.log("change");
            }
        },
        created: function(){

        },
        "mounted": function(){
            this.$on("changeCurrentView", function(){
                console.log("changeView");
            })
        }
    });

}());