<template>
    <div>
        <div class="ui top attached tabular menu">
            <a :href="tab.href" v-for="tab in tabs" class="item" :class="{'active': tab.isActive}" @click="selectTab(tab)">{{tab.title}}</a>
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
                selectTab: function(selectedTab){
                    this.tabs.map(function(tab){
                        tab.isActive = (tab.title === selectedTab.title);
                    });
                }
            },
            created: function(){
                this.tabs = this.$children;
            }
        };
    }());
</script>