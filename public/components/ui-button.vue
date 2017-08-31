<template>
    <button class="ui button" :title="title" @click="showModal"><slot></slot></button>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "props": ["modal, title"],
            "data": function(){
                return{
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