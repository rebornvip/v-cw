<template>
    <div class="indexModel">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>

        <p>{{ message }}</p>
        <div></div>
        <div v-if="user==null">
            <button @click="loginModel">登录</button>
        </div>
        <div v-else>
            欢迎<a style="color:green" @click="goHome">{{user.username}}</a>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                message: 'Vue model',
                user:""
            }
        },
        created(){
//            this.session = this.getCookie('session');
            this.user = JSON.parse(sessionStorage.getItem('user'));
        },
        methods:{
            loginModel:function(){
                this.$router.push('/login');
            },
            goHome:function(){
                this.$router.push('/home');
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>


