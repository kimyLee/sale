<template>
    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">

                <a class="navbar-brand" href="index.html">收银系统</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">

                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> {{user.username}} <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="javascript:;" v-on:click="jump('info')"><i class="fa fa-user fa-fw"></i>用户信息</a>
                        </li>
                        <li><a href="javascript:;" v-on:click="jump('root')"><i class="fa fa-gear fa-fw"></i>分配权限</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="javascript:;" v-on:click="logout"><i class="fa fa-sign-out fa-fw"></i>登出</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li v-on:click="jump('order')">
                            <a href="javascript:;"><i class="fa fa-edit fa-fw"></i> 下单</a>
                        </li>

                        <li v-on:click="jump('checksheet')">
                            <a href="javascript:;"><i class="fa fa-table fa-fw"></i> 查看报表</a>
                        </li>


                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
        <component :is="currentView" :userinfo="user" :domain="predomain"></component>



    </div>
</template>
<script>
    module.exports = {
        'data': function () {
            return {
                currentView: "checksheet"
            }
        },
        props:['user','predomain'],
        components: {
            order: require('./order.vue'),
            checksheet: require('./checkSheet.vue'),
            root:require('./root.vue'),
            info:require('./info.vue'),
            correctUser:require('./correctUser.vue'),
            correctPwd:require('./correctPwd.vue')
        },
        events: {
            jumpTo:function(page){
                this.currentView=page;

            }
        },
        methods: {
            jump:function(page){
                this.currentView=page;

            },
            logout:function(){
                this.$dispatch('logout');
            }
        }
    }
</script>