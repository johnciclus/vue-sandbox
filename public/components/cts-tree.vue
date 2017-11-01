<template>
    <ul class="item">
        <li class="item" v-for="(item, index) in model" @click.stop="toggle(item, index)">
            <div :class="{bold: isFolder(item)}">
                <input type="checkbox" :id="index" v-if="isItem(item)"/>
                <label>{{item.name}}</label>
                <span v-if="isFolder(item)">[{{status[index] ? '-' : '+'}}]</span>
            </div>
            <tree class="item" :model="item.children" v-show="status[index]" v-if="isFolder(item)"></tree>
        </li>
    </ul>
</template>

<script type="text/javascript">
    (function() {
        "use strict";

        module.exports = {
            "props": {
                "model": Array
            },
            "data": function(){
                return {
                    "status": this.model.map(function(){
                        return false
                    })
                }
            },
            "methods": {
                "toggle": function (item, index) {
                    if (this.isFolder(item)) {
                        this.status = this.status.map((element, i) => {
                            if (i === index){
                                return !element;
                            } else {
                                return element;
                            }
                        });
                    }
                },
                "isFolder": function (item) {
                    return item.children && item.children.length
                },
                "isItem": function (item) {
                    return !item.hasOwnProperty("children")
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
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: none;
    }
    .item {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }

</style>