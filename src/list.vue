<template>
<div>
	<ul>
	<li v-for="(vo,key) in heros" :class="{'A':'red','B':'green','C':'blue','D':'pink'}[vo.score]">
	{{key}} {{vo.name}} {{vo.score}} <button @click="del(key)">删除</button>
	</li>
	</ul>
	名字：<input type="text" name="" v-model="name" /><br/>
	成绩：<input type="text" name="" v-model="score" /><br/>
	<button @click="addhero()">添加英雄</button>

</div>
</template>

<script>
	export default {
		data () {
			return {
				name:'',
				score:'',
				heros:[{
					name:'后羿',
					score:'A'
				},{
					name:'李白',
					score:'B'
				},{
					name:'鲁班',
					score:'C'
				},{
					name:'妲己',
					score:'D'
				},{
					name:'程咬金',
					score:'A'
				}
			]}
		},
		methods:{
			addhero(){
				// this.heros.push({name:'孙悟空',score:'B'},{id:7,name:'露娜',score:'C'})

				this.heros.push({name:this.name,score:this.score});
				this.name='';
				this.score='';
			},
			del(key){
				this.heros.splice(key,1)
			}
		}
	}
</script>

<style>
	.red {color: red;}
	.green {color: green;}
	.blue {color: blue;}
	.pink {color: pink;}
</style>