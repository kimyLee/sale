<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">请登录</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="E-mail" name="email" type="email" v-model="acc" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" v-model="pwd">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input id="remember"  checked="checked" name="remember" type="checkbox" value="Remember Me">记住我
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <a href="javascript:;" class="btn btn-lg btn-success btn-block" v-on:click="myLogin">Login</a>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        'data': function () {
            return {
                pwd:"",
                acc:""
            }
        },
        props:['islogin'],
        ready:function(){
            if(this.getCookie('username')){
                this.acc=this.getCookie('username');
            }
            if(this.getCookie('pwd')){
                this.pwd=this.getCookie('pwd');
            }
        },
        methods: {
            myLogin:function(){
                //todo:login
              //  console.log("xu",$('#remember')[0].checked);
                var self = this;
                if($.trim(self.pwd) && $.trim(self.acc)){

                    /* $.ajax({
                     type: "GET",
                     url: "",
                     dataType: 'json',
                     data: {
                     acc: acc,
                     pwd: pwd
                     },
                     success: function (data) {
                     //  console.log(data);

                     }
                     });*/
                    setTimeout(function(){
                        var data={
                            success:true,
                            userId:10086,
                            username:'admin',
                            time:"2016/06/17-2017/06/17",
                            type:"普通用户",
                            msg:"登录成功"

                        };

                        self.callback(data);
                    },200);


                }else{
                    alert('用户或密码不能为空') ;
                }


            },
            callback:function(data){
                var self= this;
                //设置cookies

                //跳转
                if(data.success){
                    self.rememberPwd(data.username,self.pwd);
                    //self.islogin=true;
                    self.$dispatch('Login',data);


                }else{
                    alert(data.msg);

                    self.islogin=false;

                }


            },
            rememberPwd:function(acc,pwd){
                if($('#remember')[0].checked){
                    this.setCookie('username',acc,30);
                    this.setCookie('pwd',pwd,7);
                }else{
                    this.delCookie('username');
                    this.delCookie('pwd');

                }

            },
            setCookie:function(name,value,time){

                    var exp = new Date();
                    exp.setTime(exp.getTime() + time*24*60*60*1000);
                    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();


            },
            getCookie:function(name){
                    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                    if(arr=document.cookie.match(reg))
                        return unescape(arr[2]);
                    else
                        return null;

            },
            delCookie:function(name){

                    var exp = new Date();
                    exp.setTime(exp.getTime() - 1);
                    var cval=this.getCookie(name);
                    if(cval!=null)
                        document.cookie= name + "="+cval+";expires="+exp.toGMTString();

            }

        }
    }
</script>