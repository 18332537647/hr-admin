webpackJsonp([1],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404_vue__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_404_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home_vue__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Main_vue__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_nav1_Welcome_vue__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_nav1_Welcome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_nav1_Welcome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_nav1_AdministratorList_vue__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_nav1_AdministratorList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_nav1_AdministratorList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_nav2_MenuList_vue__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_nav2_MenuList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_nav2_MenuList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_nav3_WebPermission_vue__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_nav3_WebPermission_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_nav3_WebPermission_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_nav3_AdminPermission_vue__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_nav3_AdminPermission_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_nav3_AdminPermission_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_nav3_OrganizationalList__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_nav3_OrganizationalList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_nav3_OrganizationalList__);











let routes = [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-home', //图标样式class
    hidden: true,
    children: [{ path: '/Welcome', component: __WEBPACK_IMPORTED_MODULE_4__views_nav1_Welcome_vue___default.a, name: '欢迎来到人力后台管理系统' }]
}, {
    path: '/404',
    component: __WEBPACK_IMPORTED_MODULE_1__views_404_vue___default.a,
    name: '',
    hidden: true
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '管理员管理',
    iconCls: 'fa fa-user-o', //图标样式class
    children: [
    //          { path: '/main', component: Main, name: '主页', hidden: true },
    { path: '/AdministratorList', component: __WEBPACK_IMPORTED_MODULE_5__views_nav1_AdministratorList_vue___default.a, name: '分公司管理员列表' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '菜单管理',
    iconCls: 'fa el-icon-menu',
    children: [{ path: '/MenuList', component: __WEBPACK_IMPORTED_MODULE_6__views_nav2_MenuList_vue___default.a, name: '菜单列表' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '权限分配',
    iconCls: 'fa el-icon-setting',
    //      leaf: true,//只有一个节点
    children: [{ path: '/WebPermission', component: __WEBPACK_IMPORTED_MODULE_7__views_nav3_WebPermission_vue___default.a, name: '门户权限分配' }, { path: '/AdminPermission', component: __WEBPACK_IMPORTED_MODULE_8__views_nav3_AdminPermission_vue___default.a, name: '后台权限分配' }, { path: '/OrganizationalList', component: __WEBPACK_IMPORTED_MODULE_9__views_nav3_OrganizationalList___default.a, name: '组织结构分配' }]
}, {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let base = '';

const requestLogin = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/login`, params).then(res => res.data);
};
/* unused harmony export requestLogin */


const getUserList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/list`, { params: params });
};
/* unused harmony export getUserList */


const getUserListPage = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/listpage`, { params: params });
};
/* unused harmony export getUserListPage */


const removeUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/remove`, { params: params });
};
/* unused harmony export removeUser */


const batchRemoveUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/batchremove`, { params: params });
};
/* unused harmony export batchRemoveUser */


const editUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/edit`, { params: params });
};
/* unused harmony export editUser */


const addUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/add`, { params: params });
};
/* unused harmony export addUser */


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(263);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 应用初始状态
const state = {
    count: 10

    // 定义所需的 mutations
};const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    }
};

// 创建 store 实例
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
    getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
    state,
    mutations
}));

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(518)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(250),
  /* template */
  __webpack_require__(547),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',
	components: {}
});

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_js__ = __webpack_require__(139);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let baseUrl = 'http://plat.ehr.yuhong.com.cn';

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			sysName: '雨虹人力后台',
			collapsed: false,
			sysUserName: '',
			sysUserAvatar: '',
			permissions: {},
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		};
	},
	beforeMount: function () {
		this.getAdmin();
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		},
		handleopen() {
			//console.log('handleopen');
		},
		handleclose() {
			//console.log('handleclose');
		},
		handleselect: function (a, b) {},
		//退出登录
		logout: function () {
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user');
				window.location.href = "http://sso.yuhong.com.cn/logout?redirect_url=" + window.location.href;
			}).catch(() => {});
		},

		getAdmin() {
			//				console.log("开始调权限接口");
			//				var result = {
			//				    "data": {
			//				          permissions:{
			//				            "QXGL": "1",          
			//				            "QXGL_GLYGL": "1",         
			//				            "QXGL_CDGL": "1"        
			//				        } 	
			//				    }
			//				};

			$.ajax({
				url: baseUrl + "/functionAPI",
				type: "POST",
				data: "",
				dataType: "json",
				success: function (result) {
					this.permissions = result.data.permissions;
					console.log(result);
					console.log(__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */]);
					if (result.data.permissions.QXGL != '1') {
						console.log("管理员管理");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][2].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][2].hidden = "false";
					}
					if (result.data.permissions.QXGL_GLYGL != '1') {
						console.log("管理员管理列表");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][2].children[0].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][2].children[0].hidden = "false";
					}
					if (result.data.permissions.QXGL_CDGL != '1') {
						console.log("菜单管理");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][3].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][3].hidden = "false";
					}
					if (result.data.permissions.QXGL_CDGL_CDGLLB != '1') {
						console.log("菜单管理列表");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][3].children[0].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][3].children[0].hidden = "false";
					}
					if (result.data.permissions.QXGL_QXFP != '1') {
						console.log("权限分配");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].hidden = "false";
					}
					if (result.data.permissions.QXGL_QXFP_MHQXFP != '1') {
						console.log("权限分配1");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].children[0].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].children[0].hidden = "false";
					}
					if (result.data.permissions.QXGL_QXFP_HTQXFP != '1') {
						console.log("权限分配2");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].children[1].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].children[1].hidden = "false";
					}
					if (result.data.permissions.QXGL_QXFP_FPYHZZJG != '1') {
						console.log("权限分配3");
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].children[2].hidden = "true";
					} else {
						__WEBPACK_IMPORTED_MODULE_0__routes_js__["a" /* default */][4].children[2].hidden = "false";
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//折叠导航栏
		collapse: function () {
			this.collapsed = !this.collapsed;
		},
		showMenu(i, status) {
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
		}
	},
	mounted() {
		//			var user = sessionStorage.getItem('user');
		//          var user = "admin";
		//			if (user) {
		//				user = JSON.parse(user);
		//				this.sysUserName = user.name || '';
		//				this.sysUserAvatar = user.avatar || '';
		//			}
		this.getAdmin();
		var _this = this;
		setTimeout(function () {
			_this.$router.push({ path: '/welcome' });
		}, 10);
	},
	created() {}
});

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(147);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: 'admin',
        checkPass: '123456'
      },
      rules2: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        checkPass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      checked: true
    };
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit2(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          this.logining = true;
          var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
          // requestLogin(loginParams).then(data => {
          //   this.logining = false;
          //   let { msg, code, user } = data;
          //   if (code !== 200) {
          //     this.$message({
          //       message: msg,
          //       type: 'error'
          //     });
          //   } else {
          //     sessionStorage.setItem('user', JSON.stringify(user));
          //     this.$router.push({ path: '/administratorList' });
          //   }
          // });
          let user = "admin";
          sessionStorage.setItem('user', JSON.stringify(user));
          this.$router.push({ path: '/Welcome' });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//	import util from '../../common/js/util'
//	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
//  import AddUser from "./AddUser";
let baseUrl = 'http://plat.ehr.yuhong.com.cn';
/* harmony default export */ __webpack_exports__["default"] = ({
	//		components: { AddUser },
	data() {
		return {
			filters: {
				name: ''
			},
			filtersRole: {
				name: ''
			},
			mold: "",
			roleUsers: [],
			users: [],
			hasSelectedRoles: [],
			organizationArr: [],
			total: 0,
			page: 1,
			pageSize: 10,
			newRow: '',
			cellDetailsRow: '',
			cellDetailsColumn: '',
			selectRoleName: '',
			listLoading: false,
			sels: [], //列表选中列
			dialogVisible: false,
			selectRoleDialogVisible: false,
			hasSelectedRoleDialogVisible: false,
			organizationVisible: false,
			editFormVisible: false, //编辑界面是否显示
			editLoading: false,
			editFormRules: {
				roleCode: [{ required: true, message: '请输入角色编码', trigger: 'blur' }], roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }], roleDept: [{ required: true, message: '请选择管理单位', trigger: 'blur' }]
			},
			//编辑界面数据
			editForm: {
				roleCode: '',
				roleName: '',
				roleDept: '',
				roleDesc: ''
			},
			addFormVisible: false, //新增界面是否显示
			addLoading: false,
			addFormRules: {
				roleCode: [{ required: true, message: '请输入角色编码', trigger: 'blur' }], roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }], roleDept: [{ required: true, message: '请选择管理单位', trigger: 'blur' }]
			},
			//新增界面数据
			addForm: {
				roleCode: '',
				roleName: '',
				roleDept: '',
				roleDesc: ''
			},
			//树的数据
			treeData: [],
			defaultProps: {
				children: 'children',
				label: 'name',
				id: 'id'
			}
		};
	},
	methods: {
		handleCurrentChange(val) {
			this.page = val;
			this.getUsers();
		},
		handleRoleUsersChange(val) {
			this.page = val;
			this.Authorization(this.newRow);
		},
		handleSelectedRoleUsersChange(val) {
			this.page = val;
			this.openCellDetails(this.cellDetailsRow, this.cellDetailsColumn);
		},
		handleclose() {
			//console.log('handleclose');
		},
		//获取用户列表
		getUsers() {
			this.$http({
				method: "post",
				url: baseUrl + "/tSysRole/getTSysRoleList",
				params: {
					"currentPage": this.page,
					"selContent": this.filters.name,
					"roleCode": "",
					"pageSize": this.pageSize
				}
			}).then(res => {
				console.log(res.data);
				let result = res.data;
				if (result.code == 200) {
					this.total = result.totalPages * result.pageSize;
					this.users = result.data;
					this.listLoading = false;
					for (let i = 0; i < this.users.length; i++) {
						if (this.users[i].userNames && this.users[i].userNames.length > 10) {
							this.users[i].userNames = this.users[i].userNames.slice(0, 10) + "...";
						}
					}
				}
			});
		},
		//已授权角色用户列表
		openCellDetails(row, column) {
			this.cellDetailsRow = row;
			this.cellDetailsColumn = column;
			if (column.label == "角色用户") {
				this.hasSelectedRoleDialogVisible = true;
				let para = {
					"roleCode": row.roleCode,
					"currentPage": this.page,
					"pageSize": this.pageSize,
					"selContent": this.filtersRole.name
				};
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysRole/getSapUserListByFunc",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						console.log(result);
						if (result.code == 200) {
							_this.hasSelectedRoles = result.data;
							_this.total = result.totalPages * result.pageSize;
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}
		},
		searchRole() {
			let para = {
				"roleCode": this.cellDetailsRow.roleCode,
				"currentPage": this.page,
				"pageSize": this.pageSize,
				"selContent": this.filtersRole.name
			};
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysRole/getSapUserListByFunc",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.hasSelectedRoles = result.data;
						_this.total = result.totalPages * result.pageSize;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//删除单个角色用户
		delSelectedRole(row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				let para = {
					"roleCode": row.roleCode,
					"pernr": row.pernr
				};
				console.log(para);
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysRole/deleteTSysRoleWithUser",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						console.log(result);
						if (result.code == 200) {
							_this.$message({
								message: '删除成功',
								type: 'success'
							});
							let paramas = {
								"roleCode": row.roleCode,
								"currentPage": 1
							};
							$.ajax({
								url: baseUrl + "/tSysRole/getSapUserListByFunc",
								type: "POST",
								data: paramas,
								dataType: "json",
								success: function (result) {
									if (result.code == 200) {
										_this.hasSelectedRoles = result.data;
										_this.getUsers();
									}
								},
								error: function (msg) {
									console.log(msg);
								}
							});
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}).catch(() => {
				console.log(11);
			});
		},
		//获取分配组织架构树
		distributionOrganization(row) {
			this.roleCode = row.roleCode;
			this.organizationVisible = true;
			let para = {
				"roleCode": row.roleCode
			};
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysRole/getOrgTreelist",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);

					if (result.code == 200) {
						_this.treeData = result.data;
						setTimeout(function () {
							_this.$refs.tree.setCheckedNodes(result.checkedData);
						}, 500);
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//确定选中的树结构
		submitCheckedNodes() {
			this.organizationVisible = false;
			let treeNodes = this.$refs.tree.getCheckedNodes();
			let treeNodesIdArr = [];
			let treeNodesIdArrs = [];
			for (let i = 0; i < treeNodes.length; i++) {
				if (this.$refs.tree.getNode(treeNodes[i].id).parent.checked == false) {
					treeNodesIdArrs.push(treeNodes[i].id);
				} else {
					treeNodesIdArrs.push(this.$refs.tree.getNode(treeNodes[i].id).parent.data.id);
				}
			};
			for (var i = 0; i < treeNodesIdArrs.length; i++) {
				if (treeNodesIdArr.indexOf(treeNodesIdArrs[i]) == -1) {
					treeNodesIdArr.push(treeNodesIdArrs[i]);
				}
			}
			let para = {
				"roleCode": this.roleCode,
				"orgids": treeNodesIdArr.join(",")
			};
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysRole/saveTSysRoleWithOrg",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.organizationVisible = false;
						_this.$message({
							message: '组织结构分配成功',
							type: 'success'
						});
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//获取角色用户列表
		Authorization(row) {
			this.newRow = row;
			this.selectRoleDialogVisible = true;
			let para = {
				"currentPage": this.page,
				"pageSize": this.pageSize,
				"selContent": this.selectRoleName
			};
			this.rolelistLoading = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysRole/getSapUserList",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.total = result.pageSize * result.totalPages;
						_this.roleUsers = result.data;
						_this.rolelistLoading = false;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		searchAuthorization() {
			let para = {
				"currentPage": this.page,
				"pageSize": this.pageSize,
				"selContent": this.selectRoleName
			};
			this.rolelistLoading = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysRole/getSapUserList",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.total = result.pageSize * result.totalPages;
						_this.roleUsers = result.data;
						_this.rolelistLoading = false;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		sureRoleUsers() {
			let selRoleNameArr = [];
			let selRolePernrsArr = [];
			let roleName = '';
			let rolePernrs = '';
			$(".el-table__body-wrapper span.is-checked").each(function () {
				roleName = $(this).closest(".el-table__row").find("td:nth-child(2)").text();
				selRoleNameArr.push(roleName);
				rolePernrs = $(this).closest(".el-table__row").find("td:nth-child(3)").text();
				selRolePernrsArr.push(rolePernrs);
			});
			let para = {
				"roleCode": this.newRow.roleCode,
				"pernrs": selRolePernrsArr.join(","),
				"userNames": selRoleNameArr.join(",")
			};
			console.log(para);
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysRole/saveTSysRoleWithUser",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.getUsers();
						_this.selectRoleDialogVisible = false;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//删除
		handleDel: function (row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				let para = { "roleId": row.roleId };
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysRole/deleteTSysRole",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						if (result.code == 200) {
							_this.listLoading = false;
							_this.$message({
								message: '删除成功',
								type: 'success'
							});
							_this.getUsers();
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}).catch(() => {
				console.log(11);
			});
		},
		//显示编辑界面
		handleEdit: function (index, row) {
			this.editFormVisible = true;
			this.editForm = Object.assign({}, row);
			this.editForm.roleId = row.roleId;
		},
		//显示新增界面
		handleAdd: function () {
			this.addFormVisible = true;
			this.addForm = {
				roleCode: '',
				roleName: '',
				roleDept: '',
				roleDesc: ''
			};
		},
		//编辑完提交数据
		editSubmit: function (index, row) {
			this.$refs.editForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.editLoading = true;
						//							let para = Object.assign({}, this.editForm;
						let para = {
							"roleId": this.editForm.roleId,
							"roleCode": this.editForm.roleCode,
							"roleName": this.editForm.roleName,
							"roleDept": this.editForm.roleDept,
							"roleDesc": this.editForm.roleDesc
						};
						var _this = this;
						$.ajax({
							url: baseUrl + "/tSysRole/saveOrUpdateTSysRole",
							type: "POST",
							data: para,
							dataType: "json",
							success: function (result) {
								if (result.code == 200) {
									_this.editLoading = false;
									_this.$message({
										message: '修改成功',
										type: 'success'
									});
									_this.$refs['editForm'].resetFields();
									_this.editFormVisible = false;
									_this.getUsers();
								}
							},
							error: function (msg) {
								console.log("error");
							}
						});
					});
				}
			});
		},
		//新增
		addSubmit: function () {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						let para = Object.assign({}, this.addForm);
						var _this = this;
						$.ajax({
							url: baseUrl + "/tSysRole/saveOrUpdateTSysRole",
							type: "POST",
							data: para,
							dataType: "json",
							success: function (result) {
								console.log(result);
								if (result.code == 200) {
									_this.addLoading = false;
									_this.$message({
										message: '添加成功',
										type: 'success'
									});
									_this.$refs['addForm'].resetFields();
									_this.addFormVisible = false;
									_this.getUsers();
								}
							},
							error: function (msg) {
								console.log("error");
							}
						});
					});
				}
			});
		},
		selsChange: function (sels) {
			this.sels = sels;
		}
	},
	mounted() {
		this.getUsers();
	}
});

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      welcomeMsg: "	"
    };
  },
  mounted() {}
});

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_util__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(147);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



//  import AddUser from "./AddUser";
let baseUrl = 'http://plat.ehr.yuhong.com.cn';
//  let baseUrl = 'http://10.100.78.122:80'
/* harmony default export */ __webpack_exports__["default"] = ({
	//		components: { AddUser },
	data() {
		return {
			filters: {
				name: ''
			},
			filtersRole: {
				name: ''
			},
			mold: "",
			roleUsers: [],
			users: [],
			hasSelectedRoles: [],
			organizationArr: [],
			total: 0,
			page: 1,
			pageSize: 10,
			newRow: '',
			cellDetailsRow: '',
			frontBack: '',
			cellDetailsColumn: '',
			selectRoleName: '',
			parentTreedata: [],
			checkedNode: [],
			listLoading: false,
			sels: [], //列表选中列
			dialogVisible: false,
			parentTreeVisible: false,
			selectRoleDialogVisible: false,
			hasSelectedRoleDialogVisible: false,
			organizationVisible: false,
			editFormVisible: false, //编辑界面是否显示
			editLoading: false,
			editFormRules: {
				frontBack: [{ required: true, message: '请选择菜单用途', trigger: 'change' }], menuType: [{ required: true, message: '请选择菜单类型', trigger: 'change' }], menuCode: [{ required: true, message: '请填写菜单编码', trigger: 'blur' }], menuName: [{ required: true, message: '请填写菜单名称', trigger: 'blur' }], menuUrl: [{ required: true, message: '请填写菜单url', trigger: 'blur' }], isopen: [{ required: true, message: '请选择是否开放', trigger: 'change' }], isPopup: [{ required: true, message: '请选择是否窗口', trigger: 'change' }]
			},
			//编辑界面数据
			editForm: {
				frontBack: '',
				parentId: '',
				menuType: '',
				menuCode: '',
				menuName: '',
				parentMenuName: '',
				menuUrl: '',
				menuSort: '',
				menuImage: '',
				isopen: '',
				isPopup: ''
			},
			addFormVisible: false, //新增界面是否显示
			addLoading: false,
			addFormRules: {
				frontBack: [{ required: true, message: '请选择菜单用途', trigger: 'change' }], menuType: [{ required: true, message: '请选择菜单类型', trigger: 'change' }], menuCode: [{ required: true, message: '请填写菜单编码', trigger: 'blur' }], menuName: [{ required: true, message: '请填写菜单名称', trigger: 'blur' }], menuUrl: [{ required: true, message: '请填写菜单url', trigger: 'blur' }], isopen: [{ required: true, message: '请选择是否开放', trigger: 'change' }], isPopup: [{ required: true, message: '请选择是否窗口', trigger: 'change' }]
			},
			//新增界面数据
			addForm: {
				frontBack: '',
				parentId: '',
				menuType: '',
				menuCode: '',
				menuName: '',
				parentMenuName: '',
				menuUrl: '',
				menuSort: '',
				menuImage: '',
				isopen: '',
				isPopup: ''
			},
			//树的数据
			treeData: [],
			defaultProps: {
				children: 'children',
				label: 'name'
			}
		};
	},
	methods: {
		handleCurrentChange(val) {
			this.page = val;
			this.getUsers();
		},
		handleclose() {
			//console.log('handleclose');
		},
		//获取用户列表
		getUsers() {
			let para = {
				"pernr": '',
				"pageSize": this.pageSize,
				"currentPage": this.page
			};
			this.listLoading = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysMenu/list",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.total = result.totalRows;
						_this.users = result.data;
						_this.listLoading = false;
						for (let i = 0; i < _this.users.length; i++) {
							if (_this.users[i].frontBack == "0") {
								_this.users[i].frontBack = '后台';
							} else {
								_this.users[i].frontBack = '门户';
							}
						}
						for (let i = 0; i < _this.users.length; i++) {
							if (_this.users[i].menuType == "1") {
								_this.users[i].menuType = "按钮";
							} else if (_this.users[i].menuType == "2") {
								_this.users[i].menuType = "菜单";
							} else if (_this.users[i].menuType == "3") {
								_this.users[i].menuType = "模块";
							}
						}
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		getTreeData(type) {
			if (type == "add") {
				this.frontBack = this.addForm.frontBack;
			} else {
				this.frontBack = this.ediFormFrontBack;
			}
			if (!this.frontBack) {
				this.$message({
					showClose: true,
					message: '请先选择菜单用途',
					type: 'warning'
				});
			} else {
				this.parentTreeVisible = true;
				let para = {
					"frontBack": this.frontBack
				};
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysMenu/parentMenuList",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						if (result.code == 200) {
							_this.parentTreedata = result.data;
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}
		},
		//控制父级树单选
		checkChange(item, node, self) {
			if (node == true) {
				//点击未选中复选框
				this.editCheckId = item.id;
				this.$refs.tree.setCheckedKeys([item.id]);
			} else {
				if (this.editCheckId == item.id) {
					//点击已选中复选框，保证至少一个选中
					this.$refs.tree.setCheckedKeys([item.id]);
				}
			}
		},
		nodeClick(item, node, self) {
			this.editCheckId = item.id;
			this.$refs.tree.setCheckedKeys([item.id]);
		},
		parentTreeDataSubmit() {
			let checkedNode = this.$refs.tree.getCheckedNodes();
			this.addForm.parentMenuName = checkedNode[0].name;
			this.addForm.parentId = checkedNode[0].id;
			this.parentTreeVisible = false;
		},
		//删除
		handleDel: function (row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				let para = { "menuId": row.menuId };
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysMenu/delete",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						if (result.code == 200) {
							_this.listLoading = false;
							_this.$message({
								message: '删除成功',
								type: 'success'
							});
							_this.getUsers();
						}
					},
					error: function (msg) {}
				});
			}).catch(msg => {});
		},
		//显示编辑界面
		handleEdit: function (index, row) {
			this.editFormVisible = true;
			//				this.editForm = Object.assign({}, row);
			let para = {
				"menuId": row.menuId
			};
			let _this = this;
			$.ajax({
				//					url :'http://10.100.78.122:80/ehr_platform/tSysMenu/toUpsert',
				url: baseUrl + "/tSysMenu/toUpsert",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.editForm = result.entity;
					}
				},
				error: function (msg) {
					console.log("error");
				}
			});
		},
		//显示新增界面
		handleAdd: function () {
			this.addFormVisible = true;
		},
		//编辑完提交数据
		editSubmit: function (index, row) {
			this.$refs.editForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.editLoading = true;
						let para = Object.assign({}, this.editForm);
						var _this = this;
						$.ajax({
							url: baseUrl + "/tSysRole/saveOrUpdateTSysRole",
							type: "POST",
							data: para,
							dataType: "json",
							success: function (result) {
								if (result.code == 200) {
									_this.editLoading = false;
									_this.$message({
										message: '修改成功',
										type: 'success'
									});
									_this.$refs['editForm'].resetFields();
									_this.editFormVisible = false;
									_this.getUsers();
								}
							},
							error: function (msg) {
								console.log("error");
							}
						});
					});
				}
			});
		},
		//新增
		addSubmit: function () {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						let para = Object.assign({}, this.addForm);
						var _this = this;
						$.ajax({
							url: baseUrl + "/tSysMenu/upsert",
							type: "POST",
							data: para,
							dataType: "json",
							success: function (result) {
								if (result.code == 200) {
									_this.addLoading = false;
									_this.$message({
										message: '添加成功',
										type: 'success'
									});
									_this.$refs['addForm'].resetFields();
									_this.addFormVisible = false;
									_this.getUsers();
								}
							},
							error: function (msg) {
								console.log(msg);
							}
						});
					});
				}
			});
		},
		selsChange: function (sels) {
			this.sels = sels;
		}
	},
	mounted() {
		this.getUsers();
	}
});

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let baseUrl = 'http://plat.ehr.yuhong.com.cn';
// let baseUrl = 'http://10.100.78.97:8080';
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			options: [],
			selectionArr: [],
			selectedOptions: [],
			selectedOptions2: [],
			filters: {
				name: ''
			},
			filtersRole: {
				name: ''
			},
			selectedFiltersRole: {
				name: ''
			},
			mold: "",
			roleUsers: [],
			users: [],
			hasSelectedRoles: [],
			organizationArr: [],
			total: 0,
			page: 1,
			listLoading: false,
			sels: [], //列表选中列
			dialogVisible: false,
			selectRoleDialogVisible: false,
			hasSelectedRoleDialogVisible: false,
			addFormVisible: false, //新增界面是否显示
			addLoading: false,
			addFormRules: {
				userNames: [{ required: true, message: '请选择角色用户', trigger: 'blur' }], functionCode: [{ required: true, message: '请选择是否排斥', trigger: 'change' }]
			},
			//新增界面数据
			addForm: {
				menuCode1: '',
				menuCode2: '',
				userNames: '',
				pernrs: '',
				functionCode: ''
			}
		};
	},
	methods: {
		handleCurrentChange(val) {
			this.page = val;
			this.getPermissionLists();
		},
		handleRoleUsersChange(val) {
			this.page = val;
			this.getUsersLists();
		},
		selectedRoleUsersChange(val) {
			this.page = val;
		},
		handleclose() {
			//console.log('handleclose');
		},
		//菜单二级联动
		indexSelect(event) {
			this.A = event.target.value;
			this.seletOptions();
		},
		seletOptions() {
			for (var i = 0; i < this.options.length; i++) {
				if (this.options[i].menuCode == this.A) {
					this.selectionArr = this.options[i].children;
					return this.options[i].children;
				}
			}
		},
		//获取主权限列表
		getPermissionLists() {
			let para = {
				"selContent": this.filters.name,
				"menuLevel": 0
			};
			this.listLoading = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getMenuWithUserList",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.users = result.data;
						for (let i = 0; i < _this.users.length; i++) {
							if (_this.users[i].userName.length > 10) {
								_this.users[i].userName = _this.users[i].userName.slice(0, 10) + "...";
							}
						}
						for (let i = 0; i < _this.users.length; i++) {
							if (_this.users[i].functionCode == "0") {
								_this.users[i].functionCode = "排斥";
							} else {
								_this.users[i].functionCode = "不排斥";
							}
						}
						_this.listLoading = false;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//已授权角色用户列表
		openCellDetails(row, column) {
			if (column.label == "用户") {
				this.hasSelectedRoleDialogVisible = true;
				let para = {
					"menuCode": row.menuCode,
					"currentPage": this.page,
					"pageSize": 10
				};
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysManagement/getUserListByMenuCode",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						if (result.code == 200) {
							_this.hasSelectedRoles = result.data;
							_this.total = result.totalPages * result.pageSize;
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}
		},
		//删除单个角色用户
		delSelectedRole(row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				let para = {
					"menuCode": row.menuCode,
					"pernr": row.pernr
				};
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysManagement/deleteMenuWithUser",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						if (result.code == 200) {
							_this.$message({
								message: '删除成功',
								type: 'success'
							});
							let paramas = {
								"menuCode": row.menuCode,
								"currentPage": this.page,
								"pageSize": 10
							};
							$.ajax({
								url: baseUrl + "/tSysManagement/getUserListByMenuCode",
								type: "POST",
								data: paramas,
								dataType: "json",
								success: function (result) {
									if (result.code == 200) {
										_this.hasSelectedRoles = result.data;
										_this.getPermissionLists();
									}
								},
								error: function (msg) {
									console.log(msg);
								}
							});
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}).catch(() => {});
		},
		//获取角色用户列表
		getRoleUsersLists(row) {
			if (this.addForm.menuCode2 == "") {
				this.$message({
					message: '请先选择菜单',
					type: 'warning'
				});
			} else {
				this.getUsersLists();
			}
		},
		getUsersLists() {
			this.selectRoleDialogVisible = true;
			let para = {
				"currentPage": this.page,
				"pageSize": this.pageSize,
				"menuCode": this.addForm.menuCode2,
				"selContent": this.filtersRole.name
			};
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysRole/getSapUserList",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.total = result.totalPages * result.pageSize;
						_this.roleUsers = result.data;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//确定选中客户
		sureSelectedRoleUsers() {
			let selRoleNameArr = [];
			let selRolePernrsArr = [];
			let roleName = '';
			let rolePernrs = '';
			$(".el-table__body-wrapper span.is-checked").each(function () {
				roleName = $(this).closest(".el-table__row").find("td:nth-child(2)").text();
				selRoleNameArr.push(roleName);
				rolePernrs = $(this).closest(".el-table__row").find("td:nth-child(3)").text();
				selRolePernrsArr.push(rolePernrs);
			});
			this.addForm.userNames = selRoleNameArr.join(",");
			this.addForm.pernrs = selRolePernrsArr.join(",");
			this.selectRoleDialogVisible = false;
		},
		//新增权限
		addSubmit: function () {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						//							let para = Object.assign({}, this.addForm);\
						let functionCode = '';
						if (this.addForm.functionCode == "是") {
							functionCode = '0';
						} else {
							functionCode = '1';
						}
						let para = {
							"frontBack": 1,
							"menuCode": this.addForm.menuCode2,
							"functionCode": functionCode,
							"pernrs": this.addForm.pernrs,
							"userNames": this.addForm.userNames
						};
						var _this = this;
						$.ajax({
							url: baseUrl + "/tSysManagement/saveMenuWithUser",
							type: "POST",
							data: para,
							dataType: "json",
							success: function (result) {
								if (result.code == 200) {
									_this.addLoading = false;
									_this.$message({
										message: '添加成功',
										type: 'success'
									});
									_this.$refs['addForm'].resetFields();
									_this.addFormVisible = false;
									_this.getPermissionLists();
								}
							},
							error: function (msg) {
								console.log("error");
							}
						});
					});
				}
			});
		},
		//删除
		handleDel: function (row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				let para = { "menuCode": row.menuCode };
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysManagement/deleteTSysMenuUser",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						if (result.code == 200) {
							_this.listLoading = false;
							_this.$message({
								message: '删除成功',
								type: 'success'
							});
							_this.getPermissionLists();
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}).catch(() => {
				console.log(11);
			});
		},
		//显示新增界面
		handleAdd: function () {
			this.addFormVisible = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getMenuWithUserListByAdd",
				type: "POST",
				data: {
					"menuLevel": 0
				},
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.options = result.data;
						//		              	console.log(_this.options);
					}
				},
				error: function (msg) {
					console.log("error");
				}
			});
		},

		selsChange: function (sels) {
			this.sels = sels;
		}
	},
	mounted() {
		this.getPermissionLists();
	}
});

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let baseUrl = 'http://plat.ehr.yuhong.com.cn';
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			filters: {
				name: ''
			},
			users: [],
			total: 0,
			page: 1,
			roleCode: "123",
			pernr: "",
			pageSize: 10,
			selectRoleName: '',
			parentTreedata: [],
			checkedNode: [],
			listLoading: false,
			parentTreeVisible: false,
			//树的数据
			treeData: [],
			defaultProps: {
				children: 'children',
				label: 'name'
			}
		};
	},
	methods: {
		handleCurrentChange(val) {
			this.page = val;
			this.getUsers();
		},
		handleclose() {
			//console.log('handleclose');
		},
		//获取用户列表
		getUsers() {
			let para = {
				"roleCode": this.roleCode,
				"selContent": this.filters.name,
				"pageSize": this.pageSize,
				"currentPage": this.page
			};
			this.listLoading = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getUserSetOrgList",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.total = result.totalRows;
						_this.users = result.data;
						_this.listLoading = false;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		getTreeData(row) {
			this.pernr = row.pernr;
			this.parentTreeVisible = true;
			let para = {
				"roleCode": this.roleCode,
				"pernr": this.pernr
			};
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getOrgTreelistByCode",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.parentTreedata = result.data;
						setTimeout(function () {
							_this.$refs.tree.setCheckedNodes(result.checkedData);
						}, 500);
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		parentTreeDataSubmit() {
			let treeNodes = this.$refs.tree.getCheckedNodes();
			let treeNodesIdArr = [];
			let treeNodesIdArrs = [];
			for (let i = 0; i < treeNodes.length; i++) {
				if (this.$refs.tree.getNode(treeNodes[i].id).parent.checked == false) {
					treeNodesIdArrs.push(treeNodes[i].id);
				} else {
					treeNodesIdArrs.push(this.$refs.tree.getNode(treeNodes[i].id).parent.data.id);
				}
			};
			for (var i = 0; i < treeNodesIdArrs.length; i++) {
				if (treeNodesIdArr.indexOf(treeNodesIdArrs[i]) == -1) {
					treeNodesIdArr.push(treeNodesIdArrs[i]);
				}
			}
			for (let i = 0; i < treeNodes.length; i++) {
				treeNodesIdArr.push(treeNodes[i].id);
			};
			let para = {
				"pernr": this.pernr,
				"orgids": treeNodesIdArr.join(",")
			};
			let _this = this;
			$.ajax({
				//		            url : baseUrl+"/tSysManagement/saveOrgWithUser",
				url: 'http://10.100.78.97:80/tSysManagement/saveOrgWithUser',
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					if (result.code == 200) {
						_this.$message({
							message: '组织结构分配成功',
							type: 'success'
						});
						_this.parentTreedata = result.data;
						_this.parentTreeVisible = false;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		}
	},
	mounted() {
		this.getUsers();
	}
});

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let baseUrl = 'http://plat.ehr.yuhong.com.cn';
// let baseUrl = 'http://10.100.78.97:8080';
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			options: [],
			selectionArr: [],
			selectedOptions: [],
			selectedOptions2: [],
			filters: {
				name: ''
			},
			filtersRole: {
				name: ''
			},
			selectedRole: {
				name: ''
			},
			mold: "",
			pageSize: 10,
			roleUsers: [],
			users: [],
			hasSelectedRoles: [],
			organizationArr: [],
			total: 0,
			page: 1,
			listLoading: false,
			sels: [], //列表选中列
			dialogVisible: false,
			selectRoleDialogVisible: false,
			hasSelectedRoleDialogVisible: false,
			addFormVisible: false, //新增界面是否显示
			addLoading: false,
			addFormRules: {
				userNames: [{ required: true, message: '请选择角色用户', trigger: 'blur' }], functionCode: [{ required: true, message: '请选择是否排斥', trigger: 'change' }]
			},
			//新增界面数据
			addForm: {
				menuCode1: '',
				menuCode2: '',
				userNames: '',
				pernrs: '',
				functionCode: ''
			}
		};
	},
	methods: {
		handleCurrentChange(val) {
			this.page = val;
			this.getPermissionLists();
		},
		handleRoleUsersChange(val) {
			this.page = val;
		},
		handleclose() {
			//console.log('handleclose');
		},
		//菜单二级联动
		indexSelect(event) {
			this.A = event.target.value;
			this.seletOptions();
		},
		seletOptions() {
			for (var i = 0; i < this.options.length; i++) {
				if (this.options[i].menuCode == this.A) {
					this.selectionArr = this.options[i].children;
					return this.options[i].children;
				}
			}
		},
		//获取主权限列表
		getPermissionLists() {
			let para = {
				"selContent": this.filters.name,
				"menuLevel": 1
			};
			this.listLoading = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getMenuWithUserList",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.users = result.data;
						for (let i = 0; i < _this.users.length; i++) {
							if (_this.users[i].userName.length > 10) {
								_this.users[i].userName = _this.users[i].userName.slice(0, 10) + "...";
								console.log(_this.users[i].userName);
							}
						}
						for (let i = 0; i < _this.users.length; i++) {
							if (_this.users[i].functionCode == "0") {
								_this.users[i].functionCode = "排斥";
							} else {
								_this.users[i].functionCode = "不排斥";
							}
						}
						_this.listLoading = false;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//已授权角色用户列表
		openCellDetails(row, column) {
			if (column.label == "用户") {
				this.hasSelectedRoleDialogVisible = true;
				let para = {
					"menuCode": row.menuCode,
					"currentPage": this.page,
					"pageSize": this.pageSize
				};
				console.log(para);
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysManagement/getUserListByMenuCode",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						console.log(result);
						if (result.code == 200) {
							_this.hasSelectedRoles = result.data;
							_this.total = result.totalPages * result.pageSize;
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}
		},
		searchSelectedRole() {
			let para = {
				"menuCode": row.menuCode,
				"currentPage": this.page,
				"pageSize": this.pageSize,
				"selContent": this.selectedRole.name
			};
			console.log(para);
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getUserListByMenuCode",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.hasSelectedRoles = result.data;
						_this.total = result.totalPages * result.pageSize;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//删除单个角色用户
		delSelectedRole(row) {
			console.log(row);
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				let para = {
					"menuCode": row.menuCode,
					"pernr": row.pernr
				};
				console.log(para);
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysManagement/deleteMenuWithUser",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						console.log(result);
						if (result.code == 200) {
							_this.$message({
								message: '删除成功',
								type: 'success'
							});
							let paramas = {
								"menuCode": row.menuCode,
								"currentPage": this.page,
								"pageSize": this.pageSize
							};
							$.ajax({
								url: baseUrl + "/tSysManagement/getUserListByMenuCode",
								type: "POST",
								data: paramas,
								dataType: "json",
								success: function (result) {
									console.log(result);
									if (result.code == 200) {
										_this.hasSelectedRoles = result.data;
										_this.getPermissionLists();
									}
									console.log(_this.hasSelectedRoles);
								},
								error: function (msg) {
									console.log(msg);
								}
							});
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}).catch(() => {
				console.log("删除用户出错");
			});
		},
		//获取角色用户列表
		getRoleUsersLists(row) {
			if (this.addForm.menuCode2 == "") {
				this.$message({
					message: '请先选择菜单',
					type: 'warning'
				});
			} else {
				this.selectRoleDialogVisible = true;
				let para = {
					"currentPage": this.page,
					"pageSize": this.pageSize,
					"menuCode": this.addForm.menuCode2
				};
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysManagement/getUserSetOrgList",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						console.log(result);
						if (result.code == 200) {
							_this.total = result.pageSize;
							_this.roleUsers = result.data;
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}
		},
		searchFiltersRole() {
			let para = {
				"currentPage": this.page,
				"pageSize": this.pageSize,
				"menuCode": this.addForm.menuCode2,
				"selContent": this.filtersRole.name
			};
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getUserSetOrgList",
				type: "POST",
				data: para,
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.total = result.pageSize;
						_this.roleUsers = result.data;
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			});
		},
		//确定选中客户
		sureSelectedRoleUsers() {
			let selRoleNameArr = [];
			let selRolePernrsArr = [];
			let roleName = '';
			let rolePernrs = '';
			$(".el-table__body-wrapper span.is-checked").each(function () {
				roleName = $(this).closest(".el-table__row").find("td:nth-child(2)").text();
				selRoleNameArr.push(roleName);
				rolePernrs = $(this).closest(".el-table__row").find("td:nth-child(3)").text();
				selRolePernrsArr.push(rolePernrs);
			});
			this.addForm.userNames = selRoleNameArr.join(",");
			this.addForm.pernrs = selRolePernrsArr.join(",");
			this.selectRoleDialogVisible = false;
		},
		//新增权限
		addSubmit: function () {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						//							let para = Object.assign({}, this.addForm);\
						let functionCode = '';
						if (this.addForm.functionCode == "是") {
							functionCode = '0';
						} else {
							functionCode = '1';
						}
						let para = {
							"frontBack": 1,
							"menuCode": this.addForm.menuCode2,
							"functionCode": functionCode,
							"pernrs": this.addForm.pernrs,
							"userNames": this.addForm.userNames
						};
						console.log(para);
						var _this = this;
						$.ajax({
							url: baseUrl + "/tSysManagement/saveMenuWithUser",
							type: "POST",
							data: para,
							dataType: "json",
							success: function (result) {
								console.log(result);
								if (result.code == 200) {
									_this.addLoading = false;
									_this.$message({
										message: '添加成功',
										type: 'success'
									});
									_this.$refs['addForm'].resetFields();
									_this.addFormVisible = false;
									_this.getPermissionLists();
								}
							},
							error: function (msg) {
								console.log("error");
							}
						});
					});
				}
			});
		},
		//删除
		handleDel: function (row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				let para = { "menuCode": row.menuCode };
				console.log(para);
				let _this = this;
				$.ajax({
					url: baseUrl + "/tSysManagement/deleteTSysMenuUser",
					type: "POST",
					data: para,
					dataType: "json",
					success: function (result) {
						console.log(result);
						if (result.code == 200) {
							_this.listLoading = false;
							_this.$message({
								message: '删除成功',
								type: 'success'
							});
							_this.getPermissionLists();
						}
					},
					error: function (msg) {
						console.log(msg);
					}
				});
			}).catch(() => {
				console.log(11);
			});
		},
		//显示新增界面
		handleAdd: function () {
			this.addFormVisible = true;
			let _this = this;
			$.ajax({
				url: baseUrl + "/tSysManagement/getMenuWithUserListByAdd",
				type: "POST",
				data: {
					"menuLevel": 1
				},
				dataType: "json",
				success: function (result) {
					console.log(result);
					if (result.code == 200) {
						_this.options = result.data;
					}
				},
				error: function (msg) {
					console.log("error");
				}
			});
		},

		selsChange: function (sels) {
			this.sels = sels;
		}
	},
	mounted() {
		this.getPermissionLists();
	}
});

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
};

/* unused harmony default export */ var _unused_webpack_default_export = ({
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null) context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {

        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y':
                        return padding(date.getFullYear(), $0.length);
                    case 'M':
                        return padding(date.getMonth() + 1, $0.length);
                    case 'd':
                        return padding(date.getDate(), $0.length);
                    case 'w':
                        return date.getDay() + 1;
                    case 'h':
                        return padding(date.getHours(), $0.length);
                    case 'm':
                        return padding(date.getMinutes(), $0.length);
                    case 's':
                        return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y':
                            _date.setFullYear(_int);break;
                        case 'M':
                            _date.setMonth(_int - 1);break;
                        case 'd':
                            _date.setDate(_int);break;
                        case 'h':
                            _date.setHours(_int);break;
                        case 'm':
                            _date.setMinutes(_int);break;
                        case 's':
                            _date.setSeconds(_int);break;
                    }
                }
                return _date;
            }
            return null;
        }

    }

});

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_router__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vuex_store__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_font_awesome_css_font_awesome_min_css__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_font_awesome_css_font_awesome_min_css__);





//import './assets/theme/theme-green/index.css'





//import Mock from './mock'

//Mock.bootstrap();


__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$http = __WEBPACK_IMPORTED_MODULE_8_axios___default.a;
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vuex__["a" /* default */]);

//NProgress.configure({ showSpinner: false });

const router = new __WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_9__routes__["a" /* default */]
});

//router.beforeEach((to, from, next) => {
////NProgress.start();
//if (to.path == '/login') {
//  sessionStorage.removeItem('user');
//}
//let user = JSON.parse(sessionStorage.getItem('user'));
//if (!user && to.path != '/login') {
//  next({ path: '/login' })
//} else {
//  next()
//}
//})

//router.afterEach(transition => {
//NProgress.done();
//});

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  //el: '#app',
  //template: '<App/>',
  router,
  store: __WEBPACK_IMPORTED_MODULE_6__vuex_store__["a" /* default */],
  //components: { App }
  render: h => h(__WEBPACK_IMPORTED_MODULE_2__App___default.a)
}).$mount('#app');

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const increment = ({ commit }) => {
    commit('INCREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["increment"] = increment;

const decrement = ({ commit }) => {
    commit('DECREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["decrement"] = decrement;


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const getCount = state => {
    return state.count;
};
/* harmony export (immutable) */ __webpack_exports__["getCount"] = getCount;


/***/ }),

/***/ 516:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(524)

var Component = __webpack_require__(26)(
  /* script */
  null,
  /* template */
  __webpack_require__(553),
  /* scopeId */
  "data-v-d58d95c2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(523)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(251),
  /* template */
  __webpack_require__(552),
  /* scopeId */
  "data-v-cf4fceb0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(525)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(252),
  /* template */
  __webpack_require__(554),
  /* scopeId */
  "data-v-dee03a20",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(522)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(253),
  /* template */
  __webpack_require__(551),
  /* scopeId */
  "data-v-965ba6fc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(519)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(254),
  /* template */
  __webpack_require__(548),
  /* scopeId */
  "data-v-51aa8873",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(516)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(255),
  /* template */
  __webpack_require__(545),
  /* scopeId */
  "data-v-2c550b4a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(520)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(256),
  /* template */
  __webpack_require__(549),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(521)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(257),
  /* template */
  __webpack_require__(550),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(526)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(258),
  /* template */
  __webpack_require__(555),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(517)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(259),
  /* template */
  __webpack_require__(546),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "welcome"
  })
},staticRenderFns: []}

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getPermissionLists
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleAdd
    }
  }, [_vm._v("添加门户权限 ")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.selsChange,
      "cell-click": _vm.openCellDetails
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "menuRootName",
      "label": "一级菜单",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "menuName",
      "label": "二级菜单",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userName",
      "label": "用户",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "functionCode",
      "label": "是否排斥",
      "width": "200",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "min-150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDel(scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增管理用户",
      "visible": _vm.addFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.addFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "addForm",
    attrs: {
      "model": _vm.addForm,
      "label-width": "80px",
      "rules": _vm.addFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "菜单"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addForm.menuCode1),
      expression: "addForm.menuCode1"
    }],
    attrs: {
      "placeholder": "请选择一级菜单"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.addForm, "menuCode1", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }, function($event) {
        _vm.indexSelect($event)
      }]
    }
  }, _vm._l((_vm.options), function(option1) {
    return _c('option', {
      domProps: {
        "value": option1.menuCode
      }
    }, [_vm._v(_vm._s(option1.menuName))])
  })), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addForm.menuCode2),
      expression: "addForm.menuCode2"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.addForm, "menuCode2", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, _vm._l((_vm.selectionArr), function(option2) {
    return _c('option', {
      domProps: {
        "value": option2.menuCode
      }
    }, [_vm._v(_vm._s(option2.menuName))])
  }))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色名称",
      "prop": "userNames"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "placeholder": "请选择角色用户",
      "auto-complete": "off",
      "disabled": ""
    },
    model: {
      value: (_vm.addForm.userNames),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "userNames", $$v)
      },
      expression: "addForm.userNames"
    }
  }), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.getRoleUsersLists
    }
  }, [_vm._v("选择用户")])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "label": "员工号",
      "prop": "pernrs"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.pernrs),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "pernrs", $$v)
      },
      expression: "addForm.pernrs"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否排斥",
      "prop": "functionCode"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.addForm.functionCode),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "functionCode", $$v)
      },
      expression: "addForm.functionCode"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "是",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "否",
      "value": "1"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.addSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择角色用户",
      "visible": _vm.selectRoleDialogVisible,
      "width": "40%"
    },
    on: {
      "update:visible": function($event) {
        _vm.selectRoleDialogVisible = $event
      }
    }
  }, [
    [_c('el-col', {
      staticClass: "toolbar",
      staticStyle: {
        "padding-bottom": "0px"
      },
      attrs: {
        "span": 24
      }
    }, [_c('el-form', {
      attrs: {
        "inline": true,
        "model": _vm.filtersRole
      }
    }, [_c('el-form-item', [_c('el-input', {
      attrs: {
        "placeholder": "姓名"
      },
      model: {
        value: (_vm.filtersRole.name),
        callback: function($$v) {
          _vm.$set(_vm.filtersRole, "name", $$v)
        },
        expression: "filtersRole.name"
      }
    })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.searchFiltersRole
      }
    }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
      directives: [{
        name: "loading",
        rawName: "v-loading"
      }],
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "data": _vm.roleUsers,
        "highlight-current-row": ""
      }
    }, [_c('el-table-column', {
      attrs: {
        "type": "selection",
        "width": "55"
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "name",
        "label": "员工姓名",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "pernr",
        "label": "员工号",
        "min-width": "150",
        "sortable": ""
      }
    })], 1), _vm._v(" "), _c('el-col', {
      staticClass: "toolbar",
      attrs: {
        "span": 24
      }
    }, [_c('el-pagination', {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "layout": "total, sizes, prev, pager, next, jumper",
        "page-sizes": [10],
        "total": _vm.total
      },
      on: {
        "current-change": _vm.handleRoleUsersChange
      }
    })], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.selectRoleDialogVisible = false
        }
      }
    }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.sureSelectedRoleUsers
      }
    }, [_vm._v("确 定")])], 1)
  ], 2), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "已授权角色用户列表",
      "visible": _vm.hasSelectedRoleDialogVisible,
      "width": "40%"
    },
    on: {
      "update:visible": function($event) {
        _vm.hasSelectedRoleDialogVisible = $event
      }
    }
  }, [
    [_c('el-col', {
      staticClass: "toolbar",
      staticStyle: {
        "padding-bottom": "0px"
      },
      attrs: {
        "span": 24
      }
    }, [_c('el-form', {
      attrs: {
        "inline": true,
        "model": _vm.selectedRole
      }
    }, [_c('el-form-item', [_c('el-input', {
      attrs: {
        "placeholder": "姓名"
      },
      model: {
        value: (_vm.selectedRole.name),
        callback: function($$v) {
          _vm.$set(_vm.selectedRole, "name", $$v)
        },
        expression: "selectedRole.name"
      }
    })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.searchSelectedRole
      }
    }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
      directives: [{
        name: "loading",
        rawName: "v-loading"
      }],
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "data": _vm.hasSelectedRoles,
        "highlight-current-row": ""
      }
    }, [_c('el-table-column', {
      attrs: {
        "prop": "userName",
        "label": "员工姓名",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "pernr",
        "label": "员工号",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "label": "操作",
        "width": "min-150"
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function(scope) {
          return [_c('el-button', {
            attrs: {
              "type": "danger",
              "size": "small"
            },
            on: {
              "click": function($event) {
                _vm.delSelectedRole(scope.row)
              }
            }
          }, [_vm._v("删除")])]
        }
      }])
    })], 1), _vm._v(" "), _c('el-col', {
      staticClass: "toolbar",
      attrs: {
        "span": 24
      }
    }, [_c('el-pagination', {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "layout": "total, sizes, prev, pager, next, jumper",
        "page-sizes": [20],
        "total": _vm.total
      },
      on: {
        "current-change": _vm.handleRoleUsersChange
      }
    })], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.hasSelectedRoleDialogVisible = false
        }
      }
    }, [_vm._v("取 消")])], 1)
  ], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "搜索条件"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUsers
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleAdd
    }
  }, [_vm._v("新增管理角色")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.selsChange,
      "cell-click": _vm.openCellDetails
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "roleCode",
      "label": "角色编码",
      "width": "200",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "roleName",
      "label": "角色名称",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "roleDept",
      "label": "单位",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userNames",
      "label": "角色用户",
      "width": "200",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "min-150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.distributionOrganization(scope.row)
            }
          }
        }, [_vm._v("分配组织结构")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.Authorization(scope.row)
            }
          }
        }, [_vm._v("授权用户")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "warning",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDel(scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-col', {
    staticClass: "toolbar",
    attrs: {
      "span": 24
    }
  }, [_c('el-pagination', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "layout": "total, sizes, prev, pager, next, jumper",
      "page-sizes": [10],
      "total": _vm.total
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑分公司管理员信息",
      "visible": _vm.editFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.editFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "label-width": "80px",
      "rules": _vm.editFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "roleCode",
      "label": "角色编码"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off",
      "disabled": ""
    },
    model: {
      value: (_vm.editForm.roleCode),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "roleCode", $$v)
      },
      expression: "editForm.roleCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "roleName",
      "label": "角色名称"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.roleName),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "roleName", $$v)
      },
      expression: "editForm.roleName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "roleDept",
      "label": "管理单位"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.editForm.roleDept),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "roleDept", $$v)
      },
      expression: "editForm.roleDept"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "roleDesc",
      "label": "角色描述"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.editForm.roleDesc),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "roleDesc", $$v)
      },
      expression: "editForm.roleDesc"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.editFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.editLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.editSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增管理用户",
      "visible": _vm.addFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.addFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "addForm",
    attrs: {
      "model": _vm.addForm,
      "label-width": "80px",
      "rules": _vm.addFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "角色编码",
      "prop": "roleCode"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请填写角色编码",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.roleCode),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "roleCode", $$v)
      },
      expression: "addForm.roleCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色名称",
      "prop": "roleName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请填写角色名称",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.roleName),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "roleName", $$v)
      },
      expression: "addForm.roleName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "管理单位",
      "prop": "roleDept"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "placeholder": "请选择管理单位"
    },
    model: {
      value: (_vm.addForm.roleDept),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "roleDept", $$v)
      },
      expression: "addForm.roleDept"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色描述"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请填写角色描述"
    },
    model: {
      value: (_vm.addForm.roleDesc),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "roleDesc", $$v)
      },
      expression: "addForm.roleDesc"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.addSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择角色用户",
      "visible": _vm.selectRoleDialogVisible,
      "width": "50%"
    },
    on: {
      "update:visible": function($event) {
        _vm.selectRoleDialogVisible = $event
      }
    }
  }, [
    [_c('el-col', {
      staticClass: "toolbar",
      staticStyle: {
        "padding-bottom": "0px"
      },
      attrs: {
        "span": 24
      }
    }, [_c('el-form', {
      attrs: {
        "inline": true,
        "model": _vm.filtersRole
      }
    }, [_c('el-form-item', [_c('el-input', {
      attrs: {
        "placeholder": "姓名"
      },
      model: {
        value: (_vm.selectRoleName),
        callback: function($$v) {
          _vm.selectRoleName = $$v
        },
        expression: "selectRoleName"
      }
    })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.searchAuthorization
      }
    }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
      directives: [{
        name: "loading",
        rawName: "v-loading"
      }],
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "data": _vm.roleUsers,
        "highlight-current-row": ""
      }
    }, [_c('el-table-column', {
      attrs: {
        "type": "selection",
        "width": "55"
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "sname",
        "label": "员工姓名",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "pernr",
        "label": "员工号",
        "min-width": "150",
        "sortable": ""
      }
    })], 1), _vm._v(" "), _c('el-col', {
      staticClass: "toolbar",
      attrs: {
        "span": 24
      }
    }, [_c('el-pagination', {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "layout": "total, sizes, prev, pager, next, jumper",
        "page-sizes": [10],
        "total": _vm.total
      },
      on: {
        "current-change": _vm.handleRoleUsersChange
      }
    })], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.selectRoleDialogVisible = false
        }
      }
    }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.sureRoleUsers
      }
    }, [_vm._v("确 定")])], 1)
  ], 2), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "已授权角色用户列表",
      "visible": _vm.hasSelectedRoleDialogVisible,
      "width": "40%"
    },
    on: {
      "update:visible": function($event) {
        _vm.hasSelectedRoleDialogVisible = $event
      }
    }
  }, [
    [_c('el-col', {
      staticClass: "toolbar",
      staticStyle: {
        "padding-bottom": "0px"
      },
      attrs: {
        "span": 24
      }
    }, [_c('el-form', {
      attrs: {
        "inline": true,
        "model": _vm.filtersRole
      }
    }, [_c('el-form-item', [_c('el-input', {
      attrs: {
        "placeholder": "姓名"
      },
      model: {
        value: (_vm.filtersRole.name),
        callback: function($$v) {
          _vm.$set(_vm.filtersRole, "name", $$v)
        },
        expression: "filtersRole.name"
      }
    })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.searchRole
      }
    }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
      directives: [{
        name: "loading",
        rawName: "v-loading"
      }],
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "data": _vm.hasSelectedRoles,
        "highlight-current-row": ""
      }
    }, [_c('el-table-column', {
      attrs: {
        "prop": "userName",
        "label": "员工姓名",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "pernr",
        "label": "员工号",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "label": "操作",
        "width": "min-150"
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function(scope) {
          return [_c('el-button', {
            attrs: {
              "type": "danger",
              "size": "small"
            },
            on: {
              "click": function($event) {
                _vm.delSelectedRole(scope.row)
              }
            }
          }, [_vm._v("删除")])]
        }
      }])
    })], 1), _vm._v(" "), _c('el-col', {
      staticClass: "toolbar",
      attrs: {
        "span": 24
      }
    }, [_c('el-pagination', {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "layout": "total, sizes, prev, pager, next, jumper",
        "page-sizes": [10],
        "total": _vm.total
      },
      on: {
        "current-change": _vm.handleSelectedRoleUsersChange
      }
    })], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.hasSelectedRoleDialogVisible = false
        }
      }
    }, [_vm._v("取 消")])], 1)
  ], 2), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择组织架构",
      "visible": _vm.organizationVisible,
      "width": "40%"
    },
    on: {
      "update:visible": function($event) {
        _vm.organizationVisible = $event
      }
    }
  }, [_c('el-tree', {
    ref: "tree",
    attrs: {
      "data": _vm.treeData,
      "show-checkbox": "",
      "node-key": "id",
      "highlight-current": "",
      "props": _vm.defaultProps
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "buttons",
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.organizationVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitCheckedNodes
    }
  }, [_vm._v("确定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleAdd
    }
  }, [_vm._v("新增菜单")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.selsChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "menuCode",
      "width": "180",
      "label": "菜单标识"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "menuName",
      "label": "菜单名称",
      "width": "160",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "menuUrl",
      "label": "菜单url",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "parentMenuName",
      "label": "父菜单名称",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "menuType",
      "label": "菜单类型",
      "width": "160",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "frontBack",
      "label": "菜单用途",
      "min-width": "160",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDel(scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-col', {
    staticClass: "toolbar",
    attrs: {
      "span": 24
    }
  }, [_c('el-pagination', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "layout": "total, sizes, prev, pager, next, jumper",
      "page-size": 10,
      "total": _vm.total
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑",
      "visible": _vm.editFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.editFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "label-width": "80px",
      "rules": _vm.editFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "菜单用途",
      "prop": "frontBack"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.editForm.frontBack),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "frontBack", $$v)
      },
      expression: "editForm.frontBack"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("前台门户")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 0
    }
  }, [_vm._v("后台管理")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单类型",
      "prop": "menuType"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.editForm.menuType),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "menuType", $$v)
      },
      expression: "editForm.menuType"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("菜单")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 2
    }
  }, [_vm._v("目录")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 3
    }
  }, [_vm._v("按钮")])], 1)], 1), _vm._v(" "), (false) ? _c('el-form-item', {
    attrs: {
      "label": "父级菜单Id",
      "prop": "parentId"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.parentId),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "parentId", $$v)
      },
      expression: "editForm.parentId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "父级菜单",
      "prop": "parentMenuName"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.parentMenuName),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "parentMenuName", $$v)
      },
      expression: "editForm.parentMenuName"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "plain": true
    },
    on: {
      "click": function($event) {
        _vm.getTreeData('edit')
      }
    }
  }, [_vm._v("选择")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单编码",
      "prop": "menuCode"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.menuCode),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "menuCode", $$v)
      },
      expression: "editForm.menuCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单名称",
      "prop": "menuName"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.menuName),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "menuName", $$v)
      },
      expression: "editForm.menuName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单url",
      "prop": "menuUrl"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.menuUrl),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "menuUrl", $$v)
      },
      expression: "editForm.menuUrl"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "排序号",
      "prop": "menuSort"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.menuSort),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "menuSort", $$v)
      },
      expression: "editForm.menuSort"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图标",
      "prop": "menuImage"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.menuImage),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "menuImage", $$v)
      },
      expression: "editForm.menuImage"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否开放",
      "prop": "isopen"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.editForm.isopen),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "isopen", $$v)
      },
      expression: "editForm.isopen"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 0
    }
  }, [_vm._v("否")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否窗口",
      "prop": "isPopup"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.editForm.isPopup),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "isPopup", $$v)
      },
      expression: "editForm.isPopup"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 0
    }
  }, [_vm._v("否")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.editFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.editLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.editSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增菜单项",
      "visible": _vm.addFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.addFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "addForm",
    attrs: {
      "model": _vm.addForm,
      "label-width": "80px",
      "rules": _vm.addFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "菜单用途",
      "prop": "frontBack"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.addForm.frontBack),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "frontBack", $$v)
      },
      expression: "addForm.frontBack"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("前台门户")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": '0'
    }
  }, [_vm._v("后台管理")])], 1)], 1), _vm._v(" "), (false) ? _c('el-form-item', {
    attrs: {
      "label": "父菜单id",
      "prop": "parentId"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.parentId),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "parentId", $$v)
      },
      expression: "addForm.parentId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "父级菜单",
      "prop": "parentMenuName"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.parentMenuName),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "parentMenuName", $$v)
      },
      expression: "addForm.parentMenuName"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "plain": true
    },
    on: {
      "click": function($event) {
        _vm.getTreeData('add')
      }
    }
  }, [_vm._v("选择")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单类型",
      "prop": "menuType"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.addForm.menuType),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "menuType", $$v)
      },
      expression: "addForm.menuType"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("菜单")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 2
    }
  }, [_vm._v("目录")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 3
    }
  }, [_vm._v("按钮")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单编码",
      "prop": "menuCode"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.menuCode),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "menuCode", $$v)
      },
      expression: "addForm.menuCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单名称",
      "prop": "menuName"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.menuName),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "menuName", $$v)
      },
      expression: "addForm.menuName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单url",
      "prop": "menuUrl"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.menuUrl),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "menuUrl", $$v)
      },
      expression: "addForm.menuUrl"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "排序号",
      "prop": "menuSort"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.menuSort),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "menuSort", $$v)
      },
      expression: "addForm.menuSort"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图标",
      "prop": "menuImage"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.menuImage),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "menuImage", $$v)
      },
      expression: "addForm.menuImage"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否开放",
      "prop": "isopen"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.addForm.isopen),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "isopen", $$v)
      },
      expression: "addForm.isopen"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 0
    }
  }, [_vm._v("否")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否窗口",
      "prop": "isPopup"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.addForm.isPopup),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "isPopup", $$v)
      },
      expression: "addForm.isPopup"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 0
    }
  }, [_vm._v("否")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.addSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择父级菜单",
      "visible": _vm.parentTreeVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.parentTreeVisible = $event
      }
    }
  }, [_c('el-tree', {
    ref: "tree",
    attrs: {
      "data": _vm.parentTreedata,
      "props": _vm.defaultProps,
      "show-checkbox": "",
      "node-key": "id",
      "check-strictly": true,
      "highlight-current": true,
      "default-expand-all": "",
      "expand-on-click-node": false
    },
    on: {
      "check-change": _vm.checkChange,
      "node-click": _vm.nodeClick
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.parentTreeVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.parentTreeDataSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getPermissionLists
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleAdd
    }
  }, [_vm._v("添加门户权限 ")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.selsChange,
      "cell-click": _vm.openCellDetails
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "menuRootName",
      "label": "一级菜单",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "menuName",
      "label": "二级菜单",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userName",
      "label": "用户",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "functionCode",
      "label": "是否排斥",
      "width": "200",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "min-150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDel(scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增管理用户",
      "visible": _vm.addFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.addFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "addForm",
    attrs: {
      "model": _vm.addForm,
      "label-width": "80px",
      "rules": _vm.addFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "菜单"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addForm.menuCode1),
      expression: "addForm.menuCode1"
    }],
    attrs: {
      "placeholder": "请选择一级菜单"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.addForm, "menuCode1", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }, function($event) {
        _vm.indexSelect($event)
      }]
    }
  }, _vm._l((_vm.options), function(option1) {
    return _c('option', {
      domProps: {
        "value": option1.menuCode
      }
    }, [_vm._v(_vm._s(option1.menuName))])
  })), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addForm.menuCode2),
      expression: "addForm.menuCode2"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.addForm, "menuCode2", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, _vm._l((_vm.selectionArr), function(option2) {
    return _c('option', {
      domProps: {
        "value": option2.menuCode
      }
    }, [_vm._v(_vm._s(option2.menuName))])
  }))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色名称",
      "prop": "userNames"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "placeholder": "请选择角色用户",
      "auto-complete": "off",
      "disabled": ""
    },
    model: {
      value: (_vm.addForm.userNames),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "userNames", $$v)
      },
      expression: "addForm.userNames"
    }
  }), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.getRoleUsersLists
    }
  }, [_vm._v("选择用户")])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "label": "员工号",
      "prop": "pernrs"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.pernrs),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "pernrs", $$v)
      },
      expression: "addForm.pernrs"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否排斥",
      "prop": "functionCode"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.addForm.functionCode),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "functionCode", $$v)
      },
      expression: "addForm.functionCode"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "是",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "否",
      "value": "1"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.addSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择角色用户",
      "visible": _vm.selectRoleDialogVisible,
      "width": "50%"
    },
    on: {
      "update:visible": function($event) {
        _vm.selectRoleDialogVisible = $event
      }
    }
  }, [
    [_c('el-col', {
      staticClass: "toolbar",
      staticStyle: {
        "padding-bottom": "0px"
      },
      attrs: {
        "span": 24
      }
    }, [_c('el-form', {
      attrs: {
        "inline": true,
        "model": _vm.filtersRole
      }
    }, [_c('el-form-item', [_c('el-input', {
      attrs: {
        "placeholder": "姓名"
      },
      model: {
        value: (_vm.filtersRole.name),
        callback: function($$v) {
          _vm.$set(_vm.filtersRole, "name", $$v)
        },
        expression: "filtersRole.name"
      }
    })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.getUsersLists
      }
    }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
      directives: [{
        name: "loading",
        rawName: "v-loading"
      }],
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "data": _vm.roleUsers,
        "highlight-current-row": ""
      }
    }, [_c('el-table-column', {
      attrs: {
        "type": "selection",
        "width": "55"
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "ename",
        "label": "员工姓名",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "pernr",
        "label": "员工号",
        "min-width": "150",
        "sortable": ""
      }
    })], 1), _vm._v(" "), _c('el-col', {
      staticClass: "toolbar",
      attrs: {
        "span": 24
      }
    }, [_c('el-pagination', {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "layout": "total, sizes, prev, pager, next, jumper",
        "page-sizes": [10],
        "total": _vm.total
      },
      on: {
        "current-change": _vm.handleRoleUsersChange
      }
    })], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.selectRoleDialogVisible = false
        }
      }
    }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.sureSelectedRoleUsers
      }
    }, [_vm._v("确 定")])], 1)
  ], 2), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "已授权角色用户列表",
      "visible": _vm.hasSelectedRoleDialogVisible,
      "width": "40%"
    },
    on: {
      "update:visible": function($event) {
        _vm.hasSelectedRoleDialogVisible = $event
      }
    }
  }, [
    [_c('el-col', {
      staticClass: "toolbar",
      staticStyle: {
        "padding-bottom": "0px"
      },
      attrs: {
        "span": 24
      }
    }, [_c('el-form', {
      attrs: {
        "inline": true,
        "model": _vm.selectedFiltersRole
      }
    }, [_c('el-form-item', [_c('el-input', {
      attrs: {
        "placeholder": "姓名"
      },
      model: {
        value: (_vm.selectedFiltersRole.name),
        callback: function($$v) {
          _vm.$set(_vm.selectedFiltersRole, "name", $$v)
        },
        expression: "selectedFiltersRole.name"
      }
    })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": function($event) {}
      }
    }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
      directives: [{
        name: "loading",
        rawName: "v-loading"
      }],
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "data": _vm.hasSelectedRoles,
        "highlight-current-row": ""
      }
    }, [_c('el-table-column', {
      attrs: {
        "prop": "userName",
        "label": "员工姓名",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "prop": "pernr",
        "label": "员工号",
        "width": "150",
        "sortable": ""
      }
    }), _vm._v(" "), _c('el-table-column', {
      attrs: {
        "label": "操作",
        "width": "min-150"
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function(scope) {
          return [_c('el-button', {
            attrs: {
              "type": "danger",
              "size": "small"
            },
            on: {
              "click": function($event) {
                _vm.delSelectedRole(scope.row)
              }
            }
          }, [_vm._v("删除")])]
        }
      }])
    })], 1), _vm._v(" "), _c('el-col', {
      staticClass: "toolbar",
      attrs: {
        "span": 24
      }
    }, [_c('el-pagination', {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "layout": "total, sizes, prev, pager, next, jumper",
        "page-sizes": [10],
        "total": _vm.total
      },
      on: {
        "current-change": _vm.selectedRoleUsersChange
      }
    })], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.hasSelectedRoleDialogVisible = false
        }
      }
    }, [_vm._v("取 消")])], 1)
  ], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._v("\n\tmain\n")])
},staticRenderFns: []}

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "container"
  }, [_c('el-col', {
    staticClass: "header",
    attrs: {
      "span": 24
    }
  }, [_c('el-col', {
    staticClass: "logo",
    class: _vm.collapsed ? 'logo-collapse-width' : 'logo-width',
    attrs: {
      "span": 10
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.collapsed ? '' : _vm.sysName) + "\n\t\t")]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('div', {
    staticClass: "tools",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.collapse($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "userinfo",
    attrs: {
      "span": 4
    }
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "hover"
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link userinfo-inner"
  }, [_c('img', {
    attrs: {
      "src": this.sysUserAvatar
    }
  }), _vm._v(" " + _vm._s(_vm.sysUserName))]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', [_vm._v("我的消息")]), _vm._v(" "), _c('el-dropdown-item', [_vm._v("设置")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "divided": ""
    },
    nativeOn: {
      "click": function($event) {
        return _vm.logout($event)
      }
    }
  }, [_vm._v("退出登录")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "main",
    attrs: {
      "span": 24
    }
  }, [_c('aside', {
    class: _vm.collapsed ? 'menu-collapsed' : 'menu-expanded'
  }, [_c('el-menu', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.collapsed),
      expression: "!collapsed"
    }],
    staticClass: "el-menu-vertical-demo first-vertical-demo",
    attrs: {
      "default-active": _vm.$route.path,
      "unique-opened": "",
      "router": ""
    },
    on: {
      "open": _vm.handleopen,
      "close": _vm.handleclose,
      "select": _vm.handleselect
    }
  }, [_vm._l((_vm.$router.options.routes), function(item, index) {
    return (item.hidden == 'false') ? [(!item.leaf) ? _c('el-submenu', {
      attrs: {
        "index": index + ''
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._l((item.children), function(child) {
      return (child.hidden == 'false') ? _c('el-menu-item', {
        key: child.path,
        attrs: {
          "index": child.path
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    })], 2) : _vm._e(), _vm._v(" "), (item.leaf && item.children.length > 0) ? _c('el-menu-item', {
      attrs: {
        "index": item.children[0].path
      }
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.children[0].name))]) : _vm._e()] : _vm._e()
  })], 2), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.collapsed),
      expression: "collapsed"
    }],
    ref: "menuCollapsed",
    staticClass: "el-menu el-menu-vertical-demo collapsed"
  }, _vm._l((_vm.$router.options.routes), function(item, index) {
    return (item.hidden == 'false') ? _c('li', {
      staticClass: "el-submenu item"
    }, [(!item.leaf) ? [_c('div', {
      staticClass: "el-submenu__title",
      staticStyle: {
        "padding-left": "20px"
      },
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })]), _vm._v(" "), _c('ul', {
      staticClass: "el-menu submenu",
      class: 'submenu-hook-' + index,
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, _vm._l((item.children), function(child) {
      return (child.hidden == 'false') ? _c('li', {
        key: child.path,
        staticClass: "el-menu-item",
        class: _vm.$route.path == child.path ? 'is-active' : '',
        staticStyle: {
          "padding-left": "40px"
        },
        on: {
          "click": function($event) {
            _vm.$router.push(child.path)
          }
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    }))] : [_c('li', {
      staticClass: "el-submenu"
    }, [_c('div', {
      staticClass: "el-submenu__title el-menu-item",
      class: _vm.$route.path == item.children[0].path ? 'is-active' : '',
      staticStyle: {
        "padding-left": "20px",
        "height": "56px",
        "line-height": "56px",
        "padding": "0 20px"
      },
      on: {
        "click": function($event) {
          _vm.$router.push(item.children[0].path)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })])])]], 2) : _vm._e()
  }))], 1), _vm._v(" "), _c('section', {
    staticClass: "content-container"
  }, [_c('div', {
    staticClass: "grid-content bg-purple-light"
  }, [_c('el-col', {
    staticClass: "breadcrumb-container",
    attrs: {
      "span": 24
    }
  }, [_c('strong', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$route.name))]), _vm._v(" "), _c('el-breadcrumb', {
    staticClass: "breadcrumb-inner",
    attrs: {
      "separator": "/"
    }
  }, _vm._l((_vm.$route.matched), function(item) {
    return _c('el-breadcrumb-item', {
      key: item.path
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t\t\t")])
  }))], 1), _vm._v(" "), _c('el-col', {
    staticClass: "content-wrapper",
    attrs: {
      "span": 24
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "page-container"
  }, [_vm._v("404 page not found")])
},staticRenderFns: []}

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    ref: "ruleForm2",
    staticClass: "demo-ruleForm login-container",
    attrs: {
      "model": _vm.ruleForm2,
      "rules": _vm.rules2,
      "label-position": "left",
      "label-width": "0px"
    }
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("雨虹人力后台")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "account"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "auto-complete": "off",
      "placeholder": "账号"
    },
    model: {
      value: (_vm.ruleForm2.account),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "account", $$v)
      },
      expression: "ruleForm2.account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "checkPass"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.ruleForm2.checkPass),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "checkPass", $$v)
      },
      expression: "ruleForm2.checkPass"
    }
  })], 1), _vm._v(" "), _c('el-checkbox', {
    staticClass: "remember",
    attrs: {
      "checked": ""
    },
    model: {
      value: (_vm.checked),
      callback: function($$v) {
        _vm.checked = $$v
      },
      expression: "checked"
    }
  }, [_vm._v("记住密码")]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('el-button', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "primary",
      "loading": _vm.logining
    },
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.handleSubmit2($event)
      }
    }
  }, [_vm._v("登录")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUsers
    }
  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "pernr",
      "width": "180",
      "label": "员工号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "员工姓名",
      "width": "160",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "werks",
      "label": "人事范围",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "dept",
      "label": "部门",
      "width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "plansName",
      "label": "岗位",
      "width": "160",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "zzhrZj",
      "label": "职级",
      "min-width": "160",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.getTreeData(scope.row)
            }
          }
        }, [_vm._v("分配组织结构")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-col', {
    staticClass: "toolbar",
    attrs: {
      "span": 24
    }
  }, [_c('el-pagination', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "layout": "total, sizes, prev, pager, next, jumper",
      "page-size": 10,
      "total": _vm.total
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择父级菜单",
      "visible": _vm.parentTreeVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.parentTreeVisible = $event
      }
    }
  }, [_c('el-tree', {
    ref: "tree",
    attrs: {
      "data": _vm.parentTreedata,
      "show-checkbox": "",
      "default-expand-all": "",
      "node-key": "id",
      "highlight-current": "",
      "props": _vm.defaultProps
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.parentTreeVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.parentTreeDataSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

},[261]);
//# sourceMappingURL=app.4156efedee79479eeea5.js.map