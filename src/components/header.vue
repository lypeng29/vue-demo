<template>
	<div class="header">
	头部，导航数量为：{{navnum}}
	</div>
</template>

<script>
	export default {
		data () {
			return {
				// msg: 'Hello world!'
			}
		},
		props:['navnum']
	}
</script>

<style>
	.header {
		background-color: red;height:100px;
	}
</style>