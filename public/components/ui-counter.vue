<template>
    <div>
        <h2>The count is {{counter}}</h2>

        <button class="ui button"  @click="counter++"></button>

    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "props": [],
            "data": function(){
                return{
                    counter: 0;
                }
            },
            "methods": {
            }
        };
    }());
</script>