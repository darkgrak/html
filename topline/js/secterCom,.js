var secterCom = Vue.component('secterCom',{
	data:function(){
		return {
			secinp:"secinp",
			input1:"input1",
			searchkeyworld:"",
			isshow:true,
			nweList:[],
			imgsUrl:""
		}
	},
	methods:{
		downse:function(){
			var that = this
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:8888?search="+that.searchKeyword,
				async:true,
				success:function(res){
					console.log(JSON.parse(res))
					that.newsList = JSON.parse(res).data
				}
			});
		},
		ssubmit:function(){
			var that = this
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:8888?search="+that.searchKeyword,
				async:true,
				success:function(res){
					console.log(JSON.parse(res))
					that.newsList = JSON.parse(res).data
				}
			});
		},
		toContent:function(url){
			this.isShow = true
			this.imgsUrl = 'http://www.toutiao.com'+ url
			console.log(this.imgsUrl)
		},
	},
	template:`
	<div>
		<div v-if="isshow" class="sec" :class="secinp">
			<input v-model="searchkeyworld" @keydown.enter="downse" type="text" :class="input1" />
			<input @click="ssubmit" type="submit" value="搜索" />
			<div class="newsList">
				<div class="newItem" v-for="item,key in newsList" @click="toContent(item.source_url)">
					
					<h1><a :href="'http://www.toutiao.com'+item.source_url">{{item.title}}</a></h1>
					<p>{{item.abstract}}</p>
					
					<img v-if="item.image_url" :src="item.image_url"/>
					
				</div>
					
			</div>
		</div>
	</div>	
	`

})