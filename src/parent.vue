<template>
	<div>
	<subvue navnum="5"></subvue>
	<button @click="listen">听电话</button>
	</div>
</template>

<script>
import connect from './connector.js';
import sub from './components/sub.vue';
	export default {
		data () {
			return {
				
			}
		},
		components:{
			'subvue':sub,
		},
		methods:{
			listen(){	
				connect.$on('phone',function(msg){
					console.log(msg);
				})
			}
		}
	}
</script>

<style>

</style>