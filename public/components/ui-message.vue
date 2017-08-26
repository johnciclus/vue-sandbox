<template>
    <div class="ui card" v-show="isVisible">
        <i class="close icon" @click="isVisible = false"></i>
        <div class="content">
            <div class="header">
                {{title}}
            </div>
            <div class="description">
                {{content}}
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "props": ["title", "content"],
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