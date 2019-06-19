import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);			//vuex初始化


let user = new Vuex.Store({
  state:{			//存储空间
    loginBean:null
  },
  mutations:{			//事件响应，修改存储的方法集
    zhuce:function(state,data){

    },
    login:function(state,data){
        // alert('收到'+data.nicheng);
      state.loginBean=data;
    }

  }
});
export default user;
