<template>
	<div>
	<header-vue navnum="5"></header-vue>
	<body-vue v-bind:imgabc="bannerimg"></body-vue>
	<footer-vue></footer-vue>
	</div>
</template>

<script>
import headervue from './components/header.vue';
import bodyvue from './components/body.vue';
import footervue from './components/footer.vue';
	export default {
		data () {
			return {
				bannerimg:'/abc.jpg'
			}
		},
		components:{
			'header-vue':headervue,
			'body-vue':bodyvue,
			'footer-vue':footervue,
		}
	}
</script>

<style>

</style>