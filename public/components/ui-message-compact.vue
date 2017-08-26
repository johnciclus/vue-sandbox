<template>
    <div><
        <div class="ui compact message" v-show="isVisible">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "data": function() {
                return {
                    isVisible: true
                }
            },
            "methods":{
                hide: function(){
                    this.isVisible = false;
                }
            }
        };
    }());
</script>