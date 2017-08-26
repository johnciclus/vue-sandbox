<template>
    <div class="ui card">
        <div class="content">
            <i class="right floated like icon"></i>
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

                }
            }
        };
    }());
</script>

<style scoped>

</style>