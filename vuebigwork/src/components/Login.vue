<template>
<table>
  <tr>
    <td>
  <form name="loginForm">
    <table align="center">
      <tr>
        <td align="right">email:</td>
        <td align="right">

          <el-input v-model="input1" name="email" placeholder="请输入email:"></el-input>

        </td>

      </tr>
      <tr>
        <td align="right">密码:</td>
        <td align="right">
          <el-input v-model="input2" type="password" name="pwd"></el-input>

        </td>

      </tr>
      <tr>
        <td colspan="2" align="center">
          <el-button type="primary" @click="login" style="margin-top: 20px">登录</el-button>
        </td>
      </tr>
    </table>
  </form>
    </td>
    <td>
    <form name='zhuceForm' style="margin-left: 100px">
      <table align="center">
        <tr>
          <td align="right">email:</td>
          <td align="right">
            <el-input v-model="input3" name="email" placeholder="请输入email:"></el-input>

          </td>

        </tr>
        <tr>
          <td align="right">密码:</td>
          <td align="right">
            <el-input v-model="input4" type="password" name="pwd"></el-input>
          </td>

        </tr>
        <tr>
          <td align="right">重复密码:</td>
          <td align="right">
            <el-input v-model="input5" type="password" name="repwd"></el-input>
          </td>

        </tr>
        <tr>
          <td align="right">昵称:</td>
          <td align="right">
            <el-input v-model="input6" type="password" name="nicheng"></el-input>
          </td>

        </tr>
        <tr>
          <td colspan="2" align="center">
            <el-button type="primary" @click="zhuce" style="margin-top: 20px">注册</el-button>
          </td>
        </tr>
      </table>
    </form>
    </td>
  </tr>
  </table>
</template>
<script>
  // import axios from 'axios';
  // import {httpPost} from "../common/HttpBean";
import {onZhuce,onLogin,loginGetter} from "../vuex/actions/UserAction";

  let self=null;
  export default {

    data() {
      self=this;
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: ''

      }
    },
    computed:{
      loginBean:loginGetter
    },
    watch:{
      loginBean:function(rs){
        // alert(rs);
        self.$parent.$parent.hidDiaLog();
        self.$parent.$parent.$parent.$refs.headBar.flag=1;
        self.$router.push('/private/home');
      }
    },
    methods:{
      zhuce:function(){
        onZhuce(zhuceForm,self);
        // let formObj={};
        // formObj.email=zhuceForm.email.value;
        // formObj.pwd=zhuceForm.pwd.value;
        // formObj.repwd=zhuceForm.repwd.value;
        // formObj.nicheng=zhuceForm.nicheng.value;
        // alert(formObj.nicheng);
        // function callFun(res){
        //   //alert(res.data);
        //   if(res.data==1){
        //     loginForm.email.value=formObj.email;
        //     loginForm.pwd.value=formObj.pwd;
        //     self.login();
        //   }else if(res.data==2){
        //     alert('email重复');
        //   }else if(res.data==3){
        //     alert('昵称重复');
        //   }else if(res.data==0){
        //     alert('数据库错误,请稍后再试');
        //   }
        // }
        // httpPost('/users/zhuce',formObj,callFun)
        // axios.post
        // ('/api/users/zhuce',formObj).then
        // (function(res){
          //alert(res.data);
          // if(res.data==1){
          //   loginForm.email.value=formObj.email;
          //   loginForm.pwd.value=formObj.pwd;
          //   self.login();
          // }else if(res.data==2){
          //   alert('email重复');
          // }else if(res.data==3){
          //   alert('昵称重复');
          // }else if(res.data==0){
          //   alert('数据库错误,请稍后再试');
          // }
        // }).catch(function(err){
        //   alert(err);
        // })
      },
      login:function(){
        onLogin(loginForm,self);
        // let formObj = {};
        // formObj.email = loginForm.email.value;
        // formObj.pwd = loginForm.pwd.value;
        // function callFun(res){
        //   if(res.data==1){
        //     self.$parent.$parent.hidDiaLog();
        //     self.$parent.$parent.$parent.$refs.headBar.flag=1;
        //     self.$router.push('/private/home');
        //   }else {
        //     alert('账号/密码错误');
        //   }
        // }
        // httpPost('/users/login',formObj,callFun)

        // axios.post('/api/users/login',formObj)
        //   .then(function(res){
        //     // alert(res.data);
        //     if(res.data==1){
        //       self.$parent.$parent.hidDiaLog();
        //       self.$parent.$parent.$parent.$refs.headBar.flag=1;
        //       self.$router.push('/private/home');
        //     }else {
        //       alert('账号/密码错误');
        //     }
        //   }).catch(function(err){
        //   alert(err);
        // })
      }
    }
  }
</script>
