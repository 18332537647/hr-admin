<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getPermissionLists">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">添加门户权限 </el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" element-loading-text="列表数据加载中" @selection-change="selsChange" @cell-click="openCellDetails" style="width: 100%;">
			<el-table-column type="index" width="70" label="序号">
            </el-table-column>
			<el-table-column prop="menuRootName" label="一级菜单" width="180" sortable>
			</el-table-column>
			<el-table-column prop="menuName" label="二级菜单" width="180" sortable>
			</el-table-column>
			<el-table-column prop="userName" label="用户" width="180" sortable>
			</el-table-column>
			<el-table-column prop="roleCode" label="管理单位" width="180" sortable>
			</el-table-column>
			<el-table-column prop="functionCode" label="是否排斥" width="200" sortable>
			</el-table-column>
			<el-table-column label="操作" width="min-150">
				<template scope="scope">
					<el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--新增界面-->
		<el-dialog title="新增管理用户" :visible.sync="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
			    <el-form-item label="菜单" prop="menuCode2">
		            <el-select v-on:change="indexSelect($event)" v-model="addForm.menuCode1" placeholder="请选择一级菜单">
		                <el-option v-for="option1 in options" :value="option1.menuCode" :label="option1.menuName"></el-option>
		            </el-select>
	                <el-select v-model="addForm.menuCode2" placeholder="请选择二级菜单" multiple collapse-tags>
		                <el-option v-for="option2 in selectionArr" :value="option2.menuCode" :label="option2.menuName"></el-option>
		            </el-select>
				</el-form-item>
				<el-form-item label="管理单位" prop="roleDept">
		            <el-select placeholder="请选择管理单位" v-model="addForm.roleDept" style="width: 80%;">
		                <el-option v-for="item in roleCodes" :key="item.roleDept" :label="item.roleDept" :value="item.roleDept"></el-option>
		            </el-select>
				</el-form-item>
				<el-form-item label="用户名称" prop="userNames">
					<el-input v-model="addForm.userNames" style="width:80%" placeholder="请选择角色用户" auto-complete="off" disabled></el-input>
					<el-button @click="getRoleUsersLists" :disabled="isdisabledFn">选择</el-button>
				</el-form-item>
				<el-form-item label="用户全选">
				    <el-switch v-model="userAllSelect" active-value="all" @change="switchAllUser()"></el-switch>
				</el-form-item>
				<el-form-item label="员工号" prop="pernrs" style="display:none">
					<el-input v-model="addForm.pernrs" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="是否排斥" prop="functionCode">
				    <el-radio-group v-model="addForm.functionCode">
				      <el-radio label="是" value="0"></el-radio>
				      <el-radio label="否" value="1"></el-radio>
				    </el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="handleclose">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
		
		<!--选择角色用户弹框-->
		<el-dialog title="选择角色用户" :visible.sync="selectRoleDialogVisible" width="50%">
		  <template>
		  	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
				<el-form :inline="true" :model="filtersRole">
					<el-form-item>
						<el-input v-model="filtersRole.name" placeholder="姓名"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click="getUsersLists">查询</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<el-table :data="roleUsers" highlight-current-row v-loading="roleUsersLoading" element-loading-text="用户数据加载中" style="width: 100%;">
				<el-table-column type="selection" width="55">
			    </el-table-column>
				<el-table-column prop="name" label="员工姓名" width="150" sortable>
				</el-table-column>
				<el-table-column prop="pernr" label="员工号" min-width="150" sortable>
				</el-table-column>
			</el-table>
			<!--工具条-->
			<el-col :span="24" class="toolbar">
				<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleRoleUsersChange" :page-sizes="[10]" :total="total" style="float:right;">
				</el-pagination>
			</el-col>
		  </template>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="selectRoleDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="sureSelectedRoleUsers()">确 定</el-button>
		  </span>
		</el-dialog>
		
		<!--已选用户列表弹框-->
		<el-dialog title="已授权角色用户列表" :visible.sync="hasSelectedRoleDialogVisible" width="40%">
		  <template>
		  	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
				<el-form :inline="true" :model="selectedFiltersRole">
					<el-form-item>
						<el-input v-model="selectedFiltersRole.name" placeholder="姓名"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click="">查询</el-button>
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
				<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="selectedRoleUsersChange" :page-sizes="[10]" :total="total" style="float:right;">
				</el-pagination>
			</el-col>
		  </template>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="hasSelectedRoleDialogVisible = false">取 消</el-button>
		  </span>
		</el-dialog>	
	</section>
