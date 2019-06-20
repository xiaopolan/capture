<style scoped="scoped">
	.ivu-tabs{
		background: #fff;
		padding: 10px;
	}
	.fanli{
		text-align: right;
		margin-right: 47%;
		margin-top: 10px;
	}
	.ivu-tabs-tabpane{
		min-height: 500px;
	}
</style>

<template>
		<div class="tabsBox_style">
			<Tabs active-key="key1">
				<TabPane label="运营设置" key="key1">
					<div class="fanli"><span>二级返利比例</span><i-input v-model="setyy.scale" placeholder="请输入二级返利比例" style="width: 300px;margin-left: 10px;"></i-input></div>
					<div class="fanli"><span>每日返利时间</span><i-input v-model="setyy.fltime" placeholder="请输入每日返利时间" style="width: 300px;margin-left: 10px;"></i-input></div>
					<div class="fanli"><span>返利比例</span><i-input v-model="setyy.flscale" placeholder="请输入返利比例" style="width: 300px;margin-left: 10px;"></i-input></div>
					<div class="fanli"><span>积分价格</span><i-input v-model="setyy.jfprice" placeholder="请输入积分价格" style="width: 300px;margin-left: 10px;"></i-input></div>
					<div class="fanli"><i-button type="success" small @click="saveyy(1)">保存</i-button></div>
				</TabPane>
				<TabPane label="抢拍轮次时间设置" key="key2">
					<div class="fanli"><span>抢拍默认时长</span><i-input v-model="setlc.mrtime" placeholder="请输入抢拍默认时长" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>秒</div>
					<div class="fanli"><span>等待默认时长</span><i-input v-model="setlc.waittime" placeholder="请输入抢拍默认时长" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>秒</div>
					<div class="fanli"><span>计算默认时长</span><i-input v-model="setlc.computetime" placeholder="请输入抢拍默认时长" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>秒</div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(2)">保存</i-button></div>
				</TabPane>
				<TabPane label="抢拍场次设置" key="key3">
					<div class="fanli"><span>抢拍默认时长</span><i-input v-model="setcc.ccmrtime" placeholder="请输入抢拍默认时长" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>秒</div>
					<div class="fanli"><span>抢拍默认人数</span><i-input v-model="setcc.ccmrvalue" placeholder="请输入抢拍默认人数" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>个</div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(3)">保存</i-button></div>
				</TabPane>
				<TabPane label="任务积分奖励设置" key="key3">
					<div class="fanli"><span>关注微信公众号</span><i-input v-model="setjf.wxnumber" placeholder="请输入关注微信公众号" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>个</div>
					<div class="fanli"><span>分享给好友</span><i-input v-model="setjf.friendnumber" placeholder="请输入分享给好友" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>个</div>
					<div class="fanli"><span>加入QQ群</span><i-input v-model="setjf.qqnumber " placeholder="请输入加入QQ群" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>个</div>
					<div class="fanli"><span>加入微信群</span><i-input v-model="setjf.wxqnumber " placeholder="请输入加入微信群" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>个</div>
					<div class="fanli"><span>邀请注册</span><i-input v-model="setjf.invitenumber" placeholder="请输入邀请注册" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>个</div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(4)">保存</i-button></div>
				</TabPane>
				<TabPane label="保证金额设置" key="key3">
					<div class="fanli"><span>普通场</span><i-input v-model="setje.ptfarm" placeholder="请输入保证金额" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>元</div>
					<div class="fanli"><span>高级场</span><i-input v-model="setje.gjfarm " placeholder="请输入保证金额" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>元</div>
					<div class="fanli"><span>专家场</span><i-input v-model="setje.zjfarm " placeholder="请输入保证金额" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>元</div>
					<div class="fanli"><span>大师场</span><i-input v-model="setje.dsfarm" placeholder="请输入保证金额" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>元</div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(5)">保存</i-button></div>
				</TabPane>
				<TabPane label="积分价格设置" key="key4">
					<div class="fanli"><span>积分价格</span><i-input v-model="integral.price" placeholder="请输入积分单价" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>元</div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(6)">保存</i-button></div>
				</TabPane>
				<TabPane label="付款时限设置" key="key4">
					<div class="fanli"><span style="margin-right: 10px;">确认付款时限</span><Date-picker :value="fkValue" v-modal="fkValue" @on-change="handleChange1" type="datetime" placeholder="选择日期和时间" style="width: 300px"></Date-picker></div>
					<div class="fanli"><span style="margin-right: 10px;">确认收款时限</span><Date-picker :value="skValue" v-modal="skValue" @on-change="handleChange2" type="datetime" placeholder="选择日期和时间" style="width: 300px"></Date-picker></div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(7)">保存</i-button></div>
				</TabPane>
				<TabPane label="品鉴设置" key="key4">
					<div class="fanli"><span>点赞数设置</span><i-input v-model="numzan" placeholder="请输入点赞数" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>个</div>
					<div class="fanli"><span>点赞换积分</span><i-input v-model="dianzan" placeholder="请输入换取积分数" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>分</div>
					<div class="fanli"><span>评论换积分</span><i-input v-model="pinglun" placeholder="请输入换取积分数" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input>分</div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(8)">保存</i-button></div>
				</TabPane>
				<TabPane label="系统设置" key="key4">
					<div class="fanli"><span>客服电话</span><i-input v-model="kfphone" placeholder="请输入客服电话" style="width: 300px;margin-left: 10px;margin-right: 10px;"></i-input></div>
					<div class="fanli"><i-button type="success" small  @click="saveyy(9)">保存</i-button></div>
				</TabPane>
			</Tabs>
		</div>
