<!-- 商品审核 -->
<style lang="less" scoped>
.yhtjBox {
    .remark_box {
        h3 {
            display: inline-block;
        }
        p {
            display: inline-block;
        }
    }
}
.yhlb_table {
    .selectBox {
        display: inline-block;
        vertical-align: middle;
        span {
            margin-right: 5px;
        }
    }
    .searchBox {
        display: inline-block;
        vertical-align: middle;
    }
}
.typeselect {
    width: 150px;
    height: 25px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
}
</style>
<style lang="less">
.yhlb_table {
    .ivu-table-cell {
        padding-left: 10px;
        padding-right: 10px;
    }
}

.mymodal .ivu-modal-body {
    padding: 0 16px 16px 16px;
}
</style>

<template>
    <div class="tabsBox_style">
            <!-- 商品审核 -->
                <div class="itemBox yhlb_table">
                    <div class="remark_box">
                        <Row>
                            <Col span="4">
                                <h3>商品审核</h3>
                            </Col>
														<Col span="4">
																<i-select v-model="model3" placeholder='请选择审核状态'>
																		<i-option v-for="item in shlist" :value="item.id">{{ item.name }}</i-option>
																</i-select>
														</Col>
														<Col span="4" style="margin-left: 10px;">
																<i-select v-model="model4" placeholder='请选择竞拍意愿'>
																		<i-option v-for="item in typelist" :value="item.id">{{ item.name }}</i-option>
																</i-select>
														</Col>
                            <Col span="8" style="textAlign:center;">
                                <div class="searchBox clearfix">
                                    <Input
                                        v-model="yhlbmkIpVal"
                                        size="small"
                                        placeholder="请输入商品名称"
                                        style="float:left;width: 200px"
                                    >
                                    </Input>
                                    <Button
                                        type="error"
                                        style="float:left;width:60px;marginLeft:20px;"
                                        size="small"
                                        @click="yhlbmkSearch(1)"
                                    >查询</Button>
                                </div>
								<Modal
									v-model="upModal"
									title="发布场次"
									:loading="yhlbmkLoading"
									@on-ok="updateOk"
									@on-cancel="yhlbmkCancel"
								>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>
											<span style="color:red;"></span>场次名称：
										</div>
										<Input
											v-model="yhlbmkAddObj.title"
											placeholder="请输入场次名称"
											style="width:200px"
										></Input>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>
											<span style="color:red;"></span>商品名称：
										</div>
										<Input
											v-model="yhlbmkAddObj.productName"
											placeholder="请输入商品名称"
											style="width:200px"
										></Input>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>起拍价：</div>
										<Input
											v-model="yhlbmkAddObj.productPrice"
											placeholder="请输入起拍价"
											style="width:200px"
										></Input>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>加价：</div>
										<Input
											v-model="yhlbmkAddObj.incrementValue"
											placeholder="请输入每轮加价金额"
											style="width:200px"
										></Input>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>开始时间：</div>
											<Date-picker :value="startValue" :options="startTimeOptions" v-modal="startValue"  @on-change="handleChange"  type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>结束时间：</div>
											<Date-picker  :value="endValue" :options="endTimeOptions" v-modal="endValue"  @on-change="handleChange1" type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>档次名称：</div>
											<select name="public-choice" v-model="model2" class="typeselect" style="width: 200px;height: 32px;">                                        
												<option :value="item.id" :key='item.auctionGradeName'  v-for="item in ccidlist" >{{item.auctionGradeName}}</option>                                    
											</select>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>抢拍默认时长：</div>
										<Input
											v-model="yhlbmkAddObj.times"
											placeholder="请输入抢拍默认时长"
											style="width:200px"
										></Input>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>等待默认时长：</div>
										<Input
											v-model="yhlbmkAddObj.wiat_time"
											placeholder="请输入等待默认时长"
											style="width:200px"
										></Input>
									</div>
									<div style="marginBottom:10px;textAlign:center">
										<div
											style="display:inline-block;width:86px;textAlign:left"
										>计算默认时长：</div>
										<Input
											v-model="yhlbmkAddObj.compute_time"
											placeholder="请输入计算默认时长"
											style="width:200px"
										></Input>
									</div>
								</Modal>
								<Modal v-model="imageModal" title="图片查看" class="mymodal">
									<Carousel v-if="imageModal1">
										<Carousel-Item v-for="(item,index) in imagelist" :key="index">
										  <div style="margin: 0 auto;text-align: center;display: flex;align-items: center;width: 488px;height: 300px;justify-content: center;">
										   <img :src="item" style="max-height:240px;max-width:440px;" alt=""/>
										   </div>
										</Carousel-Item>
									</Carousel>
								</Modal>
								<Modal
										title='审核'
										v-model="confirm"
										@on-ok="verify(1)"
										okText='通过'
										cancelText='不通过'
										@on-cancel="verify(0)">
										<p style='height:50px;line-height: 50px;font-size: 17px;text-align: center;'>是否审核通过</p>
								</Modal>
                            </Col>
                        </Row>
                    </div>
                    <div class="tablepage_box">
                        <!-- 导出按钮 -->
                        <div class="exportBtnBox clearfix">
                        </div>
                        <!-- 用户列表数据表格 -->
                        <Table
                            ref="yhlbmkTable"
                            border
                            :columns="yhlbmkCols"
                            :data="yhlbmktablePageData.list"
                        ></Table>
                        <div v-if="listobj" class="pageBox" :style="{marginTop: '25px',paddingBottom: '35px'}">
                            <!-- 分页 -->
                            <Page
                                :total="yhlbmktablePageData.total"
                                :page-size="yhlbmktablePageData.pageSize"
                                show-elevator
																ref="pages"
                                @on-change="yhlbmkPageChange"
                            ></Page>
                            <span>共&nbsp;{{yhlbmktablePageData.pages}}&nbsp;页</span>
                        </div>
												<div v-else class="pageBox" :style="{marginTop: '25px',paddingBottom: '35px'}">
														<!-- 分页 -->
														<Page
																:total="yhlbmktablePageData.total1"
																:page-size="yhlbmktablePageData.pageSize1"
																show-elevator
																@on-change="searchepageChange"
														></Page>
														<span>共&nbsp;{{yhlbmktablePageData.pages1}}&nbsp;页</span>
												</div>
                    </div>
                </div>
    </div>
