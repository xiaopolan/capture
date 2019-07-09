import Vue from 'vue';
import VueRouter from 'vue-router';

// 获取环境变量和模式
// var env = process.env.NODE_ENV;
// console.log(env);

// 引入清除样式
import '#/assets/css/reset.less';
// 引入iview组件库对应的css
// import 'iview/dist/styles/iview.css';
// 引入公共样式
import '#/assets/css/common.less';

// 引入根组件
import App from './App.vue';

// 引入通用的库文件
import Util from '#/libs/util';
// 引入路由信息数组
import Routers from './router';
// 引入iview组件库
import iView from 'iview';
// 引入echarts
import echarts from 'echarts';
// 引入jquery
// import "jquery";
import QS from 'querystring';
Vue.prototype.$qs = QS;
Vue.prototype.$echarts = echarts; // 为vue的原型添加echarts
Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
   // mode: 'history',
    routes: Routers
}; // 初始路由配置

const router = new VueRouter(RouterConfig); // 新建路由对象
Util.router(router); // Util.router()：获取或者设置全局路由
// // router.beforeEach：注册一个全局前置守卫。作用是 路由跳转前验证，比如登录验证
router.beforeEach((to, from, next) => {
    // 控制进度条回到顶部
    document.documentElement.scrollTop ? document.documentElement.scrollTop = 0 : document.body.scrollTop = 0;
		if(sessionStorage.getItem('objStr')){
			var objsession=JSON.parse(sessionStorage.getItem('objStr'))
			console.log(objsession)
		}else{
			var objsession={
					permissionSign:2
				}
		}
		//若没有登录信息 则返回登录页面
		if(to.fullPath.indexOf("register") || to.fullPath.indexOf("vipdetail")){
			next();
		}else{
			if(objsession.permissionSign != 0 && objsession.permissionSign != 1){
				if(to.path === '/login'){
					next()
				}else{
					next({path: '/login'})
				}
			}
		}
		if(to.meta.title){
			document.title=to.meta.title
		}
    next();
// 	// to：即将要进入的目标 路由对象，from：当前导航正要离开的路由 
// 	if (to.path != '/login' && !to.meta.noCheckLogin && (!Util.cookie('token') || (from.path != '/login' && !Util.user().actor))) {
// 		/*
// 			同时满足条件1、2、3，才会跳转到登录页 
// 				1、目标路由对象的路径不是登录
// 				2、目标路由对象的路由元的noCheckLogin为false
// 				3、没有登录的cookie  或者  当前路由对象的路径不是登录并且没有登录标记
// 		*/
// 		// 执行跳转到登录的方法
// 		Util.goLogin('0x2', to); // 0x2为N的编码
// 	} else if (to.matched.length === 0) {
// 		// to.matched：目标路由对象的的路由及子路由
// 		// 目标路由对象的的路由及子路由为空，页面不存在
// 		Util.warning('页面不存在，已重定向到首页！');
// 		next('/'); // 跳转到首页
// 	} else {
// 		iView.LoadingBar.start(); // 进度条开始
// 		next(); // 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。即跳转到目标导航
// 	}
});
// // router.afterEach：全局后置钩子。
// router.afterEach(() => {
// 	iView.LoadingBar.finish(); // 结束进度条
// 	window.scrollTo(0, 0); // 滚动条滑到顶部
// });

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')