(function() {
    "use strict";
    const Tree = require("../components/cts-tree.vue");

    Vue.component("tree", Tree);

    var data = [{
        name: 'Tree 1',
        children: [
            {   name: 'child folder1',
                children: [
                    { name: 'child folder' },
                    { name: 'hello' },
                    { name: 'wat' },
                    { name: 'child folder' }
                ]
            }
        ]
    },
    {
        name: 'Tree 2',
        children: [
            {   name: 'hello2' },
            {   name: 'wat2' },
            {   name: 'child folder2',
                children: [
                    { name: 'child folder' },
                    { name: 'hello' },
                    { name: 'wat' },
                    { name: 'child folder' }
                ]
            }
        ]
    }];

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