<template>
    <div>
        <div class="ui top attached tabular menu">
            <a v-for="tab in tabs" class="item" :class="tab.class" :data-tab="tab.data_tab" @click="changeTab">{{tab.title}}</a>
        </div>
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "data": function() {
                return {
                    tabs: []
                }
            },
            methods: {
                changeTab: function(e){
                    this.$children.map(function(item){
                        console.log(item);
                        //item.classList.remove("active");
                    });
                    console.log(e.target.className += " active");
                }
            },
            created: function(){

            },
            mounted: function(){
                var self = this;
                self.$children.map(function(item){
                    self.tabs.push({title: item.title, class: item.active === "true" ? "active" : "", data_tab: item.data_tab});
                });

                console.log(self.tabs);
            }
        };
    }());
</script>