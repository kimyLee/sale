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
            feeList:[],
            feeInfo:{},      //费用
            
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
            api.checkFee({
                pageNum:this.mypage.page,
                pageSize:this.mypage.size
            },function (data) {
                self.feeList=data.Costs;
                self.mypage.totalCount=data.total;
            })
        },
        add(){
            var self = this;
            if(this.feeInfo.name&&this.feeInfo.spell&&this.feeInfo.supplier){
                api.addFee(JSON.stringify(this.feeInfo),function (data) {
                    self.search()
                })

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
            this.feeInfo=item
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
            api.correctFee(JSON.stringify(this.feeInfo),function (data) {
                self.search()})
            self.selected=-1;
            this.feeInfo={}
        },
        cancel(){
            if(this.selected!=-1){
                this.feeInfo={}
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
            this.feeInfo.supplier=item.name;
        }
    },
    components : {
        dropdown,
        mypage
    }

}