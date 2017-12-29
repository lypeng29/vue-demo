<template>
	<div class="body">
	中间：{{imgabc}}
	</div>
</template>

<script>
	export default {
		data () {
			return {
				// msg: 'Hello world!'
			}
		},
		props:['imgabc']
	}
</script>

<style>
	.body {
		background-color: green;height:100px;
	}
</style>