<template>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">查看报表 </h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-4">
                            开始日期：
                            <input class="form-control" id="datePicker1" placeholder="请输入日期" v-model="beginDate">

                        </div>
                        <div class="col-xs-4">
                            结束日期：
                            <input class="form-control" id="datePicker2" placeholder="请输入日期" v-model="endDate">

                        </div>
                    </div>
                </div>
                <div class="panel-body">


                    <p class="help-block">总览</p>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-slide">

                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                <tr>
                                    <th>仓库</th>
                                    <th>销售件数</th>
                                    <th>销售金额</th>
                                    <th>进货件数</th>
                                    <th>进货金额</th>
                                    <th>费用</th>
                                    <th>尾数</th>
                                    <th>提成</th>
                                    <th>实存</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in originList" class="odd gradeX">
                                    <td>{{item.name}}</td>
                                    <td class="center">{{item.outNum}}</td>
                                    <td class="center">{{item.outMoney}}</td>
                                    <td >{{item.inNum}}</td>
                                    <td>{{item.inMoney}}</td>
                                    <td>{{item.fee}}</td>
                                    <td>{{item.tail}}</td>
                                    <td>{{item.salary}}</td>
                                    <td>{{item.benefit}}</td>
                                </tr>
<!--                                <tr class="odd gradeX">
                                    <td>第一个仓库</td>
                                    <td class="center">1112</td>
                                    <td class="center">111111111</td>
                                    <td>2</td>
                                    <td>41111111</td>
                                    <td>11111111</td>
                                    <td>111</td>
                                    <td>111</td>
                                    <td>11111111</td>
                                </tr>
                              -->
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-xs-3">
                            <span>前欠:</span><span style="color: red">{{beforeLent}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>日欠:</span><span style="color: red">{{todayLent}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>总欠:</span><span style="color: red">{{totalLent}}</span>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-xs-3">
                            <span>实收:</span><span style="color: red">{{factGet}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>借贷:</span><span style="color: red">{{lent}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>费用:</span><span style="color: red">{{fee}}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-3">
                            <span>三轮:</span><span style="color: red">{{traffic}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>出场:</span><span style="color: red">{{place}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>当日:</span><span style="color: red">{{today}}</span>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-xs-3">
                            <span>销售:</span><span style="color: red">{{sale}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>进货:</span><span style="color: red">{{inGood}}</span>
                        </div>

                        <div class="col-xs-3">
                            <span>补货:</span><span style="color: red">{{addGood}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>提成:</span><span style="color: red">{{tiChen}}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-3">
                            <span>收入:</span><span style="color: red">{{getMoney}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>支出:</span><span style="color: red">{{outMoney}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>实存:</span><span style="color: red">{{factSave}}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-3">
                            <span>前存:</span><span style="color: red">{{beforeSave}}</span>
                        </div>

                        <div class="col-xs-3">
                            <span>转账:</span><span style="color: red">{{turnMoney}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span>现存:</span><span style="color: red">{{nowSave}}</span>
                        </div>
                    </div>
                    <hr/>
                    <p class="help-block">明细</p>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-slide">
                                <table class="table table-striped table-bordered table-hover" >
                                    <thead>
                                    <tr>
                                        <th class="min60">商品</th>
                                        <th class="min45">件数</th>
                                        <th class="min45">数量</th>
                                        <th class="min45">均价</th>
                                        <th class="min45">包装</th>
                                        <th class="min45">销售</th>
                                        <th class="min60">进货数</th>
                                        <th class="min60">进货额</th>
                                        <th class="min75">当日库存</th>
                                        <th class="min60">前库存</th>
                                        <th class="min45">货差</th>
                                        <th class="min45">提成</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in DetailList" class="odd gradeX">
                                        <td>{{item.good}}</td>
                                        <td class="center">{{item.NumJian}}</td>
                                        <td class="center">{{item.Num}}</td>
                                        <td >{{item.aveMoney}}</td>
                                        <td >{{item.pack}}</td>
                                        <td>{{item.sale}}</td>
                                        <td>{{item.inNum}}</td>
                                        <td>{{item.inMoney}}</td>
                                        <td>{{item.todayExist}}</td>
                                        <td>{{item.beforeExist}}</td>
                                        <td>{{item.goodCha}}</td>
                                        <td>{{item.tiChen}}</td>
                                    </tr>

<!--
                                    <tr class="odd gradeX">
                                        <td>小白菜</td>
                                        <td class="center">1112</td>
                                        <td class="center">111111111</td>
                                        <td>2</td>
                                        <td>41111111</td>
                                        <td>11111111</td>
                                        <td>111</td>
                                        <td>111</td>
                                        <td>11111111</td>
                                        <td>11111111</td>
                                        <td>11111111</td>
                                        <td>11111111</td>
                                    </tr>
-->

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <p class="help-block">其他费用</p>

                    <div class="row">
                        <div class="col-xs-4">
                            <table class="table table-striped table-bordered table-hover"
                                   id="">
                                <thead>
                                <tr>
                                    <th>费用名称</th>
                                    <th>金额</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in otherFee" class="odd gradeX">
                                    <td>{{item.name}}</td>
                                    <td>{{item.money}}</td>
                                </tr>
<!--
                                <tr class="odd gradeX">
                                    <td>送礼</td>
                                    <td>999</td>
                                </tr>
-->

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p class="help-block">三轮</p>

                    <div class="row">
                        <div class="col-xs-4">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>客户名称</th>
                                    <th>金额</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in trafficFee" class="odd gradeX">
                                    <td>{{item.name}}</td>
                                    <td>{{item.money}}</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p class="help-block">尾数</p>

                    <div class="row">
                        <div class="col-xs-4">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>客户名称</th>
                                    <th>尾数</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in tailFee" class="odd gradeX">
                                    <td>{{item.name}}</td>
                                    <td>{{item.money}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr/>
                    <p class="help-block">收入</p>

                    <div class="row">
                        <div class="col-xs-4">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>金额</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in getList" class="odd gradeX">
                                    <td>{{item.name}}</td>
                                    <td>{{item.money}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr/>
                    <p class="help-block">支出</p>

                    <div class="row">
                        <div class="col-xs-4">
                            <table class="table table-striped table-bordered table-hover" >
                                <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>金额</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in spentList" class="odd gradeX">
                                    <td>{{item.name}}</td>
                                    <td>{{item.money}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.row (nested) -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
</div>
</template>
<script>
    module.exports = {
        'data': function () {
            return {
                beginDate:"",
                endDate:"",
                originList:[
                    {name:"1号",outNum:"100",outMoney:"100",inNum:"12",
                        inMoney:"12",fee:"1212",tiCheng:"656",factExist:"5645"
                    }
                ],
                //各种数据
                beforeLent:100,
                todayLent:100,
                totalLent:100,
                factGet:100,
                lent:100,
                fee:100,
                traffic:100,
                place:100,
                today:100,
                sale:100,
                inGood:100,
                addGood:100,
                tiChen:100,
                getMoney:100,
                outMoney:100,
                factSave:100,
                beforeSave:100,
                turnMoney:100,
                nowSave:100,

                DetailList:[
                    {good:"小白菜",NumJian:10,Num:10,aveMoney:100,pack:12,
                        sale:11,inNum:1212,inMoney:111,todayExist:11,
                        beforeExist:11,goodCha:11,tiChen:11
                    }
                ],
                otherFee:[
                    {name:'送礼',money:99},
                    {name:'送礼',money:99}
                ],
                trafficFee:[
                    {name:'小李',money:99},
                    {name:'老王',money:99}
                ],
                tailFee:[
                    {name:'小李',money:99},
                    {name:'老王',money:99}
                ],
                getList:[
                    {name:'还钱',money:99}
                ],
                spentList:[
                    {name:'借钱',money:99}
                ]
            }
        },
        ready:function(){
            var self = this ;
            // 获取当前日期
            this.endDate=this.getToday();
            this.beginDate=this.getToday();
            $( "#datePicker1" ).datepicker({
            });
            $( "#datePicker2" ).datepicker({
            });
            $( "#datePicker1" ).datepicker(
                    'option','dateFormat','yy-mm-dd'
            );
            $( "#datePicker2" ).datepicker(
                    'option','dateFormat','yy-mm-dd'
            );



        },
        watch: {
            'endDate':function(){
                this.getInfo(this.beginDate,this.endDate);
            },
            'beginDate':function(){
                this.getInfo(this.beginDate,this.endDate);
            }

        },
        methods: {
            getToday:function(){
                var myDate = new Date();
                return myDate.Format('yyyy-MM-dd');
            },
            getInfo:function(b,e){
                //todo:ajax 根据时间查询信息

                console.log(b,e);
            }


        }
    }
</script>