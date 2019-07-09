<!-- 竞拍档次 -->
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
</style>
<style lang="less">
.yhlb_table {
    .ivu-table-cell {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>

<template>
    <div class="tabsBox_style">
            <!-- 竞拍档次 -->
                <div class="itemBox yhlb_table">
                    <div class="remark_box">
                        <Row>
                            <Col span="23" style="textAlign:right;">
                                <Modal
                                	v-model="yhlbmkModal"
                                	title="修改档次"
                                	:loading="yhlbmkLoading"
                                	@on-ok="yhlbmkOk"
                                	@on-cancel="yhlbmkCancel"
                                >
                                	<div style="marginBottom:10px;textAlign:center">
                                		<div
                                			style="display:inline-block;width:100px;textAlign:left"
                                		>
                                			<span style="color:red;">*</span>竞拍档次名称：
                                		</div>
                                		<Input
                                			v-model="yhlbmkAddObj.auctionGradeName"
                                			placeholder="请输入竞拍档次名称"
                                			style="width:150px"
                                		></Input>
                                	</div>
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
                        <div class="pageBox" :style="{marginTop: '25px',paddingBottom: '35px'}">
                            <!-- 分页 -->
                            <Page
                                :total="yhlbmktablePageData.total"
                                :page-size="yhlbmktablePageData.pageSize"
                                :current="yhlbmktablePageData.currentPage"
                                show-elevator
                                @on-change="yhlbmkPageChange"
                            ></Page>
                            <span>共&nbsp;{{yhlbmktablePageData.pages}}&nbsp;页</span>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>
// 引入通用的库文件
import Util from "@/libs/util";
import axios from 'axios'
export default {
    name: "dangciAudit",
    data() {
        return {
            yhlbmkIpVal: "", // 用户列表的搜索条件
            yhlbmkIsSearch: false, // 是否加入搜索词
            // 用户列表表格的标题行数据（列属性名称）
            yhlbmkCols: [
                {
                	title: "竞拍档次id",
                	key: "id",
                	align: "center"
                },
                {
                	title: "竞拍档次名称",
                	key: "auctionGradeName",
                	align: "center"
                },
                {
                	title: "竞拍档次保证金额度",
                	key: "amount",
                	align: "center"
                },
				{
					title: "操作",
					key: "action",
					width: 150,
					align: "center",
					render: (h, params) => {
						return h("div", [
							h(
								"Button",
								{
									props: {
										type: "warning",
										size: "small"
									},
									style: {
										// width: "70px",
										marginLeft: "10px"
									},
									on: {
										click: () => {
											this.updateDc(
												params.row
											);
										}
									}
								},
								"修改"
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
                currentPage: 0 // 当前页码
            },
            yhlbmkModal: false, // 添加新增用户的对话框显示状态
            yhlbmkLoading: true, // 添加新增用户的对话框加载状态
            // 新增用户的对话框表单
            yhlbmkAddObj: {
                phone: "", // 用户手机号
                pwd: "", // 用户密码
                nickName: "", // 用户昵称
                hotbirdNum: "" // 用户BinGo号
            }
        };
    },
    created() {
        // 获取用户列表数据
        this.yhlbmkGetList(1, this.yhlbmkIsSearch);
    },
    methods: {
        // 用户列表的页码改变
        yhlbmkPageChange(currentPage) {
            this.yhlbmkGetList(currentPage, this.yhlbmkIsSearch); // 获取用户列表数据
        },
        // 获取用户列表数据（调用接口的）---接口
        yhlbmkGetList(currentPage, isSearch) {
            // currentPage：当前页数   isLimitTime：是否限制时间段
            console.log("获取第" + currentPage + "页数据");

            // 参数对象
            var params = {
                pageNum: currentPage, // 当前页码
                pageSize: 10, // 每页条数
            };
            console.log(params);
            // 模拟请求接口返回的数据
			let postData = this.$qs.stringify(params);
			console.log(postData)
			axios.post('/api/auction/auctionGrade/sys/init',postData)
				.then( (response)=> {
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
				.catch( (error)=> {
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
        yhlbmkSearch() {
            if (this.yhlbmkIpVal) {
                this.yhlbmkIsSearch = true; // 加入搜索词
                this.yhlbmkGetList(1, this.yhlbmkIsSearch); // 获取用户列表数据
            } else {
                Util.error("请输入BinGo号");
            }
        },
		//修改档次
		updateDc(params){
			this.yhlbmkModal=true;
			this.yhlbmkAddObj.auctionGradeName=params.auctionGradeName;
			//this.yhlbmkAddObj.amount=params.amount;
			this.yhlbmkAddObj.id=params.id;
		},
		// 点击新增用户的对话框的ok
		yhlbmkOk() {
			if (this.yhlbmkAddObj.auctionGradeName) {
				let params = {
					id:this.yhlbmkAddObj.id,
					auctionGradeName: this.yhlbmkAddObj.auctionGradeName, 
				};
				let postData = this.$qs.stringify(params);
				console.log(postData)
				axios.post('/api/auction/auctionGrade/sys/updateAuctionGrade',postData)
					.then( (response)=> {
						console.log(response)
						if(response.data.code==200){
							Util.success("修改成功");
							this.yhlbmkGetList(this.yhlbmktablePageData.pageNum, this.yhlbmkIsSearch);
							this.$nextTick(function(){
								this.$refs['pages'].currentPage = this.yhlbmktablePageData.pageNum;
							})
						}else{
							Util.error("修改失败"+response.data.msg);
						}
					})
					.catch( (error)=> {
						console.log(error);
					});
			} else {
				// 解决Modal表单验证中loading的bug
				Util.warning('输入正确的表单')
			}
			this.yhlbmkModal=false;
			setTimeout(() => {
				this.yhlbmkLoading = false;
				this.$nextTick(() => {
					this.yhlbmkLoading = true;
				});
			}, 10);
		},
		// 点击新增用户的对话框的取消
		yhlbmkCancel() {
			console.log("点击取消");
			// 清除表单
		}
    }
};
</script>
