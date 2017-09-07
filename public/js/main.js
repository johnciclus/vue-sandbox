(function() {
    "use strict";
    const Coupon = require("../components/ui-coupon.vue");

    Vue.component("ui-coupon", Coupon)
    /*Vue.mixin({
        data: function () {
            return {
                eventHub: eventHub
            }
        }
    });*/

    new Vue({
        el: "#root",
        data: {
            visible: true
        },
        methods: {
            showModal: function(data){
                console.log("Event Show Modal:"+ data );
            }
        },
        "mounted": function(){
            this.$on('showModal', function(data) {
                console.log(data);
                this.$children.map(function(instance){
                    if(instance.$el.id == data.id){
                        instance.isVisible = true;
                        console.log(instance)
                    }
                });
            });
            console.log("app mounted");

        }
    });

}());