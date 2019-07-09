<!-- 登录页 -->
<style scoped>
	#body{
		background: #FFFFFF !important;
	}
	.registerBox{
		padding-top: 50px;
	}
	.success{
		width:100%;
		text-align: center;
		height:80px;
		line-height: 40px;
		font-size: 20px;
		color:#BA3238
	}
	.failed{
		width:100%;
		text-align: center;
		height:80px;
		line-height: 40px;
		font-size: 20px;
		color: #333333;
	}
	.msgtext{
		font-size: 16px;
	}
	.logo_image{
		width:80px;
		height:80px;
		background: url(../assets/img/success.png) no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
	}
	.logo_image2{
		width:50px;
		height:50px;
		background: url(../assets/img/fail.png) no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
		margin-bottom: 20px;
	}
</style>
<template>
    <div class="registerBox">
		<div class="success" v-if="!status">
			<div class='logo_image'></div>
			<p>注册成功!</p>
			<a class='msgtext' v-bind:href="link">点击下载app</a>
		</div>
		<div class="failed" v-else>
			<div class='logo_image2'></div>
			<p>注册失败!</p>
			<p class='msgtext' style="color: #999999;">请重新注册</p>
		</div>
    </div>
</template>
<script>
export default {
    name: "result",
    components: {},
    data() {
        return {
						link:"",
            status:''
        };
    },
    created() {
		this.status=this.$route.query.status
		console.log(this.status)
// 		var u = navigator.userAgent;
// 		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
// 				//安卓手机
// 				this.link="https://cloudshell-cn-shanghai-jfittniogs.oss-cn-shanghai.aliyuncs.com/app-release.apk.1?Expires=1561722673&OSSAccessKeyId=TMP.AgF-O4HvXI5js6AOhREYSBLjJC60zeeWd1oP_wyXfGBM_fhnUeACMpGFviIrMC4CFQDo0WGBA0DRDD6-HTzz-wvO3laf4AIVAICKfgsn3TJOtWwEf2bdPcuPXLOq&Signature=zkIX2rRa0JO7ZLDSrABNtA4PxfI%3D"
// 		} else if (u.indexOf('iPhone') > -1) {
// 				//苹果手机
// 		} else if (u.indexOf('Windows Phone') > -1) {
// 				//winphone手机
// 		}
    },
		activated(){
			 var u = navigator.userAgent;
			 if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
					 //安卓手机
					 alert("安卓")
					 this.link="https://cloudshell-cn-shanghai-jfittniogs.oss-cn-shanghai.aliyuncs.com/app-release.apk.1?Expires=1561722673&OSSAccessKeyId=TMP.AgF-O4HvXI5js6AOhREYSBLjJC60zeeWd1oP_wyXfGBM_fhnUeACMpGFviIrMC4CFQDo0WGBA0DRDD6-HTzz-wvO3laf4AIVAICKfgsn3TJOtWwEf2bdPcuPXLOq&Signature=zkIX2rRa0JO7ZLDSrABNtA4PxfI%3D"
			 } else if (u.indexOf('iPhone') > -1) {
					alert("iphone")
					 //苹果手机
			 } else if (u.indexOf('Windows Phone') > -1) {
					 //winphone手机
			 }
		},
		mounted() {
				
		},
    methods: {
			
    }
};
</script>
