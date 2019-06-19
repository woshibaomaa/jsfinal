<template>
  <el-row >

  <div class="block" style="margin-top: 30px;margin-left: 80px;margin-right: 80px">
    <el-carousel :interval="4000" type="card" arrow="always" style="padding-top: 0;width: 1000px;" >
      <el-carousel-item v-for="item in carousel" :key="item.id">
        <div class="carousel-image" style="text-align: center;width: 100%;">
          <img class="bannertt" :src="item.src" ref="bannerHeight" style="width: 100%;height: 300px;">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  </el-row>

</template>
<script>
  export default {
    data(){
      return{

        carousel: [{
          id: 0,
          src: require("@/assets/lunbo1.jpg")
        },
          {
            id: 1,
            src: require("@/assets/lunbo2.jpg")
          },
          {
            id: 2,
            src: require("@/assets/lunbo3.jpg")
          },
          {
            id: 3,
            src: require("@/assets/lunbo4.jpg")
          }
        ]
      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