</template>

<script>
    var baseUrl = 'http://plat.ehr.yuhong.com.cn';
   // var baseUrl = 'http://10.100.78.97:8080';
	export default {
		data() {
			return {
				options: [],
				selectionArr:[],
		        selectedOptions: [],
		        selectedOptions2: [],
				filters: {
					name: ''
				},
				filtersRole:{
					name: ''
				},
				selectedFiltersRole:{
					name: ''
				},
				roleCodes:[],
				rolePernrs:'',
				roleName:'',
				mold:"",
				isdisabledFn:false,
				userAllSelect:"",
				roleUsers:[],
				users: [],
				hasSelectedRoles:[],
				organizationArr: [],
				total: 0,
				page: 1,
				pageSize:10,
				listLoading: false,
				roleUsersLoading:false,
				sels: [],//列表选中列
                dialogVisible: false,
                selectRoleDialogVisible:false,
                hasSelectedRoleDialogVisible:false,
				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					menuCode2: [
					    { required: true, message: '请选择完整菜单', trigger: 'change' }
					],
					userNames: [
					    { required: true, message: '请选择角色用户', trigger: 'change' }
					],
					functionCode: [
					    { required: true, message: '请选择是否排斥', trigger: 'change' }
					],roleDept: [
					    { required: true, message: '请选择管理单位', trigger: 'change' }
					]
				},
				//新增界面数据
				addForm: {
					menuCode1: '',
					menuCode2: '',
					userNames:'',
					pernrs:'',
					functionCode:"否"
				}
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.page = val;
				this.getPermissionLists();
			},
			handleRoleUsersChange(val){
				this.page = val;
				this.getUsersLists();
			},
			selectedRoleUsersChange(val){
				this.page = val;
			},
			handleclose() {
				this.addFormVisible = false
			},
			//菜单二级联动
			indexSelect(event){
              this.A = event;
		      this.seletOptions();
		    },
		    seletOptions() {
			   for(var i = 0; i < this.options.length; i++){
                 if(this.options[i].menuCode == this.A){
	                this.selectionArr = this.options[i].children;
                    return this.options[i].children;
                 }
               }
	        },
			//获取主权限列表
			getPermissionLists() {
				var para = {
					"selContent":this.filters.name,
					"frontBack":0
				};
 			    this.listLoading = true;
                var _this = this;
                $.ajax({
		            url : baseUrl+"/tSysManagement/getMenuWithUserList",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
					    _this.users = result.data;
					    for(var i=0;i<_this.users.length;i++){
					    	if(_this.users[i].userName&&_this.users[i].userName.length>10){
						    	_this.users[i].userName = _this.users[i].userName.slice(0,10)+"...";
						    }
					    }
					    for(var i = 0;i<_this.users.length;i++){
					    	if(_this.users[i].functionCode=="0"){
					    	_this.users[i].functionCode = "排斥"
						    }else{
						    	_this.users[i].functionCode = "不排斥"
						    }
					    }
					    _this.listLoading = false;
		              }
		           },
		          error:function(msg){
		              console.log(msg);
		           }
		        })
			},
			//已授权角色用户列表
			openCellDetails(row,column) {
				if(column.label=="用户"){
					this.hasSelectedRoleDialogVisible = true
					var para = {
						"menuCode" :row.menuCode,
						"currentPage":this.page,
						"pageSize":this.pageSize,
						"frontBack":0
					}
					var _this=this
					$.ajax({
			            url : baseUrl+"/tSysManagement/getUserListByMenuCode",
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
				}
			},
			//删除单个角色用户
			delSelectedRole(row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					var para = { 
						"menuCode": row.menuCode,
					    "pernr" : row.pernr,
					    "tSysMenuUserId":row.tSysMenuUserId
					};
                    var _this = this;
					$.ajax({
			            url : baseUrl+"/tSysManagement/deleteMenuWithUser",
			            type : "POST",
			            data : para,
			            dataType : "json",
			            success : function(result) {
			              if(result.code==200){
						    _this.$message({
							  message: '删除成功',
							  type: 'success'
						    });
						    var paramas = {
								"menuCode" :row.menuCode,
								"currentPage":this.page,
								"pageSize":this.pageSize,
								"frontBack":1
							}
							$.ajax({
					            url : baseUrl+"/tSysManagement/getUserListByMenuCode",
					            type : "POST",
					            data : paramas,
					            dataType: "json",
					            success : function(result) {
					              if(result.code==200){
								    _this.hasSelectedRoles = result.data
								    _this.getPermissionLists();
					              }
					           },
					          error:function(msg){
					             console.log(msg)
					           }
					        })
			              }
			           },
			           error:function(msg){
			              console.log(msg);
			           }
			        })
				}).catch(() => {
					
				});
			},
			//获取角色用户列表
			getRoleUsersLists(row) {
				if(this.addForm.menuCode2==""){
					this.$message({
					  message: '请先选择菜单',
					  type: 'warning'
				    });
				}else{
					this.getUsersLists();
				}
			},
			getUsersLists(){
				var _this = this ; 
				this.selectRoleDialogVisible = true;
				if(this.roleUsers =="") {
					this.roleUsersLoading = true;	
				}
				var para = {
					"currentPage": this.page,
					"pageSize":this.pageSize,
					"menuCode":this.addForm.menuCode2,
					"selContent":this.filtersRole.name
				};
                
                $.ajax({
		            url : baseUrl+"/tSysManagement/getUserSetOrgList",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.total = result.totalPages*result.pageSize;
					    _this.roleUsers = result.data;
					    _this.roleUsersLoading = false;
		              }
		           },
		          error:function(msg){
		             console.log(msg)
		           }
		        })
			},
			//确定选中客户
			sureSelectedRoleUsers() {
				var selRoleNameArr = [];
				var selRolePernrsArr = [];
				$(".el-table__body-wrapper span.is-checked").each(function(){
					this.roleName = $(this).closest(".el-table__row").find("td:nth-child(2)").text();
					selRoleNameArr.push(this.roleName);
					this.rolePernrs = $(this).closest(".el-table__row").find("td:nth-child(3)").text();
					selRolePernrsArr.push(this.rolePernrs);
				})
				this.addForm.userNames = selRoleNameArr.join(",");
				this.addForm.pernrs = selRolePernrsArr.join(",");
				this.selectRoleDialogVisible = false;
			},
			//滑块是否全选用户
			switchAllUser(){
				if(this.userAllSelect == "all"){
					this.addForm.pernrs = "all";
					this.addForm.userNames = "全部";
					this.isdisabledFn = true;
				}else{
					this.addForm.pernrs = "";
					this.addForm.userNames = "";
					this.isdisabledFn = false;
				}
			},
			//新增权限
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
                            var functionCode='';
							if(this.addForm.functionCode=="是"){
								functionCode = '0'
							}else{
								functionCode = '1'
							}
							var para = {
								"frontBack":0,
								"menuCode":this.addForm.menuCode2.join(","),
								"functionCode":functionCode,
								"pernrs":this.addForm.pernrs,
								"userNames":this.addForm.userNames,
								"roleDept":this.addForm.roleDept
							};
                            var _this=this
                            $.ajax({
					            url : baseUrl+"/tSysManagement/saveMenuWithUser",
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
								    _this.getPermissionLists();
					              }
					           },
					           error:function(msg){
					              console.log(msg);
					           }
					        })
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
					var para = { "menuCode": row.menuCode };
                    var _this = this;
					$.ajax({
			            url : baseUrl+"/tSysManagement/deleteTSysMenuUser",
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
						    _this.getPermissionLists();
			              }
			           },
			           error:function(msg){
			              console.log(msg);
			           }
			        })
				}).catch((msg) => {
                    console.log(msg)
				});
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				var _this = this;
				//获取菜单数据
				$.ajax({
		            url : baseUrl+"/tSysManagement/getMenuWithUserListByAdd",
		            type : "POST",
		            data : {
		            	"frontBack":0,
		            },
		            dataType : "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.options = result.data;
		              }
		           },
		           error:function(msg){
		              console.log("error");
		           }
		        })
				//获取单位数据
				$.ajax({
		            url : baseUrl+"/tSysManagement/getFuncDeptByRoleCode",
		            type : "POST",
		            data : {},
		            dataType : "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.roleCodes = result.data;
		              }
		           },
		           error:function(msg){
		              console.log("error");
		           }
		        })
			},
			
			selsChange: function (sels) {
				this.sels = sels;
			},
		},
		mounted() {
			this.getPermissionLists();
		}
	}

</script>

<style>
.el-table_1_column_3 .cell{
	cursor: pointer;
}
.el-dialog__body{
	padding-bottom: 50px;
	padding-top: 10px;
}
select {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 40%;
    padding-right: 30px;
    cursor: pointer;
}
</style>