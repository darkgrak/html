var articlCom = Vue.component('articlCom',{
	data:function(){
		return {
			imgList:[],
			imgurl:""
		}
	},
	methods:{
		
	},
	template:`
	<div class="newsList">
		<div class="todaylist"  v-for="item,key newsList" :key="key">
				<p>{{item.title}}</p>
				<img v-if="item.image_url" :src="item.image_url"/>
				<h5>网上获取的数据</h5>
		</div>
				
	</div>
	
	`,
	mounted:function(){
		var that = this
		$.get('http://127.0.0.1:8000/artcleImg?url='+app.imgurl).then(function(res){
			console.log(JSON.parse(res))
			that.newsList = JSON.parse(res).sub_images
		})
	}
})