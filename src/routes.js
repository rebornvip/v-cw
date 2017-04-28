import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Index from './views/Index.vue'


import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'

import userMsg from './views/models/userMsg.vue'


let routes = [
    {
        path: '/',
        component: Index,
        name: 'Index',
        hidden: true
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        hidden: true
    },
  /*  {
        path: '/home',
        component: Home,
        name: 'home',
        hidden: true
    },*/
    {
        path: '/home',
        component: Home,
        name: '数据',
        iconCls: 'fa fa-database',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/userMsg', component: userMsg, name: '用户信息' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/person',
        component: Home,
        name: '设置',
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/person1', component: Table, name: '个人信息' },
            { path: '/person2', component: Form, name: '修改密码' }
        ]
    },
    {
        path: '/person',
        component: Home,
        name: '图表分析',
        iconCls: 'fa fa-bar-chart',//图标样式class
        children: [
            { path: '/person1', component: Table, name: '个人信息' },
            { path: '/person2', component: Form, name: '修改密码' }
        ]
    }
];

export default routes;