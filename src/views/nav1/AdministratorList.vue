<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="搜索条件"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增管理角色</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="index" width="70" label="序号">
            </el-table-column>
			<el-table-column prop="roleCode" label="角色编码" width="200" sortable>
			</el-table-column>
			<el-table-column prop="roleName" label="角色名称" width="180" sortable>
			</el-table-column>
			<el-table-column prop="roleDept" label="单位" width="180" sortable>
			</el-table-column>
			<!--<el-table-column prop="userNames" label="角色用户" width="200" sortable>
			</el-table-column>-->
			<el-table-column label="操作" width="min-150">
				<template scope="scope">
					<!--<el-button size="small" @click="distributionOrganization(scope.row)">分配组织结构</el-button>-->
					<!--<el-button size="small" @click="Authorization(scope.row)">授权用户</el-button>-->
					<el-button size="small" v-if="scope.row.roleType != 1 && scope.row.roleType != 0" @click="changeName(scope.$index,scope.row)">更名</el-button>
					<el-button type="warning" size="small" v-if="scope.row.roleType != 1 && scope.row.roleType != 0" @click="handleEdit(scope.row)">编辑</el-button>
					<el-button type="danger" size="small" v-if="scope.row.roleType != 1 && scope.row.roleType != 0" @click="handleDel(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" :page-sizes="[10]" :total="totalLists" style="float:right;">
			</el-pagination>
		</el-col>
		
		<!--新增界面-->
		<el-dialog title="新增管理用户" :visible.sync="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
			    <!--<el-form-item label="角色编码" prop="roleCode">
					<el-input v-model="addForm.roleCode" placeholder="请填写角色编码" auto-complete="off"></el-input>
				</el-form-item>-->
				<el-form-item label="角色名称" prop="roleName">
					<el-input v-model="addForm.roleName" placeholder="请填写角色名称" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="管理单位" prop="roleDept">
					<el-input type="text" placeholder="请选择管理单位" v-model="addForm.roleDept" disabled style="width:85%"></el-input>
					<el-button @click="getManagement">选择</el-button>
				</el-form-item>
				<el-form-item label="单位编码" prop="roleDeptCode" v-show="false">
					<el-input type="text" v-model="addForm.roleDeptCode" ></el-input>
				</el-form-item>
				<el-form-item label="角色描述">
					<el-input type="textarea" placeholder="请填写角色描述" v-model="addForm.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
		<!--<add-user mold="basic"></add-user>-->

		<!--更名界面-->
		<el-dialog title="更改分公司管理员信息" :visible.sync="changeNameFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<!--<el-form-item prop="roleCode" label="角色编码">
					<el-input v-model="editForm.roleCode" auto-complete="off" disabled></el-input>
				</el-form-item>-->
				<el-form-item prop="roleName" label="角色名称">
					<el-input v-model="editForm.roleName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item prop="roleDept" label="管理单位">
					<el-input type="text" v-model="editForm.roleDept" disabled style="width:85%"></el-input>
					<el-button @click="getManagement">选择</el-button>
				</el-form-item>
				<el-form-item label="单位编码" prop="roleDeptCode" v-show="false">
					<el-input type="text" v-model="editForm.roleDeptCode" ></el-input>
				</el-form-item>
				<el-form-item prop="roleDesc" label="角色描述">
					<el-input type="textarea" v-model="editForm.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="changeNameFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--编辑界面-->
		<el-dialog title="编辑分公司管理员信息" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-col :span="24" class="toolbar">
					<el-row>
					  <el-input placeholder="搜索条件" v-model="filtersRole.name" style="width: 20%;"></el-input>
					  <el-button icon="el-icon-search" circle @click="openCellDetails"></el-button>
					  <el-button type="primary" icon="el-icon-plus" circle @click="Authorization"></el-button>
					  <el-button type="danger" icon="el-icon-delete" circle @click="delSelectedRole"></el-button>
					  <el-button type="success" @click="distributionOrganization">分配组织结构</el-button>
					</el-row>
				</el-col>
				<el-table :data="hasSelectedRoles" highlight-current-row v-loading="" style="width: 100%;">
					<el-table-column type="selection" width="55">
				    </el-table-column>
					<el-table-column prop="userName" label="已授权用户姓名" width="150" sortable>
					</el-table-column>
					<el-table-column prop="pernr" label="员工号" width="min-150" sortable>
					</el-table-column>
				</el-table>
				<el-col :span="24" class="toolbar">
					<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleSelectedRoleUsersChange" :page-sizes="[10]" :total="total" style="float:right;">
					</el-pagination>
				</el-col>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
			</div>
		</el-dialog>
		
		<!--选择管理单位弹框-->
		<el-dialog title="选择管理单位" custom-class="selectManagementDialog" :visible.sync="selectManagementDialogVisible" width="50%">
		  <template>
		  	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
				<el-form :inline="true">
					<el-form-item>
						<el-input v-model="selectManagement" placeholder="单位名称"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click="getManagement">查询</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<el-table :data="managements" highlight-current-row v-loading="" style="width: 100%;">
				<el-table-column type="selection" width="55">
			    </el-table-column>
				<el-table-column prop="persa" label="编号" width="150" sortable>
				</el-table-column>
				<el-table-column prop="name1" label="单位名称" min-width="150" sortable>
				</el-table-column>
			</el-table>
			<!--工具条-->
			<el-col :span="24" class="toolbar">
				<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="" :page-sizes="[10]" :total="managementTotal" style="float:right;">
				</el-pagination>
			</el-col>
		  </template>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="selectManagementDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="sureManagement">确 定</el-button>
		  </span>
		</el-dialog>
		
		<!--选择角色用户弹框-->
		<el-dialog title="选择角色用户" custom-class="selectRoleDialog" :visible.sync="selectRoleDialogVisible" width="50%">
		  <template>
		  	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
				<el-form :inline="true" :model="filtersRole">
					<el-form-item>
						<el-input v-model="selectRoleName" placeholder="姓名"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click="searchAuthorization">查询</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<el-table :data="roleUsers" highlight-current-row v-loading="" style="width: 100%;">
				<el-table-column type="selection" width="55">
			    </el-table-column>
				<el-table-column prop="sname" label="员工姓名" width="150" sortable>
				</el-table-column>
				<el-table-column prop="pernr" label="员工号" min-width="150" sortable>
				</el-table-column>
			</el-table>
			<!--工具条-->
			<el-col :span="24" class="toolbar">
				<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleRoleUsersChange" :page-sizes="[10]" :total="allUserstotal" style="float:right;">
				</el-pagination>
			</el-col>
		  </template>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="selectRoleDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="sureRoleUsers">确 定</el-button>
		  </span>
		</el-dialog>
		
		<!--已选用户列表弹框-->
		<el-dialog title="已授权角色用户列表" :visible.sync="hasSelectedRoleDialogVisible" width="40%">
		  <template>
		  	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
				<el-form :inline="true" :model="filtersRole">
					<el-form-item>
						<el-input v-model="filtersRole.name" placeholder="姓名"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click="searchRole">查询</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<el-table :data="hasSelectedRoles" highlight-current-row v-loading="" style="width: 100%;">
				<el-table-column prop="userName" label="员工姓名" width="150" sortable>
				</el-table-column>
				<el-table-column prop="pernr" label="员工号" width="150" sortable>
				</el-table-column>
				<el-table-column label="操作" width="min-150">
					<template scope="scope">
						<el-button type="danger" size="small" @click="delSelectedRole(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!--工具条-->
			<el-col :span="24" class="toolbar">
				<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleSelectedRoleUsersChange" :page-sizes="[10]" :total="total" style="float:right;">
				</el-pagination>
			</el-col>
		  </template>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="hasSelectedRoleDialogVisible = false">取 消</el-button>
		  </span>
		</el-dialog>
		
		<!--选择组织架构弹框-->
		<el-dialog title="选择组织架构" :visible.sync="organizationVisible" width="40%">
            <el-tree :data="treeData" show-checkbox="" node-key="id" ref="tree" highlight-current :props="defaultProps">
            </el-tree>
            <div class="buttons" style="float: right;">
            	<el-button @click="organizationVisible = false">取消</el-button>
                <el-button type="primary" @click="submitCheckedNodes">确定</el-button>
            </div>
		</el-dialog>	
	</section>
