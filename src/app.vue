<template>
<div>
<pre>
	* v-text innerText
	* v-html innerHTML
	* v-if 移除或者插入
	* v-show display:none与否
	* v-model 双向绑定
	* v-bind 单向，内存JS影响页面，v-bind:class=""可以简写为:class
	* v-on:click=change()简写：@click=change，没有参数，可以省略括号，但是没有括号，看着不像个函数，我还是保留
</pre>
	v-text
	<span v-text="text"></span>
	<hr/>
	v-if:
	<span v-html="html"></span>
	<hr/>
	v-if:
	<button v-on:click="show_hidden()">显示/影藏</button>
	<div v-if="isShow" style="height:20px;background:#f00;"></div>
	<hr/>
	v-model:<br/>
	<input type="text" name="" v-model="mTest" /><br/>
	{{mTest}}<br/>
	<input type="text" name="" v-bind:value="mTest" />
	<hr/>
	v-bind:（v-bind:可以简写为:）
	<div v-bind:class="isRed?'red':'green'">单个class</div>
	<div :class="{'red':true,'big':true}">多个class</div>
	根据成绩匹配颜色123<br/>
	<ul>
		<!-- 遍历数组 -->
		<li v-for="(stu,abc) in stus" :class="{'A':'red','B':'green'}[stu.score]">
		{{abc}} {{stu.name}}
		</li>
		<!-- 遍历对象 -->
		<li v-for="(value,key,index) in objs">
		{{index}} {{key}} {{value}}
		</li>
	</ul>
	<!-- <button v-on:click="isRed = !isRed">换色</button>-->
	<button @click="change()">换色与增加列</button>
</div>
</template>

<script>
	export default {
		data () {
			return {
				text: 'Hello world!',
				html: `
					<ul>
						<li>列表1</li>
						<li>列表2</li>
					</ul>
				`,
				isShow: true,
				mTest: '测试',
				isRed:false,
				stus:[{'name':'jack','score':'A'},{'name':'rose','score':'B'}],
				objs:{'name':'mick','age':28,'sex':1,'address':'shannxi'}
			}
		},
		methods:{	
			change(){
				this.isRed = !this.isRed;
				this.stus.push({'name':'lily','score':'A'},{'name':'lucy','score':'B'})
			},
			show_hidden(){
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style>
	.red{color:red}
	.green{color:green}
	.big{font-size:30px;}
</style>