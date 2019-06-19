import {httpGet,httpPost,httpBinaryPost} from '../../common/HttpBean';
export function subSay(sayForm,self){
  let formObj = new FormData(sayForm);

  function callFun(res){
    alert(res.data);
    // self.$router.go(0);
  }
  httpBinaryPost('/say/subSay',formObj,callFun);
}
