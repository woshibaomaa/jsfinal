import {httpPost,httpGet} from "../../common/HttpBean";
import userStore from "../stores/UserStore"
export function onZhuce(zhuceForm,self) {
  let formObj={};
  formObj.email=zhuceForm.email.value;
  formObj.pwd=zhuceForm.pwd.value;
  formObj.repwd=zhuceForm.repwd.value;
  formObj.nicheng=zhuceForm.nicheng.value;
  // alert(formObj.nicheng);
  function callFun(res){
    //alert(res.data);
    if(res.data==1){
      loginForm.email.value=formObj.email;
      loginForm.pwd.value=formObj.pwd;
      self.login();
    }else if(res.data==2){
      alert('email重复');
    }else if(res.data==3){
      alert('昵称重复');
    }else if(res.data==0){
      alert('数据库错误,请稍后再试');
    }
  }
  httpPost('/user/zhuce',formObj,callFun)
}
export function onLogin(loginForm,self) {
  let formObj = {};
  formObj.email = loginForm.email.value;
  formObj.pwd = loginForm.pwd.value;
  function callFun(res){
    if(res.data!=0){
      userStore.commit('login',res.data);
      // self.$parent.$parent.hidDiaLog();
      // self.$parent.$parent.$parent.$refs.headBar.flag=1;
      // self.$router.push('/private/home');
    }else {
      alert('账号/密码错误');
    }
  }
  httpPost('/user/login',formObj,callFun);

}
export function judgeSession(self){
  let loginbean = userStore.state.loginBean;
  if(loginbean!=null){
    self.flag=1;
  }else{
    function callFun(res){
      if(res.data!=0){
        userStore.commit('login',res.data);
        self.flag=1;
      }else{
        self.flag=0;
        self.$router.push('/');
      }
    }
    httpGet('/user/getLoginBean',callFun);
  }
}
export function loginGetter(){
  return userStore.state.loginBean;
}

