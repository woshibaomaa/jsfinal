<template>
  <div>
  <el-table
    :data="rs"
    style="width: 100%">
    <el-table-column
      label="宠物照片">
      <template scope="scope">
        <img :src='"api"+scope.row.petimg' width='90' height='90'/>
      </template>
    </el-table-column>
    <el-table-column
      prop="nicheng"
      label="宠物信息">
    </el-table-column>
    <el-table-column
      type='button'
      label="操作"
    >
      <template scope="scope">
        <el-button type="primary" @click='updPetInfo(scope.row)'>修改</el-button>
        <el-button type="primary" @click='delPetInfo(scope.row.id)'>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-button type="primary" align="center"style="margin-left: 300px" @click='add'>增加</el-button>

  </div>
</template>
<script>
  import {httpGet} from '../../common/HttpBean';
  import {delPetInfo} from '../../vuex/actions/PetAction';
  import petform from './petform'

  // import updpetform from './updPetForm'
  let self=null;
  export default {
    data () {
      self =this;
      return {
        rs:[],
        // api:'/api'
      }
    },
    methods:{
      updPetInfo:function(petinfo){
        alert(petinfo.nicheng);
      },
      add:function () {
        this.$root.$children[0].$refs.diaLog.showDiaLog(petform);

      },
      delPetInfo:function (id) {
        if(confirm('确定删除吗?')){
          delPetInfo(id,self);
        }
      }
    }
  }
</script>
