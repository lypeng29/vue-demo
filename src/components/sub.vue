<template>
	<div class="example">
	<button @click="call">打电话</button>
	</div>
</template>

<script>
import connect from '../connector.js';
	export default {
		data () {
			return {
				msg: 'Hello world!'
			}
		},
		methods:{
			call(){
				connect.$emit('phone','canshuer');
			}
		}
	}
</script>

<style>
	.example {
		color: red;
	}
</style>