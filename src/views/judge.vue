<!-- 下载页 -->
<style scoped>
.dmBox {
    width: 100%;
    height: 100%;
    background: #000000 !important;
}
.padtop {
    background: #000000;
    height: 75px;
    width: 100%;
    padding: 20px 15px;
}
.user {
    width: 170px;
    height: 35px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
}
.user img {
    height: 34px;
    width: 34px;
    object-fit: cover;
    border-radius: 16px;
    float: left;
}
.danmu {
    height: 115px;
    width: 100%;
    position: relative;
}
.imagebox {
    height: 260px;
    width: 100%;
}
.swiper-slide img {
    height: 260px;
    width: 100%;
    object-fit: cover;
}
.username {
    float: left;
    color: rgba(255, 255, 255, 1);
    margin-left: 5px;
}
.p1 {
    font-size: 12px;
}
.p2 {
    font-size: 12px;
    opacity: 0.8;
}
.gift {
    height: 45px;
    width: 43px;
    object-fit: cover;
    margin: 8px 12px;
}
.userbtm img {
    width: 18px;
    height: 18px;
    border-radius: 18px;
    float: left;
    margin-left: 12px;
}
.btmname {
    float: left;
    color: rgba(255, 255, 255, 1);
    margin-left: 5px;
    font-size: 14px;
}
.intro {
    height: 60px;
    width: 50%;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    margin: 10px 12px;
}
.showmore {
    color: rgba(225, 57, 59, 1);
    margin-left: 5px;
}
.comtext {
    float: left;
    width: 37%;
    height: 35px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 35px;
    margin-left: 12px;
}
input::-webkit-input-placeholder {
    color: rgba(238, 238, 238, 1);
}
.bottom {
    height: 35px;
    width: 100%;
    position: relative;
}
.bottom img {
    float: left;
    width: 9%;
}
.firstimg {
    height: 39px;
    margin-left: 7%;
}
.otherimg {
    height: 34px;
    margin-left: 4%;
}
.totalnum {
    width: 16px;
    height: 16px;
		line-height: 16px;
    background: rgba(247, 73, 63, 1);
    border-radius: 50%;
    text-align: center;
    color: #ffffff;
}
.num1 {
    position: absolute;
    top: -4px;
    left: 65%;
}
.num2 {
    position: absolute;
    top: -4px;
    left: 79%;
}
.detailbox {
    background:rgba(255,255,255,1);
		border-radius:10px;
    width: 80%;
    height: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
		z-index: 99999;
		margin-left: 10%;
		padding:0 15px
}
.box-top{
	text-align: center;
	height: 40px;
	line-height: 40px;
	width:100%;
	font-size: 14px;
	font-weight: bold;
	border-bottom:1px solid rgba(238,238,238,1);
}
.box-top img{
	height: 12px;
	width: 12px;
	float: right;
    margin-top: 12px;
}
.p3{
	font-size: 14px;
	font-weight: bold;
	color:rgba(51,51,51,1);
}
.p4{
	font-size: 12px;
	color:rgba(153,153,153,1);
}
.proname{
	font-size: 14px;
	font-weight: bold;
	color:rgba(51,51,51,1);
	clear: both;
	margin:20px 7px;
}
.commentbox{
	background:rgba(255,255,255,1);
	border-radius:10px 10px 0 0;
	width: 100%;
	height: 440px;
	position: fixed;
	bottom: 0;
	z-index: 9999;
	overflow: scroll;
}
.cotop{
	text-align: center;
	font-size: 15px;
height: 50px;
line-height: 50px;
padding: 0 15px;
font-weight: bold;
}
.cotop img{
	width: 9px;
	height: 15px;
float: left;
margin-top: 18px;
}
</style>
<template>
    <div class="dmBox">
			<div class="padtop">
				<div class="user">
					<img v-bind:src="info.icon" />
					<div class="username">
						<p class='p1'>{{info.userName}}</p>
						<p class="p2">{{info.area}}</p>
					</div>
				</div>
			</div>
			<div class="danmu"></div>
			<div class="imagebox">
				<div class="swiper-container">
					 <div class="swiper-wrapper">
							 <div class="swiper-slide">
								 <img src="https://cloudshell-cn-shanghai-jfittniogs.oss-cn-shanghai.aliyuncs.com/producttype/pic/2019/07/9251dbbf03d945069be09b45d8a111f5.jpg?Expires=1878542291&OSSAccessKeyId=LTAIz3qX7Lpr1Y7F&Signature=t8uqd4iLbKsKGQ0Q4B1dsx0YaEU%3D" />
							 </div>
							 <div class="swiper-slide"><img src="https://cloudshell-cn-shanghai-jfittniogs.oss-cn-shanghai.aliyuncs.com/producttype/pic/2019/07/74fcba75b4534d598e195d9ccf1baed1.jpg?Expires=1878542291&OSSAccessKeyId=LTAIz3qX7Lpr1Y7F&Signature=WqJgOpER0%2F%2BveWA8VCRhLXi2RGs%3D" /></div>
							 <div class="swiper-slide"><img src="https://cloudshell-cn-shanghai-jfittniogs.oss-cn-shanghai.aliyuncs.com/producttype/pic/2019/07/37f474e0648b4075a7ad0ff43d513ce7.jpg?Expires=1878542291&OSSAccessKeyId=LTAIz3qX7Lpr1Y7F&Signature=qY80hWF17g0TVl1wlPvtU%2Bsmmuc%3D" /></div>
						</div>
				</div>
			</div>
			<img class="gift"  src="../assets/img/gift.png"/>
			<div class="userbtm">
				<img v-bind:src="info.icon" />
				<div class="btmname">{{info.userName}}</div>
				<div style="clear: both;"></div>
			</div>
			<div class="intro">
				商品简介：{{info.productDetail}}<span class='showmore' @click="detailbox=true">查看更多></span>
			</div>
			<div class="bottom">
				<input class="comtext" type="text" placeholder="    说点什么 ~ "/>
				<img class="firstimg" src="../assets/img/build.png"/>
				<img class="otherimg" src="../assets/img/good.png" />
				<img class="otherimg" src="../assets/img/comment.png" @click="commentbox=true"/>
				<img class="otherimg" src="../assets/img/share.png" />
				<div class='totalnum num1'>{{info.dianzanNum}}</div>
				<div class='totalnum num2'>{{info.commentNum}}</div>
			</div>
			<div v-show="detailbox" class="detailbox">
				<div class="box-top">
						详情
						<img src="../assets/img/close.png" @click="detailbox=false"/>
				</div>
				<div class="user"  style="width: 100%;margin-top: 15px;">
					<img v-bind:src="info.icon" />
					<div class="username">
						<p class='p1 p3'>{{info.userName}}</p>
						<p class="p2 p4">{{showtime}}<span style="margin-left: 10px;">{{info.explainInfo}}</span></p>
					</div>
					<div style="clear: both;"></div>
				</div>
				<p class="proname">{{info.productName}}</p>
				<div style="margin-left: 7px;line-height: 21px;">{{info.productDetail}}</div>
			</div>
			<div v-show="commentbox" class="commentbox">
				<div class="cotop">
					<img src="../assets/img/fanhui@3x.png" @click="commentbox=false"/>
					评论</div>
			</div>
    </div>
