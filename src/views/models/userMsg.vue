<!--

>highlight-current-row----点击后是否高亮显示

-->

<template>
    <div>
        <section>
            当前选中信息【sels】：{{sels}}
        </section>
        <el-table
                class=""
                :data="tableData"
                border
                v-loading="listLoading"
                @selection-change="selsChange"
                highlight-current-row
                style="width: 100%;margin-top: 10px">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="所属店铺">
                            <span>{{ props.row.date }}</span>
                        </el-form-item>
                        <el-form-item label="商品 ID">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
            >
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别"
                    :formatter="formatSex"
            >
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    label="操作" >
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--编辑界面-->
        <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name" auto-complete="off" disabled></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="editForm.sex">
                        <el-radio class="radio" :label="1">男</el-radio>
                        <el-radio class="radio" :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
              <!--  <el-form-item label="年龄">
                    <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
                </el-form-item>-->
                <el-form-item label="生日">
                    <el-date-picker type="date" placeholder="选择日期" v-model="editForm.date"></el-date-picker>
                </el-form-item>
                <el-form-item label="标注">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="地址">
                    <el-input type="textarea" v-model="editForm.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                sels:[],//列表选中列
                listLoading:false,//request loading
                value: '选项1',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '喜茶'
                    }],
                editLoading: false,
                editFormVisible: false,//编辑界面是否显示
                //编辑界面数据
                editForm: {
                    id: 0,
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                },
                editFormRules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ]
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    sex:1,
                    value:"选项1",
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    sex:1,
                    value:"选项2",
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    sex:0,
                    value:"",
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    value:"选项3",
                    sex:0,
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            //性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            //显示编辑界面
            handleEdit: function (index, row) {
                //选项卡
                this.value=row.value;
                //显示弹窗
                this.editFormVisible = true;
                //构建数据
                this.editForm = Object.assign({}, row);
            },

            //编辑
            editSubmit: function () {
                this.tableData[0]["name"]="鸡毛蒜皮";
                this.editFormVisible = false;
               /* this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.editForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            editUser(para).then((res) => {
                                this.editLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['editForm'].resetFields();
                                this.editFormVisible = false;
                                this.getUsers();
                            });
                        });
                    }
                });*/
            },
            /*
            * 选中时激活--返回勾选的信息
            * */
            selsChange: function (sels) {
                this.sels = sels;
            }
        }
    }
</script>


