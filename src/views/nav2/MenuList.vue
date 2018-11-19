<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<!--<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>-->
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增菜单</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="index" width="70" label="序号">
            </el-table-column>
			<el-table-column prop="menuCode" width="180" label="菜单标识">
			</el-table-column>
			<el-table-column prop="menuName" label="菜单名称" width="160" sortable>
			</el-table-column>
			<el-table-column prop="menuUrl" label="菜单url" width="180" sortable>
			</el-table-column>
			<el-table-column prop="parentMenuName" label="父菜单名称" width="180" sortable>
			</el-table-column>
			<el-table-column prop="menuType" label="菜单类型" width="160" sortable>
			</el-table-column>
			<el-table-column prop="frontBack" label="菜单用途" min-width="160" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
			
		</el-col>

		<!--编辑界面-->
		<el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="菜单用途" prop="frontBack">
					<el-radio-group v-model="editForm.frontBack">
						<el-radio class="radio" :label="1">前台门户</el-radio>
						<el-radio class="radio" :label="0">后台管理</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="菜单类型" prop="menuType">
					<el-radio-group v-model="editForm.menuType">
						<el-radio class="radio" :label="1">菜单</el-radio>
						<el-radio class="radio" :label="2">目录</el-radio>
						<el-radio class="radio" :label="3">按钮</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="父级菜单Id" prop="parentId" v-if="false">
					<el-input v-model="editForm.parentId" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="父级菜单" prop="parentMenuName">
					<el-input v-model="editForm.parentMenuName" disabled style="width:80%" auto-complete="off"></el-input>
					<el-button :plain="true" @click="getTreeData('edit')">选择</el-button>
				</el-form-item>
				<el-form-item label="菜单编码" prop="menuCode">
					<el-input v-model="editForm.menuCode" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="菜单名称" prop="menuName">
					<el-input v-model="editForm.menuName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="菜单url" prop="menuUrl">
					<el-input v-model="editForm.menuUrl" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="排序号" prop="menuSort">
					<el-input v-model="editForm.menuSort" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="图标" prop="menuImage">
					<el-input v-model="editForm.menuImage" auto-complete="off"></el-input>
				</el-form-item>
			    <el-form-item label="是否开放" prop="isopen">
					<el-radio-group v-model="editForm.isopen">
						<el-radio class="radio" :label="1">是</el-radio>
						<el-radio class="radio" :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="是否窗口" prop="isPopup">
					<el-radio-group v-model="editForm.isPopup">
						<el-radio class="radio" :label="1">是</el-radio>
						<el-radio class="radio" :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增菜单项" :visible.sync="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="菜单用途" prop="frontBack">
					<el-radio-group v-model="addForm.frontBack">
						<el-radio class="radio" :label="1">前台门户</el-radio>
						<el-radio class="radio" :label="'0'">后台管理</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="父菜单id" prop="parentId" v-if="false">
					<el-input v-model="addForm.parentId" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="父级菜单" prop="parentMenuName">
					<el-input v-model="addForm.parentMenuName" style="width:80%" disabled auto-complete="off"></el-input>
					<el-button :plain="true" @click="getTreeData('add')">选择</el-button>
				</el-form-item>
				<el-form-item label="菜单类型" prop="menuType">
					<el-radio-group v-model="addForm.menuType">
						<el-radio class="radio" :label="1">菜单</el-radio>
						<el-radio class="radio" :label="2">目录</el-radio>
						<el-radio class="radio" :label="3">按钮</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="菜单编码" prop="menuCode">
					<el-input v-model="addForm.menuCode" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="菜单名称" prop="menuName">
					<el-input v-model="addForm.menuName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="菜单url" prop="menuUrl">
					<el-input v-model="addForm.menuUrl" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="排序号" prop="menuSort">
					<el-input v-model="addForm.menuSort" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="图标" prop="menuImage">
					<el-input v-model="addForm.menuImage" auto-complete="off"></el-input>
				</el-form-item>
			    <el-form-item label="是否开放" prop="isopen">
					<el-radio-group v-model="addForm.isopen">
						<el-radio class="radio" :label="1">是</el-radio>
						<el-radio class="radio" :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="是否窗口" prop="isPopup">
					<el-radio-group v-model="addForm.isPopup">
						<el-radio class="radio" :label="1">是</el-radio>
						<el-radio class="radio" :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
		
		<!--父级菜单树形弹框-->
		<el-dialog title="选择父级菜单" :visible.sync="parentTreeVisible" :close-on-click-modal="false">
            <el-tree :data="parentTreedata" :props="defaultProps" show-checkbox node-key="id" :check-strictly="true" :highlight-current="true"	
		  	default-expand-all :expand-on-click-node="false" ref="tree" @check-change="checkChange" @node-click="nodeClick">
		    </el-tree>
            <div slot="footer" class="dialog-footer">
				<el-button @click.native="parentTreeVisible = false">取消</el-button>
				<el-button type="primary" @click.native="parentTreeDataSubmit">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>
<script>
	import util from '../../common/js/util'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
//  import AddUser from "./AddUser";
  var baseUrl = 'http://plat.ehr.yuhong.com.cn'
