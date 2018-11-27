var headerCom = Vue.component('headerCom',{
	data:function(){
		return {
			nav:[{
					title:'推荐',
					httpUrl:'http://www.ifeng.com/'
				},
				{
					title:'视频',
					httpUrl:'http://www.ifeng.com/'
				},
				{
					title:'热点',
					httpUrl:'http://www.ifeng.com/'
				},
				{
					title:'社会',
					httpUrl:'http://www.ifeng.com/'
				},{
					title:'娱乐',
					httpUrl:'http://www.ifeng.com/'
				},{
					title:'军事',
					httpUrl:'http://www.ifeng.com/'
				},
				{
					title:'科技',
					httpUrl:'http://www.ifeng.com/'
				},
				{
					title:'汽车',
					httpUrl:'http://www.ifeng.com/'
				},
				{
					title:'体育',
					httpUrl:'http://www.ifeng.com/'
				}
			],
		
		}
	},
	methods:{
		
	},
	template:`
	<div  class='nav' id ="_nav">
		<div  class="sea" id="_nav-b">
			<div ><i class="fa fa-repeat" aria-hidden="true"></i></i></div>
			<div><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
			<div></div>
		</div>
		<div id="flexlow"><i class="fa fa-bars" aria-hidden="true"></i></div>
		<div id="_nav-a">
			<div>
			<a v-for="item,key in nav" :href="item.httpUrl">{{item.title}}</a>
			</div>
		</div>
		
	</div>
	`
})
