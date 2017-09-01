<template>
    <div>
        <div class="ui compact message" v-show="isVisible">
            <slot></slot>
            {{ reverseMessage }}
        </div>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "data": function() {
                return {
                    isVisible: true,
                    message: "hello world"
                }
            },
            "methods":{
                hide: function(){
                    this.isVisible = false;
                }
            },
            computed: {
                reverseMessage (){
                    return this.message.split("").reverse().join("");
                }
            }
        };
    }());
</script>