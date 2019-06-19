<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    size="small"
    :before-close="handleClose">
    <component :is="currentView"></component>
    <span slot="footer" class="dialog-footer">
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
  </span>
  </el-dialog>


</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        currentView:null
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      showDiaLog(vnode){
        this.currentView=vnode;
        this.dialogVisible=true;
      },
      hidDiaLog(){
        this.dialogVisible=false;
      }
    }
  };
</script>