</template>
<script>
import Util from '@/libs/util';
import Rule from '#/libs/rule';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Swiper from 'swiper';
import '@/libs/jquery.barrager.js';
var datas;
export default {
    name: 'result',
    components: {},
    data() {
        return {
            link: '',
            info: {},
						showtime:'',
						detailbox:false,
						commentbox:false,
        };
    },
    created() {
			this.initFormatter();
        axios
            .get('/api/auction/judge/sys/getProductDetailInfo', {
                params: {
                    pId: '627',
                    userId: '1160'
                }
            })
            .then(response => {
                var res = response.data;
                // this.yhlbmktablePageData = res.data;
                if (res.code == 200) {
                    this.info = res.data;
										this.showtime=new Date(this.info.pushTime).Format('MM-dd hh:mm:ss')
										
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true
        });
    },
    methods: {
			initFormatter() {
				Date.prototype.Format = function(fmt) {
					//
					let o = {
						'M+': this.getMonth() + 1, //月份
						'd+': this.getDate(), //日
						'h+': this.getHours(), //小时
						'm+': this.getMinutes(), //分
						's+': this.getSeconds(), //秒
						'q+': Math.floor((this.getMonth() + 3) / 3), //季度
						S: this.getMilliseconds() //毫秒
					};
					if (/(y+)/.test(fmt))
						fmt = fmt.replace(
							RegExp.$1,
							(this.getFullYear() + '').substr(4 - RegExp.$1.length)
						);
					for (var k in o)
						if (new RegExp('(' + k + ')').test(fmt))
							fmt = fmt.replace(
								RegExp.$1,
								RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
							);
					return fmt;
				};
			},
		}
};
$(function() {
    // 			Util.post('/auction/product/init', params).then(function (res) {
    // 		if (res && res.code == 0) {
    // 			return res.data;
    // 		} else {
    // 			return res.msg;
    // 		}
    // 	})
    axios
        .get('/api/auction/judge/sys/getProductDetailInfo', {
            params: {
                pId: '627',
                userId: '1160'
            }
        })
        .then(response => {
            var res = response.data;
            // this.yhlbmktablePageData = res.data;
            if (res.code == 200) {
                var datas = res.data;
                var arri = [];
                var comment = datas.comments;
                for (let i = 0; i < comment.length; i++) {
                    var item = {};
                    if (i % 3 == 0) {
                        item.top = 10;
                    } else if (i % 2 == 0) {
                        item.top = 40;
                    } else {
                        item.top = 70;
                    }
                    item.img = comment[i].icon;
                    item.info = comment[i].content;
                    arri.push(item);
                }
                var timer;
                var index = 0;
                timer = setInterval(function() {
                    if (index >= arri.length) {
                        clearInterval(timer);
                    } else {
                        $('.danmu').barrager(arri[index]);
                    }
                    index++;
                }, 800);
            }
        })
        .catch(error => {
            console.log(error);
        });
});
</script>
