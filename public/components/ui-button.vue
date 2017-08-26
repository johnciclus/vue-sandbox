<template>
    <button class="ui button" @click="showModal"><slot></slot></button>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "props": ["modal"],
            "data": function() {
                return {

                }
            },
            "methods": {
                showModal: function(){
                    this.$parent.$emit('showModal', {id: this.modal});
                }
            }
        };
    }());
</script>