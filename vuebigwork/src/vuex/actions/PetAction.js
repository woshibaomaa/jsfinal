import {httpGet,httpBinaryPost} from '../../common/HttpBean';

export function subPetInfo(petForm,self){
  let formObj = new FormData(petForm);

  function callFun(res){
    // alert(res.data);
    self.$router.go(0);
  }
  httpBinaryPost('/pet/subpetInfo',formObj,callFun);
}

export function delPetInfo(id,self){
  function callFun(res){
    alert(res.data);
    if(res.data==1){
      self.$router.go(0);
    }else{
      alert('登录过期');
    }
  }
  httpGet('/pet/delpetInfo?id='+id,callFun);
}
