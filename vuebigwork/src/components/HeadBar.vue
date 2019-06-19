<template>
<!--  <el-row>-->
<!--    <el-col :span="2">&nbsp;</el-col>-->
<!--    <el-col :span="4" style="background-color: #f9fafc;font-size: 1.8em"><i class="el-icon-menu"></i>-->
<!--      宠物空间</el-col>-->
<!--    <el-col :span="8" style="background-color: #f9fafc">-->
<!--      <el-input-->
<!--        placeholder="请输入搜索关键词"-->
<!--        suffix-icon="el-icon-search"-->
<!--        v-model="input1">-->
<!--      </el-input>-->
<!--    </el-col>-->
<!--    <el-col :span="6" style="background-color: #f9fafc ">-->
<!--      <el-button type="success" v-if="flag==0" @click="showLogin">登录/注册</el-button>-->
<!--      <div v-if='flag==1' style='font-size:1.2em'>-->
<!--        <span>主页</span>-->
<!--        <span>空间</span>-->
<!--        <span>寄养</span>-->
<!--        <span>医院</span>-->
<!--        <span>食物</span>-->
<!--        <span><router-link to='' @click.native='logout'>注销</router-link></span>-->
<!--      </div>-->
<!--    </el-col>-->
<!--    <el-col :span="2">&nbsp;</el-col>-->

<!--  </el-row>-->
  <el-row>
    <el-col :span="2">&nbsp;</el-col>
        <el-col :span="4" style="font-size: 1.8em;padding-top: 20px;color: #42b983"><i class="el-icon-menu"></i>
          宠物空间</el-col>
    <el-col :span="16">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="3" v-if="" @click="showLogin">登录/注册</el-menu-item>
<!--    <el-menu-item index="4" v-if="flag==1" >注销</el-menu-item>-->



    <!--    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
  </el-menu>
    </el-col>
    <el-col :span="2">&nbsp;</el-col>

  </el-row>
</template>
<script>
  import Login from './Login'
  import {judgeSession,logout} from '../vuex/actions/UserAction'

  export default {
    data(){
      judgeSession(this);
      return{
        flag:0
      }
    },
    methods:{
      showLogin(){
        this.$parent.$refs.diaLog.showDiaLog(Login);
      }
    },
    mounted(){
    }
  }
</script>
