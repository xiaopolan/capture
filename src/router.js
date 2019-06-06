// 导入封装的库
import util from '#/libs/util';
var $Util = util;

// 全部导航（特殊登录）
const modules = {
    admin: {
		systemManage: {
			title: '主页',
			icon: 'left_nav5.png',
			list: {
				mainManage: {
					title: '主页'
				},
			}
		},
        operationManage: {
            title: '运营管理',
            icon: 'left_nav1.png',
            list: {
				yunyinSet:{
					title:"运营设置"
				},
				yinxiaoSet:{
					title:"营销设置"
				},
				imgSet:{
					title:"图片设置"
				},
				messageSet:{
					title:"消息推送"
				},
            }
        },
        userManage: {
            title: '用户管理',
            icon: 'left_nav2.png',
            list: {
                userList: {
                    title: '用户信息管理'
                },
                originalUserAudit: {
                    title: '保证金管理'
                },
                hvUserAudit: {
                    title: '返利管理'
                },
                lvUserAudit: {
                    title: '积分管理'
                },
				mingxi:{
					title:'保证金明细'
				}
            }
        },
        captureManage: {
            title: '竞拍管理',
            icon: 'left_nav3.png',
            list: {
                dangciAudit: {
                    title: '竞拍档次管理'
                },
                changciAudit: {
                    title: '竞拍场次管理'
                },
                zidongAudit:{
                    title: '自动场规则管理'
                }
            }
        },
        dataManage: {
            title: '商品管理',
            icon: 'left_nav4.png',
            list: {
                dataOverview: {
                    title: '商品管理'
                },
				classifyManage:{
					title:'分类管理'
				},
                userData: {
                    title: '订单管理'
                },
				tranData: {
					title: '交易单管理'
				},
				demand: {
					title: '交易需求管理'
				},
				goodChoise:{
					title:'选择商品'
				}
            }
        }
    }
};

// 部分导航（普通登录）
const admintor = {
    admin: {
        videoManage: {
        	title: '竞拍管理',
        	icon: 'left_nav3.png',
        	list: {
        		videoAudit: {
        			title: '竞拍档次管理'
        		},
        		seniorVideoAudit: {
        			title: '竞拍场次管理'
        		},
        		dataStatistics:{
        			title: '自动场规则管理'
        		}
        	}
        },
        dataManage: {
        	title: '商品管理',
        	icon: 'left_nav4.png',
        	list: {
        		dataOverview: {
        			title: '商品管理'
        		},
        		userData: {
        			title: '订单管理'
        		},
        		goodChoise:{
        			title:'选择商品'
        		}
        	}
        }
    }
};

// 首页
const homePage = {
    path: '/index',
    name: 'home-page',
    meta: {
        title: '首页'
    }
}

// 获取菜单导航
function getMenus(actor,proid) {
    //var loginInfo = util.storage('loginInfo'); // 获取登录状态
	var loginInfo={};
	loginInfo.info=proid
    if (loginInfo) {
        if (loginInfo['info'] == 0) {
            // 特殊登录
            return modules[actor];
        } else {
            // 普通登录
            return admintor[actor];
        }
    } else {
        // 特殊登录
        return admintor[actor];
    }
    // return modules[actor]和return admintor[actor]都是返回admin对象
}

// 获取当前页面的路径（面包屑）
function getPages(actor) {
    var m = modules[actor];
    if (m) {
        return [{
            path: '/index',
            name: actor,
            component: (res) => require(['./views/index.vue'], res),
            // 子路由
            children: Modules(m, actor)
        }]
    } else {
        return null
    }
}

// 导出的变量、方法------在一个文件或模块中，export、import可以有多个，export default仅有一个
export {
    homePage,
    getMenus,
    getPages
};

// 路由信息数组
const routers = [{
    ...homePage,
    component: (res) => require(['./views/index.vue'], res)
}, {
    path: '/login',
    // 路由元信息
    meta: {
        title: '登录',
        noCheckLogin: true
    },
    component: (res) => require(['./views/login.vue'], res)
},{
	path:'/',
	redirect:'/login'
},{
    path: '/register',
    // 路由元信息
    meta: {
        title: '注册',
    },
    component: (res) => require(['./views/register.vue'], res)
},{
    path: '/result',
    // 路由元信息
    meta: {
        title: '注册结果',
    },
    component: (res) => require(['./views/result.vue'], res)
}];

// 导出路由信息数组
export default routers;

// 
function Modules(_module, MN) {
    var ret = [],
        CN, AS, C, AN;
    for (CN in _module) {
        C = _module[CN];
        if (!C.dev || DEBUG) {
            AS = C.list;
            for (AN in AS) {
                createAction(AS[AN]);
            }
        }
    }

    function createAction(A) {
        if (!A.dev || DEBUG) {
            A.meta = {
                module: MN,
                control: {
                    title: C.title,
                    name: CN,
                    icon: C.icon
                },
                title: A.title
            }
            A.name = `${MN}-${CN}-${AN}`;
            A.path = `/${MN}/${CN}/${AN}`;
            A.tpl = A.tpl ? `/tpl/${A.tpl}` : A.path;
            if (A.params) {
                if (typeof A.params != 'string') {
                    A.params = A.params.map((v) => `/:${v}`).join('');
                }
                A.path += A.params;
            }
            A.components = {
                content: (res) => require([`./views${A.tpl}.vue`], res)
            }
            ret.push(A);
            // console.log(`[route] ${A.path} -> ./views${A.tpl}.vue`);
        } 32
    }

    
     console.log(ret);
    return ret;
}