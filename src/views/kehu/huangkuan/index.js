/**
 * Created by duoyi on 2016/9/8.
 */
/**
 * Created by duoyi on 2016/9/8.
 */
import $ from 'jquery'
import html from './template.html'
import datepicker from '../../../componment/datepicker'
import dropdown from '../../../componment/dropdown'
import api from 'api'
let Timer;
let Timer2;
export default {
    template: html,
    replace: true,
    props: {
    },
    data () {
        return {
            loanList:[],
            listName:[], //客户名字搜索列表
            listId:[], //客户id搜索列表
            listSpell:[], //客户拼音码搜索列表
            cusCode:"",
            CPinyin:"",
            Cname:"",
            CInfo:{},

            supplier:'',      //借款供应商
            supplierList:'',      //借款供应商
            beforeLoan:"",         //前欠金额

            loan:"",         //借款金额

            selectList:[],
            delGoodList:-1,
        }
    },
    computed:{

       /* totalLoan(){
            if(this.beforeLoan&&this.loan)
                return (this.beforeLoan-0)+(this.loan-0)
        }
*/
    },
    ready(){
        var self=this;
        //this.checkLoanMoney();
        $('body').on('click',function () {
            self.listName=[];
            self.listId=[];
            self.listSpell=[];
        })
    },
    watch:{
        cusCode(){
            if(this.cusCode&&(!isNaN(this.cusCode))){
                this.checkLoanMoney(this.cusCode)
            }
        }
    },
    methods:{
        //查找客户  id spell
        search(key,cb){
            var self = this;
            clearTimeout(Timer);
            Timer=setTimeout(function () {
                //console.log('searching');
                api.searchCustomer(key,function (data) {
                    cb&&cb(data.customers);
                    //self.list=data.customers;
                })
            },500)
        },
        checkLoanMoney(id){
            var self = this;
            api.checkLoanMoney({
                id:id
            },function (data) {
                self.loanList=data.details;
                var arr = data.details;
                var temp=0;
                for(var i=arr.length;i--;){
                    temp=temp+((arr[i].money-0).toFixed(2)-0)
                }
                self.beforeLoan=temp;
            })
        },
        CusRender(item){
            this.cusCode=item.id;
            this.CPinyin=item.spell;
            this.Cname=item.name;
            // this.CInfo=item;

        },
        //根据id
        searchByName(key){
            var self = this;
            this.search(key,function (data) {
                self.listName=data
            })
        },
        searchByID(key){
            var self = this;
            this.search(key,function (data) {
                self.listId=data
            })
        },
        searchBySpell(key){
            var self = this;
            this.search(key,function (data) {
                self.listSpell=data
            })
        },

        /* toggleSelect(index){
         //console.log('del',index)
         if(this.selected!=item.id){
         this.selected=item.id;
         this.render(item);
         }else{
         this.selected=-1;
         }
         },*/
        //供货商
        searchSupplier(){
            var self=this;
            api.searchSuppliers({

            },function (data) {
                self.supplierList=data.suppliers;
            })
        },
        SupplierRender(item){
            this.supplier=item.name;
        },
        //记账
        returnMoney(){
            var self = this;
            self.loan=(self.loan-0).toFixed(2);
            if(this.cusCode&&this.CPinyin&&this.Cname&&this.supplier&&(!isNaN(self.loan))){
                api.checkLoanInfo(JSON.stringify({
                    "cId": self.cusCode-0,
                    "cSpell": self.CPinyin,
                    "cName": self.Cname,
                    "money":(self.loan-0)+0.0000000001,
                    "supplier":self.supplier,
                    "type": 1,
                    "remark": self.remark
                }),function (data) {
                    self.checkLoanMoney(self.cusCode);
                    alert('记账成功')
                },function () {
                    alert('未知错误，操作失败')
                })
            }else{
                alert('还款信息不全或有误')
            }

        }

    },
    ready (){
    },
    components : {
        datepicker,
        dropdown
    }

}