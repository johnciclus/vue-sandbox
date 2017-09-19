(function() {
    "use strict";
    const VirtualList = require('vue-virtual-scroll-list');

    Vue.component("virtual-list", VirtualList);

    function createArray(n){
        var index = 0;
        return new Array(n).map(function(item){
            return {"id": index++, "value": Math.random()}
        })
    }

    new Vue({
        el: "#root",
        data: {
            items: new Array(10000)
        },
        methods: {

        },
        components: {

        },
        created: function(){

        },
        "mounted": function(){

        }
    });

}());