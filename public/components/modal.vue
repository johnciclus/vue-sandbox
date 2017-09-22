<style scoped>

.modal-background {
  background-color: rgba(10,10,10,0.1)!important;
}

.modal-content {
  overflow-x: hidden;
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  border-radius: 5px;
}

.modal-content .title, .modal-content .content, .modal-content .actions {
  display: flex;
}

.modal-content .title{
  justify-content: space-between;
}
.modal-content .content{
  flex-direction: column;
}

.modal-content .actions{
  justify-content: flex-end;
}
.modal-content .actions > a{
  margin: 0px 8px;
}
input {
  margin: 5px 0px;
}

.box {
  overflow-y: hidden;
}
.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.card-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

</style>

<template>
  <div class="modal is-active" v-show="status">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content card-5">
      <div class="box">
        <div class="title">
          {{ header }}
          <button class="delete" @click="closeModal"></button>
        </div>
        <div class="content">
          <slot name="content">
          </slot>
        </div>
        <div class="actions">
          <slot name="modal-actions">
            <a class="button">Ok</a>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    (function () {
        "use strict";

        module.exports = {
          props: ["header", "status"],
          data() {
              return {

              }
          },
          methods: {
            "closeModal": function() {
              this.$emit("close-modal");
            }
          }
        }
    }());
</script>
