(function() {
    "use strict";
    const VirtualList = require('vue-virtual-scroll-list');
    const DataTable = require("../components/table.vue");

    Vue.component("virtual-list", VirtualList);
    Vue.component("data-table", DataTable);

    var array = [];
    for (var i=0; i<10000; i++){
        array.push({id: i, name: Math.random()})
    }

    new Vue({
        el: "#root",
        data: {
            header: [{"alias": "ID", "value": "id"}, {"alias": "Name", "value": "name"}],
            users: [{"id": "0", "name": "john"}],
            items:  array
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