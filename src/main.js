import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '../theme/index.css'

import VueRouter from 'vue-router'
import Vuex from 'vuex';

/*
* request 劫持
* */
import Mock from './mock'
Mock.bootstrap();

import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        user:""
    },
    mutations:{
        updateUserInfo(state,newUserInfo){
            state.user=newUserInfo;
        }
    }
});

import routes from './routes'

const router = new VueRouter({
    // mode: 'history',
    routes
});



//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)){

        return unescape(arr[2]);
    }else
        return null;
}

//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

Vue.prototype.getCookie = getCookie;

new Vue({
  el: '#app',
    router,
    store,
    created:function(){


        // this.checkLogin();
    },
    methods: {
        checkLogin(){
            //检查是否存在session
            if (!this.getCookie('session')) {
                console.log("~~~~~~~~~``")
            } else {
                console.log("1111111111111")
            }
        }
    },
    render: h => h(App)
})
