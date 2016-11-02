<template>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">下单</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            销售单
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>销售日期</label>
                                        <input class="form-control" id="datePicker" placeholder="请输入日期" v-model="date">
                                        <!--
                                         <p class="help-block">Example block-level help text here.</p>
                                        -->
                                    </div>
                                    <div class="form-group">
                                        <label>客户编码</label>
                                        <input class="form-control myCusInfo idInfo" placeholder="请输入客户编码" data-type="id" v-model="cusId">
                                        <ul class="search-list" v-show="cusInfo.length&&idShow">
                                            <li v-for="item in cusInfo" v-on:click="changId(item.id,$index)">
                                                <a href="javascript:;" >{{item.id}}</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>拼音码</label>
                                        <input class="form-control myCusInfo pinyinInfo" placeholder="请输入拼音码" data-type="pinyin" v-model="pinyin">
                                        <ul class="search-list" v-show="cusInfo.length&&pinyinShow">
                                            <li v-for="item in cusInfo" v-on:click="changPinyin(item.spell,$index)">
                                                <a href="javascript:;" >{{item.spell}}</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div class="form-group">
                                        <label>客户名称</label>
                                        <input class="form-control myCusInfo nameInfo readonlyInfo" readonly="readonly"  v-model="cusName">
                                        <ul class="search-list" v-show="cusInfo.length&&nameShow">
                                            <li v-for="item in cusInfo" v-on:click="changName(item.name)">
                                                <a href="javascript:;" >{{item.name}}</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <hr/>
                            <p class="help-block">订单列表</p>
                            <div class="row">
                                <div class="col-xs-12">
                                    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                        <thead>
                                        <tr>
                                            <th>商品名称</th>
                                            <th>件数</th>
                                            <th>数量</th>
                                            <th>单价</th>
                                            <th>过磅费</th>
                                            <th>包装费</th>
                                            <th>供货商</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in goodsList">
                                            <td>{{item.gName}}</td>
                                            <td class="center">{{item.countUnit}}</td>
                                            <td >{{item.count}}</td>
                                            <td>{{item.gPrice}}</td>
                                            <td>{{item.gWeight}}</td>
                                            <td>{{item.gPack}}</td>
                                            <td>{{item.gSupplier}}</td>
                                        </tr>
                                      <!--  <tr class="odd gradeX">
                                            <td>小白菜</td>
                                            <td class="center">2</td>
                                            <td >2</td>
                                            <td>4</td>
                                            <td>江南</td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>大白菜</td>
                                            <td class="center">2</td>
                                            <td >2</td>
                                            <td>4</td>
                                            <td>江南</td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>大白菜</td>
                                            <td class="center">2</td>
                                            <td >2</td>
                                            <td>4</td>
                                            <td>江南</td>
                                        </tr>-->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>商品编号</label>
                                        <input class="form-control goodIdInput" v-model="goodID" placeholder="Enter text">
                                        <ul class="search-list" v-show="goodList.length&&goodIdShow">
                                            <li v-for="item in goodList" v-on:click="getAllGoodInfo(item.id,$index)">
                                                <a href="javascript:;" >{{item.id}}</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div class="form-group">
                                        <label>拼音码</label>
                                        <input class="form-control goodPinyInput" placeholder="Enter text" v-model="goodPinyin">
                                        <ul class="search-list" v-show="goodList.length&&goodPinyinShow">
                                            <li v-for="item in goodList" v-on:click="getAllGoodInfo(item.spell,$index)">
                                                <a href="javascript:;" >{{item.spell}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="form-group">
                                        <label>商品名称</label>
                                        <input class="form-control readonlyInfo" readonly="readonly" v-model="goodName">

                                    </div>

                                    <div class="form-group">
                                        <label>库存</label>
                                        <input class="form-control" readonly="readonly"  v-model="goodLeave">
                                    </div>

                                </div>
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>件数</label>
                                        <input class="form-control" type="number" v-model="goodNumJian">

                                    </div>
                                    <div class="form-group">
                                        <label>单价</label>
                                        <input class="form-control"  type="number" placeholder="Enter text" v-model="goodPrice">
                                    </div>
                                    <div class="form-group">
                                        <label>数量</label>
                                        <input class="form-control" type="number" placeholder="Enter text" v-model="goodNumNo">

                                    </div>

                                    <div class="form-group">
                                        <label>供货商</label>
                                        <input class="form-control" readonly="readonly"  v-model="goodOrigin">
                                    </div>

                                </div>
                                <div class="col-xs-12">
                                    <button type="button" class="btn btn-primary" v-on:click="addGoodsList">确定</button>
                                    <button type="button" class="btn btn-default" v-on:click="cancelCurrentGood">取消</button>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>合计金额</label>
                                        <input class="form-control" readonly="readonly" v-model="totalMoney">
                                        <!--
                                         <p class="help-block">Example block-level help text here.</p>
                                        -->
                                    </div>
                                    <div class="form-group">
                                        <label>前欠金额</label>
                                        <input class="form-control" readonly="readonly"  v-model="beforeLentMoney">
                                    </div>

                                </div>
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>挂欠金额</label>
                                        <input class="form-control" readonly="readonly" v-model="nowLentMoney">

                                    </div>
                                    <div class="form-group">
                                        <label>总欠金额</label>
                                        <input class="form-control" readonly="readonly"  v-model="totalLentMoney">
                                    </div>

                                </div>


                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>出场费</label>
                                        <input class="form-control" v-model="placeBill">
                                        <!--
                                         <p class="help-block">Example block-level help text here.</p>
                                        -->
                                    </div>
                                    <div class="form-group">
                                        <label>三轮车费</label>
                                        <input class="form-control" placeholder="Enter text" v-model="trafficBill">
                                    </div>

                                </div>
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <label>实收金额</label>
                                        <input class="form-control" v-model="getMoney">

                                    </div>
                                    <div class="form-group">
                                        <button type="button" class="btn btn-primary" style="margin-top:25px" v-on:click="makeOrder">记账</button>

                                    </div>
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
        <!-- /#page-wrapper -->

</template>
<script>
    Date.prototype.Format = function(fmt)
    { //author: meizz
        var o = {
            "M+" : this.getMonth()+1,                 //月份
            "d+" : this.getDate(),                    //日
            "h+" : this.getHours(),                   //小时
            "m+" : this.getMinutes(),                 //分
            "s+" : this.getSeconds(),                 //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    };
    module.exports = {
        'data': function () {
            return {
                nowTime:"",

                date:"",
                pinyin:"",
                cusId:"",
                cusName:"",
                selected:0,

                goodsList:[],

                goodID:"",
                goodPinyin:"",
                goodName:"",
                goodNumJian:0,
                goodNumNo:"",
                goodPrice:"",
                goodLeave:"",
                goodWeight:"",
                goodPack:"",
                goodOrigin:"",
                Bill:"",

                totalMoney:"",
                nowLentMoney:"",
                beforeLentMoney:"",
                totalLentMoney:"",

                trafficBill:0,
                placeBill:0,
                getMoney:"",

                cusInfo:[],
                goodList:[],
                goodPinyinShow:false,
                goodIdShow:false,
                idShow:false,
                nameShow:false,
                pinyinShow:false

            }
        },
        props:['domain'],

        ready:function(){
            var self = this ;
            // 获取当前日期
            this.date=this.getToday();

            $( "#datePicker" ).datepicker(
            );
            $( "#datePicker" ).datepicker(
                    'option','dateFormat','yy-mm-dd'
            );
            console.log(this.date);
            $('.idInfo')
                    .on('focus',function(){
                self.idShow=true;
                    })
                    .on("blur",function(){
                       // self.getOtherInfo("id",$(this).val());

                        setTimeout(function(){
                            self.idShow=false;
                        },200);

                    })
                    .on('input propertychange',function(){
                        self.blurGetInfo('id',$(this).val())
                    });

            $('.pinyinInfo')
                    .on('focus',function(){
                self.pinyinShow=true;
                })
                    .on("blur",function(){

                        setTimeout(function(){
                            self.pinyinShow=false;
                        },200);

                    })
                    .on('input propertychange',function(){
                self.blurGetInfo('pinyin',$(this).val())
                });


            //todo:商品的联想功能
            $('.goodPinyInput')
                    .on('focus',function(){
                        self.goodPinyinShow=true;
                    })
                    .on("blur",function(){

                        setTimeout(function(){
                            self.goodPinyinShow=false;
                        },200);

                    })
                    .on('input propertychange',function(){
                        self.blurGetGoodInfo('pinyin',$(this).val())
                    });
            $('.goodIdInput')
                    .on('focus',function(){
                        self.goodIdShow=true;
                    })
                    .on("blur",function(){

                        setTimeout(function(){
                            self.goodIdShow=false;
                        },200);

                    })
                    .on('input propertychange',function(){
                        self.blurGetGoodInfo('id',$(this).val())
                    });


            /* $('.nameInfo').on('focus',function(){
                 self.nameShow=true;
             })*/


        },
        events: {

        },
        watch:{
          'getMoney':function(){
              this.totalMoney = ((this.placeBill || 0)-0) +((this.trafficBill || 0)-0) +this.Bill;

              this.nowLentMoney = this.totalMoney-this.getMoney;
              this.totalLentMoney = (this.nowLentMoney-0) + (this.beforeLentMoney-0);

          },
          'placeBill':function() {

              this.totalMoney = ((this.placeBill || 0)-0) +((this.trafficBill || 0)-0) +this.Bill;

              this.nowLentMoney = this.totalMoney-this.getMoney;

              this.totalLentMoney = this.nowLentMoney-0 + (this.beforeLentMoney-0);


          },
            'trafficBill':function() {
                this.totalMoney = ((this.placeBill || 0)-0) +((this.trafficBill || 0)-0) +this.Bill;

                this.nowLentMoney = this.totalMoney-this.getMoney;

                this.totalLentMoney = this.nowLentMoney-0 + (this.beforeLentMoney-0);
            }

        },
        methods: {
            //添加商品列表
            addGoodsList:function(){

                var self=this;
                // 添加列表
                var goodInfo={
                    //todo:确认商品列表信息
                    gId:self.goodID,
                    gSpell:self.goodPinyin,
                    gName:self.goodName,
                    countUnit:self.goodNumJian,
                    count:self.goodNumNo,
                    gPrice:self.goodPrice,
                    goodLeave:self.goodLeave,
                    gSupplier:self.goodOrigin,
                    gWeight:self.goodWeight,
                    gPack:self.goodPack
                };
                self.goodsList.push(goodInfo);
                self.totalBill();
                //  清空
                self.cancelCurrentGood();

            },
            cancelCurrentGood:function(){
                this.goodID="";
                this.goodPinyin="";
                this.goodName="";
                this.goodNumJian=0;
                this.goodNumNo="";
                this.goodPrice="";
                this.goodLeave="";
                this.goodOrigin="";
                this.goodWeight="";
                this.goodPack="";
            },


            blurGetInfo:function(type,keyword){
                var self = this;
                //todo:ajax  根据关键字获取联想搜索结果，type为其他参数的类别 "id""pinyin"
                $.ajax({
                    type: "GET",
                    url: self.domain+'customers/search',
                    dataType: 'json',
                    data: {
                        key: keyword
                    },
                    success: function (data) {
                        if(data.ret===0){
                            self.cusInfo=data.customers;
                        }else{
                            alert(data.msg)
                        }
                        //  console.log(data);

                    }
                });
                /*if(type=="id"){
                    this.cusInfo=[{value:keyword},{value:"12"},{value:"123"}];

                }else{
                    this.cusInfo=[{value:keyword},{value:"122"},{value:"1223"}];

                }*/

            },
            blurGetGoodInfo:function(type,keyword){
                var self = this;
                //todo:ajax   商品信息
                $.ajax({
                    type: "GET",
                    url: self.domain+'goods/search',
                    dataType: 'json',
                    data: {
                        key: keyword
                    },
                    success: function (data) {
                        if(data.ret===0){
                            self.goodList=data.goods;
                        }else{
                            alert(data.msg)
                        }
                        //  console.log(data);

                    }
                });


            },

            getAllGoodInfo:function(type,index){
                var self = this;
                this.goodID=self.goodList[index].id;
                this.goodName=self.goodList[index].name;
                this.goodLeave=self.goodList[index].inventory;
                this.goodPrice=self.goodList[index].price||0;
                this.goodOrigin=self.goodList[index].supplier;
                this.goodPinyin=self.goodList[index].spell;
                this.goodWeight=self.goodList[index].weighFee;
                this.goodPack=self.goodList[index].packFee;

            },
            getOtherInfo:function(type,val,index){
                var self = this;
                //todo:ajax  根据关键字获取必要其他信息的信息，type为其他参数的类别
                /* $.ajax({
                 type: "GET",
                 url: "",
                 dataType: 'json',
                 data: {
                 keyword: val,
                 type: type
                 },
                 success: function (data) {
                 //  console.log(data);

                 }
                 });*/
                console.log("info:",index);
                this.cusId=self.cusInfo[index].id;
                this.cusName=self.cusInfo[index].name;
                this.pinyin=self.cusInfo[index].spell;

                //获取欠费信息
                this.getLent(this.cusId);

            },

            getToday:function(){
                var myDate = new Date();
               // console.log ((myDate.getDate()+1)+"/"+myDate.getDay()+"/"+myDate.getFullYear());
               // return myDate.getDate()+"/"+(myDate.getDay()+1)+"/"+myDate.getFullYear();
                return myDate.Format('yyyy-MM-dd');
            },
            TimeToCode:function(){

            },
            makeOrder:function(){
                //todo:确认记账ajax
                var self = this;
                if(this.checkFormat()){
                     $.ajax({
                     type: "POST",
                     contentType: 'application/json',
                     url: self.domain+"sales/sale",
                     dataType: 'json',
                     data:self.getJSONData(),
                     success: function (data) {
                         if(data.ret===0){
                             alert("记账成功")  ;
                             this.clearAll();

                         }else{
                             alert(data.msg);
                         }
                         console.log(data);

                     }
                     });
                 //   alert("下单成功");

                }

            },
            getJSONData:function(){
                var self = this ;
                var json={

                    "date": self.date,
                    "cId": self.cusId,

                    "cSpell": self.pinyin,

                    "cName": self.cusName,

                    "appearanceFee": self.placeBill,

                    "carFee": self.trafficBill,

                    "totalMoney": self.totalMoney,

                    "storeList": self.goodsList

                };
                return window.JSON.stringify(json);
            },
            changId:function(value,index){
                console.log(value);
                this.cusId=value;

                this.getOtherInfo("pinyin","",index);

            },
            changName:function(value){
                console.log(value);

                this.cusName=value;
              //  this.getOtherInfo("name","",index);


            },
            changPinyin:function(value,index){
                var self = this;
                console.log(value);

                this.pinyin=value;

                self.getOtherInfo("pinyin","",index);


            },
            checkListFormat:function(){

                if(!(this.goodPinyin&&this.goodID)){
                    alert("请输入商品数量");
                    return false;
                }
                if(!(this.goodNumJian||this.goodNumNo)){
                    alert("请输入商品数量");
                    return false;
                }
                if(!this.goodPrice){
                    alert("请输入商品单价");
                    return false;
                }

                return true;

            },
            checkFormat:function(){
                if(!this.date){
                    alert("请选择销售时间");
                    return false;
                }
                if(!(this.cusId&&this.pinyin)){
                    alert("客户信息不完整");
                    return false;
                }
                if(this.goodsList.length==0){
                    alert("商品列表为空");
                    return false;
                }
                if(this.placeBill===""||this.trafficBill===""){
                    alert("交通费或出场费不完整");
                    return false;
                }
                if(this.getMoney===""){
                    alert("请输入实收金额");
                    return false;
                }
                return true;


            },
            // 费用逻辑,todo:获取欠费金额
            getLent:function(id){
                var self = this;
                 $.ajax({
                 type: "GET",
                 url: self.domain+'customers/loan',
                 dataType: 'json',
                 data: {
                 id: id
                 },
                 success: function (data) {
                 //  console.log(data);
                     if(data.ret===0){
                         self.beforeLentMoney=data.loan;

                     }else{
                         alert(data.msg);
                     }

                 }
                 });

             //   this.totalLentMoney=2000;
            },
            totalBill:function(){
                var self = this;
                var list = self.goodsList ;
                var Bill=0;
                for(var i in list){

                    if(list[i].count){
                     //   console.log(list[i].gPrice-0);
                    //    console.log(list[i].countUnit-0);
                        Bill += (list[i].gPrice-0) * (list[i].count-0) + ((list[i].gWeight||0)-0)+((list[i].gPack||0)-0) ;
                    }else{
                        Bill += (list[i].gPrice-0) * (list[i].countUnit-0) + ((list[i].gWeight||0)-0)+((list[i].gPack||0)-0) ;

                    }


                }
                self.Bill =  Bill;
                self.totalMoney = ((self.placeBill || 0)-0) +((self.trafficBill || 0)-0) +self.Bill;

            },

            //清除各部分函数
            cleargoodList:function(){

            },
            clearAll:function(){
                this.cancelCurrentGood();
                this.nowTime="";
                this.date="";
                this.pinyin="";
                this.cusId="";
                this.cusName="";
                this.goodsList=[];
                this.totalMoney="";
                this.nowLentMoney="";
                this.beforeLentMoney="";
                this.totalLentMoney="";

                this.trafficBill=0;
                this.placeBill=0;
                this.getMoney="";

                this.cusInfo="";

                this.idShow=false;
                this.pinyinShow=false;

            }

        }
    }
</script>