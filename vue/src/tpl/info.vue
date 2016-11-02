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
                    <input class="form-control" readonly="readonly" placeholder="请输入用户名" v-model="userinfo.username">
                    <!--
                     <p class="help-block">Example block-level help text here.</p>
                    -->
                </div>


            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <label>用户类别</label>
                    <input class="form-control"  readonly="readonly" placeholder="请输入用户名" v-model="userinfo.type">
                    <!--
                     <p class="help-block">Example block-level help text here.</p>
                    -->
                </div>


            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <label>用户使用期限</label>
                    <input class="form-control" readonly="readonly" v-model="userinfo.time">


                </div>


            </div>

            <!-- /.col-lg-12 -->
        </div>


        <div class="row">
            <div class="col-xs-3">
                <button type="button" class="btn btn-primary" style="" v-on:click="changeInfo">修改用户名</button>
            </div>
            <div class="col-xs-3">
                <button type="button" class="btn btn-primary" style="" v-on:click="changepwd">修改密码</button>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /#page-wrapper -->

</template>
<script>
    module.exports={
        props:['userinfo'],
        methods:{
           'changeInfo':function(){
               this.$dispatch('jumpTo','correctUser');
           },
            'changepwd':function(){
                this.$dispatch('jumpTo','correctPwd');

            }
        }
    }
</script>