/**
 * Created by duoyi on 2016/9/8.
 */
/**
 * Created by duoyi on 2016/9/8.
 */
import $ from 'jquery'
import html from './template.html'
/*
 import datepicker from '../../../componment/datepicker'
 */
import dropdown from '../../../componment/dropdown'
import mypage from '../../../componment/pagination'
import api from 'api'

export default {

    template: html,

    replace: true,

    props:[],

    data () {
        return {
            name:"",
            goodNameList:[],
            packFee:"",
            weightFee:"",
            unitFee:"",
            price1: 0,
            price2: 0,
            price3: 0,
            price4: 0,
            price5: 0,
            percent1: 0,
            percent2: 0,
            percent3: 0,
            percent4: 0,
            percent5: 0,

            supplier:"",
            supplierList:[],
            supplierInfo:{},      //商品

            selected:-1
            // mypage:{page:1,size:10,totalCount:0},



        }
    },
    watch:{

    },

    ready (){
        var self = this;
         $('body').on('click',function () {
         self.supplierList=[];
         self.goodNameList=[];
         })
       // this.search()
    },
    methods:{
        search(){
            var self = this;
            api.checkSupplier({

            },function (data) {
                self.supplierList=data.suppliers;
            })

        },
        //供货商
        searchSupplier(){
            var self=this;
            self.goodNameList=[];
            api.searchSuppliers({

            },function (data) {
                self.supplierList=data.suppliers;
                self.name='';
            })
        },
        SupplierRender(item){
            this.supplier=item.name;
        },
        //商品
        searchGood(key,cb){
            var self = this;
            self.supplierList=[];
            window.Timer233&&clearTimeout(window.Timer233);
            window.Timer233=setTimeout(function () {
                api.searchGoods(key,function (data) {
                    cb&&cb(data.goods);
                })
            },500)
        },
        goodRender(item){

            this.name=item.name;
            this.supplier=item.supplier;

        },
        //根据id
        searchGoodByName(key){
            var self = this;
            this.searchGood(key,function (data) {
                var arr = [];
                if(!self.supplier){
                    self.goodNameList=data
                }else{
                    for(var i = data.length;i--;){
                        if(data[i].supplier==self.supplier){
                            arr.push(data[i]);
                        }
                    }
                    self.goodNameList=arr;
                }


            })
        },

        add(){
            var self = this;
            if(this.name&&this.supplier&&this.type){
                if(!this.name){
                    alert('商品名不能为空');
                    return false
                }
                if(this.weightFee&&isNaN(this.weightFee)){
                    alert('过磅费需为数值');
                    return false
                }
                if(this.packFee&&isNaN(this.packFee)){
                    alert('包装费需为数值');
                    return false
                }
                api.addResultWay(JSON.stringify({
                    "weighFee": self.weightFee-0,
                    "packFee": self.packFee-0,
                    "type": self.type-0,
                    "unitFee": self.unitFee-0,
                    "price1": self.price1-0,
                    "price2": self.price2-0,
                    "price3": self.price3-0,
                    "price4": self.price4-0,
                    "price5": self.price5-0,
                    "percentage1": (self.percent1-0),
                    "percentage2": self.percent2-0,
                    "percentage3": self.percent3-0,
                    "percentage4": self.percent4-0,
                    "percentage5": self.percent5-0
                }),function (data) {
                    alert('添加成功');
                })

            }else {
                alert('提成信息不全')
            }


        },
        toggleSelect(item){
            if(this.selected!=item.id){
                this.selected=item.id;
                this.render(item);
            }else{
                this.selected=-1;
            }
        },
        render(item){
            this.supplierInfo=item
        },
        //删除商品
        del(){
            var self = this;
            api.delCustomer({

            },function (data) {
            })
            self.search();
            self.selected=-1;
        },
        //修改商品
        correct(){
            var self = this;
            if(this.supplierInfo.phone&&isNaN(this.supplierInfo.phone)){
                alert('手机格式有误');
                return false
            }
            api.updateSupplier(JSON.stringify(self.supplierInfo),function (data) {
                self.search()
            })
            self.selected=-1;
            this.supplierInfo={}
        },
        cancel(){
            if(this.selected!=-1){
                this.supplierInfo={}
            }
            this.selected=-1;
            this.search()

        },
        checkResult(){
            
        }

    },
    components : {
        dropdown
        // mypage
    }

}