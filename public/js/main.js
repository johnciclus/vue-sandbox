(function() {
    "use strict";
    const VirtualList = require('vue-virtual-scroll-list');
    const DataTable = require("../components/table.vue");

    Vue.component("virtual-list", VirtualList);
    Vue.component("data-table", DataTable);

    function createArray(n){
        var index = 0;
        return new Array(n).map(function(item){
            return {"id": index++, "value": Math.random()}
        })
    }

    new Vue({
        el: "#root",
        data: {
            header: [{"alias": "ID", "value": "id"}, {"alias": "Name", "value": "name"}],
            users: [{"id": "0", "name": "john"}],
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