//  var baseUrl = 'http://10.100.78.122:80'
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
				mold:"",
				roleUsers:[],
				users: [],
				hasSelectedRoles:[],
				organizationArr: [],
				total: 0,
				page: 1,
				pageSize:10,
				newRow:'',
				cellDetailsRow:'',
				frontBack:'',
				cellDetailsColumn:'',
				selectRoleName:'',
				parentTreedata:[],
				checkedNode:[],
				listLoading: false,
				sels: [],//列表选中列
                dialogVisible: false,
                parentTreeVisible:false,
                selectRoleDialogVisible:false,
                hasSelectedRoleDialogVisible:false,
                organizationVisible:false,
				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					frontBack: [
					    { required: true, message: '请选择菜单用途', trigger: 'change' }
					],menuType: [
						{ required: true, message: '请选择菜单类型', trigger: 'change' }
					],menuCode: [
						{ required: true, message: '请填写菜单编码', trigger: 'blur' }
					],menuName: [
						{ required: true, message: '请填写菜单名称', trigger: 'blur' }
					],menuUrl: [
						{ required: true, message: '请填写菜单url', trigger: 'blur' }
					],isopen: [
						{ required: true, message: '请选择是否开放', trigger: 'change' }
					],isPopup: [
						{ required: true, message: '请选择是否窗口', trigger: 'change' }
					]
				},
				//编辑界面数据
				editForm: {
					frontBack: '',
					parentId: 0,
					menuType: '',
					menuCode: '',
					menuName: '',
					parentMenuName:'',
					menuUrl: '',
					menuSort: '',
					menuImage: '',
					isopen: '',
					isPopup: ''
				},
				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					frontBack: [
					    { required: true, message: '请选择菜单用途', trigger: 'change' }
					],menuType: [
						{ required: true, message: '请选择菜单类型', trigger: 'change' }
					],menuCode: [
						{ required: true, message: '请填写菜单编码', trigger: 'blur' }
					],menuName: [
						{ required: true, message: '请填写菜单名称', trigger: 'blur' }
					],menuUrl: [
						{ required: true, message: '请填写菜单url', trigger: 'blur' }
					],isopen: [
						{ required: true, message: '请选择是否开放', trigger: 'change' }
					],isPopup: [
						{ required: true, message: '请选择是否窗口', trigger: 'change' }
					]
				},
				//新增界面数据
				addForm: {
					frontBack: '',
					parentId: 0,
					menuType: '',
					menuCode: '',
					menuName: '',
					parentMenuName:'',
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
			}
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
				var para = {
					"pernr": '',
					"pageSize":this.pageSize,
					"currentPage":this.page
				};
 			    this.listLoading = true;
                var _this = this;
                $.ajax({
		            url : baseUrl+"/tSysMenu/list",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.total = result.totalRows;
					    _this.users = result.data;
					    _this.listLoading = false;
					    for(var i=0;i<_this.users.length;i++){
					    	if(_this.users[i].frontBack=="0"){
					    	    _this.users[i].frontBack = '后台'
						    }else{
						    	_this.users[i].frontBack = '门户'
						    }
					    }
					    for(var i=0;i<_this.users.length;i++){
					    	if(_this.users[i].menuType=="1"){
						    	_this.users[i].menuType = "按钮"
					    	}else if(_this.users[i].menuType=="2"){
					    		_this.users[i].menuType = "菜单"
					    	}else if(_this.users[i].menuType=="3"){
					    		_this.users[i].menuType = "模块"
					    	}
					    }
		              }
		           },
		          error:function(msg){
		              console.log(msg);
		           }
		        })
			},
			getTreeData(type){
				if(type == "add"){
					this.frontBack = this.addForm.frontBack
				}else{
					this.frontBack = this.ediFormFrontBack
				}
				if(!this.frontBack){
					this.$message({
			          showClose: true,
			          message: '请先选择菜单用途',
			          type: 'warning'
			        });
				}else{
					this.parentTreeVisible = true;
					var para = {
						"frontBack":this.frontBack
					}
					var _this = this;
					$.ajax({
			            url : baseUrl+"/tSysMenu/parentMenuList",
			            type : "POST",
			            data : para,
			            dataType : "json",
			            success : function(result) {
			              if(result.code==200){
			                 _this.parentTreedata = result.data
			              }
			           },
			           error:function(msg){
			              console.log(msg);
			           }
			        })
				}
			},
			//控制父级树单选
			checkChange(item, node, self){
				if (node==true) {//点击未选中复选框
					this.editCheckId = item.id;
					this.$refs.tree.setCheckedKeys([item.id]);
				} else {
					if (this.editCheckId == item.id) {//点击已选中复选框，保证至少一个选中
						this.$refs.tree.setCheckedKeys([item.id]);
					}
				}
			},	
			nodeClick(item, node, self){
				this.editCheckId = item.id;
				this.$refs.tree.setCheckedKeys([item.id]);
			},
			parentTreeDataSubmit(){
				var checkedNode =this.$refs.tree.getCheckedNodes();
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
					var para = { "menuId": row.menuId};
                    var _this = this;
					$.ajax({
			            url : baseUrl+"/tSysMenu/delete",
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
			           }
			        })
				}).catch((msg) => {
				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
//				this.editForm = Object.assign({}, row);
				var para ={
					"menuId":row.menuId
				}
				var _this = this;
				$.ajax({
//					url :'http://10.100.78.122:80/ehr_platform/tSysMenu/toUpsert',
		            url : baseUrl+"/tSysMenu/toUpsert",
		            type : "POST",
		            data : para,
		            dataType : "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.editForm = result.entity;
		              }
		           },
		           error:function(msg){
		              console.log("error");
		           }
		        })
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true
			},
			//编辑完提交数据
			editSubmit: function (index, row) {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							var para = Object.assign({}, this.editForm);
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
								    _this.editFormVisible = false;
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
							var para = Object.assign({}, this.addForm);
                             var _this = this;
                             $.ajax({
					            url : baseUrl+"/tSysMenu/upsert",
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
					              console.log(msg);
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

<style>
.el-table_1_column_4 .cell{
	cursor: pointer;
}
.el-dialog__body{
	padding-bottom: 50px;
	padding-top: 10px;
}
</style>