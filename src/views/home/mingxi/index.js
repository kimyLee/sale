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
            beginDate:"",
            endDate:"",
            saleDay:'',
            cusCode:"",
            listName:[], //客户名字搜索列表
            listId:[], //客户id搜索列表
            listSpell:[], //客户拼音码搜索列表
            CPinyin:"",
            Cname:"",
            CInfo:{},

            /**商品*/
            GoodInfo:{},
            goodName:"",
            goodPinyin:"",
            danWei:"",   //danwei
            count_jian:"",   //件數
            price:"",          //單價
            count_weight:"",  //数量
            packFee:"",  //包装费
            weightFee:"",  //过磅费
            supplier:"",          //供货商
            total:"",           //合计金额

            beforeLoan:"",         //前欠金额
            NowLoan:"",         //挂金额
            totalLoan:"",         //总欠金额
            appearFee:"",         //出场费
            trafficFee:"",         //交通费
            factFee:"",         //实收金额

            goodCode:'',
            goodIDList:[],   //商品搜索列表
            goodNameList:[],   //商品搜索列表
            goodSpellList:[],   //商品搜索列表

            selectGoodList:[],

            selected:-1

        }
    },
    computed:{
        totalMoney(){
            var total=0;
            for(let i=this.selectGoodList.length;i--;){
                total=total+(this.selectGoodList[i].total-0)
            }
            //出场费，三轮车费
            return total
        },
        NowLoan(){
            return (this.totalMoney-this.factFee)
        },
        totalLoan(){
            if(this.CInfo&&this.CInfo.loan)
                return (this.NowLoan-0)+(this.CInfo.loan)
        }

    },
    watch:{
        startDate(){
            if(this.startDate){
                this.searchSaleTicket();
            }

        },
        endDate(){
            if(this.endDate){
                this.searchSaleTicket();
            }
        },

    },
    ready(){
        var self = this;

        $('body').on('click',function () {
            self.list=[]
        })
    },
    methods:{
        searchSaleTicket(){
            var self = this;
            api.checkSaleTicket({
                startDate:self.beginDate,
                endDate:self.endDate
            },function (data) {
                self.selectGoodList=data;
            })
        },
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
        CusRender(item){
            this.cusCode=item.id;
            this.CPinyin=item.spell;
            this.Cname=item.name;
            this.CInfo=item;

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
        //查找商品  id spell
        searchGood(key,cb){
            var self = this;
            clearTimeout(Timer);
            Timer=setTimeout(function () {
                api.searchGoods(key,function (data) {
                    cb&&cb(data.goods);
                })
            },500)
        },
        goodRender(item){

            this.GoodInfo=item;

        },
        //根据id
        searchGoodByName(key){
            var self = this;
            this.searchGood(key,function (data) {
                self.goodNameList=data
            })
        },
        searchGoodByID(key){
            var self = this;
            this.searchGood(key,function (data) {
                self.goodIDList=data
            })
        },
        searchGoodBySpell(key){
            var self = this;
            this.searchGood(key,function (data) {
                self.goodSpellList=data
            })
        },

        //添加商品
        add(){
            if(this.GoodInfo.name&&this.GoodInfo.spell&&this.price&&(this.count_jian||this.count_weight)
                &&this.GoodInfo.supplier){
                this.selectGoodList.push({
                    'id':this.GoodInfo.id,
                    "spell": this.GoodInfo.spell,
                    "name": this.GoodInfo.name,
                    "unit": this.GoodInfo.unit,
                    "weighFee": this.GoodInfo.weighFee,
                    "packFee": this.GoodInfo.packFee,
                    "supplier":  this.GoodInfo.supplier,
                    price:this.price,
                    count_jian:this.count_jian,
                    count_weight:this.count_weight,

                    //todo:计算
                    total:this.getGoodTotal(this.GoodInfo.unit,this.price,this.count_jian,this.count_weight,this.GoodInfo.packFee,this.GoodInfo.weighFee)
                })
                this.GoodInfo={};
                this.count_jian="";
                this.price="";
                this.count_weight="" ;

            }else {
                alert('商品信息不全')
            }
        },
        //计算总价
        getGoodTotal(danwei,price,count_jian,count_weight,packFee,weightFee){
            if(danwei=='件'){
                return price*count_jian + packFee*count_jian
            }else if(danwei=='公斤'){
                return price*count_weight + packFee*count_jian + weightFee*count_weight
            }
        },
        toggleSelect(item){
            if(this.selected!=item.id){
                this.selected=item.id;
                this.render(item.id);
            }else{
                this.selected=-1;
            }
        },
        render(id){
           /* api.checkSaleTicket({
                startDate:self.beginDate,
                endDate:self.endDate
            },function (data) {
                self.selectGoodList=data;
            })*/
        },
        //删除商品
        del(){
            for(let i=this.delGoodList.length;i--;){
                this.selectGoodList.splice(this.delGoodList[i],1);
                this.delGoodList=[]
            }
        },
        //修改商品
        correct(){

        },
        inMoney(){
            var self = this;
            if(self.appearFee===''||isNaN(self.appearFee)){
                alert('出场费需为数值且不能为空');
                return false;
            }  if(self.trafficFee===''||isNaN(self.trafficFee)){
                alert('三轮车费需为数值且不能为空');
                return false;
            }
            if(self.cId===''){
                alert('客户id不能为空');
                return false;
            }if(self.cName===''){
                alert('客户姓名不能为空');
                return false;
            }if(self.cSpell===''){
                alert('客户拼音码不能为空');
                return false;
            }if(self.date===''){
                alert('销售日期不能为空');
                return false;
            }if(self.shishou===''){
                alert('实收不能为空');
                return false;
            }
            if((!self.selectGoodList) || (!self.selectGoodList.length)){
                alert('无下单商品');
                return false;
            }
            //计算拼合storeLIst
            var arr= [],len=self.selectGoodList.length;
            for(let i=0;i<len;i++){
                arr.push({
                    gId: self.selectGoodList[i].id,
                    gName: self.selectGoodList[i].name,
                    gSupplier: self.selectGoodList[i].supplier,
                    gPrice: self.selectGoodList[i].price,
                    countUnit: self.selectGoodList[i].count_jian,
                    count: self.selectGoodList[i].count_weight,
                    gSpell: self.selectGoodList[i].spell,
                    money: self.selectGoodList[i].total,
                    unit: self.selectGoodList[i].danWei
                })
            }
            api.sale(JSON.stringify({
                cId: self.cusCode,
                cName:self.Cname,
                cSpell:self.CPinyin,
                appearanceFee:self.appearFee-0,
                carFee:self.trafficFee-0,
                date:self.saleDay,
                shishou:self.factFee,
                storeList: arr,
                totalMoney: self.totalMoney
            }), function (data) {
                alert('下单成功')
            },function () {
                alert('下单失败')
            })
        }
    },

    components : {
        datepicker,
        dropdown
    }

}