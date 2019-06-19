<template>
  <form name='petform'>
    <table align='center' width='80%'>
      <tr>
        <td><el-input name='nicheng' v-model="input" placeholder="宠物昵称"></el-input></td>
        <td rowspan='5'><img />
          <br/>
          <el-button type="success" @click='chooseImg'>选择宠物照片</el-button>
          <input type='file' name='petimg' style='display:none' @change='choosed'/>
          <div ref='chooseLable'></div>
        </td>
      </tr>
      <tr>
        <td align='left'>
          <el-select name='pettype' v-model="pettype" placeholder="请选择宠物类别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>
          <el-input name='petsort' v-model="petsort" placeholder="宠物品种"></el-input>
        </td>
      </tr>
      <tr>
        <td align='left'>
          <el-radio-group  v-model="sex">
            <el-radio name='sex' :label="0">雄</el-radio>
            <el-radio name='sex' :label="1">雌</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <td>
          <el-input name='age' v-model="petage" placeholder="宠物年龄"></el-input>
        </td>
      </tr>
      <tr>
        <td colspan='2'>
          <el-input
            name='introduce'
            type="textarea"
            :rows="2"
            placeholder="宠物介绍"
            v-model="textarea">
          </el-input>
        </td>
      </tr>
      <tr>
        <td colspan='2' align='center'>
          <el-button type="success" @click='subpetInfo'>提交</el-button>
        </td>
      </tr>
    </table>
  </form>

</template>

<script>
  // import axios from 'axios';
  import {httpGet} from "../../common/HttpBean";
  import {subPetInfo} from '../../vuex/actions/PetAction';

  export default {
    data () {
      return {
        options: [{
          value: '0',
          label: '狗'
        }, {
          value: '1',
          label: '猫'
        }, {
          value: '2',
          label: '鸟'
        }, {
          value: '3',
          label: '鱼'
        }, {
          value: '4',
          label: '其他'
        }],
        value: '',
        pettype:'',
        petsort:'',
        sex:0,
        input:'',
        textarea:'',
        petage:''
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
        subPetInfo(petform,this);
      }
    }

  }
</script>
