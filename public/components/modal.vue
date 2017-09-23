<template>
	<div class="modal" v-show="isVisible" >
		<div class="modal-background" @click="close"></div>
		<div class="modal-content">
			<div class="box">
				<div class="title">
					{{ header }}
					<span @click="close">
						<i class="fas fa-times" ></i>
					</span>
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
					isVisible: false
				}
			},
			methods: {
				"closeModal": function() {
					this.$emit("close-modal");
				},
				"open": function(){
					this.isVisible = true;
				},
				"close": function(){
					this.isVisible = false;
				}
			}
		}
	}());
</script>

<style scoped>

	.modal{
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		-webkit-box-align: center;
		-webkit-box-pack: center;
		align-items: center;
		justify-content: center;
		z-index: 1;
		overflow: hidden; /* Enable scroll if needed */
	}

	.modal-background {
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
	}

	/* Modal Content/Box */
	.modal-content {
		z-index: 10;
		background-color: #fefefe;
		margin: 15% auto; /* 15% from the top and centered */
		padding: 20px;
		border: 1px solid #888;
		width: 640px; /* Could be more or less, depending on screen size */
	}

	.modal-content .title, .modal-content .content, .modal-content .actions {
		font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
		display: flex;
		font-size: 11pt;
	}

	.modal-content .title{
		justify-content: space-between;
		font-size: 18pt;
		text-align: center;
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
