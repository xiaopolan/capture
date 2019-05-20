<!-- 用户数据页 -->
<style lang="less" scoped>
.itemBox_yhsjlb {
    .remark_box{
        h3{
            display: inline-block;
        }
        p{
            display: inline-block;
        }
        .yhsjlb_slbox {
            float: right;
            margin-right: 40px;
            span {
                margin-right: 8px;
            }
        }
    }
    
}
.itemBox_lsltj,.itemBox_czyhtj,.itemBox_hyyhtj,.itemBox_xzyhtj {
    .remark_box{
        font-size: 14px;
        color: #495060;
        font-weight: bold;
        .col_sp_left{
            margin-left: 40px;
        }
        .title_itembox{
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            color: #495060;
        }
        .p_title_small{
            display: inline-block;
            margin-left: 5px;
            font-size: 12px;
            font-weight: normal;
            color: #495060;
        }
        .col_sp_right{
            margin-right: 40px;
        }
    }
    .tablepage_box{
        padding-bottom: 20px;
        .echartsBox{
            position: relative;
            .echarts{

            }
            .unitXaxis{
                position: absolute;
                right: 2%;
                bottom: 10px;
            }
            .legendSelf{
                position: absolute;
                left: 50%;
                top: 0px;
                // bottom: -60px;
                transform: translateX(-50%);
                .checkbox_div{
                    span{
                        float: left;
                        user-select:none;
                    }
                    .sp_bg{
                        width:14px;
                        height:14px;
                        margin-right: 8px;
                    }
                    .sp_text{
                        font-size: 14px;
                        line-height: 14px;
                    }
                }
            }
        }
    }
}
.itemBox_sbblt{
    .remark_box{
        .title_itembox{
            font-size: 16px;
            font-weight: bold;
            color: #495060;
        }
    }
    .tablepage_box{
        .sbblt_main{
            padding: 40px 5%;
            .sbblt_left{
                float: left;
                width: 35%;
                .echartsBox{

                }
            }
            .sbblt_right{
                float: left;
                width: 65%;
                height: 300px;
                display: flex;
                align-items: center;
                .item_sbbltBox{
                    width: 100%;
                    .sbblt_right_item{
                        float: left;
                        width: 100%;
                        .equipment_name{
                            float: left;
                            width: 30%;
                            line-height: 36px;
                            text-align: right;
                            padding-right: 16px;
                        }
                        .equipment_info{
                            float: left;
                            width: 60%;
                            height: 36px;
                            position: relative;
                            .equipment_color{
                                float: left;
                                width: 70%;
                                height: 24px;
                                margin-top: 6px;
                            }
                            .equipment_num{
                                position: absolute;
                                top: 0%;
                                left: 70%;
                                padding-left: 10px;
                                line-height: 36px;
                            }
                        }
                    }
                }
                
            }
        }
    }
}
</style>
<style lang="less">
.echartsBox{
    .legendSelf{
        .checkbox_div{
            .ivu-checkbox{
                float: left;
                margin-right: 3px; 
            }
            .ivu-checkbox-wrapper{
                font-size: 14px;
            }
        }
    }
}
.numjifen{
	color:red;
	margin-right: 10px;
}
</style>
<template>
    <div class="tabsBox_style">
        <Tabs type="card">
            <!-- 用户流失统计 -->
            <TabPane label="昨日积分概览">
                <!-- 七天同比提现金额 -->
                <div class="itemBox itemBox_lsltj">
                    <div class="remark_box">
						<Row>
							<Col span="24" style="textAlign:center;">
								<div class="title_itembox">平台总积分数：<span class="numjifen">2222</span></div>
								<div class="title_itembox">返利比例：<span class="numjifen">2222</span></div>
								<div class="title_itembox">返利金额：<span class="numjifen">2222</span></div>
								<div class="title_itembox">提现金额：<span class="numjifen">2222</span></div>
							</Col>
						</Row>
                        <Row>
                            <Col span="24" style="textAlign:center;">
                                <div class="title_itembox">七天同比提现金额</div>
                            </Col>
                        </Row>
                    </div>
                    <div class="tablepage_box" style="paddingTop:25px;">
                        <!-- echarts容器 -->
                        <div class="echartsBox">
                            <!-- echarts图 -->
                            <div 
                                class="echarts" 
                                id="lsltjEChartsLine"
                                :style="{width: '98%', height: '350px'}"
                            ></div>
                            <!-- 自制图例 -->
                            <!-- <div class="legendSelf">
                                <div class="checkbox_div clearfix" style="width:auto;">
                                    <div
                                        v-for="(item,index) in lsltjLegendData"
                                        style="float:left;margin:0px 15px;"
                                    >
                                        <span class="sp_bg" :style="{background:item.color}"></span>
                                        <span class="sp_text">{{item.name}}</span>
                                    </div>
                                </div>
                            </div> -->
                            <!-- 单位 -->
                            <div class="unitXaxis">日期</div>
                        </div>
                    </div>
                </div>
                <!-- 七天同比返利金额 -->
                <div class="itemBox itemBox_lsltj">
                    <div class="remark_box">
                        <Row>
                            <Col span="24" style="textAlign:center;">
                                <div class="title_itembox">七天同比返利金额</div>
                            </Col>
                        </Row>
                    </div>
                    <div class="tablepage_box" style="paddingTop:25px;">
                        <!-- echarts容器 -->
                        <div class="echartsBox">
                            <!-- echarts图 -->
                            <div 
                                class="echarts" 
                                id="lsyhtjEChartsLine"
                                :style="{width: '98%', height: '350px'}"
                            ></div>
                            <!-- 自制图例 -->
                            <!-- <div class="legendSelf">
                                <div class="checkbox_div clearfix" style="width:auto;">
                                    <div
                                        v-for="(item,index) in lsyhtjLegendData"
                                        style="float:left;margin:0px 15px;"
                                    >
                                        <span class="sp_bg" :style="{background:item.color}"></span>
                                        <span class="sp_text">{{item.name}}</span>
                                    </div>
                                </div>
                            </div> -->
                            <!-- 单位 -->
                            <div class="unitXaxis">日期</div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <!-- 今日订单概览 -->
            <TabPane label="今日订单概览">
				<div class="itemBox itemBox_sbblt">
					<div class="remark_box">
						<Row>
							<Col span="24" style="textAlign:center;">
								<div class="title_itembox">订单数：<span class="numjifen">2222</span></div>
								<div class="title_itembox">订单总金额：<span class="numjifen">2222</span></div>
							</Col>
						</Row>
						<Row>
							<Col span="24" style="textAlign:center;">
								<div class="title_itembox">按竞拍档次分类</div>
							</Col>
						</Row>
					</div>
					<div class="tablepage_box">
						<div class="sbblt_main clearfix">
							<div class="sbblt_left">
								<div 
									class="echartsBox"
									id="sbbltEChartsPie"
									:style="{width: '100%', height: '300px'}"
								></div>
							</div>
							<div class="sbblt_right">
								<div class="item_sbbltBox clearfix">
									<div class="sbblt_right_item" v-for="(item,index) in sbbltApiData" :key="index">
										<div class="equipment_name">{{item.name}}</div>
										<div class="equipment_info">
											<div class="equipment_color" :style="{width:item.percent+'%',background:item.bgcolor}"></div>
											<div class="equipment_num" :style="{left:item.percent+'%'}">{{item.value}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div class="itemBox itemBox_czyhtj">
                    <div class="remark_box">
                        <Row>
                            <Col span="8" style="textAlign:center;height:30px"></Col>
                            <Col span="8" style="textAlign:center;">
                                <div class="title_itembox">七天同比订单数</div>
                            </Col>
                            <Col span="8" style="textAlign:right;">
                                <Select
                                    v-model="czyhtjStatisticsType"
                                    size="small"
                                    placeholder="请选择统计方式"
                                    @on-change="czyhtjSelectChange"
                                    style="width:120px;textAlign:left;marginRight:40px;fontWeight:normal;"
                                >
                                    <Option value="" disabled>请选择统计方式</Option>
                                    <Option value="day">按日期统计</Option>
                                    <Option value="month">按月份统计</Option>
                                    <Option value="quarter">按季度统计</Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <div class="tablepage_box" style="paddingTop:25px;">
                        <!-- echarts容器 -->
                        <div class="echartsBox">
                            <!-- echarts图 -->
                            <div 
                                class="echarts" 
                                id="czyhtjEChartsLine"
                                :style="{width: '98%', height: '350px'}"
                            ></div>
                            <!-- 自制图例 -->
                            <!-- <div class="legendSelf">
                                <div class="checkbox_div clearfix" style="width:auto;">
                                    <div
                                        v-for="(item,index) in czyhtjLegendData"
                                        style="float:left;margin:0px 15px;"
                                    >
                                        <span class="sp_bg" :style="{background:item.color}"></span>
                                        <span class="sp_text">{{item.name}}</span>
                                    </div>
                                </div>
                            </div> -->
                            <!-- 单位 -->
                            <div class="unitXaxis">{{czyhtjUnit}}</div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <!-- 今日用户概览 -->
            <TabPane label="今日用户概览">
                <div class="itemBox itemBox_hyyhtj">
                    <div class="remark_box">
                        <Row>
                            <Col span="8" style="textAlign:center;height:30px"></Col>
                            <Col span="8" style="textAlign:center;">
                                <div class="title_itembox">今日用户概览</div>
                            </Col>
                            <Col span="8" style="textAlign:right;">
                                <Select
                                    v-model="hyyhtjStatisticsType"
                                    size="small"
                                    placeholder="请选择统计方式"
                                    @on-change="hyyhtjSelectChange"
                                    style="width:120px;textAlign:left;marginRight:40px;fontWeight:normal;"
                                >
                                    <Option value="" disabled>请选择统计方式</Option>
                                    <Option value="day">按日期统计</Option>
                                    <Option value="month">按月份统计</Option>
                                    <Option value="quarter">按季度统计</Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <div class="tablepage_box" style="paddingTop:25px;">
                        <!-- echarts容器 -->
                        <div class="echartsBox">
                            <!-- echarts图 -->
                            <div 
                                class="echarts" 
                                id="hyyhtjEChartsLine"
                                :style="{width: '98%', height: '350px'}"
                            ></div>
                            <!-- 自制图例 -->
                            <!-- <div class="legendSelf">
                                <div class="checkbox_div clearfix" style="width:auto;">
                                    <div
                                        v-for="(item,index) in hyyhtjLegendData"
                                        style="float:left;margin:0px 15px;"
                                    >
                                        <span class="sp_bg" :style="{background:item.color}"></span>
                                        <span class="sp_text">{{item.name}}</span>
                                    </div>
                                </div>
                            </div> -->
                            <!-- 单位 -->
                            <div class="unitXaxis">{{hyyhtjUnit}}</div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <!-- 今日保证金概览 -->
            <TabPane label="今日保证金概览">
                <div class="itemBox itemBox_xzyhtj">
                    <div class="remark_box">
                        <Row>
                            <Col span="8" style="textAlign:center;height:30px"></Col>
                            <Col span="8" style="textAlign:center;">
                                <div class="title_itembox">今日保证金概览</div>
                            </Col>
                            <Col span="8" style="textAlign:right;">
                                <Select
                                    v-model="xzyhtjStatisticsType"
                                    size="small"
                                    placeholder="请选择统计方式"
                                    @on-change="xzyhtjSelectChange"
                                    style="width:120px;textAlign:left;marginRight:40px;fontWeight:normal;"
                                >
                                    <Option value="" disabled>请选择统计方式</Option>
                                    <Option value="day">按日期统计</Option>
                                    <Option value="month">按月份统计</Option>
                                    <Option value="quarter">按季度统计</Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <div class="tablepage_box" style="paddingTop:25px;">
                        <!-- echarts容器 -->
                        <div class="echartsBox">
                            <!-- echarts图 -->
                            <div 
                                class="echarts" 
                                id="xzyhtjEChartsLine"
                                :style="{width: '98%', height: '350px'}"
                            ></div>
                            <!-- 自制图例 -->
                            <!-- <div class="legendSelf">
                                <div class="checkbox_div clearfix" style="width:auto;">
                                    <div
                                        v-for="(item,index) in xzyhtjLegendData"
                                        style="float:left;margin:0px 15px;"
                                    >
                                        <span class="sp_bg" :style="{background:item.color}"></span>
                                        <span class="sp_text">{{item.name}}</span>
                                    </div>
                                </div>
                            </div> -->
                            <!-- 单位 -->
                            <div class="unitXaxis">{{xzyhtjUnit}}</div>
                        </div>
                    </div>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
// 引入通用的库文件
import Util from "@/libs/util";

export default {
    name: "mainManage",
    data() {
        return {
            // 近15日用户流失率统计图相关
            lsltjEchartsObj: {}, // echarts实例对象
            lsltjLegendData: [], // 图例数据
            // 近15日流失用户数统计图相关
            lsyhtjEchartsObj: {}, // echarts实例对象
            lsyhtjLegendData: [], // 图例数据
            // 充值用户统计图相关
            czyhtjEchartsObj: {}, // echarts实例对象
            czyhtjLegendData: [], // 图例数据
            czyhtjApiData: {}, // 接口数据
            czyhtjStatisticsType: 'day', // 统计方式
            czyhtjUnit: '日期', // 单位
            // 活跃用户统计图相关
            hyyhtjEchartsObj: {}, // echarts实例对象
            hyyhtjLegendData: [], // 图例数据
            hyyhtjApiData: {}, // 接口数据
            hyyhtjStatisticsType: 'day', // 统计方式
            hyyhtjUnit: '日期', // 单位
            // 新增用户统计图相关
            xzyhtjEchartsObj: {}, // echarts实例对象
            xzyhtjLegendData: [], // 图例数据
            xzyhtjApiData: {}, // 接口数据
            xzyhtjStatisticsType: 'day', // 统计方式
            xzyhtjUnit: '日期', // 单位
            // 用户设备比例图相关
            sbbltEChartsObj: {}, // 充值用户比例echarts实例对象
            sbbltApiData: [], // 接口数据
            sbbltPieColor: ['#FF9900', '#E80000', '#196CF5', '#00E03F', '#00DDE0', '#B800E0'],   // 饼图颜色
        };
    },
    created() {
        
    },
    mounted () {
        // 获取近15日用户流失数据（调用接口的）---接口
        this.getStatisticsData();
        // 获取充值用户统计数据（调用接口的）---接口
        this.czyhtjGetStatisticsData();
        // 获取活跃用户统计数据（调用接口的）---接口
        this.hyyhtjGetStatisticsData();
        // 获取新增用户统计数据（调用接口的）---接口
        this.xzyhtjGetStatisticsData();
        // 获取用户设备统计数据
        this.sbbltGetStatisticsData();
    },
    methods: {
        // 获取近15日用户流失数据（调用接口的）---接口
        getStatisticsData() {
            // 参数对象
            var params = {
                days: 15
            };
            console.log(params);
            // 模拟请求接口返回的数据
            var res = [
                {
                    // 日期
                    date: '2018.12.28',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                    withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 15000,
                    // 流失率
                    lossRate: '25%',
                },
                {
                    // 日期
                    date: '2018.12.29',
                    // 总用户量
                    userNum: 12000,
                    // 总充值金额
                    rechargeAmount: 22000,
                    // 总视频量
                    videoNum: 32000,
                    // 总积分
                    integralNum: 42000,
                    // 返现总额
                    cashbackAmount: 52000,
                    // 充值总用户数
                    rechargeUserNum: 62000,
                    // 提现总额
                     withdrawCashAmount: 72000,
                    // 流失用户数
                    lossUserNum: 14000,
                    // 流失率
                    lossRate: '24%',
                },
                {
                    // 日期
                    date: '2018.12.30',
                    // 总用户量
                    userNum: 13000,
                    // 总充值金额
                    rechargeAmount: 23000,
                    // 总视频量
                    videoNum: 33000,
                    // 总积分
                    integralNum: 43000,
                    // 返现总额
                    cashbackAmount: 53000,
                    // 充值总用户数
                    rechargeUserNum: 63000,
                    // 提现总额
                     withdrawCashAmount: 73000,
                    // 流失用户数
                    lossUserNum: 13000,
                    // 流失率
                    lossRate: '23%',
                },
                {
                    // 日期
                    date: '2018.12.31',
                    // 总用户量
                    userNum: 14000,
                    // 总充值金额
                    rechargeAmount: 24000,
                    // 总视频量
                    videoNum: 34000,
                    // 总积分
                    integralNum: 44000,
                    // 返现总额
                    cashbackAmount: 54000,
                    // 充值总用户数
                    rechargeUserNum: 64000,
                    // 提现总额
                     withdrawCashAmount: 74000,
                    // 流失用户数
                    lossUserNum: 12000,
                    // 流失率
                    lossRate: '22%',
                },
                {
                    // 日期
                    date: '2019.1.1',
                    // 总用户量
                    userNum: 15000,
                    // 总充值金额
                    rechargeAmount: 25000,
                    // 总视频量
                    videoNum: 35000,
                    // 总积分
                    integralNum: 45000,
                    // 返现总额
                    cashbackAmount: 55000,
                    // 充值总用户数
                    rechargeUserNum: 65000,
                    // 提现总额
                     withdrawCashAmount: 75000,
                    // 流失用户数
                    lossUserNum: 11000,
                    // 流失率
                    lossRate: '21%',
                },
                {
                    // 日期
                    date: '2019.1.2',
                    // 总用户量
                    userNum: 16000,
                    // 总充值金额
                    rechargeAmount: 26000,
                    // 总视频量
                    videoNum: 36000,
                    // 总积分
                    integralNum: 46000,
                    // 返现总额
                    cashbackAmount: 56000,
                    // 充值总用户数
                    rechargeUserNum: 66000,
                    // 提现总额
                     withdrawCashAmount: 76000,
                    // 流失用户数
                    lossUserNum: 10000,
                    // 流失率
                    lossRate: '20%',
                },
                {
                    // 日期
                    date: '2019.1.3',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 9000,
                    // 流失率
                    lossRate: '19%',
                },
                {
                    // 日期
                    date: '2019.1.4',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 8000,
                    // 流失率
                    lossRate: '18%',
                },
                {
                    // 日期
                    date: '2018.1.5',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 7000,
                    // 流失率
                    lossRate: '17%',
                },
                {
                    // 日期
                    date: '2018.1.6',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 6000,
                    // 流失率
                    lossRate: '16%',
                },
                {
                    // 日期
                    date: '2018.1.7',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 5000,
                    // 流失率
                    lossRate: '15%',
                },
                {
                    // 日期
                    date: '2018.1.8',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 4000,
                    // 流失率
                    lossRate: '14%',
                },
                {
                    // 日期
                    date: '2018.1.9',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 3000,
                    // 流失率
                    lossRate: '13%',
                },
                {
                    // 日期
                    date: '2018.1.10',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 2000,
                    // 流失率
                    lossRate: '12%',
                },
                {
                    // 日期
                    date: '2018.1.11',
                    // 总用户量
                    userNum: 11000,
                    // 总充值金额
                    rechargeAmount: 21000,
                    // 总视频量
                    videoNum: 31000,
                    // 总积分
                    integralNum: 41000,
                    // 返现总额
                    cashbackAmount: 51000,
                    // 充值总用户数
                    rechargeUserNum: 61000,
                    // 提现总额
                     withdrawCashAmount: 71000,
                    // 流失用户数
                    lossUserNum: 1000,
                    // 流失率
                    lossRate: '11%',
                },
            ];    

            // 近15日用户流失率统计图
            var lsltjXAxisData = []; // x轴数据
            var lsltjLossRate = []; // 流失率

            // 近15日流失用户数统计图
            var lsyhtjXAxisData = []; // x轴数据
            var lsyhtjLossRate = []; // 流失率

            for(var i = 0; i<res.length;i++){
                // 近15日用户流失率统计图 
                lsltjXAxisData[i] = res[i].date.slice(5); // 日期去掉年份
                lsltjLossRate[i] = Number(res[i].lossRate.substr(0, res[i].lossRate.length-1)); // 流失率

                // 近15日流失用户数统计图 
                lsyhtjXAxisData[i] = res[i].date.slice(5); // 日期去掉年份
                lsyhtjLossRate[i] = res[i].lossUserNum; // 流失用户数
            }
            
            // 近15日用户流失率统计图
            // 折线数据
            var lsltjSeriesData = [
                {
                    name:'流失率',
                    data:lsltjLossRate
                }
            ];
            // 绘制折线图
            this.drawLine('lsltj',lsltjSeriesData,lsltjXAxisData);

            // 近15日流失用户数统计图
            // 折线数据
            var lsyhtjSeriesData = [
                {
                    name:'流失用户数',
                    data:lsyhtjLossRate
                }
            ];
            // 绘制折线图
            this.drawLine('lsyhtj',lsyhtjSeriesData,lsyhtjXAxisData);
        },
        // 绘制折线图
        drawLine(divName, seriesData, xAxisData){
            // divId：div的id  seriesData：折线数据   xAxisData：x轴数据
            this[divName+"EchartsObj"] = this.$echarts.init(document.getElementById(divName+"EChartsLine"));
            // 颜色
            var color = ['#FF0000', '#00FFFF', '#99FF33', '#FFCD03'];
            // 折线数据
            var series = [];
            // 自定义样式的图例数据数组
            var legendDataArr = [];
            // echarts图例数据
            var legendData = [];
            for(var i=0;i<seriesData.length;i++){
                var obj = seriesData[i];
                legendDataArr[i] = {};
                legendDataArr[i].name = seriesData[i].name;
                legendDataArr[i].color = color[i];
                legendData[i]= seriesData[i].name;
                obj.type = 'line';
                series[i] = obj;
            }
            this[divName+"LegendData"] = legendDataArr;
            console.log(this[divName+"LegendData"]);
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show:false,
                    data: legendData,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    top:'3%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    data: xAxisData
                },
                yAxis: {
                    type: 'value'
                },
                series: series,
                color: color
            };
            // 特殊处理
            if(divName == 'lsltj'){
                option.tooltip.formatter = '{a0}：{c0}%';
            }
            // 使用刚指定的配置项和数据显示图表。
            this[divName+"EchartsObj"].setOption(option);
        },
        // 图例的复选框发生变化
        legendShowChange(event,divName,name){
            // x：变化的值   name：图例的name
            // 调用echarts的api，切换图例状态
            this[divName+'EchartsObj'].dispatchAction({
                type: 'legendToggleSelect',
                // 图例名称
                name: name
            });
        },
        // 折线图数据设置
        lineDataSet(divName, dataName, lineData){
            // divName：div名字（echarts对象名字）  dataName：数据内容的名字    lineData：折线图数据
            var xAxisData = []; // x轴数据
            var yAxisData = []; // y轴数据
            for(var i = 0; i<lineData.length;i++){
                xAxisData[i] = lineData[i].key; // x轴
                yAxisData[i] = lineData[i].value; // y轴
            }
            // 折线数据
            var seriesData = [
                {
                    name: dataName,
                    data: yAxisData
                }
            ];
            // 绘制折线图
            this.drawLine(divName, seriesData, xAxisData);
        },
        // 获取充值用户统计数据（调用接口的）---接口
        czyhtjGetStatisticsData() {
            // 参数对象
            var params = {
                days: 15
            };
            console.log(params);
            // 模拟请求接口返回的数据
            var res = {
                // 日期统计数据
                day: [
                    {
                        // 日期
                        key: '2018.12.1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.2',
                        // 充值用户量
                        value: 1220,
                    },
                    {
                        // 日期
                        key: '2018.12.3',
                        // 充值用户量
                        value: 1320,
                    },
                    {
                        // 日期
                        key: '2018.12.4',
                        // 充值用户量
                        value: 1420,
                    },
                    {
                        // 日期
                        key: '2018.12.5',
                        // 充值用户量
                        value: 2222,
                    },
                    {
                        // 日期
                        key: '2018.12.6',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    }
                ],
                // 月份统计数据
                month: [
                    {
                        // 月份
                        key: '1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 月份
                        key: '2',
                        // 充值用户量
                        value: 1220,
                    },
                    {
                        // 月份
                        key: '3',
                        // 充值用户量
                        value: 1320,
                    },
                    {
                        // 月份
                        key: '4',
                        // 充值用户量
                        value: 1420,
                    },
                    {
                        // 月份
                        key: '5',
                        // 充值用户量
                        value: 1520,
                    },
                    {
                        // 月份
                        key: '6',
                        // 充值用户量
                        value: 1620,
                    },
                    {
                        // 月份
                        key: '7',
                        // 充值用户量
                        value: 1720,
                    },
                    {
                        // 月份
                        key: '8',
                        // 充值用户量
                        value: 1820,
                    },
                    {
                        // 月份
                        key: '9',
                        // 充值用户量
                        value: 1920,
                    },
                    {
                        // 月份
                        key: '10',
                        // 充值用户量
                        value: 2020,
                    },
                    {
                        // 月份
                        key: '11',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 月份
                        key: '12',
                        // 充值用户量
                        value: 1120,
                    }
                ],
                // 季度统计数据
                quarter: [
                    {
                        // 季度
                        key: 'Q1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q2',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q3',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q4',
                        // 充值用户量
                        value: 1120,
                    }
                ]
            };
            for(var i=0;i<res.day.length;i++){
                res.day[i].key = res.day[i].key.slice(5); // 日期去掉年份
            }
            // 存一下接口数据
            this.czyhtjApiData = res;
            // 折线图数据设置---默认显示日期统计
            this.lineDataSet("czyhtj", "充值用户", this.czyhtjApiData['day']);
        },
        // 充值用户统计的统计方式发生改变
        czyhtjSelectChange(type){
            // console.log(type);
            if(type=="day"){
                this.czyhtjUnit = '日期';
            }else if(type=="month"){
                this.czyhtjUnit = '月份';
            }else if(type=="quarter"){
                this.czyhtjUnit = '季度';
            }
            // 折线图数据设置---默认显示日期统计
            this.lineDataSet("czyhtj", "充值用户", this.czyhtjApiData[type]);
        },
        // 获取活跃用户统计数据（调用接口的）---接口
        hyyhtjGetStatisticsData() {
            // 参数对象
            var params = {
                days: 15
            };
            console.log(params);
            // 模拟请求接口返回的数据
            var res = {
                // 日期统计数据
                day: [
                    {
                        // 日期
                        key: '2018.12.1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.2',
                        // 充值用户量
                        value: 1220,
                    },
                    {
                        // 日期
                        key: '2018.12.3',
                        // 充值用户量
                        value: 1320,
                    },
                    {
                        // 日期
                        key: '2018.12.4',
                        // 充值用户量
                        value: 1420,
                    },
                    {
                        // 日期
                        key: '2018.12.5',
                        // 充值用户量
                        value: 2222,
                    },
                    {
                        // 日期
                        key: '2018.12.6',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    }
                ],
                // 月份统计数据
                month: [
                    {
                        // 月份
                        key: '1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 月份
                        key: '2',
                        // 充值用户量
                        value: 1220,
                    },
                    {
                        // 月份
                        key: '3',
                        // 充值用户量
                        value: 1320,
                    },
                    {
                        // 月份
                        key: '4',
                        // 充值用户量
                        value: 1420,
                    },
                    {
                        // 月份
                        key: '5',
                        // 充值用户量
                        value: 1520,
                    },
                    {
                        // 月份
                        key: '6',
                        // 充值用户量
                        value: 1620,
                    },
                    {
                        // 月份
                        key: '7',
                        // 充值用户量
                        value: 1720,
                    },
                    {
                        // 月份
                        key: '8',
                        // 充值用户量
                        value: 1820,
                    },
                    {
                        // 月份
                        key: '9',
                        // 充值用户量
                        value: 1920,
                    },
                    {
                        // 月份
                        key: '10',
                        // 充值用户量
                        value: 2020,
                    },
                    {
                        // 月份
                        key: '11',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 月份
                        key: '12',
                        // 充值用户量
                        value: 1120,
                    }
                ],
                // 季度统计数据
                quarter: [
                    {
                        // 季度
                        key: 'Q1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q2',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q3',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q4',
                        // 充值用户量
                        value: 1120,
                    }
                ]
            };
            for(var i=0;i<res.day.length;i++){
                res.day[i].key = res.day[i].key.slice(5); // 日期去掉年份
            }
            // 存一下接口数据
            this.hyyhtjApiData = res;
            // 折线图数据设置---默认显示日期统计
            this.lineDataSet("hyyhtj", "活跃用户", this.hyyhtjApiData['day']);
        },
        // 活跃用户统计的统计方式发生改变
        hyyhtjSelectChange(type){
            // console.log(type);
            if(type=="day"){
                this.hyyhtjUnit = '日期';
            }else if(type=="month"){
                this.hyyhtjUnit = '月份';
            }else if(type=="quarter"){
                this.hyyhtjUnit = '季度';
            }
            // 折线图数据设置---默认显示日期统计
            this.lineDataSet("hyyhtj", "活跃用户", this.hyyhtjApiData[type]);
        },
        // 获取新增用户统计数据（调用接口的）---接口
        xzyhtjGetStatisticsData() {
            // 参数对象
            var params = {
                days: 15
            };
            console.log(params);
            // 模拟请求接口返回的数据
            var res = {
                // 日期统计数据
                day: [
                    {
                        // 日期
                        key: '2018.12.1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.2',
                        // 充值用户量
                        value: 1220,
                    },
                    {
                        // 日期
                        key: '2018.12.3',
                        // 充值用户量
                        value: 1320,
                    },
                    {
                        // 日期
                        key: '2018.12.4',
                        // 充值用户量
                        value: 1420,
                    },
                    {
                        // 日期
                        key: '2018.12.5',
                        // 充值用户量
                        value: 2222,
                    },
                    {
                        // 日期
                        key: '2018.12.6',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 日期
                        key: '2018.12.28',
                        // 充值用户量
                        value: 1120,
                    }
                ],
                // 月份统计数据
                month: [
                    {
                        // 月份
                        key: '1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 月份
                        key: '2',
                        // 充值用户量
                        value: 1220,
                    },
                    {
                        // 月份
                        key: '3',
                        // 充值用户量
                        value: 1320,
                    },
                    {
                        // 月份
                        key: '4',
                        // 充值用户量
                        value: 1420,
                    },
                    {
                        // 月份
                        key: '5',
                        // 充值用户量
                        value: 1520,
                    },
                    {
                        // 月份
                        key: '6',
                        // 充值用户量
                        value: 1620,
                    },
                    {
                        // 月份
                        key: '7',
                        // 充值用户量
                        value: 1720,
                    },
                    {
                        // 月份
                        key: '8',
                        // 充值用户量
                        value: 1820,
                    },
                    {
                        // 月份
                        key: '9',
                        // 充值用户量
                        value: 1920,
                    },
                    {
                        // 月份
                        key: '10',
                        // 充值用户量
                        value: 2020,
                    },
                    {
                        // 月份
                        key: '11',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 月份
                        key: '12',
                        // 充值用户量
                        value: 1120,
                    }
                ],
                // 季度统计数据
                quarter: [
                    {
                        // 季度
                        key: 'Q1',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q2',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q3',
                        // 充值用户量
                        value: 1120,
                    },
                    {
                        // 季度
                        key: 'Q4',
                        // 充值用户量
                        value: 1120,
                    }
                ]
            };
            for(var i=0;i<res.day.length;i++){
                res.day[i].key = res.day[i].key.slice(5); // 日期去掉年份
            }
            // 存一下接口数据
            this.xzyhtjApiData = res;
            // 折线图数据设置---默认显示日期统计
            this.lineDataSet("xzyhtj", "充值用户", this.xzyhtjApiData['day']);
        },
        // 新增用户统计的统计方式发生改变
        xzyhtjSelectChange(type){
            // console.log(type);
            if(type=="day"){
                this.xzyhtjUnit = '日期';
            }else if(type=="month"){
                this.xzyhtjUnit = '月份';
            }else if(type=="quarter"){
                this.xzyhtjUnit = '季度';
            }
            // 折线图数据设置---默认显示日期统计
            this.lineDataSet("xzyhtj", "充值用户", this.xzyhtjApiData[type]);
        },
        // 获取用户设备统计数据（调用接口的）---接口
        sbbltGetStatisticsData(){
            // 参数对象
            var params = {};
            console.log(params);
            // 模拟请求接口返回的数据
            var res = [
                {
                    name:'iPhone 8',
                    value: 157847,
                },
                {
                    name:'iPhoneX',
                    value: 107847,
                },
                {
                    name:'华为 MATE20',
                    value: 97847,
                },
                {
                    name:'iPhone XR',
                    value: 87847,
                },
                {
                    name:'三星Galaxy S9+',
                    value: 17847,
                },
                {
                    name:'其他',
                    value: 137847,
                }
            ];

            // api数据---比例图右侧需要用
            var apiData = res;
            var mixNum = res[0].value; // 最大的设备量
            if(mixNum < res[res.length-1].value){
                // 设备最多的一项 < 其他设备量（除了前5的和）
                mixNum = res[res.length-1].value;
            }
            for(var i=0;i<apiData.length;i++){
                apiData[i].bgcolor = this.sbbltPieColor[i];
                apiData[i].percent = Math.floor((apiData[i].value/mixNum)*100);
            }
            this.sbbltApiData = apiData;
            
            // 饼图数据
            var pieEChartsData = res;
            // 绘制饼图
            this.drawPie('sbblt', pieEChartsData, this.sbbltPieColor);
        },
        // 绘制饼图
        drawPie(divName, pieDate, color){
            this[divName+'EChartsObj'] = this.$echarts.init(document.getElementById(divName+'EChartsPie'));
            // 饼图数据
            var series = [];
            for(var i=0;i<pieDate.length;i++){
                series[i] = pieDate[i];
            }
            // 指定图表的配置项和数据
            var option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                series : [
                    {
                        name: divName+'比例图',
                        type: 'pie',
                        radius : '90%',
                        center: ['50%', '50%'],
                        data:series,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        
                        //标签
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: '{d}%',
                                textStyle : {                   
                                    align : 'center',
                                    baseline : 'middle',
                                    fontFamily : '微软雅黑',
                                    fontSize : 12,
                                }
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        }
                    }
                ],
                color:color
            };

            // 使用刚指定的配置项和数据显示图表。
            this[divName+'EChartsObj'].setOption(option);
        },
    }
};
</script>
