import axios from 'axios';
export function httpPost(url,formObj,callFun){
  axios.post('/api'+url,formObj)
    .then(function(res){
        callFun(res);
    }).catch(function(err){
        alert(err);
  })
}
export function httpGet(url,callFun,formObj={}){
  axios.get('/api'+url,formObj)
    .then(function(res){
      callFun(res);
    }).catch(function(err){
      alert(err);
  })
}
export function httpBinaryPost(url,formObj,callFun){
  axios.post('/api'+url, formObj).then(function(res){
    callFun(res);
  }).catch(function (err) {
      alert(err);
  })
}
