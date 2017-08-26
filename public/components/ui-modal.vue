<template>
    <div class="ui modal upper" v-bind:class="{active: isVisible}">
        <i class="close icon" @click="close"></i>
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "data": function() {
                return {
                    isVisible: false
                }
            },
            "methods":{
                close: function(){
                    this.isVisible = false;
                }
            }
        };
    }());
</script>

<style scoped>
    .upper{
        top: 0%;
    }
</style>