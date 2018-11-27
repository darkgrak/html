var contentCom = Vue.component('contentCom',{
	data:function(){
		return {
			imgList:[]
		}
	},
	methods:{
		
	},
	props:['imgsUrl','abc'],
	template:`
	<div class='article'>
		<div @click="goBack" class="back">
			<div><i class="fa fa-angle-left" aria-hidden="true"></i></div>
		</div>
		<div class='imgItem' v-for="item,key in imgList" v-bind:key="key">
			<img :src="item.url" style="width:7.5rem" />
		</div>
	</div>
	
	`,
	mounted:function(){
		var that = this
		console.log(this)
		$.get('http://127.0.0.1:8000/artcleImg?url='+that.abc).then(function(res){
			// console(that.abc)
			console.log(JSON.parse(res))
			that.imgList = JSON.parse(res).sub_images
		})
	},
	methods:{
		goBack:function(){
			app.isShow = false
		}
	},
	
})