<template>
    <div class="ui bottom attached tab segment" :class="{active: active == 'true'}" :data-tab="data_tab">
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "props": ["title", "data_tab", "active"],
            "data": function() {
                return {

                }
            },
            "mounted": function(){
                console.log(this.active);
            }
        };
    }());
</script>