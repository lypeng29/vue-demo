<template>
	<div>
		<pre>
			* v-text innerText
			* v-html innerHTML
			* v-if 移除或者插入
			* v-show display:none与否
			* v-model 双向
			* v-bind 单向，内存JS影响页面
		</pre>
		v-text
		<span v-text="text"></span>
		<hr/>
		v-if:
		<span v-html="html"></span>
		<hr/>
		v-if:
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
		根据成绩匹配颜色<br/>
		<ul>
			<li v-for="stu in stus" :class="{'A':'red','B':'green'}[stu.score]">{{stu.name}}</li>
		</ul>
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
				stus:[{'name':'jack','score':'A'},{'name':'rose','score':'B'}]
			}
		}
	}
</script>

<style>
	.red{color:red}
	.green{color:green}
	.big{font-size:30px;}
</style>