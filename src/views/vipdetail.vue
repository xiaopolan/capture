<!-- 登录页 -->
<style scoped>
	body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form, table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		margin: 0;
		padding: 0;
	}
	.vipBox{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	.viptop{
		height: 209px;
		width: 100%;
		background: url(../assets/img/viptop.png) no-repeat no-repeat;
		background-size: 100% 100%;
		padding-top: 78px;
	}
	.vipicon{
		height: 66px;
		width: 76px;
		background: url(../assets/img/vipicon.png) no-repeat no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
	}
	.vipdetail{
		height: 200px;
		padding:15px 10px 20px 10px;
	}
	.vipline{
		height: 24px;
		width: 231px;
		background: url(../assets/img/vipline.png) no-repeat no-repeat;
		background-size: 100% 4px;
		margin: 10px auto;
	}
	.viptext{
		text-align: center;
		font-size:14px;
		font-family:MicrosoftYaHei;
		color:rgba(196,160,110,1);
		line-height:2px;
	}
	.viptextd{
		font-size:12px;
		font-family:MicrosoftYaHei;
		color:rgba(51,51,51,1);
		line-height:20px;
		margin-bottom: 10px;
		font-weight: bold;
		text-indent: -14px;
		margin-left: 16px;
	}
	.vipfenge{
		height: 5px;
		width: 100%;
		background:rgba(196,160,110,0.14);
	}
	.vipdetail2{
		height: auto;
		padding:15px 15px 20px 15px;
	}
	.viptable{
		/* border: 1px solid #eee; */
		border-collapse: collapse;
		width: 100%;
		font-size: 10px;
		text-align: center;
		word-break:break-all; word-wrap:break-word; table-layout:fixed; 
		color:rgba(102,102,102,1);
	}
	td{
		border: 1px solid rgba(238,238,238,1);
	}
		
	th{
		background:rgba(246,246,246,1);
		border: 1px solid rgba(238,238,238,1);
	}
	.tabletd{
		width: 16%;
		height: 40px;
	}
	.firsttd{
		background:rgba(246,246,246,1);
		border: 1px solid rgba(238,238,238,1);
		font-weight: bold;
	}
</style>
<template>
    <div class="vipBox">
		<div class="viptop">
			<div class="vipicon"></div>
		</div>
		<div class='vipdetail'>
			<div class="vipline">
				<p class="viptext">会员等级说明</p>
			</div>
			<ol>
				<li class="viptextd">1. 小牛趣拍的会员等级共6个等级，分别为：V0、V1、V2、V3、V4、V5几个等级</li>
				<li class="viptextd">2. 会员级别的升降均由系统自动处理，无需申请。</li>
				<li class="viptextd">3. 会员的等级由ARTC决定，ARTC数量越多会员等级越高，享受到的会员权益越大。</li>
			</ol>
		</div>
		<div class="vipfenge"></div>
		<div class='vipdetail2'>
			<div class="vipline">
				<p class="viptext">会员权益体系</p>
			</div>
			 <table class="viptable" >           
				<tr v-for="(item,index) in headerList" :key="index">
					<td v-if="index==0" class="firsttd" style="width: 22%">{{item.value}}</td>
					<td v-else-if="index==1" style="width: 22%">ARTC数量(<span style="color: red;">L</span>)</td>
					<td v-else style="width: 22%">{{item.value}}</td>
					<th class="tabletd" v-if='index==0' v-for="(items,indexs) in bodyList" :key="indexs">V{{items.grade}}</th>
					<td class="tabletd" v-if='index==1' v-for="(items,indexs) in bodyList" :key="indexs">
						<div v-if="items.grade==0">无限制</div>
						<div v-else>{{items.countNum}}</div>
					</td>
					<td class="tabletd" v-if='index==2' v-for="(items,indexs) in bodyList" :key="indexs">{{items.integralScale}}</td>
					<td class="tabletd" v-if='index==3' v-for="(items,indexs) in bodyList" :key="indexs">
						<div v-if="items.grade==0">\</div>
						<div v-else>{{items.serverCharge}}</div>
					</td>
					<td class="tabletd" v-if='index==4' v-for="(items,indexs) in bodyList" :key="indexs">
						<div v-if="items.grade==0 || items.grade==1">上下限<br />{{items.lowerLimit}}</div>
						<div v-else>上限：<br /><span style="color: red;">L</span>*40% <br />下限{{items.lowerLimit}}</div>
					</td>
				</tr>
            </table>
		</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "result",
    components: {},
    data() {
        return {
			headerList:[{
				value:"权益对比"
			},
			{
				value:"ARTC数量(L)"
			},
			{
				value:"获取ARTC比例"
			},
			{
				value:"交易手续费"
			},
			{
				value:"交易市场限制（数量）"
			},],
			bodyList:[]
        };
    },
    created() {
		this.getlist();
    },
	mounted() {
			
	},
    methods: {
		getlist(){
			axios.get('/api/auction/member/sys/getList').then(response => {
				var res = response.data;
				if (res.code == 200) {
					if (res.data == null) {
						this.bodyList = [];
							
					} else {
						this.bodyList = res.data;
					}
				} else {
					this.bodyList = [];
				}
			})
			.catch(error => {
					console.log(error);
			});
		}	
    }
};
</script>
