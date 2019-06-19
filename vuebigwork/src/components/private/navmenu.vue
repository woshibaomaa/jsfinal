<template>
      <el-menu default-active="1" class="el-menu-vertical-demo" style='height: 800px'>
        <el-menu-item index="1" @click="petInfo"><i class="el-icon-setting"></i>&nbsp;&nbsp;宠物信息</el-menu-item>
        <el-menu-item index="2" @click="petimg"><i class="el-icon-setting" ></i>&nbsp;&nbsp;宠物相册</el-menu-item>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>&nbsp;&nbsp;宠物日志</template>
          <el-menu-item index="3-1" @click='writeSay'>写说说</el-menu-item>
          <el-menu-item index="3-2">看说说</el-menu-item>
        </el-submenu>
        <el-menu-item index="4"><i class="el-icon-setting"></i>宠物朋友圈</el-menu-item>
        <el-menu-item index="5"><i class="el-icon-setting"></i>&nbsp;&nbsp;&nbsp;&nbsp;问&nbsp;&nbsp;&nbsp;&nbsp;答&nbsp;&nbsp;</el-menu-item>
      </el-menu>
</template>
<script>
  export default {
    methods:{
      petInfo:function(){
        this.$router.push('/private/home');
      },
      writeSay:function(){
        this.$router.push('/private/writesay');
      },
      petimg:function () {
        this.$router.push('/private/petimg');
      }
    }
  }
</script>
