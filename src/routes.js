import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Welcome from './views/nav1/Welcome.vue'
import AdministratorList from './views/nav1/AdministratorList.vue'
import MenuList from './views/nav2/MenuList.vue'
import WebPermission from './views/nav3/WebPermission.vue'
import AdminPermission from './views/nav3/AdminPermission.vue'
import OrganizationalList from './views/nav3/OrganizationalList'

var routes = [
    {
        path: '/',
        component: Home,
        name:'',
        iconCls: 'fa fa-home',//图标样式class
        hidden: true,
        children: [
            { path: '/Welcome', component: Welcome, name: '欢迎来到人力后台管理系统' }
        ]
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '管理员管理',
        iconCls: 'fa fa-user-o',//图标样式class
        children: [
//          { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/AdministratorList', component: AdministratorList, name: '分公司管理员列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '菜单管理',
        iconCls: 'fa el-icon-menu',
        children: [
            { path: '/MenuList', component: MenuList, name: '菜单列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '权限分配',
        iconCls: 'fa el-icon-setting',
//      leaf: true,//只有一个节点
        children: [
            { path: '/WebPermission', component: WebPermission, name: '门户权限分配' },
            { path: '/AdminPermission', component: AdminPermission, name: '后台权限分配' },
            { path: '/OrganizationalList', component: OrganizationalList, name: '组织结构分配' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;