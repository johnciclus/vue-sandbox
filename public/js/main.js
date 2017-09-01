(function() {
    "use strict";

    const Modal = require("../components/ui-modal.vue");
    const ModalHeader = require("../components/ui-modal-header.vue");
    const ModalContent = require("../components/ui-modal-content.vue");
    const ModalActions = require("../components/ui-modal-actions.vue");
    const Button = require("../components/ui-button.vue");
    const MessageCompact = require("../components/ui-message-compact.vue");
    const Tabs = require("../components/ui-tabs.vue");
    //const eventHub = new Vue();

    Vue.component('ui-modal', Modal);
    Vue.component('ui-modal-header', ModalHeader);
    Vue.component('ui-modal-content', ModalContent);
    Vue.component('ui-modal-actions', ModalActions);
    Vue.component('ui-button', Button);
    Vue.component('ui-message-compact', MessageCompact);
    Vue.component('ui-tabs', Tabs);

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