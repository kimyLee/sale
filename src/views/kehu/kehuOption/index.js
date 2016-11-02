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
            cusList:[],
            cusInfo:{},      //商品
          
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
       /* $('body').on('click',function () {
            self.supplierList=[]
        })*/
        this.search()
    },
    methods:{
        search(){
            var self = this;
            api.checkCustomer({
                pageNum:this.mypage.page,
                pageSize:this.mypage.size
            },function (data) {
                self.cusList=data.customers;
                self.mypage.totalCount=data.total;
            })

        },
        add(){
            var self = this;
            if(this.cusInfo.name&&this.cusInfo.spell){
                if(this.cusInfo.loan&&isNaN(this.cusInfo.loan)){
                    alert('总欠金额需为数值');
                    return false
                }
                if(this.cusInfo.phone&&isNaN(this.cusInfo.phone)){
                    alert('手机格式有误');
                    return false
                }
                if(this.cusInfo.credit&&isNaN(this.cusInfo.credit)){
                    alert('信用额度需为数值');
                    return false
                }
                api.addCustomer(JSON.stringify(this.cusInfo),function (data) {
                    self.search();
                })
               
            }else {
                alert('客户信息不全')
            }
            
           // this.search()

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
            this.cusInfo=item
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
            if(this.cusInfo.loan&&isNaN(this.cusInfo.loan)){
                alert('总欠金额需为数值');
                return false
            }
            if(this.cusInfo.phone&&isNaN(this.cusInfo.phone)){
                alert('手机格式有误');
                return false
            }
            if(this.cusInfo.credit&&isNaN(this.cusInfo.credit)){
                alert('信用额度需为数值');
                return false
            }
            api.correctCustomer(JSON.stringify(self.cusInfo),function (data) {
                self.search()
            })
            self.selected=-1;
            this.cusInfo={}
        },
        cancel(){
            if(this.selected!=-1){
                this.cusInfo={}
            }
            this.selected=-1;
            this.search()

        },
        
    },
    components : {
        dropdown,
        mypage
    }

}