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
            goodList:[],
            GoodInfo:{},      //商品
            /*
            goodName:"",
            goodPinyin:"",
            danWei:"",   //danwei
            count_jian:"",   //件數
            price:"",          //單價
            count_weight:"",  //数量
            packFee:"",  //包装费
            weightFee:"",  //过磅费
            */
            
            selected:-1,
            mypage:{page:1,size:10,totalCount:0},

            supplierList:[],

        }
    },
    watch:{
        'mypage.page':{
            handler(){
                this.search()
            },
            deep:true
        }
    },
    /*route:{
        data(){
            this.mypage.page=this.$route.query.page;
            this.search();
            console.log(this.mypage.page,233)
        }
    },*/
    ready (){
        var self = this;
        $('body').on('click',function () {
            self.supplierList=[]
        })
        this.search()
    },
    methods:{
        search(){
            var self = this;
            api.checkGoods({
                pageNum:this.mypage.page,
                pageSize:this.mypage.size
            },function (data) {
                self.goodList=data.customers;
                self.mypage.totalCount=data.total;
            })
           
        },
        add(){
            var self = this;
            if(this.GoodInfo.name&&this.GoodInfo.spell&&this.GoodInfo.unit&&this.GoodInfo.weighFee
                &&this.GoodInfo.supplier&&this.GoodInfo.inventory&&this.GoodInfo.packFee){
                api.addGoods(JSON.stringify(this.GoodInfo),function (data) {
                    self.search()
                })
                /*api.addGoods({
                    "spell": self.GoodInfo.spell,
                    "name": self.GoodInfo.name,
                    "unit": self.GoodInfo.unit,
                    "weighFee": self.GoodInfo.weighFee-0,
                    "packFee": self.GoodInfo.packFee-0,
                    "supplier": self.GoodInfo.supplier,
                    "inventory": self.GoodInfo.inventory-0
                },function (data) {
                    self.search()
                })*/
            }else {
                alert('商品信息不全')
            }
            /* api.addGoods(self.cusCode,function (data) {
             console.log(data)
             //self.list=[{name:(Math.random()*10)<<0},{name:"123"},{name:"123"}]
             })*/
            this.search()
           
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
            this.GoodInfo=item
        },
        //删除商品
        del(){
            var self = this;
            api.delGoods({
                id:self.selected
            },function (data) {
            })
            self.search()
            self.selected=-1
        },
        //修改商品
        correct(){
            var self = this;
            api.correctGoods(JSON.stringify({
                "id":self.GoodInfo.id,
                "spell": self.GoodInfo.spell,
                "name": self.GoodInfo.name,
                "unit": self.GoodInfo.unit,
                "weighFee": self.GoodInfo.weighFee-0,
                "packFee": self.GoodInfo.packFee-0,
                "supplier": self.GoodInfo.supplier,
                "inventory": self.GoodInfo.inventory-0
            }),function (data) {
             console.log(data);
                self.search()
             //self.list=[{name:(Math.random()*10)<<0},{name:"123"},{name:"123"}]
             })
            self.selected=-1
        },
        cancel(){
            if(this.selected!=-1){
                this.GoodInfo={}
            }
            this.selected=-1;
            this.search()

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
            this.GoodInfo.supplier=item.name;
        }
    },
    components : {
        dropdown,
        mypage
    }

}