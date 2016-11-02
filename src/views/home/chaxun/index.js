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

            goodCode:'',
            goodIDList:[],   //商品搜索列表
            goodNameList:[],   //商品搜索列表
            goodSpellList:[],   //商品搜索列表

            selectGoodList:[],
            delGoodList:-1,

            beginDate:'',
            endDate:'',
            goodSaleList:[]
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
        checkList(){
            var self = this;
            api.checkGoodsSale({
                startDate:self.beginDate,
                endDate:self.endDate,
                supplier:self.GoodInfo.supplier
            },function (data) {
                self.goodSaleList=data.list
            })
        },

        //添加商品
        /*add(){
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
        },*/
        //计算总价
        toggleSelect(index){

        },
        render(index){
            /*this.goodName=this.selectGoodList[index].goodName;
            this.goodPinyin=this.selectGoodList[index].goodPinyin;
            this.price=this.selectGoodList[index].price;
            this.danWei=this.selectGoodList[index].danWei;
            this.count_jian=this.selectGoodList[index].count_jian;
            this.count_weight=this.selectGoodList[index].count_weight;
            this.weightFee=this.selectGoodList[index].weightFee;
            this.packFee=this.selectGoodList[index].packFee;
            this.supplier=this.selectGoodList[index].supplier;*/
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

        }

    },
    ready (){
    },
    components : {
        datepicker,
        dropdown
    }

}