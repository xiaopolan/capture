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
		<div class="success" v-if="status">
			<div class='logo_image'></div>
			<p>注册成功!</p>
			<p class='msgtext'>请打开app登录帐号</p>
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
            status:''
        };
    },
    created() {
		this.status=this.$route.query.status
		console.log(this.status)
    },
	mounted() {
	},
    methods: {
			
    }
};
</script>
