<template>
  <div>
    <div>
      <el-row>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="4" style='background: yellow'>
          <navmenu/>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="8">
            <el-card :body-style="{ padding: '0px' } "shadow="hover" >
              <img :src="petpp1" class="image">


              <div style="padding: 22px;">
                <span>带着朵朵逛街</span>
              </div>

            </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover"style="padding-left: 10px">
                <img :src="petpp2" class="image">


                <div style="padding: 22px;">
                  <span>仰望星空哟</span>
                  <br>
                </div>

              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover"style="padding-left: 10px">
                <img :src="petpp3" class="image">


                <div style="padding: 22px;">
                  <span>养了一只小肥猪</span>
                </div>

              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover" >
                <img :src="petpp4" class="image">


                <div style="padding: 22px;">
                  <span>酷不酷</span>
                </div>

              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover"style="padding-left: 10px">
                <img :src="petpp5" class="image">


                <div style="padding: 22px;">
                  <span>可爱大牛</span>
                  <br>
                </div>

              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover"style="padding-left: 10px">
                <img :src="petpp6" class="image">


                <div style="padding: 22px;">
                  <span>爱情</span>
                </div>

              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover" >
                <img :src="petpp7" class="image">


                <div style="padding: 22px;">
                  <span>饥渴难耐</span>
                </div>

              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover"style="padding-left: 10px">
                <img :src="petpp8" class="image">


                <div style="padding: 22px;">
                  <span>兴奋</span>
                  <br>
                </div>

              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{ padding: '0px' } "shadow="hover"style="padding-left: 10px">
                <img :src="petpp9" class="image">


                <div style="padding: 22px;">
                  <span>逛街</span>
                </div>

              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp</el-col>
      </el-row>
    </div>
  </div>

</template>
<style>


  .image {
    width: 100%;
    height: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<script>
  import navmenu from './navmenu';

  export default {

    data() {
      return {
        petpp1:require("@/assets/dog1.jpg"),
        petpp2:require("@/assets/dog2.jpg"),
        petpp3:require("@/assets/dog3.jpg"),
        petpp4:require("@/assets/dog4.jpg"),
        petpp5:require("@/assets/dog5.jpg"),
        petpp6:require("@/assets/dog6.jpg"),
        petpp7:require("@/assets/dog7.jpg"),
        petpp8:require("@/assets/dog8.jpg"),
        petpp9:require("@/assets/dog9.jpg"),



      };
    },
    components:{
      navmenu:navmenu

    }
  }
</script>
