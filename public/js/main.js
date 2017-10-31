(function() {
    "use strict";
    const Tree = require("../components/ui-tree.vue");

    Vue.component("tree", Tree);

    var data = {
        name: 'My Tree',
        children: [
            { name: 'hello' },
            { name: 'wat' },
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    },
                    { name: 'hello' },
                    { name: 'wat' },
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    }
                ]
            }
        ]
    }

    new Vue({
        "el": "#root",
        "props": {

        },
        "data": {
            "treeData": data
        },
        "methods": {

        },
        "components": {

        },
        "created": function(){

        },
        "mounted": function(){

        }
    });

}());