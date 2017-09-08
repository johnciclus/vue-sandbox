<template>
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
</template>

<script type="text/javascript">
    (function() {
        "use strict";
        module.exports = {
            "data": function() {
                return {
                }
            },
            "methods":{
                onCouponApplied: function(){
                    Event.fire("applied")
                }
            }
        };
    }());
</script>