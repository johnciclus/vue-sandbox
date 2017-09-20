<template>
    <div id="table">
        <header>
            <div v-for="head in header" class="header-item">{{head.alias.toUpperCase()}}</div>
        </header>
        <div class="main-table" ref="mainTable">

            <virtual-list :size="50" :remain="13">
                <div v-for="row in data" class="main-item" @click="cardClick(row)">
                    <div class="column" v-for="head in header">{{row.value[head.value]}}</div>
                </div>
            </virtual-list>

        </div>
    </div>
</template>


<script type="text/javascript">
    (function() {
    	"use strict";

    	module.exports = {
    		"props": ["header","data"],
    		"data": function() {
    			return {
                    "tableSize": 0
                }
    		},
    		"methods": {
                "cardClick": function (data) {
                    this.$emit("cardClick", data);
                }
            },
            "mounted": function () {
                this.tableSize = Math.round(this.$refs.mainTable.clientHeight / 50);
            }
    	};
    }());
</script>

<style scoped>

    .rclass {
        height: 100%;
    }

    #table {
        width: 90%;
        height: 90%;
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        color: black;
        background-color: white;
        box-shadow: 2px 2px 2px #d5d9dc;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
		box-sizing: border-box;
    }

    header {
        display: flex;
        height: 50px;
        width: 100%;
        font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        color: #929AAC;
        font-size: 11pt;
        background-color: #f9f9f9;
    }

    .header-item {
        height: 100%;
        width: 100%;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        /*border-right: 1px solid #d3d6dd;*/
        border-bottom: 1px solid #d3d6dd;
    }

    .main-item {
        height: 100%;
        width: 100%;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #d3d6dd;
        min-height: 50px;
        color: #636566;
        font-size: 11pt;
        cursor: pointer;
        max-height: 50px;
    }

    .main-table {
        height: 100%;
        display: flex;
        width: 100%;
        flex-direction: column;
        overflow: auto;
    }

    .column {
        height: 100%;
        width: 100%;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    #table > header > div:last-child {
        border-right: none;
    }

    .options {
        width: 100%;
        height: 30px;
    }

</style>
