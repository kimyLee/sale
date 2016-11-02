<template>
    <component :is="currentView" :user="User" :islogin.sync="isLogin" :predomain="Domain"></component>
</template>
<script>
    module.exports = {
        'el': '#app',
        'data': function () {
            return {
                currentView: "index",
                User:"",
                isLogin:false,
                Domain:'http://119.29.61.199:8080/'
            }
        },
        ready:function(){
            //$.ajaxSetup({xhrFields:{withCredentials:true},crossDomain:true});
            //this.checkLogin();
        },

        components: {
            login: require('./login.vue'),
            index: require('./index.vue')

        },
        events: {
            //登录
            'Login':function(data){
                this.isLogin=true;
                this.User=data;
                this.currentView='index';

            },
            'correctUser':function(name){
                this.User.username=name;
            },
            //未登录处理
            'unLogin':function(){
                this.isLogin=false;
                this.User="";
                this.currentView='login';
            },
            'logout':function(){
                var self = this;
                /* $.ajax({
                 type: "GET",
                 url: "",
                 dataType: 'json',
                 data: {
                 sessionId: self.myGetCookie('sessionId'),
                 },
                 success: function (data) {
                 //  console.log(data);
                 }
                 });*/
                setTimeout(function(){
                    self.isLogin=false;
                    self.User='';
                    self.currentView='login';
                },200)
            }
        },
        methods: {
            //全局checklogin
            checkLogin:function(view){
                var self = this;
                //todo:ajax检察登录
                /* $.ajax({
                 type: "GET",
                 url: "",
                 dataType: 'json',
                 data: {
                 sessionId: self.myGetCookie('sessionId'),
                 },
                 success: function (data) {
                 //  console.log(data);
                 }
                 });*/
                setTimeout(function(){

                    var data={
                        success:false,
                        userId:10086,
                        username:'admin',
                        time:"2016/06/17-2017/06/17",
                        type:"普通用户",
                        msg:"登录成功"

                    };
                    if(data.success){
                        self.User=data;
                        self.isLogin=true;
                        self.currentView=view||'index';
                    }else{
                        self.User="";
                        self.isLogin=false;
                        self.currentView="login";
                    }

                },200);


            },

            myGetCookie:function(name){
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                    return unescape(arr[2]);
                else
                    return null;

            }
        }
    }
</script>