</template>


<script>
	import Util from "@/libs/util";
	import axios from 'axios'
	export default {
		name: "yunyinSet",
		data() {
			return {
				kfphone:'',
				fkValue:null,
				skValue:null,
				numzan:'',
				dianzan:'',
				pinglun:'',
				setyy:{
					scale:'',
					fltime:'',
					flscale:'',
					jfprice:''
				},
				setlc:{
					mrtime :'',
					waittime :'',
					computetime:'',
				},
				setcc :{
					ccmrtime :'',
					ccmrvalue:'',
				},
				setjf :{
					wxnumber :'',
					friendnumber :'',
					qqnumber :'',
					wxqnumber :'',
					invitenumber :'',
				},
				setje:{
					ptfarm :'',
					gjfarm :'',
					zjfarm :'',
					dsfarm:''
				},
				integral:{
					price:''
				}
			};
		},
		created() {
			// 获取用户列表数据
			this.showlist();
		},
		methods:{
			showlist(){
// 				var params = {param:["setyy","setlc","setcc","setjf","setje"]};
// 				console.log(params);
// 				let postData = this.$qs.stringify(params);
// 				debugger
				axios.post('/api/auction/operate/sys/init')
					.then( (response)=> {
						var res = response.data;
						var list1=res.data.setyy;
						var list2=res.data.setlc;
						var list3=res.data.setcc;
						var list4=res.data.setjf;
						var list5=res.data.setje;
						var list6=res.data.integral;
						var list7=res.data.artcTradeSheet;
						var list8=res.data.Judge;
						var list9=res.data.base_manage;
						//运营
						this.setyy.scale=list1[3].cdVal || ""
						this.setyy.fltime=list1[1].cdVal || ""
						this.setyy.jfprice=list1[2].cdVal || ""
						this.setyy.flscale=list1[0].cdVal || ""
						//轮次
						this.setlc.mrtime=list2[1].cdVal || ""
						this.setlc.waittime=list2[2].cdVal || ""
						this.setlc.computetime=list2[0].cdVal || ""
						//场次
						this.setcc.ccmrtime=list3[0].cdVal || ""
						this.setcc.ccmrvalue=list3[1].cdVal || ""
						//积分
						this.setjf.wxnumber=list4[3].cdVal || ""
						this.setjf.friendnumber=list4[0].cdVal || ""
						this.setjf.qqnumber=list4[2].cdVal || ""
						this.setjf.wxqnumber=list4[4].cdVal || ""
						this.setjf.invitenumber=list4[1].cdVal || ""
						//金额
						this.setje.ptfarm=list5[2].cdVal || ""
						this.setje.gjfarm =list5[1].cdVal || ""
						this.setje.zjfarm =list5[3].cdVal || ""
						this.setje.dsfarm=list5[0].cdVal || ""
						//积分价格
						this.integral.price=list6[0].cdVal || ""
						//付款时间设置
						this.fkValue=new Date(parseInt(list7[0].cdVal)).Format('yyyy-MM-dd hh:mm:ss') || ""
						this.skValue=new Date(parseInt(list7[1].cdVal)).Format('yyyy-MM-dd hh:mm:ss') || ""
						//点赞数设置
						this.numzan=list8[2].cdVal || ""
						this.dianzan=list8[1].cdVal || ""
						this.pinglun=list8[0].cdVal || ""
						//客服电话
						this.kfphone=list9[0].cdVal || ""
					})
					.catch( (error)=> {
					console.log(error);
					}); 
			},
			saveyy(flag){
				switch(flag){
					case 1 : 
					var param = [{
							cdItem: "flscale", 
							cdType: "setyy", 
							cdVal: this.setyy.flscale
						},{
							cdItem: "fltime", 
							cdType: "setyy", 
							cdVal: this.setyy.fltime
						},{
							cdItem: "jfprice", 
							cdType: "setyy", 
							cdVal: this.setyy.jfprice
						},{
							cdItem: "scale", 
							cdType: "setyy", 
							cdVal: this.setyy.scale
						}];
						break;
					case 2:
					var param = [{
							cdItem: "mrtime ", 
							cdType: "setlc", 
							cdVal: this.setlc.mrtime 
						},{
							cdItem: "waittime ", 
							cdType: "setlc", 
							cdVal: this.setlc.waittime 
						},{
							cdItem: "computetime", 
							cdType: "setlc", 
							cdVal: this.setlc.computetime
						}];
						break;
					case 3:
					var param = [{
							cdItem: "ccmrtime  ", 
							cdType: "setcc", 
							cdVal: this.setcc.ccmrtime  
						},{
							cdItem: "ccmrvalue ", 
							cdType: "setcc", 
							cdVal: this.setcc.ccmrvalue 
						}];
						break;
					case 4 : 
					var param = [{
							cdItem: "wxnumber", 
							cdType: "setjf", 
							cdVal: this.setjf.wxnumber 
						},{
							cdItem: "friendnumber", 
							cdType: "setjf", 
							cdVal: this.setjf.friendnumber
						},{
							cdItem: "qqnumber", 
							cdType: "setjf", 
							cdVal: this.setjf.qqnumber 
						},{
							cdItem: "wxqnumber", 
							cdType: "setjf", 
							cdVal: this.setjf.wxqnumber 
						},{
							cdItem: "invitenumber", 
							cdType: "setjf", 
							cdVal: this.setjf.invitenumber 
						}];
						break;
					case 5 : 
					var param = [{
							cdItem: "ptfarm", 
							cdType: "setje", 
							cdVal: this.setje.ptfarm  
						},{
							cdItem: "gjfarm", 
							cdType: "setje", 
							cdVal: this.setje.gjfarm 
						},{
							cdItem: "zjfarm", 
							cdType: "setje", 
							cdVal: this.setje.zjfarm  
						},{
							cdItem: "dsfarm", 
							cdType: "setje", 
							cdVal: this.setje.dsfarm 
						}];
						break;	
					case 6 :
						var param = [
							{
							cdItem: "price", 
							cdType: "integral", 
							cdVal: this.integral.price
							}
						];
						break;
					case 7 :
						var time= new Date(this.fkValue)
						var time1=time.getTime();
						var time2= new Date(this.skValue)
						var time3=time2.getTime();
						var param = [
							{
							cdItem: "pay_timeout", 
							cdType: "artcTradeSheet", 
							cdVal: time1
							},
							{
							cdItem: "confirm_timeout", 
							cdType: "artcTradeSheet", 
							cdVal: time3
							}
						];
						break;
					case 8 :
						var param = [
							{
							cdItem: "dianzanNum", 
							cdType: "Judge", 
							cdVal: this.numzan
							},
							{
							cdItem: "dianzanIntegral", 
							cdType: "Judge", 
							cdVal: this.dianzan
							},
							{
							cdItem: "commentIntegral", 
							cdType: "Judge", 
							cdVal: this.pinglun
							}
						];
						break;
					case 9 :
						var param = [
							{
							cdItem: "server_phone", 
							cdType: "base_manage", 
							cdVal: this.kfphone
							}
						];
						break;
				}

//  				console.log(typeof(param));
//  				var jsondata=JSON.stringify(param)
				//console.log(typeof(jsondata))
// 				debugger
// 				let postData = this.$qs.stringify(param);
// 				console.log(postData)
				axios.post('/api/auction/operate/sys/updateOperate',param)
					.then( (response)=> {
					if(response.data.code==200){
						Util.success("保存成功");
					}else{
						Util.error("保存失败");
					}
					})
					.catch( (error)=> {
					console.log(error);
					});
			},
			handleChange1(daterange) {
				this.fkValue=daterange;
			},
			handleChange2(daterange) {
				this.skValue=daterange;
			},
		}
	}
</script>

<style>

</style>