</template>
<script>
// 引入通用的库文件
import Util from '@/libs/util';
import axios from 'axios';
export default {
    name: 'userList',

    data() {
        return {
						model3:'',//审核
						model4:'',//竞拍
						shlist:[
							{
								id: 0,
								name: '未审核'
							},
							{
								id: 1,
								name: '已审核'
							}
						],
						typelist: [
							{
								id: 0,
								name: '提交竞拍'
							},
							{
								id: 1,
								name: '未提交竞拍'
							}
						],
						startTimeOptions: {}, //开始日期设置
						endTimeOptions: {}, //结束日期设置
						ccidlist: {}, //场次id
						confirm:false,
            cityList: [], //商品类型
            model1: [],
						model2: [],
            listobj: true,
            yhtjtableData: [], // 用户统计表格数据
            // 用户列表相关
            // 用户列表的选择器条件
            yhlbmkIpVal: '', // 用户列表的搜索条件
            yhlbmkIsSearch: false, // 是否加入搜索词
            // 用户列表表格的标题行数据（列属性名称）
            yhlbmkCols: [
                {
                    title: '商品id',
                    key: 'id',
                    //	width: 120,
                    align: 'center'
                },
                {
                    title: '商品名称',
                    key: 'productName',
                    //width: 280,
                    align: 'center'
                },
                {
                    title: '商品主图',
                    key: 'pic',
                    //width: 150,
                    align: 'center',
                    render: (h, params) => {
                        var str = params.row.pic;
                        if (str) {
                            str = str.substring(0, str.lastIndexOf(','));
                            var arr = str.split(',');
                            return h('img', {
                                attrs: {
                                    src: arr[0]
                                },
                                style: {
                                    width: '50px',
                                    height: '50px',
                                    margin: '10px 0'
                                },
                                on: {
                                    click: () => {
                                        this.showimage(arr);
                                    }
                                }
                            });
                        } else {
                            return h('div', {}, '暂无图片');
                        }
                    }
                },
                {
                    title: '商品类型',
                    key: 'productType',
                    //width: 180,
                    align: 'center'
                },
                {
                    title: '商品价格',
                    //width: 180,
                    key: 'productPrice',
                    align: 'center'
                },
								{
										title: '点赞数',
										key: 'dianzanNum',
										//width: 180,
										align: 'center'
								},
								{
										title: '商品来源',
										key: 'source',
										align: 'center',
										render: (h, params) => {
												var str = params.row.source;
												if(str==0){
													return h('div','平台发布')
												}
												if(str==1){
													return h('div','用户发布')
												}
										}
								},
								{
										title: '竞拍状态',
										key: 'isPush',
										align: 'center',
										render: (h, params) => {
												var str = params.row.isPush;
												if(str==0){
													return h('div','可竞拍')
												}
												if(str==1){
													return h('div','不可竞拍')
												}
										}
								},
								{
										title: '发布人',
										key: 'userName',
										align: 'center',
								},
                {
                    title: '商品简介',
                    key: 'introduction',
                    align: 'center',
										width: 400,
                    ellipsis: true
                },
								{
										title: '审核结果',
										key: 'verifyResult',
										align: 'center',
										render: (h, params) => {
												var str = params.row.verifyResult;
												if(str==0){
													return h('div','未通过')
												}
												if(str==1){
													return h('div','通过')
												}
										}
								},
								{
										title: '拍卖意愿',
										key: 'flag',
										align: 'center',
										render: (h, params) => {
												var str = params.row.flag;
												if(str==0){
													return h('div','未提交拍卖')
												}
												if(str==1){
													return h('div','提交拍卖')
												}
										}
								},
								{
									title: "用户状态",
									key: "status",
									width: 90,
									align: "center",
									render: (h,params)=> {
										let text = params.row.verify
										if(text==0){
											return h(
													"Button",
													{
														props: {
															type: "dashed",
															size: "small"
														},
														style: {
															// width: "70px",
															marginLeft: "10px"
														},
														on: {
															click: () => {
																this.deleteGood(params.row.id);
															}
														}
													},
													"审核"
												)
										}else{
											return	h(
													"Button",
													{
														props: {
															type: "dashed",
															size: "small"
														},
														style: {
															// width: "70px",
															marginLeft: "10px"
														}
													},
													"已审核"
												)
										}
									}
								},
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
										
                    render: (h, params) => {
                        return h('div', [
                            h(
                                'Button',
                                {
                                    props: {
                                        type: 'warning',
                                        size: 'small'
                                    },
                                    style: {
                                        // width: "70px",
                                        marginLeft: '10px'
                                    },
                                    on: {
                                        click: () => {
                                            this.updateGood(params.row);
                                        }
                                    }
                                },
                                '拍卖场'
                            )
                        ]);
                    }
                }
            ],
            // 用户列表表格分页数据
            yhlbmktablePageData: {
                list: [], // 表格列表
                total: 0, // 总条数
                pages: 0, // 总页数
                pageSize: 0, // 每页条数
                currentPage: 0 ,// 当前页码
								total1: 0, // 总条数
								pages1: 0, // 总页数
								pageSize1: 0, // 每页条数
								currentPage1: 0 // 当前页码

            },
            yhlbmkLoading: true, // 添加新增用户的对话框加载状态
            upModal: false, // 添加修改用户的对话框显示状态
            // 新增用户的对话框表单
            yhlbmkAddObj: {
                productName: '', // 商品名称
                pic: {}, // 商品主图
                productType: '', // 商品类型
                productPrice: '', // 商品价格
                introduction: '', //商品简介
                id: '' ,// 商品id,
								title: '', //场次名称
								productId: '', //产品id
								startPrice: '', //起拍价
								incrementValue: '', //加价
								startTime: '', //开始时间
								endTime: '', //结束时间
								auctionGradeId: '', //档次id
								wiat_time: '', //等待默认时长
								compute_time: '', //计算时长
								times: '' ,//抢拍默认时长,
								selectgoodid:'',
            },
            imagelist: [], //图片集合image
            imageModal: false,
			imageModal1: false
        };
    },
    created() {
        // 获取用户列表数据
        this.yhlbmkGetList(1, this.yhlbmkIsSearch);
    },
    mounted: function() {
        this.showtype();
				this.showdctype();
				this.gettimes();
    },
    methods: {
				//获取轮次时长
				gettimes(){
					axios.post('/api/auction/operate/init')
						.then( (response)=> {
							var res = response.data;
							var list=res.data.setlc;
							this.yhlbmkAddObj.times=list[1].cdVal || ""
							this.yhlbmkAddObj.wiat_time=list[2].cdVal || ""
							this.yhlbmkAddObj.compute_time=list[0].cdVal || ""
						})
						.catch( (error)=> {
						console.log(error);
						}); 
				},
        // 用户列表的页码改变
        yhlbmkPageChange(currentPage) {
            this.yhlbmkGetList(currentPage, this.yhlbmkIsSearch); // 获取用户列表数据
        },
        searchepageChange(currentPage) {
            this.yhlbmkSearch(currentPage);
        },
        // 获取用户列表数据（调用接口的）---接口
        yhlbmkGetList(currentPage, isSearch) {
            // currentPage：当前页数   isLimitTime：是否限制时间段
            console.log('获取第' + currentPage + '页数据');
            // 参数对象
            var params = {
                pageNum: currentPage, // 当前页码
                pageSize: 10 // 每页条数
            };
            if (isSearch) {
                // 加入搜索词
                params.searchId = this.yhlbmkIpVal;
            }
            let postData = this.$qs.stringify(params);
            console.log(postData);
            axios
                .post('/api/auction/product/verifyProductList', postData)
                .then(response => {
										var res = response.data;
										if(res.code==200){
											if(res.data==null){
												this.yhlbmktablePageData.list=[];
											}else{
												this.yhlbmktablePageData = res.data;
											}
										}else{
											this.yhlbmktablePageData.list=[];
										}
                   
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // 用户列表的选择器发生变化
        yhlbmkSlChange() {
            // console.log("选择器变化");
            // 获取用户列表数据
            this.yhlbmkGetList(1, this.yhlbmkIsSearch);
        },
        // 点击用户列表的查询
        yhlbmkSearch(currentPage1) {
            this.listobj = false;
						
            if (this.yhlbmkIpVal) {
                let params = {
                    productName: this.yhlbmkIpVal,
                    pageNum: currentPage1, // 当前页码
                    pageSize: 10 // 每页条数
                };
                let postData = this.$qs.stringify(params);
                axios
                    .post('/api/auction/product/findProduct', postData)
                    .then(response => {
                        var res = response.data;
                        this.yhlbmktablePageData = res.data;
						this.yhlbmktablePageData.total1=res.data.total;
						this.yhlbmktablePageData.pages1=res.data.pages;
						this.yhlbmktablePageData.pageSize1=res.data.pageSize
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                this.listobj = true;
                this.yhlbmkGetList(1, this.yhlbmkIsSearch);
								//页码重置为1
								this.$nextTick(function(){
									this.$refs['pages'].currentPage = 1;
								})
            }
        },
        deleteGood(id) {
					this.confirm=true
					this.selectgoodid=id
        },
				//审核
				verify(flag){
							this.confirm=false;
							let params = {
									productId: this.selectgoodid,
									verify: flag
							};
							let postData = this.$qs.stringify(params);
							axios
									.post('/api/auction/product/verifyProduct', postData)
									.then(response => {
										if (response.data.code == 200) {
												Util.success('操作成功');
												this.yhlbmkGetList(1, this.yhlbmkIsSearch);
										} else {
												Util.error('操作失败');
										}
									})
									.catch(error => {
											console.log(error);
									});
				},
        showtype() {
            axios
                .post('/api/auction/productType/getAllNode')
                .then(response => {
                    var res = response.data;
                    this.cityList = res.data;
										console.log(this.cityList)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        updateGood(params) {
            this.upModal = true;
            this.yhlbmkAddObj.productName = params.productName;
						this.yhlbmkAddObj.pid = params.productTypeId;
						this.yhlbmkAddObj.id = params.id;
        },
        showimage(imagearr) {
            this.imageModal = true;
						this.imageModal1 = true;
            this.imagelist = imagearr;
        },
				//获取档次id
				showdctype() {
					axios
						.post('/api/auction/auctionGrade/getSameDayGrade')
						.then(response => {
							var res = response.data;
							this.ccidlist = res.data;
						})
						.catch(error => {
							console.log(error);
						});
				},
				//选择开始时间
				handleChange(daterange) {
						this.startValue = daterange;

				},
				//选择结束时间
				handleChange1(daterange) {
						this.endValue = daterange;
				},
				updateOk(){
					var data = new Date(this.startValue);
					var time1 = data.getTime();
					var data2 = new Date(this.endValue);
					var time2 = data2.getTime();
					if(time2<time1){
						Util.error('结束时间必须大于开始时间');
						setTimeout(() => {
							this.yhlbmkLoading = false;
							this.$nextTick(() => {
								this.yhlbmkLoading = true;
							});
						}, 10);
						return;
					}
					var params = {
						title: this.yhlbmkAddObj.productName,
						productType: this.yhlbmkAddObj.pid,
						productId: this.yhlbmkAddObj.id,
						productPic: this.yhlbmkAddObj.pic,
						startPrice: this.yhlbmkAddObj.productPrice,
						incrementValue: this.yhlbmkAddObj.incrementValue,
						startTime: time1,
						endTime: time2,
						auctionGradeId: this.model2,
						wiatTime: this.yhlbmkAddObj.wiat_time,
						computeTime: this.yhlbmkAddObj.compute_time,
						times: this.yhlbmkAddObj.times
					};
					if(params.title=='' || params.productId=='' || params.productPic=='' || params.startPrice=='' || params.incrementValue=='' || params.startTime=='' || params.endTime=='' || params.auctionGradeId=='' || params.times=='' || params.wiatTime=='' || params.computeTime==''){
						Util.error('正确填写表单');
					}else{
					this.yhlbmkLoading = false; // 关闭加载状态
					this.upModal = false; // 关闭当前模态
					// 清除表单
					let postData = this.$qs.stringify(params);
					console.log(postData);
					axios
						.post('/api/auction/auctionClass/addClassAuction', postData)
						.then(response => {
							if (response.data.code == 200) {
								Util.success('添加成功');
								this.yhlbmkAddObj.title = '';
								this.yhlbmkAddObj.productName = '';
								this.yhlbmkAddObj.id = ''; //选择商品清空
								this.yhlbmkAddObj.productType = ''; //选择商品清空
								this.yhlbmkAddObj.productPrice = '';
								this.yhlbmkAddObj.productPic = '';
								this.yhlbmkAddObj.incrementValue = '';
								this.yhlbmkAddObj.auctionGradeId = '';
								this.startValue = '';
								this.endValue = '';
								this.yhlbmkGetList(1, this.yhlbmkIsSearch);
							} else {
								Util.error('添加失败');
							}
							//var res = response.data;
							//this.yhlbmktablePageData.list=res.data;
						})
						.catch(error => {
							console.log(error);
						});
					}
					// 解决Modal表单验证中loading的bug
					setTimeout(() => {
						this.yhlbmkLoading = false;
						this.$nextTick(() => {
							this.yhlbmkLoading = true;
						});
					}, 10);
				}
    }
};
</script>
