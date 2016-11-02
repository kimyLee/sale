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
import mypage from '../../../componment/pagination'
import common from 'common'
let Timer;
let Timer2;
export default {
    template: html,
    replace: true,
    props: {
    },
    data () {
        return {
            feeInfo:{},
            feeName:[], //客户名字搜索列表
            feeId:[], //客户id搜索列表
            feeSpell:[], //客户拼音码搜索列表


            begin:'',
            end:'',
            selected:-1,
            selectFeeList:[],
            mypage:{page:1,size:10,totalCount:0},
            supplierList:[]

        }
    },
   
    ready(){
        this.getFeeList()
    },
    methods:{
        //获取费用列表
        getFeeList(){
            var self = this;
            api.checkFeeTicket({
               startDate:self.begin,
               endDate:self.end,
               delete:''
            },function (data) {
                self.selectFeeList=data.costOrders;
            })
        },
        //查费用  id spell
        search(key,cb){
            var self = this;
            clearTimeout(Timer);
            Timer=setTimeout(function () {
                //console.log('searching');
                api.patchFee(key,function (data) {
                    cb&&cb(data.costs);
                    //self.list=data.customers;
                })
            },500)
        },
        //根据id
        searchByName(key){
            var self = this;
            this.search(key,function (data) {
                self.feeName=data
            })
        },
        searchByID(key){
            var self = this;
            this.search(key,function (data) {
                self.feeId=data
            })
        },
        searchBySpell(key){
            var self = this;
            this.search(key,function (data) {
                self.feeSpell=data
            })
        },
        
        //添加费用单
        add(){
            console.log(this.feeInfo);
            if(this.feeInfo.name&&this.feeInfo.spell&&this.feeInfo.id&&this.feeInfo.date
                &&this.feeInfo.supplier&&this.feeInfo.money){
                this.confirm()
                //this.selectFeeList.push(common.deepClone(this.feeInfo))
            }else {
                alert('费用信息不全')
            }
        },
        toggleSelect(item){
            //console.log('del',index)
            if(this.selected!=item.id){
                this.selected=item.id;
                this.render(item);
            }else{
                this.selected=-1;
            }
        },
        render(item){
            let date = this.feeInfo.date;
           this.feeInfo=item;
           this.feeInfo.date=date;


        },
        //删除
        del(){
                this.selectGoodList.splice(this.selected,1);
                this.selected=-1
        },
        //修改
        correct(){
            this.selectGoodList[this.selected]=this.feeInfo;
            this.selected=-1
        },
        commit(){

        },
        //供货商
        searchSupplier(){
            var self=this;
            api.searchSuppliers({

            },function (data) {
                self.supplierList=data.suppliers;
            })
        },
        SupplierRender(item){
            this.feeInfo.supplier=item.name;
        },
        confirm(){
            var self = this;
            api.addFeeTicket(JSON.stringify(this.feeInfo),
                function (data) {
                    alert('记账成功');
                    self.getFeeList()
                self.feeInfo={};
                self.selectFeeList=[];
            })
        }

    },

    components : {
        datepicker,
        dropdown
    }

}