(function() {
    "use strict";
    const Coupon = require("../components/ui-coupon.vue");

    Vue.component("ui-coupon", Coupon);
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

    new Vue({
        el: "#root",
        data: {
            visible: true,
            couponApplied: false
        },
        methods: {
            showModal: function(data){
                console.log("Event Show Modal:"+ data );
            },
            onCouponApplied: function(){
                this.couponApplied = true;
            }
        },
        created: function(){
            let self = this;
          Event.listen("applied", function(){
              self.couponApplied = true;
              alert("Handling it!");
          });
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