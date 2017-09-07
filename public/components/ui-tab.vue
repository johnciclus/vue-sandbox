<template>
    <div class="ui bottom attached tab segment" :class="{'active': isActive}">
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "props": {
                "title": { required: true},
                "active": { default: false}
            },
            "data": function() {
                return {
                    isActive: false
                }
            },
            "mounted": function(){
                this.isActive = this.active;
            },
            "computed": {
                href: function(){
                    return "#" + this.title.toLowerCase().replace(/ /g, '-');
                }
            }
        };
    }());
</script>