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
            supplierList:[],
            supplierInfo:{},      //商品

            selected:-1,
           // mypage:{page:1,size:10,totalCount:0},



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
        /* $('body').on('click',function () {
         self.supplierList=[]
         })*/
        this.search()
    },
    methods:{
        search(){
            var self = this;
            api.checkSupplier({
               // pageNum:this.mypage.page,
               // pageSize:this.mypage.size
            },function (data) {
                self.supplierList=data.suppliers;
                //self.mypage.totalCount=data.total;
            })

        },
        add(){
            var self = this;
            if(this.supplierInfo.name&&this.supplierInfo.phone){
                if(this.supplierInfo.phone&&isNaN(this.supplierInfo.phone)){
                    alert('手机格式有误');
                    return false
                }
                api.addSupplier(JSON.stringify(this.supplierInfo),function (data) {
                    self.search();
                })

            }else {
                alert('供货商信息不全')
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
            self.search()
            self.selected=-1
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

    },
    components : {
        dropdown
       // mypage
    }

}