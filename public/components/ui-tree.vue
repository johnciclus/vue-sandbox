<template>
    <li>
        <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
                {{model.name}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <tree
                    class="item"
                    v-for="model in model.children"
                    :model="model">
            </tree>
            <li class="add" @click="addChild">+</li>
        </ul>
    </li>
</template>

<script type="text/javascript">
    (function() {
        "use strict";

        module.exports = {
            "props": {
                "model": Object
            },
            "data": function(){
                return {
                    "open": false
                }
            },
            "computed": {
                isFolder: function () {
                    return this.model.children &&
                        this.model.children.length
                }
            },
            "methods": {
                "toggle": function () {
                    if (this.isFolder) {
                        this.open = !this.open;
                    }
                },
                "changeType": function () {
                    if (!this.isFolder) {
                        Vue.set(this.model, 'children', []);
                        this.addChild();
                        this.open = true
                    }
                },
                "addChild": function () {
                    this.model.children.push({
                        name: 'new stuff'
                    })
                }
            }
        };
    }());
</script>

<style scoped>
    body {
        font-family: Menlo, Consolas, monospace;
        color: #444;
    }
    .item {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
</style>