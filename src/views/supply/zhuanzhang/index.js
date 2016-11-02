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
/*
import mypage from '../../../componment/pagination'
*/
import api from 'api'

export default {
    template: html,
    replace: true,
    props:[],
    data () {
        return {
            list:[],
            info:{
                date:''
            },      //转账单
           
            beforeMoney:"",
            afterMoney:"",
            begin:'',
            end:'',
            amount:0,
            supplierList:[],

        }
    },

   
    ready (){
        var self = this;
        this.search()
    },
    methods:{
        search(){
            var self = this;
            api.checkTransferMoney({
                startDate:self.begin,
                endDate:self.end
            },function (data) {
                self.list=data.transfers;
            })
        },
        getMoney(){
            api.addCustomer(JSON.stringify(this.info),function (data) {

            })
        },
        add(){
            var self = this;
            if(this.info.date&&this.info.destination&&this.info.amount){
                if(this.info.amount&&isNaN(this.info.amount)){
                    alert('金额需为数值');
                    return false
                }

                api.transferMoney(JSON.stringify(this.info),function (data) {
                   alert('记账成功')
                })

            }else {
                alert('转账信息不全')
            }
            // this.search()
        },
        clear(){
            this.info={date:''}
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
            this.info=item
        },
       
        //修改现存
        correctMoney(){
            var self = this;
            api.checkNowMoney(JSON.stringify({
                amount:self.amount
            }),function (data) {
            })
        },
        cancel(){
            this.getMoney();
        },

    },
    components : {
        dropdown,
        datepicker
    }

}