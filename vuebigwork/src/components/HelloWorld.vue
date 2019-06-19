<template>
  <div>
  <div>
  <el-row>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="20" >
<!--      <headBar ref="headBar"/>-->

      <carousel></carousel>

    </el-col>
    <el-col :span="2">&nbsp;</el-col>
  </el-row>
  </div>
  <div>
  <el-row>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="20" >
      <!--      <headBar ref="headBar"/>-->
      <el-row :gutter="20">
        <el-col id="aa" :span="16"><div id="a" class="grid-content bg-purple"><h1>今日宠物之星</h1></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"><h1>今日宠物新闻</h1></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">    <el-image :src="urldog"></el-image>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"><el-image :src="urldog2"></el-image></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><el-image :src="urldog3"></el-image></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><h2>可爱猪因病去世，原因却是主任没能及时带去治疗导致病情严重</h2></div></el-col>

      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple"><el-image :src="urldog4"></el-image></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"><el-image :src="urldog5"></el-image></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><el-image :src="urldog3"></el-image></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><h2>可爱猪因病去世，原因却是主任没能及时带去治疗导致病情严重</h2></div></el-col>
      </el-row>

    </el-col>
    <el-col :span="2">&nbsp;</el-col>
  </el-row>
  </div>
    <div>
      <el-row>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="20" >
          <!--      <headBar ref="headBar"/>-->
          <el-row><h1>宠物推荐</h1></el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="tuijian1"></el-image></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="tuijian2"></el-image></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="tuijian3"></el-image></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="tuijian4"></el-image></div></el-col>
          </el-row>
        </el-col>
        <el-col>

        </el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import carousel from './Carousel';
  import headBar from './HeadBar';
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      urldog: require("@/assets/dog1.jpg"),
      urldog2:require("@/assets/dog2.jpg"),
      urldog3:require("@/assets/dog3.jpg"),

      urldog4:require("@/assets/dog4.jpg"),
      urldog5:require("@/assets/dog5.jpg"),
      tuijian1:require("@/assets/tuijian1.jpeg"),
      tuijian2:require("@/assets/tuijian2.jpeg"),
      tuijian3:require("@/assets/tuijian3.jpeg"),
      tuijian4:require("@/assets/tuijian4.jpeg"),
      tuijian11:require("@/assets/tuijian11.jpg"),
      tuijian22:require("@/assets/tuijian22.jpg"),
      tuijian33:require("@/assets/tuijian33.jpg"),
      tuijian44:require("@/assets/tuijian44.jpg"),

    }
  },
    components:{
    carousel,
      headBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: "PingFang SC";
}
  h2{
    font-family: "PingFang SC";
    font-size: 16px;

  ;

  }
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
