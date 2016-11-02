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
            saleDay:'',
            /**商品*/
            GoodInfo:{},

            price:"",          //單價
            count_weight:"",  //数量
            count_jian:"",   //件數

            goodIDList:[],   //商品搜索列表
            goodNameList:[],   //商品搜索列表
            goodSpellList:[],   //商品搜索列表

            totalCount:"",
            totalWeight:"",
            carNum:"",
            totalVal:"",

            selectGoodList:[],

            selected:-1

        }
    },
    computed:{


    },
    ready(){
        var self = this;
        $('body').on('click',function () {
            self.goodIDList=[];
            self.goodNameList=[];
            self.goodSpellList=[];
        })
    },
    methods:{

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
            var self = this;
            if(this.GoodInfo.name&&this.GoodInfo.spell&&this.price&&(this.count_jian||this.count_weight)
                &&this.GoodInfo.supplier){
                if(self.price===''||isNaN(self.price)){
                    alert('单价需为数值且不能为空');
                    return false;
                }
                if(self.count_jian===''||isNaN(self.count_jian)){
                    alert('件数需为数值且不能为空');
                    return false;
                }
                if(self.count_weight===''||isNaN(self.count_weight)){
                    alert('数量需为数值且不能为空');
                    return false;
                }
                this.selectGoodList.push({
                    'gId':this.GoodInfo.id,
                    "gSpell": this.GoodInfo.spell,
                    "gName": this.GoodInfo.name,
                    "unit": this.GoodInfo.unit,

                    "gSupplier":  this.GoodInfo.supplier,
                    price:this.price,
                    countUnit:this.count_jian,
                    count:this.count_weight

                })
                this.GoodInfo={};
                this.count_jian="";
                this.count_weight="";
                this.price="";

                //总件数，数量，价值
                this.getTotal();
            }else {
                alert('商品信息不全')
            }
        },

        toggleSelect(item){
            //console.log('del',index)
            if(this.selected!=item.gId){
                console.log(item);
                this.selected=item.gId;
                this.render(item);
            }else{
                this.selected=-1;
            }
        },
        cancel(){
            this.GoodInfo={};
            this.price="";
            this.count_jian="";
            this.count_weight="";
            this.selected=-1;
        },
        render(item){
            console.log(item)
            this.GoodInfo={
                id:item.gId,
                spell:item.gSpell,
                name:item.gName,
                unit:item.unit,
                supplier:item.gSupplier
            };
            this.price=item.price;
            this.count_jian=item.countUnit;
            this.count_weight=item.count;
        },
        //删除商品
        del(){
            for(let i=this.delGoodList.length;i--;){
                this.selectGoodList.splice(this.delGoodList[i],1);
                this.delGoodList=[]
            }
            this.getTotal();
        },
        //修改商品
        correct(){
            if(this.GoodInfo.name&&this.GoodInfo.spell&&this.price&&(this.count_jian||this.count_weight)
                &&this.GoodInfo.supplier){
                this.selectGoodList[this.selected] = {
                    'gId':this.GoodInfo.id,
                    "gSpell": this.GoodInfo.spell,
                    "gName": this.GoodInfo.name,
                    "unit": this.GoodInfo.unit,

                    "gSupplier":  this.GoodInfo.supplier,
                    price:this.price,
                    countUnit:this.count_jian,
                    count:this.count_weight

                };

                this.getTotal();
            }else {
                alert('商品信息不全')
            }
        },
        getTotal(){
            let total=0;
            let count=0;   // 数量
            let unit=0;   //件数
            for(let i = this.selectGoodList.length; i-- ; ){
                count=count+(this.selectGoodList[i].count-0);
                unit=unit+(this.selectGoodList[i].countUnit-0);
                if(this.selectGoodList[i].unit=='件'){
                    total=total+this.selectGoodList[i].price*this.selectGoodList[i].countUnit ;
                }else if(this.selectGoodList[i].unit=='公斤'){
                    total=total+this.selectGoodList[i].price*this.selectGoodList[i].count
                }
            }
            this.totalVal=total;
            this.totalWeight=count;
            this.totalCount=unit;

        },
        inRecord(){
            var self = this;
            console.log(self.saleDay);
            api.addInGoods(JSON.stringify({
                "type": 1,
                "date": self.saleDay,
                "totalCountUnit": self.totalCount,
                "totalCount": self.totalWeight,
                "carNum": self.carNum,
                "totalValue": self.totalVal,
                "goods": self.selectGoodList
            }), function (data) {
                alert('记账成功')
            },function () {
                alert('记账失败')
            })
        }
    },
    ready (){
    },
    components : {
        datepicker,
        dropdown
    }

}