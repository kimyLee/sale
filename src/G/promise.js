/**
 * Created by duoyi on 2016/10/10.
 */
import $ from 'jquery'
const domain = 'http://localhost:8080/';
function myAJAX(opt,success,fail) {
    const def=$.ajax({
        type:opt.type||'POST',
        url:domain+opt.url,
        contentType: "application/json",
        dataType:'JSON',
        data:opt.data||null,
        xhrFields:{withCredentials:true}
    })
        .done(function (data) {
            //todo:统一处理的操作
            if(data.ret==0){
                success&&success(data)
            }else{
                //todo:全局弹窗方法
               // alert(data.msg)
            }
        })
        .fail(function (data) {
            //todo:统一处理的操作
            //alert('未知错误，操作失败')
            console.log("未知错误，请检查网络")
            fail&&fail();
        })
    return def
}
export  default myAJAX;