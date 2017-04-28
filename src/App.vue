<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'app',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        checkLogin:false,
    }
  }/*,
    created() {
       /!* if(this.checkLogin){
            this.$router.push('/login');
        }else{
            this.$router.push('/home');
        }*!/
//        this.checkLogin();
    },
    methods:{
        handleSubmit2:function(){
            this.$router.push('/login');
        },
        checkLogin(){
            //检查是否存在session
            if(this.checkLogin){
                this.$router.push('/login');
            }else{
                this.$router.push('/home');
            }
        }
    }*/
}
</script>

<style lang="scss">
  body {
    margin: 0px;
    padding: 0px;

    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}


#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
.el-submenu [class^=fa] {
  vertical-align: baseline;
  margin-right: 10px;
}
.el-menu-item [class^=fa] {
  vertical-align: baseline;
  margin-right: 10px;
}
.toolbar {
  background: #f2f2f2;
  padding: 10px;
  margin: 10px 0px;
}
.toolbar .el-form-item {
  margin-bottom: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  /*margin: 0 10px;*/
}

a {
  color: #42b983;
}
</style>
