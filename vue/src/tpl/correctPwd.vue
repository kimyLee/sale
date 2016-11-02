<template>

    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">用户信息</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <label>用户名</label>
                    <input class="form-control"  readonly="readonly" placeholder="请输入用户名" v-model="userinfo.username">
                    <!--
                     <p class="help-block">Example block-level help text here.</p>
                    -->
                </div>


            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <label>请输入当前密码</label>
                    <input class="form-control" type="password" placeholder="请输入当前密码" v-model="pwd1">
                    <!--
                     <p class="help-block">Example block-level help text here.</p>
                    -->
                </div>


            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <label>请输入修改密码</label>
                    <input class="form-control" type="password" placeholder="请输入修改密码" v-model="pwd2">
                    <!--
                     <p class="help-block">Example block-level help text here.</p>
                    -->
                </div>


            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <label>确认密码</label>
                    <input class="form-control" type="password" placeholder="请再次确认密码" v-model="pwd3">
                    <!--
                     <p class="help-block">Example block-level help text here.</p>
                    -->
                </div>


            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <button type="button" class="btn btn-primary" style="margin-left:15px" v-on:click="changeInfo">确认修改</button>
            </div>

        </div>
        <!-- /.row -->
    </div>
    <!-- /#page-wrapper -->

</template>
<script>
    module.exports={
        data:function(){
          return {
              pwd1:"",
              pwd2:"",
              pwd3:""
          }
        },
        props:['userinfo'],
        methods:{
            'changeInfo':function(){
                var self = this;
                    if(this.checkPwdInfo()){

                        setTimeout(function(){
                            var data={
                                success:true,
                                userId:10086,
                                username:'admin22',
                                time:"2016/06/17-2017/06/17",
                                type:"普通用户",
                                msg:"登录成功",
                                code:10086
                            };
                            if(data.success){
                                alert("修改成功");
                                self.$dispatch('jumpTo','info');
                            }else{
                                //未登录
                                if(data.code=10086){
                                    self.$dispatch('unLogin');
                                }else{
                                    alert(data.msg);
                                }
                            }


                        },200);
                    }
                    //todo:ajax 修改信息
                    /* $.ajax({
                     type: "GET",
                     url: "",
                     dataType: 'json',
                     data: {
                     acc: acc,
                     pwd2: pwd2,
                     pwd: pwd
                     },
                     success: function (data) {
                     //  console.log(data);

                     }
                     });*/

            },
            'checkPwdInfo':function(){
                if(this.pwd2!=this.pwd3){
                    alert('密码输入不一致！');
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
</script>