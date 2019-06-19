<template>
  <el-row>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="4" style=''>
      <navmenu></navmenu>
    </el-col>
    <el-col :span="16">
      <petform v-if="flag==0"></petform>
      <petinfo ref="petinfo" v-else-if="flag>0"></petinfo>
    </el-col>
    <el-col :span="2">&nbsp;</el-col>
  </el-row>
</template>

<script>
  // import axios from 'axios';
import {httpGet} from "../../common/HttpBean";
import {subPetInfo} from '../../vuex/actions/PetAction';
import navmenu from './navmenu';
import petform from './petform';
import  petinfo from './petInfo';
let self;
  export default {

    mounted(){
      function callFun(res){
        let rs = res.data;
        let len = rs.length;
        if(len>0){
          console.log(rs);
          self.$refs.petinfo.rs=rs;
          // alert('1');
          // alert(rs[0].nicheng);
          self.flag=1;
        }else{
          alert('还没填写宠物信息');
         self.flag=0;
        }
      }
      alert('qingqiu');
      httpGet('/pet/mypetinfo',callFun);
      // axios.get('/api/users/mypet')	//这里要改
      //   .then(function(res){
      //     alert(res.data);
      //   })
      //   .catch(function(err){
      //     alert(err);
      //   })
    },
    components:{
      petform:petform,
      petinfo:petinfo,
      navmenu:navmenu
    },
    data(){
      self=this;
      return{
        flag:1,
      }
    },
    methods:{
      chooseImg:function(){
        petform.petimg.click();
      },
      choosed:function(){
        this.$refs.chooseLable.innerHTML=petform.petimg.value;
      },
      subpetInfo:function () {
        petform.pettype.value=this.pettype;
        subPetInfo(petform);
      },
      writeSay:function(){
        this.$router.push('/private/writesay');
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
