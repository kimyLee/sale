<template>

    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">分配权限</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <div class="row">
            <button type="button" class="btn btn-primary" style="margin-left:15px;margin-bottom: 20px;" v-on:click="">生成账户</button>

        </div>
        <!-- /.row -->
        <div class="row">
                <div class="col-xs-6">
                    <div class="form-group">
                        <label>账号</label>
                        <input class="form-control"  placeholder="请输入日期" v-model="myAcc">
                        <!--
                         <p class="help-block">Example block-level help text here.</p>
                        -->
                    </div>


                </div>
        </div>
        <div class="row">
                <div class="col-xs-6">
                    <div class="form-group">
                        <label>密码</label>
                        <input class="form-control myCusInfo pinyinInfo" placeholder="请输入拼音码" data-type="pinyin" v-model="password">


                    </div>


                </div>

            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /#page-wrapper -->

</template>
<script>

</script>