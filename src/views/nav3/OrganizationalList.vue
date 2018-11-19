<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column type="index" width="70" label="序号">
            </el-table-column>
			<el-table-column prop="pernr" width="180" label="员工号">
			</el-table-column>
			<el-table-column prop="name" label="员工姓名" width="160" sortable>
			</el-table-column>
			<el-table-column prop="werks" label="人事范围" width="180" sortable>
			</el-table-column>
			<el-table-column prop="dept" label="部门" width="180" sortable>
			</el-table-column>
			<el-table-column prop="plansName" label="岗位" width="160" sortable>
			</el-table-column>
			<el-table-column prop="zzhrZj" label="职级" min-width="160" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="getTreeData(scope.row)">分配组织结构</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
			
		</el-col>
		
		<!--组织结构树形弹框-->
		<el-dialog title="选择父级菜单" :visible.sync="parentTreeVisible" :close-on-click-modal="false">
		    <el-tree :data="parentTreedata" show-checkbox node-key="id" ref="tree" highlight-current :props="defaultProps">
            </el-tree>
            <div slot="footer" class="dialog-footer">
				<el-button @click.native="parentTreeVisible = false">取消</el-button>
				<el-button type="primary" @click.native="parentTreeDataSubmit">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>
<script>
  var baseUrl = 'http://plat.ehr.yuhong.com.cn'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				users: [],
				total: 0,
				page: 1,
				roleCode:"123",
				pernr:"",
				pageSize:10,
				selectRoleName:'',
				parentTreedata:[],
				checkedNode:[],
				listLoading: false,
                parentTreeVisible:false,		
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
					"roleCode": this.roleCode,
					"selContent":this.filters.name,
					"pageSize":this.pageSize,
					"currentPage":this.page
				};
				this.listLoading = true;
                var _this = this;
                $.ajax({
		            url : baseUrl+"/tSysManagement/getUserSetOrgList",
		            type : "POST",
		            data : para,
		            dataType: "json",
		            success : function(result) {
		              if(result.code==200){
		              	_this.total = result.totalRows;
					    _this.users = result.data;
					    _this.listLoading = false;
		              }
		           },
		          error:function(msg){
		              console.log(msg);
		           }
		        })
			},
			getTreeData(row){
				this.pernr = row.pernr
				this.parentTreeVisible = true;
				var para = {
					"roleCode":this.roleCode,
					"pernr":this.pernr
				}
				var _this = this;
				$.ajax({
		            url : baseUrl+"/tSysManagement/getOrgTreelistByCode",
		            type : "POST",
		            data : para,
		            dataType : "json",
		            success : function(result) {
		              if(result.code==200){
		                 _this.parentTreedata = result.data
		                 setTimeout(function(){
		                 	_this.$refs.tree.setCheckedNodes(result.checkedData);
		                 },500)
		              }
		           },
		           error:function(msg){
		              console.log(msg);
		           }
		        })
			},
	        parentTreeDataSubmit(){
	        	var treeNodes = this.$refs.tree.getCheckedNodes();
				var treeNodesIdArr = [];
				var treeNodesIdArrs = [];
				for(var i = 0;i<treeNodes.length;i++){
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
				for(var i = 0;i<treeNodes.length;i++){
					treeNodesIdArr.push(treeNodes[i].id)
				};
				var para = {
					"pernr":this.pernr,
					"orgids":treeNodesIdArr.join(",")
				}
				var _this = this;
				$.ajax({
		            url : baseUrl+"/tSysManagement/saveOrgWithUser",
		            type : "POST",
		            data : para,
		            dataType : "json",
		            success : function(result) {
		              if(result.code==200){
		              	 _this.$message({
						   message: '组织结构分配成功',
						   type: 'success'
					     });
		                 _this.parentTreedata = result.data;
		                 _this.parentTreeVisible = false;
		              }
		           },
		           error:function(msg){
		              console.log(msg);
		           }
		        })
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