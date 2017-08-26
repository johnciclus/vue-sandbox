<template>
    <div>
        <task v-for="task in tasks">
            {{task.label}}
        </task>
    </div>
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "data": function() {
                return {
                    tasks: [
                        {label: "Go to the store", complete: true},
                        {label: "Go to the email", complete: false},
                        {label: "Go to the farm", complete: true},
                        {label: "Go to work", complete: false}
                    ]
                }
            }
        };
    }());
</script>

<style scoped>

</style>