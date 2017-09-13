<template>
    <div class="view">
        <h2>{{title}}</h2>

        <div><slot></slot></div>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "props": ["id","title"],
            "data": function(){
                return{
                    count: 0
                }
            },
            "methods": {

            },
            "created": function(){
                var self = this;
                setInterval(function(){
                    console.log("view "+self.id);
                    console.log(self.count++);
                    self.$emit("changeView", self.id);
                }, 1000);
            },
            "destroyed": function(){
                console.log("destroyed"+this.id);
            }
        };
    }());
</script>

<style scoped>
    .view{
        width: 100%;
        height: 200px;
    }
</style>