</template>

<script>
//	import util from '../../common/js/util'
//	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
//  import AddUser from "./AddUser";
    let baseUrl = 'http://plat.ehr.yuhong.com.cn'
	export default {
//		components: { AddUser },
		data() {
			return {
				filters: {
					name: ''
				},
				filtersRole:{
					name: ''
				},
				selectManagement:'',
				mold:"",
				roleUsers:[],
				users: [],
				managements:[],
				hasSelectedRoles:[],
				organizationArr: [],
				total: 0,
				totalLists:0,
				allUserstotal:0,
				managementTotal:0,
				page: 1,
				pageSize:10,
				newRow:'',
				managementPersa:'',
				managementName:'',
				selPersa:'',
				selName:'',
				cellDetailsRow:'',
				selectRoleName:'',
				listLoading: false,
				sels: [],//列表选中列
                dialogVisible: false,
                editFormVisible: false,
                selectRoleDialogVisible:false,
                selectManagementDialogVisible:false,
                hasSelectedRoleDialogVisible:false,
                organizationVisible:false,
				changeNameFormVisible: false,//编辑界面是否显示
				editLoading: false,
				delButtonShow:true,
				editFormRules: {
//					roleCode: [
//					    { required: true, message: '请输入角色编码', trigger: 'blur' }
//					],
					roleName: [
						{ required: true, message: '请输入角色名称', trigger: 'blur' }
					],roleDept: [
						{ required: true, message: '请选择管理单位', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
//					roleCode: '',
					roleName: '',
					roleDept: '',
					roleDesc: '',
					roleDeptCode:''
				},
				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
//					roleCode: [
//					    { required: true, message: '请输入角色编码', trigger: 'blur' }
//					],
					roleName: [
						{ required: true, message: '请输入角色名称', trigger: 'blur' }
					],roleDept: [
						{ required: true, message: '请选择管理单位', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
//					roleCode: '',
					roleName: '',
					roleDept: '',
					roleDesc: '',
					roleDeptCode:''
				},
				//树的数据
				treeData: [],
		        defaultProps: {
		          children: 'children',
		          label: 'name',
		          id:'id'
		        }
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			handleRoleUsersChange(val){
				this.page = val;
				this.Authorization();
			},
			handleSelectedRoleUsersChange(val){
				this.page = val;
				this.openCellDetails()
			},
			handleclose() {
				//console.log('handleclose');
			},
			//获取管理员列表
            getUsers() {
				this.$http({
				    method:"post",
				    url:baseUrl+"/tSysRole/getTSysRoleList",
				    params:{
						"currentPage": this.page,
						"selContent": this.filters.name,
						"roleCode":"",
						"pageSize":this.pageSize,
					},
				}).then((res)=>{
				    let result = res.data;
				    if(result.code==200){
		              	this.totalLists = result.totalPages*result.pageSize;
					    this.users = result.data;
					    this.listLoading = false;
					    for(let i=0;i<this.users.length;i++){
					    	if(this.users[i].userNames&&this.users[i].userNames.length>10){
						    	this.users[i].userNames = this.users[i].userNames.slice(0,10)+"...";
					    	}
					    	
					    }
		              }
				})
			},
			//获取管理单位列表
			getManagement(){
				this.selectManagementDialogVisible = true;
				var _this = this;
				$.ajax({
		            url : baseUrl+"/tSysRole/getMbT500pAllList",
		            type : "POST",
		            data : {
		            	"selContent":this.selectManagement
		            },
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
					    _this.managements = result.data
					    _this.managementTotal = result.totalPages*result.pageSize;
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			//确定选择的管理单位
			sureManagement(){
				this.selectManagementDialogVisible = false;
				var selManagementNameArr = [];
				var selManagementPersaArr = [];
				$(".selectManagementDialog .el-table__body-wrapper span.is-checked").each(function(){
					this.managementName = $(this).closest(".el-table__row").find("td:nth-child(3)").text();
					selManagementNameArr.push(this.managementName);
					this.managementPersa = $(this).closest(".el-table__row").find("td:nth-child(2)").text();
					selManagementPersaArr.push(this.managementPersa);
				})
				this.addForm.roleDept = selManagementNameArr.join(",");
				this.addForm.roleDeptCode = selManagementPersaArr.join(",");
				this.editForm.roleDept = selManagementNameArr.join(",");
				this.editForm.roleDeptCode = selManagementPersaArr.join(",");
			},
			//已授权角色用户列表
			openCellDetails() {
				let para = {
					"roleCode" :this.cellDetailsRow.roleCode,
					"currentPage":this.page,
					"pageSize":this.pageSize,
					"selContent":this.filtersRole.name
				}
				let _this=this
				$.ajax({
		            url : baseUrl+"/tSysRole/getSapUserListByFunc",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
					    _this.hasSelectedRoles = result.data
					    _this.total = result.totalPages*result.pageSize;
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			searchRole(){
				let para = {
					"roleCode" :this.cellDetailsRow.roleCode,
					"currentPage":this.page,
					"pageSize":this.pageSize,
					"selContent":this.filtersRole.name
				}
				let _this=this
				$.ajax({
		            url : baseUrl+"/tSysRole/getSapUserListByFunc",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
					    _this.hasSelectedRoles = result.data
					    _this.total = result.totalPages*result.pageSize;
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			//删除单个角色用户
			delSelectedRole() {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					var selRolePersaArr = [];
					$(".el-table--fit .el-table__body-wrapper span.is-checked").each(function(){
						this.selRolePersa = $(this).closest(".el-table__row").find("td:nth-child(3)").text();
						selRolePersaArr.push(this.selRolePersa);
					})
					let para = { 
						"roleCode": this.cellDetailsRow.roleCode,
					    "pernr" : selRolePersaArr.join(",")
					};
                    let _this = this;
					$.ajax({
			            url : baseUrl+"/tSysRole/deleteTSysRoleWithUser",
			            type : "POST",
			            data : para,
			            dataType : "json",
			            success : function(result) {
			              if(result.code==200){
						    _this.$message({
							  message: '删除成功',
							  type: 'success'
						    });
			              }
			              _this.openCellDetails();
			           },
			           error:function(msg){
			              console.log(msg);
			           }
			        })
				}).catch(() => {
                    console.log(11)
				});
			},
			//获取分配组织架构树
			distributionOrganization(row) {
				this.organizationVisible = true
				let para = {
					"roleCode": this.cellDetailsRow.roleCode
				};
				let _this = this; 
				$.ajax({
		            url : baseUrl+"/tSysRole/getOrgTreelist",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
					    _this.treeData = result.data;
		                 setTimeout(function(){
		                 	_this.$refs.tree.setCheckedNodes(result.checkedData);
		                 },500)
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			//确定选中的树结构
			submitCheckedNodes() {
				this.organizationVisible = false;
				let treeNodes = this.$refs.tree.getCheckedNodes();
				let treeNodesIdArr = [];
				let treeNodesIdArrs = [];
				for(let i = 0;i<treeNodes.length;i++){
					if(this.$refs.tree.getNode(treeNodes[i].id).parent.checked == false){
						treeNodesIdArrs.push(treeNodes[i].id)
					}else{
						treeNodesIdArrs.push(this.$refs.tree.getNode(treeNodes[i].id).parent.data.id);
					}
				};
			    for(var i = 0; i < treeNodesIdArrs.length; i++){
			        if(treeNodesIdArr.indexOf(treeNodesIdArrs[i]) == -1){
			            treeNodesIdArr.push(treeNodesIdArrs[i]);
			        }
			    }
				let para = {
					"roleCode":this.cellDetailsRow.roleCode,
					"orgids":treeNodesIdArr.join(",")
				}
				let _this= this;
				$.ajax({
		            url : baseUrl+"/tSysRole/saveTSysRoleWithOrg",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
					    _this.organizationVisible = false
					    _this.$message({
						  message: '组织结构分配成功',
						  type: 'success'
					    });
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			//获取角色用户列表
			Authorization() {
				this.selectRoleDialogVisible = true
				let para = {
					"currentPage": this.page,
					"pageSize":this.pageSize,
					"selContent":this.selectRoleName
				};
				this.rolelistLoading = true;
                let _this = this ; 
                $.ajax({
		            url : baseUrl+"/tSysRole/getSapUserList",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.allUserstotal = result.pageSize*result.totalPages;
					    _this.roleUsers = result.data;
					    _this.rolelistLoading = false;
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			searchAuthorization(){
				let para = {
					"currentPage": this.page,
					"pageSize":this.pageSize,
					"selContent":this.selectRoleName
				};
				this.rolelistLoading = true;
                let _this = this ; 
                $.ajax({
		            url : baseUrl+"/tSysRole/getSapUserList",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.total = result.pageSize*result.totalPages;
					    _this.roleUsers = result.data;
					    _this.rolelistLoading = false;
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			sureRoleUsers() {
				let selRoleNameArr = [];
				let selRolePernrsArr = [];
				let roleName ='';
				let rolePernrs='';
				$(".selectRoleDialog .el-table__body-wrapper span.is-checked").each(function(){
					roleName = $(this).closest(".el-table__row").find("td:nth-child(2)").text();
					selRoleNameArr.push(roleName);
					rolePernrs = $(this).closest(".el-table__row").find("td:nth-child(3)").text();
					selRolePernrsArr.push(rolePernrs);
				})
				let para = {
					"roleCode": this.cellDetailsRow.roleCode,
					"pernrs": selRolePernrsArr.join(","),
					"userNames":selRoleNameArr.join(",")
				};
                let _this = this ; 
                $.ajax({
		            url : baseUrl+"/tSysRole/saveTSysRoleWithUser",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
		              	 _this.$message({
						  message: '添加用户成功',
						  type: 'success'
					    });
					    _this.getUsers();
					    _this.selectRoleDialogVisible = false;
					    _this.openCellDetails();
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
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
			            url : baseUrl+"/tSysRole/deleteTSysRole",
			            type : "POST",
			            data : para,
			            dataType : "json",
			            success : function(result) {
			              if(result.code==200){
			              	_this.listLoading = false;
						    _this.$message({
							  message: '删除成功',
							  type: 'success'
						    });
						    _this.getUsers();
			              }
			           },
			           error:function(msg){
			              console.log(msg);
			           }
			        })
				}).catch(() => {
                    console.log(11)
				});
			},
			//显示更名界面
			changeName: function (index, row) {
				this.changeNameFormVisible = true;
				this.editForm = Object.assign({}, row);
				this.editForm.roleId = row.roleId;
			},
			//显示编辑页面
			handleEdit(row){
				this.cellDetailsRow = row;
				this.editFormVisible = true;
				this.openCellDetails();
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					roleCode: '',
					roleName: '',
					roleDept: '',
					roleDesc: '',
					roleDeptCode:''
				};
			},
			//编辑完提交数据
			editSubmit: function (index, row) {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
//							let para = Object.assign({}, this.editForm;
						    let para = {
						    	"roleId":this.editForm.roleId,
						    	"roleCode":this.editForm.roleCode,
						    	"roleName":this.editForm.roleName,
						    	"roleDept":this.editForm.roleDept,
						    	"roleDesc":this.editForm.roleDesc,
						    	"roleDeptCode":this.editForm.roleDeptCode
						    };
							var _this = this;
				            $.ajax({
					            url : baseUrl+"/tSysRole/saveOrUpdateTSysRole",
					            type : "POST",
					            data : para,
					            dataType : "json",
					            success : function(result) {
					              if(result.code==200){
					              	_this.editLoading = false;
								    _this.$message({
									  message: '修改成功',
									  type: 'success'
								    });
								    _this.$refs['editForm'].resetFields();
								    _this.changeNameFormVisible = false;
								    _this.getUsers();
					              }
					           },
					           error:function(msg){
					              console.log("error");
					           }
					        })
						});
					}
				});
			},
			//新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							let para = Object.assign({}, this.addForm);
                             var _this = this;
                             $.ajax({
					            url : baseUrl+"/tSysRole/saveOrUpdateTSysRole",
					            type : "POST",
					            data : para,
					            dataType : "json",
					            success : function(result) {
					              if(result.code==200){
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
					           error:function(msg){
					              console.log("error");
					           }
					        })
						});
					}
				});
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
		},
		mounted() {
			this.getUsers();
		}
	}

</script>

<style rel="stylesheet/less" lang="less" scoped>
.el-table_1_column_4 .cell{
	cursor: pointer;
}
.el-dialog__body{
	padding-bottom: 50px;
	padding-top: 10px;
}
</style>